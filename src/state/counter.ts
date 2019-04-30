import { DeepPartial } from "redux";

export type CounterState = DeepPartial<{ val: number }>;
export const initialCounterState: CounterState = { "val": 0 };
