import { useSelector, useDispatch } from 'react-redux';
import CartList from './CartList';

function Cart() {
    const cart = useSelector((state) => state.cart);

    return cart.length > 0 ? <CartList cart={cart} /> : <h2 className="empty-cart">Your cart is empty</h2>


}

export default Cart
