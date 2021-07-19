import { useDispatch, useSelector } from 'react-redux';
import CartList from './CartList';
import { Link } from 'react-router-dom';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faShoppingCart, faTimes } from '@fortawesome/free-solid-svg-icons';
import { useState, useEffect } from 'react';

function CartMenu() {
    const cart = useSelector((state) => state.cartReducer.cart);
    const total = useSelector((state) => state.cartReducer.total);
    const [visible, setVisible] = useState(false);

    useEffect(() => {
        visible ? document.querySelector(".cart-menu").classList.remove('hidden') : document.querySelector(".cart-menu").classList.add('hidden');
    }, [visible]);

    return (
        <div className="cart-menu hidden" >
            <div className="cart-btn" onClick={() => setVisible(!visible)}>
                <FontAwesomeIcon icon={faTimes} className="x-icon" />
                <FontAwesomeIcon icon={faShoppingCart} className="cart-icon" />
            </div>
            {cart.length > 0 ? (
                <>
                    < CartList cart={cart} />
                    <div className="cart-bottom">
                        <div className="totals">
                            <h4>Subtotal</h4>
                            <h3>$ {total.toFixed(2)}</h3>
                        </div>

                        <Link to="" className="checkout">Checkout</Link>
                    </div>

                </>
            )
                :

                <h2 className="empty-cart">Your cart is empty</h2>}
        </div>
    )
}

export default CartMenu
