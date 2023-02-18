import { all, fork } from 'redux-saga/effects';

import { serviceWatcher } from './service';
import { asyncStorageWatcher } from './async-storage';
import { carouselWatcher } from './carousel';

export function* rootSaga() {
  yield all([fork(serviceWatcher)]);
  yield all([fork(asyncStorageWatcher)]);
  yield all([fork(carouselWatcher)]);
}
