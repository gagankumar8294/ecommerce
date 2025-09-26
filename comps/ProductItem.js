"use client";
import { useState } from "react";

export default function ProductItem({ product, onDelete, onUpdate }) {
  const [isEditing, setIsEditing] = useState(false);
  const [name, setName] = useState(product.name);
  const [price, setPrice] = useState(product.price);

  const handleSave = () => {
    onUpdate(product._id, { name, price: Number(price) });
    setIsEditing(false);
  };

  return (
    <div style={{ border: "1px solid gray", margin: "8px", padding: "8px" }}>
      {isEditing ? (
        <>
          <input
            type="text"
            value={name}
            onChange={(e) => setName(e.target.value)}
          />
          <input
            type="number"
            value={price}
            onChange={(e) => setPrice(e.target.value)}
          />
          <button onClick={handleSave}>Save</button>
          <button onClick={() => setIsEditing(false)}>Cancel</button>
        </>
      ) : (
        <>
          <h3>{product.name}</h3>
          <p>Price: ₹{product.price}</p>
          <button onClick={() => setIsEditing(true)}>Edit</button>
          <button onClick={() => onDelete(product._id)}>Delete</button>
        </>
      )}
    </div>
  );
}
