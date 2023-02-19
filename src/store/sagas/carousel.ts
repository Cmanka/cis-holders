import { QUERY_DELAY } from 'constants/query-delay';
import { Carousel } from 'interfaces/carousel';
import { call, delay, put, takeLatest } from 'redux-saga/effects';
import { carouselInstance } from 'services/carousel';
import { fetchCarouselFailed, fetchCarouselSuccess } from 'store/actions/carousel';
import { CarouselTypes } from 'store/types/carousel';
import { getErrorMessage } from 'utils/helpers/get-error-message';

function* fetchCarouselWorker() {
  try {
    yield delay(QUERY_DELAY);
    const data: Carousel[] = yield call(carouselInstance.getCarousel);
    yield put(fetchCarouselSuccess(data));
  } catch (error) {
    const errorMessage = getErrorMessage(error);

    yield put(fetchCarouselFailed(errorMessage));
  }
}

export function* carouselWatcher() {
  yield takeLatest(CarouselTypes.FetchCarousel, fetchCarouselWorker);
}
