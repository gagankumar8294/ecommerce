"use client";
import { useEffect, useState } from "react";
import { getProducts, deleteProduct } from "../services/api";
import ProductItem from "./ProductItem";

export default function ProductList() {
  const [products, setProducts] = useState([]);

  useEffect(() => {
    loadProducts();
  }, []);

  const loadProducts = async () => {
    const data = await getProducts();
    setProducts(data);
  };

  const handleDelete = async (id) => {
    await deleteProduct(id);
    loadProducts(); // refresh list
  };

  return (
    <div>
      <h2>Product List</h2>
      {products.length === 0 ? (
        <p>No products found</p>
      ) : (
        products.map((p) => (
          <ProductItem key={p._id} product={p} onDelete={handleDelete} />
        ))
      )}
    </div>
  );
}
