import { all, fork } from 'redux-saga/effects';

import { asyncStorageWatcher } from './async-storage';
import { carouselWatcher } from './carousel';
import { serviceWatcher } from './service';

export function* rootSaga() {
  yield all([fork(serviceWatcher)]);
  yield all([fork(asyncStorageWatcher)]);
  yield all([fork(carouselWatcher)]);
}
