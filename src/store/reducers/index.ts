import { combineReducers } from 'redux';

import { serviceReducer } from './service';
import { modalReducer } from './modal';

export const rootReducer = combineReducers({
  service: serviceReducer,
  modal: modalReducer,
});

export type AppState = ReturnType<typeof rootReducer>;
