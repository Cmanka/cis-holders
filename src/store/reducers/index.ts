import { combineReducers } from 'redux';

import { serviceReducer } from './service';
import { modalReducer } from './modal';
import { asyncStorageReducer } from './async-storage';
import { carouselReducer } from './carousel';

export const rootReducer = combineReducers({
  service: serviceReducer,
  modal: modalReducer,
  asyncStorage: asyncStorageReducer,
  carousel: carouselReducer,
});

export type AppState = ReturnType<typeof rootReducer>;
