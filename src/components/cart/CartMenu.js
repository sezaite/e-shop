import { useDispatch, useSelector } from 'react-redux';
import CartList from './CartList';
import { Link } from 'react-router-dom';

function CartMenu() {
    const cart = useSelector((state) => state.cartReducer.cart);
    const total = useSelector((state) => state.cartReducer.total);

    return (
        <div className="cart-menu">
            {cart.length > 0 ? (
                <>
                    < CartList cart={cart} />
                    <div className="cart-bottom">
                        <div className="totals">
                            <h4>Subtotal</h4>
                            <h3>$ {total.toFixed(2)}</h3>
                        </div>

                        <Link to="/checkout" className="checkout">Checkout</Link>
                    </div>

                </>
            )
                :

                <h2 className="empty-cart">Your cart is empty</h2>}
        </div>
    )
}

export default CartMenu
