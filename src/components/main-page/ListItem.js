import { Link } from "react-router-dom";
import { useDispatch } from 'react-redux';
import { addToCart } from '../../state/actions/cartActions';
import LinesEllipsis from 'react-lines-ellipsis';
import priceFormatter from "../../helpers/priceFormatter";
import cartPopUp from "../../helpers/cartPopUp";

function ListItem({ id, price, title, img }) {
    const dispatch = useDispatch();
    const updateCart = (e) => {
        e.preventDefault();
        dispatch(addToCart(id));
        cartPopUp();
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
            <h5 className="price">{priceFormatter(price, true)}<u>{priceFormatter(price, false)}</u></h5>
            <button className="btn add-to-cart" onClick={updateCart}>Add to cart</button>
        </div>
    )
}

export default ListItem
