import {combineReducers} from 'redux';

import {serviceReducer} from './service';

export const rootReducer = combineReducers({
  service: serviceReducer,
});

export type AppState = ReturnType<typeof rootReducer>;
