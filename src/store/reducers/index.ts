import { combineReducers } from 'redux';

import { asyncStorageReducer } from './async-storage';
import { carouselReducer } from './carousel';
import { modalReducer } from './modal';
import { serviceReducer } from './service';

export const rootReducer = combineReducers({
  service: serviceReducer,
  modal: modalReducer,
  asyncStorage: asyncStorageReducer,
  carousel: carouselReducer,
});

export type AppState = ReturnType<typeof rootReducer>;
