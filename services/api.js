//services/api.js
const API_URL = process.env.NEXT_PUBLIC_API_URL;
// https://elitepurchase-backend.onrender.com

// ✅ Get products (with optional search & sort)
export const getProducts = async (search = "", sort = "") => {
  const query = new URLSearchParams();
  if (search) query.append("search", search);
  if (sort) query.append("sort", sort);

   // 🔹 Add artificial delay (3s) to test skeleton loading
  // await new Promise((resolve) => setTimeout(resolve, 5000));

  const res = await fetch(`${API_URL}/api/products?${query.toString()}`);
  return res.json();
};

// ✅ Add product
export const addProduct = async (formData) => {
  const res = await fetch(`${API_URL}/api/products`, {
    method: "POST",
    body: formData,
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

// utils/api.js
export async function fetchUser() {
  try {
    const res = await fetch("https://elitepurchase.in/api/auth/me", {
      credentials: "include", // very important for sending cookies
    });
    const data = await res.json();
    return data;
  } catch (err) {
    console.error("Error fetching user:", err);
  }
}
