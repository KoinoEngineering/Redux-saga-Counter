import { combineReducers } from 'redux';
import { counter } from './counter';

// RootReducer
export const rootReducer = combineReducers({
    counter
});
