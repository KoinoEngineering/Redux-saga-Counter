import { put, takeEvery, delay } from "redux-saga/effects";
import actions from "../actions/counter";
import actionCreater from "../actionCreaters/counter"

export function* incrementAsync() {
    yield delay(1000);
    yield put(actionCreater.increment());
}

export default function* counterSaga() {
    yield takeEvery(actions.INCREMENT_ASYNC, incrementAsync);
}
