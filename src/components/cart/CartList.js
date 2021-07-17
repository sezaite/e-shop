import CartItem from "./CartItem";

function CartList({ cart }) {

    return (
        <div className="cart-list">
            {cart.map((item) => (
                <CartItem key={item.id} id={item.id} price={item.price} title={item.title} description={item.description} img={item.image} amount={item.amount} />
            ))
            }
        </div>
    )
}

export default CartList
