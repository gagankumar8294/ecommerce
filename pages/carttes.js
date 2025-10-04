import { useDispatch } from "react-redux";
import { useSelector } from "react-redux";
import { addToCart } from "@/redux/cartSlice";

export default function Cart() {
    const { totalQuantity } = useSelector((state) => (state.cart))
    const dispatch = useDispatch()

    return (
        <>
            <p>Your Cart Total  {totalQuantity} Rs/-</p>
        </>
    )
}