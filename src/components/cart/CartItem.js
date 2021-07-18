import { useDispatch, useSelector } from 'react-redux';
import { addToCart, removeFromCart, decrement } from '../../state/actions/cartActions';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faTimes } from '@fortawesome/free-solid-svg-icons';

function CartItem({ id, price, title, description, img, amount }) {
    const dispatch = useDispatch();
    return (
        <div className="cart-block">
            <button className="dec-btn" onClick={() => dispatch(removeFromCart(id))}><FontAwesomeIcon icon={faTimes} /></button>
            <img src={img} alt="" />
            <h4>{title}</h4>
            <h6>{price}</h6>
            <h6>{amount}</h6>
            <div className="amount">
                <button className="inc-btn" onClick={() => dispatch(decrement(id))}>-</button>
                <button className="inc-btn" onClick={() => dispatch(addToCart(id))}>+</button>
            </div>
        </div>
    )
}

export default CartItem
