import ListItem from './ListItem';

function StoreList({ data }) {
    return (
        <div className="articles-container">
            <div className="row">
                {data.map((item) => (
                    <ListItem key={irtictem.id} price={item.price} title={item.title} description={item.description} img={item.image} />
                ))}
            </div>
        </div >
    )
}

export default StoreList
