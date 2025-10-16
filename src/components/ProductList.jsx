import { useDispatch } from "react-redux";
import { addToCart } from "../Redux/Store/CartSlice";


const products = [
  { id: 1, name: "iPhone", price: 999 },
  { id: 2, name: "Samsung", price: 799 },
  { id: 3, name: "OnePlus", price: 699 }
];

const ProductList = () => {
    const dispatch = useDispatch()

    return (
        <>
            <h1>Products</h1>
            {products.map((product) => (
                <div key={product.id} style={{ margin: "10px" }}>
                    <span>{product.id} - ${product.price}</span>
                    <button onClick={() => dispatch(addToCart(product))}>
                        Add to cart
                    </button>
                </div>
            ))}
        </>
    )
}

export default ProductList;

