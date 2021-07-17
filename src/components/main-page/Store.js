import StoreList from './StoreList';
import CartMenu from '../cart/CartMenu';
import useFetch from './useFetch';
import { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { setStore } from '../../state/actions/cartActions';


function Store() {
    const { data, isFetching, error } = useFetch('https://fakestoreapi.com/products?limit=15');
    const dispatch = useDispatch();


    useEffect(() => {
        data === null ? console.log('Fetching...') : dispatch(setStore(data));

    }, [data]);

    return (
        <div className="store-page">
            <CartMenu />
            {error && <h2 className="error-msg">Could not load products</h2>}
            {isFetching ? <h2 className="loading-msg">Loading...</h2> : <StoreList items={data} />}

        </div>
    )
}

export default Store
