import { Animated, FlatList, View } from 'react-native';
import { GlobalStyles } from 'styles';
import { CarouselItem } from './carousel-item';
import { Pagination } from './pagination';
import { useRef, useState } from 'react';
import { ViewableItemsChanged, CarouselProps } from './types';

export const Carousel = ({ data }: CarouselProps) => {
  const [, setCurrentIndex] = useState(0);
  const scrollX = useRef(new Animated.Value(0)).current;
  const sliderRef = useRef(null);

  const viewableItemsChanged = useRef<(options: ViewableItemsChanged) => void>(({ viewableItems }) => {
    setCurrentIndex(Number(viewableItems[0].index));
  }).current;

  const viewConfig = useRef({ viewAreaCoveragePercentThreshold: 50 }).current;

  return (
    <View style={GlobalStyles.container}>
      <FlatList
        data={data}
        renderItem={(item) => <CarouselItem {...item.item} />}
        horizontal
        showsHorizontalScrollIndicator={false}
        pagingEnabled
        bounces={false}
        keyExtractor={({ id }) => id}
        onScroll={Animated.event([{ nativeEvent: { contentOffset: { x: scrollX } } }], { useNativeDriver: false })}
        onViewableItemsChanged={viewableItemsChanged}
        viewabilityConfig={viewConfig}
        scrollEventThrottle={32}
        ref={sliderRef}
      />
      <Pagination data={data} scrollX={scrollX} />
    </View>
  );
};
