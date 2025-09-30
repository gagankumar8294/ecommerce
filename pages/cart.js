// pages/cart.js
import React, { useCallback } from "react"; // ✅ import React
import { useSelector, useDispatch } from "react-redux";
import { removeFromCart, decreaseQty, addToCart, clearCart } from "../redux/cartSlice";
import styles from "./CartPage.module.css";

// ✅ Memoized CartItem component
const CartItem = React.memo(({ item, onDecrease, onIncrease, onRemove }) => {
  return (
    <div className={styles.cartItem}>
      <img
        src={item.mainImage}
        alt={item.name}
        className={styles.itemImage}
        loading="lazy"
      />
      <div className={styles.itemDetails}>
        <h3>{item.name}</h3>
        <p>₹{item.price}</p>
        <div className={styles.qtyControls}>
          <button onClick={() => onDecrease(item._id)}>-</button>
          <span>{item.quantity}</span>
          <button onClick={() => onIncrease(item)}>+</button>
        </div>
        <button className={styles.removeBtn} onClick={() => onRemove(item._id)}>
          Remove
        </button>
      </div>
    </div>
  );
});

export default function CartPage() {
  const { cartItems, totalPrice, totalQuantity } = useSelector((state) => state.cart);
  const dispatch = useDispatch();

  // ✅ useCallback to prevent re-creation of functions on every render
  const handleDecrease = useCallback(
    (id) => {
      dispatch(decreaseQty(id));
    },
    [dispatch]
  );

  const handleIncrease = useCallback(
    (item) => {
      dispatch(addToCart(item));
    },
    [dispatch]
  );

  const handleRemove = useCallback(
    (id) => {
      dispatch(removeFromCart(id));
    },
    [dispatch]
  );

  const handleClearCart = useCallback(() => {
    dispatch(clearCart());
  }, [dispatch]);

  if (cartItems.length === 0) {
    return <h2 className={styles.empty}>Your cart is empty 🛒</h2>;
  }

  return (
    <div className={styles.cartContainer}>
      <h1 className={styles.title}>Your Cart ({totalQuantity} items)</h1>

      <div className={styles.cartItems}>
        {cartItems.map((item) => (
          <CartItem
            key={item._id}
            item={item}
            onDecrease={handleDecrease}
            onIncrease={handleIncrease}
            onRemove={handleRemove}
          />
        ))}
      </div>

      <div className={styles.summary}>
        <h2>Total: ₹{totalPrice}</h2>
        <button className={styles.clearBtn} onClick={handleClearCart}>
          Clear Cart
        </button>
      </div>
    </div>
  );
}
