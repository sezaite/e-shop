import { useSelector } from 'react-redux';
import CartList from './CartList';

function Cart() {
    const cart = useSelector((state) => state.cartReducer.cart);


    return (
        <div className="cart-page">
            {cart.length > 0 ? <CartList cart={cart} /> : <h2 className="empty-cart">Your cart is empty</h2>}
        </div>
    )
}

export default Cart
