import { createSelector } from 'reselect';
import { AppState } from 'store/reducers';
import { fromServicesToSectionList } from 'lib/from-services-to-section-list';

const serviceSelect = (state: AppState) => state.service;

export const selectService = createSelector(serviceSelect, (state) => ({
  ...state,
}));

export const selectServiceSectionList = createSelector(serviceSelect, (state) => ({
  ...state,
  data: fromServicesToSectionList(state.data),
}));
