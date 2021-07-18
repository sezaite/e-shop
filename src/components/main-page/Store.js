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

    const handleSort = (e) => {
        setSort(e.target.value);
    }


    useEffect(() => {
        /* data === null ? console.log('Fetching...') :  */
        dispatch(setStore(data));

    }, []);



    return (
        <div className="store-page">
            <label htmlFor="sort"></label>
            <select name="sort" id="cars" onChange={handleSort}>
                <option selected disabled value="volvo">Select</option>
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
