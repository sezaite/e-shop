import CartList from '../cart/CartList';
import { emptyCart } from '../../state/actions/cartActions';
import { useDispatch, useSelector } from 'react-redux';

function Checkout() {
    const cart = useSelector((state) => state.cartReducer.cart);
    const dispatch = useDispatch();


    return (
        cart.length > 0 ? (
            <div className="cart-page">
                {<CartList cart={cart} />}
                <button className="inc-btn" onClick={() => dispatch(emptyCart())}>Empty cart</button>
            </div>)
            :
            <h2 className="empty-cart">Your cart is empty</h2>


    )
}

export default Checkout
