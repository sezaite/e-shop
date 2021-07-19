import { useEffect, useState } from 'react';
import { useParams, useHistory } from "react-router-dom";
import useFetch from '../../helpers/useFetch';
import { useDispatch, useSelector } from 'react-redux';
import { addToCart, setStore } from '../../state/actions/cartActions';
import CartMenu from '../cart/CartMenu';
import cartPopUp from '../../helpers/cartPopUp';

function Item() {
    const { id } = useParams();
    let history = useHistory();
    const { data: items, isFetching, error } = useFetch(`https://fakestoreapi.com/products?limit=15`);
    const dispatch = useDispatch();
    const [item, setItem] = useState(null);

    //jei atsidarytu linka is isores
    useEffect(() => {
        if (items !== null) {
            dispatch(setStore(items));
            setItem(items.find(item => item.id === parseInt(id)));
        }
    }, [items]);

    const updateCart = (e) => {
        e.preventDefault();
        dispatch(addToCart(id));
        cartPopUp();
    }
    return (
        <div className="main-block">
            <CartMenu />
            {error && <h2>Could not load the item</h2>}
            {isFetching || item === null ? <h2 className="loading-msg">Loading...</h2> : (
                <div className="item-block ">
                    <img src={item.image} alt="itemIMG" />
                    <div className="item-right">
                        <h1>{item.title}</h1>
                        <h3 className="price">$ {item.price.toFixed(2)}</h3>
                        <button className="btn" onClick={updateCart}>Add to cart</button>
                        <h3 className="description">Product description</h3>
                        <p className="description">{item.description}</p>
                        <button className="btn back" onClick={() => history.goBack()}>Back</button>

                    </div>

                </div>
            )
            }
        </div >
    )
}

export default Item
