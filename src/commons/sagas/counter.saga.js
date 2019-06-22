import { all } from 'redux-saga/effects';
import { incrementAsyncWatcher } from './incrementCount.saga'
import { decrementAsyncWatcher } from './decrementCount.saga'

export default function* rootSaga() {
  yield all([
    incrementAsyncWatcher(),
    decrementAsyncWatcher()
  ])
}
