import { createStore, applyMiddleware } from "redux";
import { rootReducer } from "../reducers";
import { initialState } from "../state";
import logger from "redux-logger";
import createSagaMiddleware from "redux-saga";
import rootSaga from '../sagas/';

// Store作成
function configureStore(preloadedState = { "counter": initialState }) {
    const sagaMiddleware = createSagaMiddleware();
    const store = createStore(rootReducer, preloadedState, applyMiddleware(sagaMiddleware,logger));
    sagaMiddleware.run(rootSaga)
    return store;
}

export default configureStore();

