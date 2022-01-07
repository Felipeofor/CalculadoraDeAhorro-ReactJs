import { DELETE_CARD, ADD_CARD, SET_BALANCE } from '../actions/action-types';

export function deleteCard(card) {
    return {
        type: DELETE_CARD,
        payload: card
    }
}

export function addCard(card) {
    return {
        type: ADD_CARD,
        payload: card,
    }
}

export function setBalance(balance) {
    return {
        type: SET_BALANCE,
        payload: balance,
    }
}