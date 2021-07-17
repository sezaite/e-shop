import { useDispatch, useSelector } from 'react-redux';
import CartList from './CartList';

function CartMenu() {
    const cart = useSelector((state) => state.cartReducer.cart);

    return (
        <div className="cart-menu">
            {cart.length > 0 ? <CartList cart={cart} /> : <h2 className="empty-cart">Your cart is empty</h2>}
        </div>
    )
}

export default CartMenu
