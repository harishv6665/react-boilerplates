import { put, takeLatest } from 'redux-saga/effects';
import { delay } from '../utils/utils';
import { incrementCountSuccess } from '../actions/actions';
import { ACTION_INCREMENT_COUNT } from '../constants/constants';

function* incrementAsync() {
  yield delay(1000); // API call here
  yield put(incrementCountSuccess()); // call action to set data in reducer
}

export function* incrementAsyncWatcher() {
  yield takeLatest(ACTION_INCREMENT_COUNT, incrementAsync);
}
