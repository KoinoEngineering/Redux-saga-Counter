import counter from "./counter"
import { fork } from 'redux-saga/effects';

export default function* rootSaga() {
    // すべてのsagaを起動する
    yield fork(counter);
}
