export const addToCart = id => ({
    type: "ADD_TO_CART",
    payload: id
})

export const removeFromCart = id => ({
    type: "REMOVE_FROM_CART",
    payload: id
})

export const setStore = data => ({
    type: "SET_STORE",
    payload: data
})

export const decrement = data => ({
    type: "DECREMENT",
    payload: data
})

export const emptyCart = data => ({
    type: "EMPTY_CART",

})

