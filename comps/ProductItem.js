export default function ProductItem({ product, onDelete }) {
  return (
    <div style={{ border: "1px solid gray", margin: "8px", padding: "8px" }}>
      <h3>{product.name}</h3>
      <p>Price: ₹{product.price}</p>
      <button onClick={() => onDelete(product._id)}>Delete</button>
    </div>
  );
}
