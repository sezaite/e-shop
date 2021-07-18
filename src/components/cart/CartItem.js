import { useDispatch, useSelector } from 'react-redux';
import { addToCart, removeFromCart, decrement } from '../../state/actions/cartActions';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faTimes } from '@fortawesome/free-solid-svg-icons';
import LinesEllipsis from 'react-lines-ellipsis'

function CartItem({ id, price, title, description, img, amount }) {
    const dispatch = useDispatch();
    return (
        <div className="cart-block">
            <button className="dec-btn" onClick={() => dispatch(removeFromCart(id))}><FontAwesomeIcon icon={faTimes} /></button>
            <img src={img} alt="" />
            <LinesEllipsis
                text={title}
                maxLine='1'
                ellipsis='...'
                trimRight
                basedOn='words'
            />
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
