import { useEffect, useState } from 'react';
import StoreList from './StoreList';
import CartMenu from './CartMenu';
import useFetch from '../../helpers/useFetch';

function Store() {
    const { data, isFetching, error } = useFetch('');

    return (
        <div className="store-page">
            <CartMenu />
            <StoreList />

        </div>
    )
}

export default Store
