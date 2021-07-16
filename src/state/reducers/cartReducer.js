const initState = {
    cart: []
};

const cartReducer = (state = initState, action) => {
    switch (action.type) {
        case 'REMOVE_FROM_CART':
            return state.cart.filter(item => action.payload.id !== item.id);
        case 'ADD_TO_CART':
            return state.push(action.payload);
        default:
            return state;
    }
}

export default cartReducer