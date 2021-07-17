import { useDispatch, useSelector } from 'react-redux';
import { addToCart, removeFromCart } from '../../state/actions/cartActions';

function CartItem({ id, price, title, description, img, amount }) {
    const dispatch = useDispatch();
    return (
        <div className="cart-block">
            <img src={img} alt="" />
            <h4>{title}</h4>
            <h6>{price}</h6>
            <h6>{amount}</h6>
            <div className="amount">
                <button className="dec-btn" onClick={() => dispatch(removeFromCart(id))}>-</button>
                <button className="inc-btn" onClick={() => dispatch(addToCart(id))}>+</button>
            </div>
        </div>
    )
}

export default CartItem
