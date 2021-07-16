const initState = { amount: 0 };

const amountReducer = (state = initState, action) => {
    switch (action.type) {
        //if the amount is only one, button disappears, you can only remove
        case 'DECREMENT':
            return state.amount > 1 ? state.amount-- : state.amount;
        case 'INCREMENT':
            return state.amount++;
        default:
            return state;
    }
}

export default amountReducer