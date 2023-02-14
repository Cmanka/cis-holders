import {all, fork} from 'redux-saga/effects';

import {serviceWatcher} from './service';

export function* rootSaga() {
  yield all([fork(serviceWatcher)]);
}
