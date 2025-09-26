"use client";
import { useEffect, useState } from "react";
import { getProducts, deleteProduct, updateProduct } from "../services/api";
import ProductItem from "./ProductItem";
import styles from "./ProductList.module.css";

export default function ProductList() {
  const [products, setProducts] = useState([]);
  const [search, setSearch] = useState("");
  const [sort, setSort] = useState("updatedDesc"); // default sort

  useEffect(() => {
    loadProducts();
  }, [search, sort]);

  const loadProducts = async () => {
    const data = await getProducts(search, sort);
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
    <div className={styles.container}>
      <h2 className={styles.heading}>Product List</h2>

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

      {products.length === 0 ? (
        <p className={styles.noProducts}>No products found</p>
      ) : (
        <div className={styles.grid}>
          {products.map((p) => (
            <ProductItem
              key={p._id}
              product={p}
              onDelete={handleDelete}
              onUpdate={handleUpdate}
            />
          ))}
        </div>
      )}
    </div>
  );
}
