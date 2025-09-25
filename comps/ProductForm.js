"use client";
import { useState } from "react";
import { addProduct } from "../services/api";

export default function ProductForm({ onSuccess }) {
  const [name, setName] = useState("");
  const [price, setPrice] = useState("");

  const handleSubmit = async (e) => {
    e.preventDefault();
    if (!name || !price) return;
    await addProduct({ name, price: Number(price) });
    setName("");
    setPrice("");
    onSuccess(); // reload list after adding
  };

  return (
    <form onSubmit={handleSubmit} style={{ marginBottom: "20px" }}>
      <input
        type="text"
        placeholder="Product Name"
        value={name}
        onChange={(e) => setName(e.target.value)}
      />
      <input
        type="number"
        placeholder="Price"
        value={price}
        onChange={(e) => setPrice(e.target.value)}
      />
      <button type="submit">Add Product</button>
    </form>
  );
}
