async function useFetch(url) {
    const [data, setData] = useState(null);
    const [isFetching, setIsfetching] = useState(false);
    const [error, setError] = useState(null);

    useEffect(() => {
        setIsfetching(true);
        await axios.get(url).then(res => {
            setIsfetching(false);
            setData(res.data);
        }).catch(err => {
            setIsfetching(false);
            setError('Something went wrong with your data fetching')
        })
    }, []);
    return { data, isFetching, error }
}

export default useFetch
