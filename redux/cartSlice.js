// redux/cartSlice.js
import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  cartItems: [],
  totalPrice: 0,
  totalQuantity: 0, // ✅ track total items in cart
};

const cartSlice = createSlice({
  name: "cart",
  initialState,
  reducers: {
    addToCart: (state, action) => {
      const item = action.payload;
      const existItem = state.cartItems.find((i) => i._id === item._id);

      if (existItem) {
        existItem.quantity += 1;
      } else {
        state.cartItems.push({ ...item, quantity: 1 });
      }

      // Recalculate total price and quantity
      state.totalPrice = state.cartItems.reduce(
        (acc, i) => acc + i.price * i.quantity,
        0
      );
      state.totalQuantity = state.cartItems.reduce(
        (acc, i) => acc + i.quantity,
        0
      );
    },

    decreaseQty: (state, action) => {
      const id = action.payload;
      const item = state.cartItems.find((i) => i._id === id);

      if (item && item.quantity > 1) {
        item.quantity -= 1;
      } else {
        state.cartItems = state.cartItems.filter((i) => i._id !== id);
      }

      state.totalPrice = state.cartItems.reduce(
        (acc, i) => acc + i.price * i.quantity,
        0
      );
      state.totalQuantity = state.cartItems.reduce(
        (acc, i) => acc + i.quantity,
        0
      );
    },

    removeFromCart: (state, action) => {
      const id = action.payload;
      state.cartItems = state.cartItems.filter((i) => i._id !== id);

      state.totalPrice = state.cartItems.reduce(
        (acc, i) => acc + i.price * i.quantity,
        0
      );
      state.totalQuantity = state.cartItems.reduce(
        (acc, i) => acc + i.quantity,
        0
      );
    },

    clearCart: (state) => {
      state.cartItems = [];
      state.totalPrice = 0;
      state.totalQuantity = 0;
    },
  },
});

export const { addToCart, decreaseQty, removeFromCart, clearCart } =
  cartSlice.actions;
export default cartSlice.reducer;
