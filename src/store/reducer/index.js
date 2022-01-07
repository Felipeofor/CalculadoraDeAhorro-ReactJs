const { DELETE_CARD, ADD_CARD, SET_BALANCE } = require('../actions/action-types');

const initialState = {
    balance: [],
}

const reducer = (state = initialState, action) => {
    switch (action.type) {
        case DELETE_CARD:
            console.log("action.payload.id" ,action.payload);
            return {
                ...state,
                balance: state.balance.filter(card => card.id !== action.payload.id)
            }
            return state
        case SET_BALANCE:
            return {
                ...state,
                balance: action.payload,
            }
        case ADD_CARD:
            state.balance.push(action.payload);
        default:
            return state
        }
}

export default reducer;