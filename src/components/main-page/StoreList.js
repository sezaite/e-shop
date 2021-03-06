import ListItem from './ListItem';

function StoreList({ items, sort }) {
    if (sort === "asc") items.sort((a, b) => a.price - b.price);
    if (sort === "desc") items.sort((a, b) => b.price - a.price);

    return (
        <div className="items-container">
            {items.map((item) => (
                <ListItem key={item.id} id={item.id} price={item.price} title={item.title} description={item.description} img={item.image} />
            ))}
        </div >
    )
}

export default StoreList
