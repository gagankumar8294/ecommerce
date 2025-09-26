"use client";
import { useState } from "react";

export default function ProductItem({ product, onDelete, onUpdate }) {
  const [isEditing, setIsEditing] = useState(false);
  const [name, setName] = useState(product.name);
  const [price, setPrice] = useState(product.price);
  const [description, setDescription] = useState(product.description || "");
  const [mainImage, setMainImage] = useState(product.mainImage || "");
  const [subImages, setSubImages] = useState(product.subImages || []);

  const handleSave = () => {
    onUpdate(product._id, {
      name,
      price: Number(price),
      description,
      mainImage,
      subImages,
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
    <div style={{ border: "1px solid gray", margin: "8px", padding: "8px" }}>
      {isEditing ? (
        <>
          {/* Name */}
          <input
            type="text"
            placeholder="Product Name"
            value={name}
            onChange={(e) => setName(e.target.value)}
          />

          {/* Price */}
          <input
            type="number"
            placeholder="Price"
            value={price}
            onChange={(e) => setPrice(e.target.value)}
          />

          {/* Description */}
          <textarea
            placeholder="Product Description"
            value={description}
            onChange={(e) => setDescription(e.target.value)}
          />

          {/* Main Image */}
          <input
            type="text"
            placeholder="Main Image URL"
            value={mainImage}
            onChange={(e) => setMainImage(e.target.value)}
          />
          {mainImage && (
            <img src={mainImage} alt="Main" width="120" style={{ marginTop: "8px" }} />
          )}

          {/* Sub Images */}
          <h4>Sub Images</h4>
          {subImages.map((img, i) => (
            <div key={i} style={{ display: "flex", marginBottom: "5px" }}>
              <input
                type="text"
                placeholder="Sub Image URL"
                value={img}
                onChange={(e) => handleSubImageChange(i, e.target.value)}
              />
              <button onClick={() => handleRemoveSubImage(i)}>❌</button>
            </div>
          ))}
          <button onClick={handleAddSubImage}>+ Add Sub Image</button>

          <br />
          <button onClick={handleSave}>Save</button>
          <button onClick={() => setIsEditing(false)}>Cancel</button>
        </>
      ) : (
        <>
          <h3>{product.name}</h3>
          <p>Price: ₹{product.price}</p>
          <p>{product.description}</p>

          {/* Display Main Image */}
          {product.mainImage && (
            <img src={product.mainImage} alt={product.name} width="150" />
          )}

          {/* Display Sub Images */}
          {product.subImages?.length > 0 && (
            <div style={{ display: "flex", gap: "10px", marginTop: "10px" }}>
              {product.subImages.map((img, i) => (
                <img key={i} src={img} alt={`Sub ${i}`} width="80" />
              ))}
            </div>
          )}

          <br />
          <button onClick={() => setIsEditing(true)}>Edit</button>
          <button onClick={() => onDelete(product._id)}>Delete</button>
        </>
      )}
    </div>
  );
}
