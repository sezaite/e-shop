import { useDispatch, useSelector } from 'react-redux';
import { addToCart, removeFromCart, decrement } from '../../state/actions/cartActions';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faTimes } from '@fortawesome/free-solid-svg-icons';
import LinesEllipsis from 'react-lines-ellipsis'

function CartItem({ id, price, title, description, img, amount }) {
    const dispatch = useDispatch();
    return (
        <div className="cart-block">
            <button className="remove-btn" onClick={() => dispatch(removeFromCart(id))}><FontAwesomeIcon icon={faTimes} /></button>
            <LinesEllipsis
                text={title}
                maxLine='1'
                ellipsis='...'
                trimRight
                basedOn='words'
                className='cart-elipsis'
            />
            <h6 className="price">{price}</h6>
            <h6 className="amount">{amount}</h6>
            <div className="amount-control">
                <button className="inc-btn" onClick={() => dispatch(decrement(id))}>-</button>
                <button className="desc-btn" onClick={() => dispatch(addToCart(id))}>+</button>
            </div>
        </div>
    )
}

export default CartItem
