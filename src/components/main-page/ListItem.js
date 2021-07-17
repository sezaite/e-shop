import { Link } from "react-router-dom";
import { useDispatch } from 'react-redux';
import { addToCart } from '../../state/actions/cartActions';

function ListItem({ id, price, title, img }) {
    const dispatch = useDispatch();

    const updateCart = (e) => {
        e.preventDefault();
        dispatch(addToCart(id));
        //cart pops up
    }
    return (
        <div className="item-card">
            <img src={img} alt="itemIMG" />
            <Link to={`/products/${id}`}>
                <h3>{title}</h3>
                <h5>{price}</h5>
            </Link>
            <button className="btn" onClick={updateCart}>Add to cart</button>
        </div>
    )
}

export default ListItem
