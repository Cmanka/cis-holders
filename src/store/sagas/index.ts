import { all, fork } from 'redux-saga/effects';

import { serviceWatcher } from './service';
import { asyncStorageWatcher } from './async-storage';

export function* rootSaga() {
  yield all([fork(serviceWatcher)]);
  yield all([fork(asyncStorageWatcher)]);
}
