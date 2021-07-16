import ListItem from './ListItem';

function StoreList({ items }) {
    return (
        <div className="items-container">
            <div className="row">
                {items.map((item) => (
                    <ListItem key={item.id} id={item.id} price={item.price} title={item.title} description={item.description} img={item.image} />
                ))}
            </div>
        </div >
    )
}

export default StoreList
