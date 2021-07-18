const initState = {
    store: [],

    cart: [],

    total: 0
};

const cartReducer = (state = initState, action) => {
    if (action.type === 'SET_STORE') {
        // console.log({ ...state, store: action.payload });
        return { ...state, store: action.payload }
    }
    if (action.type === 'ADD_TO_CART') {
        console.log(state);
        let doesExist = state.cart.find(item => action.payload === item.id);
        if (!doesExist) {
            let newItem = state.store.find(item => action.payload === item.id);
            //kad nenusismaisytu indexai 
            // let newItem = state.store[action.payload - 1];
            newItem.amount = 1;
            return { ...state, cart: [...state.cart, newItem] };
        }
        return {
            ...state, cart:
                state.cart.map((item) => {
                    return item.id === action.payload ? { ...item, amount: ++item.amount } : item;
                })
        }
    }

    if (action.type === 'DECREMENT') {
        let itemToRemove = state.cart.find(item => action.payload.id === item.id);

        if (itemToRemove.amount > 2) {
            return state.cart.map((item, i) => {
                return i === action.payload - 1 ? { ...item, amount: --item.amount } : item;
            });
        }
        return state.cart.slice(action.payload - 1, 1);

    }

    if (action.type === 'REMOVE_FROM_CART') {
        return state.cart.slice(action.payload - 1, 1);
    }

    if (action.type === 'EMPTY_CART') {
        return { ...state, cart: [], total: 0 }
    }
    return state;
}



export default cartReducer