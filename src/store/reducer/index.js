const { DELETE_CARD, ADD_CARD } = require('../actions/action-types');

const initialState = {
    balance: [],
}

const reducer = (state = initialState, action) => {
    switch (action.type) {
        case DELETE_CARD:
            console.log(action.payload);
            return state
        case ADD_CARD:
            return {
                ...state.balance,
                balance: [...state.balance, action.payload]
            }
        default:
            return state
        }
}

export default reducer;