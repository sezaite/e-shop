import React from 'react'

function CartItem({ id, price, title, description, img, amount }) {
    return (
        <div className="cart-block">
            <img src={img} alt="" />
            <h4>{title}</h4>
            <h6>{price}</h6>
            <h6>{amount}</h6>
        </div>
    )
}

export default CartItem
