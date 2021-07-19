export const addToCart = (id) => ({
    type: "ADD_TO_CART",
    payload: parseInt(id)
})

export const removeFromCart = id => ({
    type: "REMOVE_FROM_CART",
    payload: id
})

export const setStore = data => ({
    type: "SET_STORE",
    payload: data
})

export const decrement = (id) => ({
    type: "DECREMENT",
    payload: id
})

export const emptyCart = () => ({
    type: "EMPTY_CART",

})

