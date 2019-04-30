import { put, takeEvery, delay } from "redux-saga/effects";
import { actions, CounterActions } from "../actions";

export function* incrementAsync() {
    yield delay(1000);
    yield put(CounterActions.increment());
}

export default function* rootSaga() {
    yield takeEvery(actions.INCREMENT_ASYNC, incrementAsync);
}