import { Action } from 'redux';
import { actions } from '../actions';
import { initialState } from '../state';

// Reducer
export function counter(state = initialState, action: Action) {
    switch (action.type) {
        case actions.INCREMENT:
            return { 'val': state.val === undefined ? 0 : state.val + 1 };
        case actions.DECREMENT:
            return { 'val': state.val === undefined ? 0 : state.val - 1 };
        default:
            return state;
    }
}
