import { Image, Text, useWindowDimensions, View } from 'react-native';
import { Carousel } from 'interfaces/carousel';
import { GlobalStyles } from 'styles';

import { styles } from './styles';
export const CarouselItem = ({ image, title, description }: Carousel) => {
  const { width } = useWindowDimensions();
  return (
    <View style={[GlobalStyles.container, { width }]}>
      <Image source={{ uri: image }} style={[styles.image, { width }]} />
      <View style={styles.descriptionContainer}>
        <Text style={styles.title}>{title}</Text>
        <Text style={styles.description}>{description}</Text>
      </View>
    </View>
  );
};
