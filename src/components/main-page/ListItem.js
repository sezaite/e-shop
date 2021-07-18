import { Link } from "react-router-dom";
import { useDispatch } from 'react-redux';
import { addToCart } from '../../state/actions/cartActions';
import LinesEllipsis from 'react-lines-ellipsis'

function ListItem({ id, price, title, img }) {
    const dispatch = useDispatch();

    const updateCart = (e) => {
        e.preventDefault();
        dispatch(addToCart(id));
        //cart pops up
    }
    return (
        <div className="item-card">
            <Link to={`/products/${id}`}>
                <img src={img} alt="itemIMG" />
                <LinesEllipsis
                    text={title}
                    maxLine='2'
                    ellipsis='...'
                    trimRight
                    basedOn='words'
                    className="elipsis"
                />

            </Link>
            <h5>{price} $</h5>
            <button className="btn" onClick={updateCart}>Add to cart</button>
        </div>
    )
}

export default ListItem
