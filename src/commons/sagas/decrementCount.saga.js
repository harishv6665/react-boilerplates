import { put, takeLatest } from 'redux-saga/effects';
import { delay } from '../utils/utils';
import { decrementCountSuccess } from '../actions/actions';
import { ACTION_DECREMENT_COUNT } from '../constants/constants';

function* decrementAsync() {
  yield delay(1000); // API call here
  yield put(decrementCountSuccess()); // call action to set data in reducer
}

export function* decrementAsyncWatcher() {
  yield takeLatest(ACTION_DECREMENT_COUNT, decrementAsync);
}