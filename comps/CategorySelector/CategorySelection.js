// src/comps/CategorySelector/CategorySelector.js
import React, { useState } from "react";
import styles from "./CategorySelector.module.css";
import { useRouter } from "next/navigation";

// Product data imports
import menProducts from "./data/menProducts";
import womenProducts from "./data/womenProducts";
// import electronicsProducts from "./data/electronicsProducts";

// Category-product mapping
const products = {
  men: menProducts,
  women: womenProducts,
  // electronics: electronicsProducts,
};

export default function CategorySelector() {
  const [selectedCategory, setSelectedCategory] = useState("men");
  const router = useRouter();

  const handleSeeAll = () => {
    router.push("/all-products");
  };

  return (
    <div className={styles.container}>
      {/* Category buttons */}
      <div className={styles.buttonRow}>
        <div className={styles.leftButtons}>
          {Object.keys(products).map((category) => (
            <button
              key={category}
              className={`${styles.categoryButton} ${
                selectedCategory === category ? styles.active : ""
              }`}
              onClick={() => setSelectedCategory(category)}
            >
              {category.charAt(0).toUpperCase() + category.slice(1)}
            </button>
          ))}
        </div>
        <div className={styles.rightButton}>
          {/* <button className={styles.seeAllButton} onClick={handleSeeAll}>
            See All
          </button> */}
        </div>
      </div>

      {/* Product list */}
      <div className={styles.productList}>
        {products[selectedCategory].map((item) => (
          <div key={item.id} className={styles.productCard}>
            <div className={styles.thumbnailRow}>
              {item.images?.map((img, index) => (
                <img
                  key={index}
                  src={img}
                  alt={`Image of ${item.title}`}
                  className={styles.thumbnail}
                />
              ))}
            </div>
            <h4 className={styles.productTitle}>{item.title}</h4>
            <p className={styles.productPrice}>{item.price}</p>
            <a
              href={item.link}
              target="_blank"
              rel="noopener noreferrer"
              className={styles.buyButton}
            >
              🛒 Buy from Amazon
            </a>
          </div>
        ))}
      </div>
    </div>
  );
}
