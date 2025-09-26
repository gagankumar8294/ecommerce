"use client";
import { useState } from "react";
import { addProduct } from "../services/api";

export default function ProductForm({ onSuccess }) {
  const [name, setName] = useState("");
  const [price, setPrice] = useState("");
  const [description, setDescription] = useState("");
  const [mainImage, setMainImage] = useState(null); // file
  const [mainImageUrl, setMainImageUrl] = useState(""); // url
  const [subImages, setSubImages] = useState([]); // files
  const [subImageUrls, setSubImageUrls] = useState(""); // comma separated urls

  // const handleSubmit = async (e) => {
  //   e.preventDefault();
  //   if (!name || !price) return;
  //   await addProduct({ name, price: Number(price) });
  //   setName("");
  //   setPrice("");
  //   onSuccess(); // reload list after adding
  // };
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
      subImageUrls.split(",").forEach(url => formData.append("subImages", url.trim()));
    }

    await addProduct(formData);
    setName(""); setPrice(""); setDescription("");
    setMainImage(null); setMainImageUrl("");
    setSubImages([]); setSubImageUrls("");
    onSuccess();
  };

  return (
    <form onSubmit={handleSubmit}>
      <input type="text" placeholder="Name" value={name} onChange={e=>setName(e.target.value)} />
      <input type="number" placeholder="Price" value={price} onChange={e=>setPrice(e.target.value)} />
      <textarea placeholder="Description" value={description} onChange={e=>setDescription(e.target.value)} />

      <p>Main Image (file or URL)</p>
      <input type="file" onChange={e => setMainImage(e.target.files[0])} />
      <input type="text" placeholder="Main Image URL" value={mainImageUrl} onChange={e=>setMainImageUrl(e.target.value)} />

      <p>Sub Images (files or comma separated URLs)</p>
      <input type="file" multiple onChange={e => setSubImages([...e.target.files])} />
      <input type="text" placeholder="Sub Image URLs (comma separated)" value={subImageUrls} onChange={e=>setSubImageUrls(e.target.value)} />

      <button type="submit">Add Product</button>
    </form>
  );
}
