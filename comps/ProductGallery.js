"use client";
import { useEffect, useState } from "react";
import { getProducts } from "../services/api";
import styles from "./ProductGallery.module.css";

export default function ProductGallery() {
  const [products, setProducts] = useState([]);
  const [loading, setLoading] = useState(true); // ✅ track loading state

  useEffect(() => {
    loadProducts();
  }, []);

  const loadProducts = async () => {
    setLoading(true);
    try {
      const data = await getProducts();
      setProducts(data);
    } catch (error) {
      console.error("Failed to fetch products", error);
    } finally {
      setLoading(false);
    }
  };

  const handleRedirect = (url) => {
    if (url) {
      window.open(url, "_blank"); // ✅ Opens in new tab
    }
  };

  return (
    <div className={styles.gallery}>
      {/* ✅ Show skeleton loader while fetching */}
      {loading ? (
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
                  e.stopPropagation();
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
  );
}
