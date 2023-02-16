import { createSelector } from 'reselect';
import { AppState } from 'store/reducers';

const modalSelect = (state: AppState) => state.modal;

export const selectModal = createSelector(modalSelect, (state) => ({
  ...state,
}));
