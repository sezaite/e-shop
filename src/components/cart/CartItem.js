import { useDispatch, useSelector } from 'react-redux';
import { addToCart, removeFromCart, decrement } from '../../state/actions/cartActions';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faTimes } from '@fortawesome/free-solid-svg-icons';
import LinesEllipsis from 'react-lines-ellipsis';
import priceFormatter from '../../helpers/priceFormatter';

function CartItem({ id, price, title, description, img, amount }) {
    const dispatch = useDispatch();
    return (
        <div className="cart-block">
            <button className="remove-btn" onClick={() => dispatch(removeFromCart(id))}><FontAwesomeIcon icon={faTimes} className="x-icon" /></button>
            <img src={img} alt="item-image" />
            <div className="cart-block-top">
                <LinesEllipsis
                    text={title}
                    maxLine='1'
                    ellipsis='...'
                    trimRight
                    basedOn='words'
                    className='cart-elipsis'
                />
                <h6 className="price">$ {priceFormatter(price, true)}<u>{priceFormatter(price, false)}</u></h6>
            </div>
            <h6 className="amount">Quantity: {amount}</h6>
            <div className="amount-control">
                <button className={amount > 1 ? "desc-btn" : "desc-btn disabled"} onClick={() => dispatch(decrement(id))}>-</button>
                <button className="inc-btn" onClick={() => dispatch(addToCart(id))}>+</button>
            </div>
        </div>
    )
}

export default CartItem
