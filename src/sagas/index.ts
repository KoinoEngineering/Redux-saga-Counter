import { put, call, takeEvery, delay } from 'redux-saga/effects';
import { INCREMENT_ASYNC, increment } from '../actions';

export function* incrementAsync() {
    yield call(delay, 1000);
    yield put(increment());
}

export default function* rootSaga() {
    yield* [takeEvery(INCREMENT_ASYNC, incrementAsync)];
}