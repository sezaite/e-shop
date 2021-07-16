import { Link } from "react-router-dom"

function ListItem({ id, price, title, description, img }) {
    return (
        <div className="item-card">
            <img src={img} alt="itemIMG" />
            <Link to={`/products/${id}`}>
                <h3>{title}</h3>
                <h5>{price}</h5>
            </Link>
            <button className="btn">Add to cart</button>
        </div>
    )
}

export default ListItem
