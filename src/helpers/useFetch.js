import { useState, useEffect } from 'react';
import axios from 'axios';

const useFetch = (url) => {
    const [data, setData] = useState(null);
    const [isFetching, setIsFetching] = useState(true);
    const [error, setError] = useState(false);

    useEffect(() => {
        if (!url) return;
        axios.get(url).then(res => {
            console.log(res);
            setIsFetching(false);
            setData(res.data);
            setError(false)
        }).catch(err => {
            console.error(err);
            setIsFetching(false);
            setError(true)
        })
    }, [url])

    return { data, isFetching, error };
}

export default useFetch;
