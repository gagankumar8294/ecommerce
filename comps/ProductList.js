"use client";
import { useEffect, useState } from "react";
import { getProducts, deleteProduct, updateProduct } from "../services/api";
import ProductItem from "./ProductItem";

export default function ProductList() {
  const [products, setProducts] = useState([]);
  const [search, setSearch] = useState("");

  useEffect(() => {
    loadProducts();
  }, [search]);

  const loadProducts = async () => {
    const data = await getProducts(search);
    setProducts(data);
  };

  const handleDelete = async (id) => {
    await deleteProduct(id);
    loadProducts();
  };

  const handleUpdate = async (id, updatedProduct) => {
    await updateProduct(id, updatedProduct);
    loadProducts();
  };

  return (
    <div>
      <h2>Product List</h2>
      {/* 🔍 Search Bar */}
      <input
        type="text"
        placeholder="Search products..."
        value={search}
        onChange={(e) => setSearch(e.target.value)}
        style={{ marginBottom: "10px", padding: "5px", width: "200px" }}
      />
      {products.length === 0 ? (
        <p>No products found</p>
      ) : (
        products.map((p) => (
          <ProductItem
            key={p._id}
            product={p}
            onDelete={handleDelete}
            onUpdate={handleUpdate}
          />
        ))
      )}
    </div>
  );
}
