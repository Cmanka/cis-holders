import {createSelector} from 'reselect';
import {AppState} from 'store/reducers';

const serviceSelect = (state: AppState) => state.service;

export const selectService = createSelector(serviceSelect, state => ({
  ...state,
}));
