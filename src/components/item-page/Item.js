import React from 'react';
import { useParams } from "react-router-dom";
import useFetch from '../../helpers/useFetch';
import { useDispatch, useSelector } from 'react-redux';
import { addToCart, removeFromCart } from '../../state/actions/cartActions';

function Item() {
    const { id } = useParams();
    const { data: item, isFetching, error } = useFetch(`https://fakestoreapi.com/products/${id}`);
    const dispatch = useDispatch();
    return (
        <div className="main-block">
            {error && <h2>Could not load the item</h2>}
            {isFetching ? <h2 className="loading-msg">Loading...</h2> : (
                <div className="item-block ">
                    <img src={item.image} alt="itemIMG" />
                    <div className="item-right">
                        <h1>{item.title}</h1>
                        <h3 className="price">$ {item.price.toFixed(2)}</h3>
                        <button className="btn" onClick={() => dispatch(addToCart(id))}>Add to cart</button>
                        <h3 className="description">Product description</h3>
                        <p className="description">{item.description}</p>
                        <button className="btn back">Back</button>

                    </div>

                </div>
            )
            }
        </div >
    )
}

export default Item
