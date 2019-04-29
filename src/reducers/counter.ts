import { State } from "../state";
import { Action } from "redux";
export default function counter(state = (new State()), action: Action) {
    switch (action.type) {
        case 'INCREMENT':
            state.counter++;
            return state;
        case 'INCREMENT_IF_ODD':
            state.counter = state.counter % 2 !== 0 ? state.counter + 1 : state.counter;
            return state
        case 'DECREMENT':
            state.counter--;
            return state;
        default:
            return state;
    }
}