import React from 'react';
import { useParams } from "react-router-dom";
import useFetch from '../main-page/useFetch';
import { useDispatch, useSelector } from 'react-redux';
import { addToCart, removeFromCart } from '../../state/actions/cartActions';

function Item() {
    const { id } = useParams();
    const { data: item, isFetching, error } = useFetch(`https://fakestoreapi.com/products/${id}`);
    const dispatch = useDispatch();
    return (
        <>
            {error && <h2>Could not load the item</h2>}
            {isFetching ? <h2 className="loading-msg">Loading...</h2> : (
                <>
                    <h1>{item.title}</h1>
                    <img src={item.image} alt="itemIMG" />
                    <p>{item.description}</p>
                    <button className="btn" onClick={() => dispatch(addToCart(id))}>Add to cart</button>
                </>
            )}
        </>
    )
}

export default Item
