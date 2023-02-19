import { Action } from 'interfaces/action';
import { Carousel } from 'interfaces/carousel';
import { CarouselTypes, FetchCarouselFailedPayload, FetchCarouselSuccessPayload } from 'store/types/carousel';

export const fetchCarousel = (): Action<CarouselTypes.FetchCarousel> => ({
  type: CarouselTypes.FetchCarousel,
  payload: {},
});

export const fetchCarouselSuccess = (
  carousel: Carousel[],
): Action<CarouselTypes.FetchCarouselSuccess, FetchCarouselSuccessPayload> => ({
  type: CarouselTypes.FetchCarouselSuccess,
  payload: { carousel },
});

export const fetchCarouselFailed = (
  error: string,
): Action<CarouselTypes.FetchCarouselFailed, FetchCarouselFailedPayload> => ({
  type: CarouselTypes.FetchCarouselFailed,
  payload: { error },
});
