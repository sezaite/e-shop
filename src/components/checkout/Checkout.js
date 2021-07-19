import CartList from '../cart/CartList';
import { emptyCart } from '../../state/actions/cartActions';
import { useDispatch, useSelector } from 'react-redux';
import { useHistory } from "react-router-dom";

function Checkout() {
    const cart = useSelector((state) => state.cartReducer.cart);
    const dispatch = useDispatch();
    let history = useHistory();

    return (

        <div className="cart-page">
            {cart.length > 0 ? (
                <div className="cart">
                    {<CartList cart={cart} />}
                    <button className="empty-btn btn" onClick={() => dispatch(emptyCart())}>Empty cart</button>
                    <button className="btn back" onClick={() => history.goBack()}>Back</button>
                    <button className="btn payment">Proceed to payment</button>

                </div>)
                :
                <div className="empty-checkout">
                    <h2 className="empty-cart">Your cart is empty</h2>
                    <button className="btn back" onClick={() => history.goBack()}>Back</button>
                </div>
            }

        </div>

    )
}

export default Checkout
