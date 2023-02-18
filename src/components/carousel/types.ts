import { ViewToken } from 'react-native/Libraries/Lists/VirtualizedList';
import { Carousel } from 'interfaces/carousel';

export interface CarouselProps {
  data: Carousel[];
}

export interface ViewableItemsChanged {
  viewableItems: ViewToken[];
  changed: ViewToken[];
}
