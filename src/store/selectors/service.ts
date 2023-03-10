import { createSelector } from 'reselect';
import { AppState } from 'store/reducers';
import { fromServicesToSectionList } from 'utils/helpers/from-services-to-section-list';

const serviceSelect = (state: AppState) => state.service;

export const selectService = createSelector(serviceSelect, (state) => ({
  ...state,
}));

export const selectServiceSectionList = createSelector(serviceSelect, (state) => ({
  ...state,
  data: fromServicesToSectionList(state.filter ?? state.sort ? state.filtered : state.data),
}));

export const selectFilteredServices = createSelector(serviceSelect, (state) => ({
  markers: state.filter ? state.filtered : state.data,
  filter: state.filter,
}));
