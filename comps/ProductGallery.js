"use client";
import { useEffect, useState } from "react";
import { getProducts } from "../services/api";
import styles from "./ProductGallery.module.css";

export default function ProductGallery() {
  const [products, setProducts] = useState([]);
  const [loading, setLoading] = useState(true);
  const [search, setSearch] = useState(""); // ✅ search text
  const [sort, setSort] = useState("updatedDesc"); // ✅ default sort

  useEffect(() => {
    loadProducts(search, sort);
  }, [search, sort]);

  const loadProducts = async (searchTerm = "", sortType = "") => {
    setLoading(true);
    try {
      const data = await getProducts(searchTerm, sortType);
      setProducts(data);
    } catch (error) {
      console.error("Failed to fetch products", error);
    } finally {
      setLoading(false);
    }
  };

  const handleRedirect = (url) => {
    if (url) {
      window.open(url, "_blank"); // open in new tab
    }
  };

  return (
    <div>
      {/* 🔍 Search & Sort Controls */}
      <div className={styles.controls}>
        <input
          type="text"
          placeholder="Search products..."
          value={search}
          onChange={(e) => setSearch(e.target.value)}
          className={styles.searchBar}
        />
        <select
          value={sort}
          onChange={(e) => setSort(e.target.value)}
          className={styles.sortSelect}
        >
          <option value="updatedDesc">Latest Updated</option>
          <option value="createdDesc">Newest First</option>
          <option value="createdAsc">Oldest First</option>
          <option value="priceAsc">Price: Low → High</option>
          <option value="priceDesc">Price: High → Low</option>
        </select>
      </div>

      {/* 🖼️ Products */}
      <div className={styles.gallery}>
        {loading ? (
          // Skeleton loader
          [...Array(6)].map((_, i) => (
            <div key={i} className={styles.skeletonCard}>
              <div className={`${styles.skeleton} ${styles.skeletonImage}`} />
              <div className={`${styles.skeleton} ${styles.skeletonTitle}`} />
              <div className={`${styles.skeleton} ${styles.skeletonPrice}`} />
              <div className={`${styles.skeleton} ${styles.skeletonBtn}`} />
            </div>
          ))
        ) : products.length === 0 ? (
          <p>No products available</p>
        ) : (
          products.map((p) => (
            <div
              key={p._id}
              className={styles.card}
              onClick={() => handleRedirect(p.productUrl)}
              style={{ cursor: "pointer" }}
            >
              {p.mainImage && (
                <img
                  src={p.mainImage}
                  alt={p.name}
                  className={styles.image}
                />
              )}
              <h3 className={styles.name}>{p.name}</h3>
              <p className={styles.price}>₹{p.price}</p>

              {p.productUrl && (
                <button
                  className={styles.buyBtn}
                  onClick={(e) => {
                    e.stopPropagation(); // prevent card click
                    handleRedirect(p.productUrl);
                  }}
                >
                  Buy from Amazon
                </button>
              )}
            </div>
          ))
        )}
      </div>
    </div>
  );
}
