import StoreList from './StoreList';
import CartMenu from '../cart/CartMenu';
import useFetch from './useFetch';
import { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { setStore } from '../../state/actions/cartActions';


function Store() {
    const [sort, setSort] = useState("");
    const { data, isFetching, error } = useFetch(`https://fakestoreapi.com/products?limit=15`);
    const dispatch = useDispatch();

    useEffect(() => {
        // data === null ? console.log('Fetching...') : dispatch(setStore(data));
        if (data !== null) dispatch(setStore(data));
    }, [data]);

    return (
        <div className="store-page">
            <label htmlFor="sort">Sort by price:</label>
            <select defaultValue="select" name="sort" id="cars" onChange={(e) => setSort(e.target.value)}>
                <option disabled value="select">Select</option>
                <option value="asc">Ascending</option>
                <option value="desc">Descending</option>
            </select>
            <CartMenu />
            {error && <h2 className="error-msg">Could not load products</h2>}
            {isFetching ? <h2 className="loading-msg">Loading...</h2> : <StoreList items={data} sort={sort} />}

        </div>
    )
}

export default Store
