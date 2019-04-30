import { DeepPartial } from "redux";
import { CounterState, initialCounterState } from './counter';

export type State = DeepPartial<{
    counter: CounterState
}>;

export const initialState = {
    counter: initialCounterState
}