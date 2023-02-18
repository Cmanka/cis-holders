import { createSelector } from 'reselect';
import { AppState } from 'store/reducers';

const serviceSelect = (state: AppState) => state.carousel;

export const selectCarousel = createSelector(serviceSelect, (state) => ({
  ...state,
}));
