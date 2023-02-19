import { createSelector } from 'reselect';
import { AppState } from 'store/reducers';

export const appSelect = (state: AppState) => state;

export const selectFilters = createSelector(appSelect, (state) => {
  const { loading } = state.service;
  const storage = state.asyncStorage;
  const { type } = state.modal;

  return { loading: loading || storage.loading, filters: storage.keys, modalType: type };
});
