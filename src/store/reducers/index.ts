import { combineReducers } from 'redux';

import { serviceReducer } from './service';
import { modalReducer } from './modal';
import { asyncStorageReducer } from './async-storage';

export const rootReducer = combineReducers({
  service: serviceReducer,
  modal: modalReducer,
  asyncStorage: asyncStorageReducer,
});

export type AppState = ReturnType<typeof rootReducer>;
