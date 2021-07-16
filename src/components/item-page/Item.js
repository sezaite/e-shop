import React from 'react';
import { useParams } from "react-router-dom";
import useFetch from '../../helpers/useFetch';

function Item() {
    const { id } = useParams();
    const { data: item, isFetching, error } = useFetch(`https://fakestoreapi.com/products/${id}`);

    return (
        <>
            {isFetching ? <h2 className="loading-msg">Loading...</h2> : (
                <>
                    <h1>{item.title}</h1>
                    <img src={item.image} alt="itemIMG" />
                    <p>{item.description}</p>
                </>
            )}
        </>
    )
}

export default Item
