// pages/cart.js
import { useSelector, useDispatch } from "react-redux";
import {
  removeFromCart,
  decreaseQty,
  addToCart,
  clearCart,
} from "../redux/cartSlice";
import styles from './CartPage.module.css'

export default function CartPage() {
  const { cartItems, totalPrice } = useSelector((state) => state.cart);
  const dispatch = useDispatch();

  if (cartItems.length === 0) {
    return <h2 className={styles.empty}>Your cart is empty 🛒</h2>;
  }

  return (
    <div className={styles.cartContainer}>
      <h1 className={styles.title}>Your Cart</h1>
      <div className={styles.cartItems}>
        {cartItems.map((item) => (
          <div key={item._id} className={styles.cartItem}>
            <img
              src={item.mainImage}
              alt={item.name}
              className={styles.itemImage}
            />
            <div className={styles.itemDetails}>
              <h3>{item.name}</h3>
              <p>₹{item.price}</p>
              <div className={styles.qtyControls}>
                <button onClick={() => dispatch(decreaseQty(item._id))}>-</button>
                <span>{item.quantity}</span>
                <button onClick={() => dispatch(addToCart(item))}>+</button>
              </div>
              <button
                className={styles.removeBtn}
                onClick={() => dispatch(removeFromCart(item._id))}
              >
                Remove
              </button>
            </div>
          </div>
        ))}
      </div>
      <div className={styles.summary}>
        <h2>Total: ₹{totalPrice}</h2>
        <button
          className={styles.clearBtn}
          onClick={() => dispatch(clearCart())}
        >
          Clear Cart
        </button>
      </div>
    </div>
  );
}
