import StoreList from './StoreList';
import CartMenu from './CartMenu';
import useFetch from '../../helpers/useFetch';

function Store() {
    const { data, isFetching, error } = useFetch('');

    return (
        <div className="store-page">
            <CartMenu />
            {error && <h2 className="error-msg">Could not load products</h2>}
            {isFetching ? <h2 className="loading-msg">Loading...</h2> : <StoreList items={data} />}

        </div>
    )
}

export default Store
