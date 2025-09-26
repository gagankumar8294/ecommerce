"use client";
import { useState } from "react";
import { addProduct } from "../services/api";
import styles from './ProductForm.module.css' // import CSS module

export default function ProductForm({ onSuccess }) {
  const [name, setName] = useState("");
  const [price, setPrice] = useState("");
  const [description, setDescription] = useState("");
  const [mainImage, setMainImage] = useState(null);
  const [mainImageUrl, setMainImageUrl] = useState("");
  const [subImages, setSubImages] = useState([]);
  const [subImageUrls, setSubImageUrls] = useState("");

  const handleSubmit = async (e) => {
    e.preventDefault();
    const formData = new FormData();

    formData.append("name", name);
    formData.append("price", price);
    formData.append("description", description);

    if (mainImage) formData.append("mainImage", mainImage);
    if (mainImageUrl) formData.append("mainImage", mainImageUrl);

    for (let file of subImages) {
      formData.append("subImages", file);
    }

    if (subImageUrls) {
      subImageUrls.split(",").forEach((url) =>
        formData.append("subImages", url.trim())
      );
    }

    await addProduct(formData);
    setName("");
    setPrice("");
    setDescription("");
    setMainImage(null);
    setMainImageUrl("");
    setSubImages([]);
    setSubImageUrls("");
    onSuccess();
  };

  return (
    <form className={styles.form} onSubmit={handleSubmit}>
      <h2 className={styles.title}>Add New Product</h2>

      <input
        type="text"
        placeholder="Name"
        value={name}
        onChange={(e) => setName(e.target.value)}
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
        placeholder="Description"
        value={description}
        onChange={(e) => setDescription(e.target.value)}
        className={styles.textarea}
      />

      <label className={styles.label}>Main Image (file or URL)</label>
      <input
        type="file"
        onChange={(e) => setMainImage(e.target.files[0])}
        className={styles.fileInput}
      />
      <input
        type="text"
        placeholder="Main Image URL"
        value={mainImageUrl}
        onChange={(e) => setMainImageUrl(e.target.value)}
        className={styles.input}
      />

      <label className={styles.label}>Sub Images (files or comma separated URLs)</label>
      <input
        type="file"
        multiple
        onChange={(e) => setSubImages([...e.target.files])}
        className={styles.fileInput}
      />
      <input
        type="text"
        placeholder="Sub Image URLs (comma separated)"
        value={subImageUrls}
        onChange={(e) => setSubImageUrls(e.target.value)}
        className={styles.input}
      />

      <button type="submit" className={styles.button}>
        Add Product
      </button>
    </form>
  );
}
