"use client";
import { useEffect, useState } from "react";
import { getProducts } from "../services/api";
import styles from "./ProductGallery.module.css";

// ✅ Card with image skeleton until loaded
function ProductCard({ product, handleRedirect }) {
  const [imgLoaded, setImgLoaded] = useState(false);

  return (
    <div
      className={styles.card}
      onClick={() => handleRedirect(product.productUrl)}
      style={{ cursor: "pointer" }}
    >
      {/* Show skeleton until image is fully loaded */}
      {!imgLoaded && (
        <div className={`${styles.skeleton} ${styles.skeletonImage}`} />
      )}

      {product.mainImage && (
        <img
          src={product.mainImage}
          alt={product.name}
          className={styles.image}
          style={{
            display: imgLoaded ? "block" : "none",
            opacity: imgLoaded ? 1 : 0,
            transition: "opacity 0.4s ease-in-out",
          }}
          onLoad={() => setImgLoaded(true)}
        />
      )}

      <h3 className={styles.name}>{product.name}</h3>
      <p className={styles.price}>₹{product.price}</p>

      {product.productUrl && (
        <button
          className={styles.buyBtn}
          onClick={(e) => {
            e.stopPropagation(); // prevent card click
            handleRedirect(product.productUrl);
          }}
        >
          Buy from Amazon
        </button>
      )}
    </div>
  );
}

export default function ProductGallery() {
  const [products, setProducts] = useState([]);
  const [loading, setLoading] = useState(true);
  const [search, setSearch] = useState(""); // ✅ search text
  const [sort, setSort] = useState("updatedDesc"); // ✅ default sort
  const [countdown, setCountdown] = useState(15); // ✅ countdown state

  useEffect(() => {
    loadProducts(search, sort);
  }, [search, sort]);

  const loadProducts = async (searchTerm = "", sortType = "") => {
    setLoading(true);
    setCountdown(30); // reset countdown when fetching starts

    // Start countdown timer
    const interval = setInterval(() => {
      setCountdown((prev) => {
        if (prev <= 1) {
          clearInterval(interval);
          return 0;
        }
        return prev - 1;
      });
    }, 1000);

    try {
      const data = await getProducts(searchTerm, sortType);
      setProducts(data);
    } catch (error) {
      console.error("Failed to fetch products", error);
    } finally {
      setLoading(false);
      clearInterval(interval); // stop countdown when loading ends
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

      {/* ⏳ Countdown Timer */}
      {loading && (
        <div className={styles.countdown}>
          Fetching products... ⏳ {countdown}s
        </div>
      )}

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
            <ProductCard
              key={p._id}
              product={p}
              handleRedirect={handleRedirect}
            />
          ))
        )}
      </div>
    </div>
  );
}
