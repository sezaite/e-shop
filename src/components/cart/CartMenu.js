import { useDispatch, useSelector } from 'react-redux';
import CartList from './CartList';
import { Link } from 'react-router-dom';
import { emptyCart } from '../../state/actions/cartActions';


function CartMenu() {
    const cart = useSelector((state) => state.cartReducer.cart);
    const dispatch = useDispatch();

    return (
        cart.length > 0 ? (
            <div className="cart-menu">
                {<CartList cart={cart} />}
                <button className="inc-btn" onClick={() => dispatch(emptyCart())}>Empty cart</button>
                <Link to="">Open cart page</Link>
            </div>)
            :
            <h2 className="empty-cart">Your cart is empty</h2>
    )
}

export default CartMenu
