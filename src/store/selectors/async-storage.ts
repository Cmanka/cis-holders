import { createSelector } from 'reselect';
import { AppState } from 'store/reducers';

const asyncStorageSelect = (state: AppState) => state.asyncStorage;

export const selectAsyncStorage = createSelector(asyncStorageSelect, (state) => ({
  ...state,
}));
