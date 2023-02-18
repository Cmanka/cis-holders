import { Animated } from 'react-native';
import { Carousel } from 'interfaces/carousel';

export interface PaginationProps {
  data: Carousel[];
  scrollX: Animated.Value;
}
