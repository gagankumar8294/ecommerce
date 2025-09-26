"use client";
import { useState } from "react";
import styles from "./ProductItem.module.css";

export default function ProductItem({ product, onDelete, onUpdate }) {
  const [isEditing, setIsEditing] = useState(false);
  const [name, setName] = useState(product.name);
  const [price, setPrice] = useState(product.price);
  const [description, setDescription] = useState(product.description || "");
  const [productUrl, setProductUrl] = useState(product.productUrl || ""); // ✅
  const [mainImage, setMainImage] = useState(product.mainImage || "");
  const [subImages, setSubImages] = useState(product.subImages || []);

  const handleSave = () => {
    onUpdate(product._id, {
      name,
      price: Number(price),
      description,
      mainImage,
      subImages,
      productUrl,
    });
    setIsEditing(false);
  };

  const handleAddSubImage = () => {
    setSubImages([...subImages, ""]);
  };

  const handleSubImageChange = (index, value) => {
    const updated = [...subImages];
    updated[index] = value;
    setSubImages(updated);
  };

  const handleRemoveSubImage = (index) => {
    setSubImages(subImages.filter((_, i) => i !== index));
  };

  return (
    <div className={styles.card}>
      {isEditing ? (
        <>
          <input
            type="text"
            placeholder="Product Name"
            value={name}
            onChange={(e) => setName(e.target.value)}
            className={styles.input}
          />

          <input
            type="text"
            placeholder="Product URL (Amazon link)"
            value={productUrl}
            onChange={(e) => setProductUrl(e.target.value)}
            className={styles.input}
          />

          <input
            type="number"
            placeholder="Price"
            value={price}
            onChange={(e) => setPrice(e.target.value)}
            className={styles.input}
          />

          <textarea
            placeholder="Product Description"
            value={description}
            onChange={(e) => setDescription(e.target.value)}
            className={styles.textarea}
          />

          <input
            type="text"
            placeholder="Main Image URL"
            value={mainImage}
            onChange={(e) => setMainImage(e.target.value)}
            className={styles.input}
          />

          {mainImage && <img src={mainImage} alt="Main" className={styles.mainImage} />}

          <h4 className={styles.subTitle}>Sub Images</h4>
          {subImages.map((img, i) => (
            <div key={i} className={styles.subImageRow}>
              <input
                type="text"
                placeholder="Sub Image URL"
                value={img}
                onChange={(e) => handleSubImageChange(i, e.target.value)}
                className={styles.input}
              />
              <button
                type="button"
                className={`${styles.btn} ${styles.removeBtn}`}
                onClick={() => handleRemoveSubImage(i)}
              >
                ❌
              </button>
            </div>
          ))}
          <button
            type="button"
            className={`${styles.btn} ${styles.addBtn}`}
            onClick={handleAddSubImage}
          >
            + Add Sub Image
          </button>

          <div className={styles.actionRow}>
            <button className={`${styles.btn} ${styles.saveBtn}`} onClick={handleSave}>
              Save
            </button>
            <button
              className={`${styles.btn} ${styles.cancelBtn}`}
              onClick={() => setIsEditing(false)}
            >
              Cancel
            </button>
          </div>
        </>
      ) : (
        <>
          <h3 className={styles.title}>{product.name}</h3>
          <p className={styles.price}>Price: ₹{product.price}</p>
          <p className={styles.desc}>{product.description}</p>

          {product.mainImage && (
            <img src={product.mainImage} alt={product.name} className={styles.mainImage} />
          )}

          {product.subImages?.length > 0 && (
            <div className={styles.subImages}>
              {product.subImages.map((img, i) => (
                <img key={i} src={img} alt={`Sub ${i}`} className={styles.subImage} />
              ))}
            </div>
          )}

          {product.productUrl && (
            <a href={product.productUrl} target="_blank" rel="noopener noreferrer">
              <button className={`${styles.btn} ${styles.buyBtn}`}>Buy from Amazon</button>
            </a>
          )}

          <div className={styles.actionRow}>
            <button
              className={`${styles.btn} ${styles.editBtn}`}
              onClick={() => setIsEditing(true)}
            >
              Edit
            </button>
            <button
              className={`${styles.btn} ${styles.deleteBtn}`}
              onClick={() => onDelete(product._id)}
            >
              Delete
            </button>
          </div>
        </>
      )}
    </div>
  );
}
