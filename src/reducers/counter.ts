import { Action } from "redux";
import actions from "../actions/counter";
import { initialState } from "../state";

// Reducer
export function counter(state = initialState.counter, action: Action) {
    switch (action.type) {
        case actions.INCREMENT:
            return { "val": state.val === undefined ? 0 : state.val + 1 };
        case actions.DECREMENT:
            return { "val": state.val === undefined ? 0 : state.val - 1 };
        default:
            return state;
    }
}
