export const addToCart = (id, target) => ({
    type: "ADD_TO_CART",
    payload: { id, target }
})

export const removeFromCart = id => ({
    type: "REMOVE_FROM_CART",
    payload: id
})

export const setStore = data => ({
    type: "SET_STORE",
    payload: data
})

export const decrement = (id, target) => ({
    type: "DECREMENT",
    payload: { id, target }
})

export const emptyCart = () => ({
    type: "EMPTY_CART",

})

