import { createStore, applyMiddleware } from 'redux';
import { rootReducer } from '../reducers';
import { initialState } from '../state';
import logger from 'redux-logger';

// Store作成
function configureStore(preloadedState = { 'counter': initialState }) {
    const store = createStore(rootReducer, preloadedState, applyMiddleware(logger));
    return store;
}

export default configureStore();

