import { Carousel } from 'interfaces/carousel';
import { CarouselAction, CarouselTypes } from 'store/types/carousel';

interface CarouselState {
  data: Carousel[];
  error: string;
  loading: boolean;
}

const initialState: CarouselState = {
  data: [],
  error: '',
  loading: false,
};

export const carouselReducer = (state: CarouselState = initialState, action: CarouselAction): CarouselState => {
  switch (action.type) {
    case CarouselTypes.FetchCarousel: {
      return { ...state, loading: true };
    }
    case CarouselTypes.FetchCarouselSuccess: {
      return {
        ...state,
        loading: false,
        error: '',
        data: action.payload.carousel,
      };
    }
    case CarouselTypes.FetchCarouselFailed: {
      return { ...state, loading: false, error: action.payload.error };
    }
    default: {
      return state;
    }
  }
};
