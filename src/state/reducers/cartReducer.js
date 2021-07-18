const initState = {
    store: [],

    cart: [],

    total: 0
};

const cartReducer = (state = initState, action) => {
    if (action.type === 'SET_STORE') {
        return { ...state, store: action.payload }
    }
    if (action.type === 'ADD_TO_CART') {
        let doesExist = state.cart.find(item => action.payload === item.id);
        if (!doesExist) {
            let newItem = state.store.find(item => action.payload === item.id);
            newItem.amount = 1;
            return { ...state, cart: [...state.cart, newItem], total: state.total + newItem.price };
        }
        return {
            ...state, cart:
                state.cart.map((item) => {
                    return item.id === action.payload ? { ...item, amount: ++item.amount } : item;
                }), total: state.total + doesExist.price
        }
    }

    if (action.type === 'DECREMENT') {
        let itemToRemove = state.cart.find(item => action.payload === item.id);

        if (itemToRemove.amount >= 2) {
            return {
                ...state, cart: state.cart.map((item) => {
                    return item.id === action.payload ? { ...item, amount: --item.amount } : item;
                }), total: state.total - itemToRemove.price
            }
        }
        return { ...state, cart: state.cart.filter(item => item.id !== action.payload), total: state.total - itemToRemove.price };

    }

    if (action.type === 'REMOVE_FROM_CART') {
        let itemToRemove = state.cart.find(item => action.payload === item.id);
        return { ...state, cart: state.cart.filter(item => item.id !== action.payload), total: state.total - (itemToRemove.price * itemToRemove.amount) };
    }

    if (action.type === 'EMPTY_CART') {
        return { ...state, cart: [], total: 0 }
    }
    return state;
}



export default cartReducer