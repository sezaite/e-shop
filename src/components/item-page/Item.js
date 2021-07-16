import React from 'react';
import { useParams } from "react-router-dom";
import useFetch from '../../helpers/useFetch';

function Item() {
    const { id } = useParams();
    const { data: item, isFetching, error } = useFetch(`https://fakestoreapi.com/products/${id}`);

    return (
        <>
            {error && <h2>Could not load the item</h2>}
            {isFetching ? <h2 className="loading-msg">Loading...</h2> : (
                <>
                    <h1>{item.title}</h1>
                    <img src={item.image} alt="itemIMG" />
                    <p>{item.description}</p>
                    <button className="btn">Add to cart</button>
                </>
            )}
        </>
    )
}

export default Item
