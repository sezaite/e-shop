const initState = {
    store: [],

    cart: []
};

const cartReducer = (state = initState, action) => {
    if (action.type === 'SET_STORE') {
        return { ...state, store: action.payload }
    }
    if (action.type === 'ADD_TO_CART') {
        let doesExist = state.cart.find(item => action.payload === item.id);
        if (!doesExist) {
            let newItem = state.store[action.payload - 1];
            newItem.amount = 1;
            return { ...state, cart: [...state.cart, newItem] };
        }
        return {
            ...state, cart: [
                state.cart.map((item, i) => {
                    return i === action.payload - 1 ? { ...item, amount: ++item.amount } : item;
                    //return i === action.payload.id ? ++item.amount : item;
                })]
        }
    }
    // let id = doesExist.id;
    // let cartCopy = state.cart;
    // cartCopy[id].amount++;
    // return { cart: [cartCopy] };

    if (action.type === 'REMOVE_FROM_CART') {
        let itemToRemove = state.cart.find(item => action.payload.id === item.id);
        if (itemToRemove.amount > 2) {
            return state.cart.map((item, i) => {
                return i === action.payload - 1 ? { ...item, amount: --item.amount } : item;
            });
        }
        return state.cart.slice(action.payload - 1, 1);

    }
    return state;
}


export default cartReducer