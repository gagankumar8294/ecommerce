// services/api.js
const API_URL = process.env.NEXT_PUBLIC_API_URL;

// ✅ Get products (with optional search)
export const getProducts = async (search = "") => {
  const query = search ? `?search=${encodeURIComponent(search)}` : "";
  const res = await fetch(`${API_URL}/api/products${query}`);
  return res.json();
};

// ✅ Get all products
// export const getProducts = async () => {
//   const res = await fetch(`${API_URL}/api/products`);
//   return res.json();
// };

// ✅ Add a new product
export const addProduct = async (product) => {
  const res = await fetch(`${API_URL}/api/products`, {
    method: "POST",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify(product),
  });
  return res.json();
};

// ✅ Update product
export const updateProduct = async (id, product) => {
  const res = await fetch(`${API_URL}/api/products/${id}`, {
    method: "PUT",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify(product),
  });
  return res.json();
};

// ✅ Delete product
export const deleteProduct = async (id) => {
  const res = await fetch(`${API_URL}/api/products/${id}`, {
    method: "DELETE",
  });
  return res.json();
};

console.log("API URL from env:", process.env.NEXT_PUBLIC_API_URL);