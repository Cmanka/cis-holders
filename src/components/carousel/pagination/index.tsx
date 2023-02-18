import { View, Animated, useWindowDimensions } from 'react-native';
import { styles } from './styles';
import { PaginationProps } from './types';

export const Pagination = ({ data, scrollX }: PaginationProps) => {
  const { width } = useWindowDimensions();
  return (
    <View style={styles.container}>
      {data.map(({ id }, i) => {
        const inputRange = [(i - 1) * width, i * width, (i + 1) * width];

        const dotWidth = scrollX.interpolate({
          inputRange,
          outputRange: [10, 20, 10],
          extrapolate: 'clamp',
        });

        const opacity = scrollX.interpolate({
          inputRange,
          outputRange: [0.3, 1, 0.3],
          extrapolate: 'clamp',
        });

        return <Animated.View key={id} style={[styles.dot, { width: dotWidth, opacity }]} />;
      })}
    </View>
  );
};
