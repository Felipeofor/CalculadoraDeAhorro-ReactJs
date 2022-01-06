import { DELETE_CARD } from '../actions/action-types';

export function deleteCard(card) {
    return {
        type: DELETE_CARD,
    }
}

