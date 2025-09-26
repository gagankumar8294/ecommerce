"use client";
import { useEffect, useState } from "react";
import { getProducts } from "../services/api";
import styles from "./ProductGallery.module.css";

export default function ProductGallery() {
  const [products, setProducts] = useState([]);

  useEffect(() => {
    loadProducts();
  }, []);

  const loadProducts = async () => {
    const data = await getProducts();
    setProducts(data);
  };

  const handleRedirect = (url) => {
    if (url) {
      window.open(url, "_blank"); // ✅ Opens in new tab
    }
  };

  return (
    <div className={styles.gallery}>
      {products.length === 0 ? (
        <p>No products available</p>
      ) : (
        products.map((p) => (
          <div
            key={p._id}
            className={styles.card}
            onClick={() => handleRedirect(p.productUrl)} // ✅ Redirect when clicking anywhere on card
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

            {/* ✅ Dedicated button for Amazon link */}
            {p.productUrl && (
              <button
                className={styles.buyBtn}
                onClick={(e) => {
                  e.stopPropagation(); // prevent triggering card click
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
