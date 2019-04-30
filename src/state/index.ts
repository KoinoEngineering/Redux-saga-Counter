import { DeepPartial } from "redux";

export type State = DeepPartial<{ val: number }>;
export const initialState: State = { "val": 0 };
