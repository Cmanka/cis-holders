import { Image, Text, useWindowDimensions, View } from 'react-native';
import { GlobalStyles } from 'styles';
import { styles } from './styles';
import { Carousel } from 'interfaces/carousel';
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
