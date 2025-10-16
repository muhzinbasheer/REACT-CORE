import { useDispatch, useSelector } from "react-redux"
import { removeFromCart } from "../Redux/Store/CartSlice";


const Cart = () => {
    const cart = useSelector((state) => state.cart);
    const dispatch = useDispatch();

    return (
        <div>
            <h2>Cart</h2>
            {cart.length==0 ? <p>No items in the cart</p> :null}
            {cart.map((item) => (
                <div key={item.id} style={{ margin: "10px" }}>
                    <span>{item.name} - ${item.price}</span>
                    <button onClick={() => dispatch(removeFromCart(item.id))}>
                        Remove
                    </button>
                </div>
            ))}
        </div>
    )
}

export default Cart;