import { Action } from 'interfaces/action';
import { Carousel } from 'interfaces/carousel';

export enum CarouselTypes {
  FetchCarousel = 'FETCH_CAROUSEL',
  FetchCarouselSuccess = 'FETCH_CAROUSEL_SUCCESS',
  FetchCarouselFailed = 'FETCH_CAROUSEL_FAILED',
}

export interface FetchCarouselSuccessPayload {
  carousel: Carousel[];
}

export interface FetchCarouselFailedPayload {
  error: string;
}

export type CarouselAction =
  | Action<CarouselTypes.FetchCarousel>
  | Action<CarouselTypes.FetchCarouselSuccess, FetchCarouselSuccessPayload>
  | Action<CarouselTypes.FetchCarouselFailed, FetchCarouselFailedPayload>;
