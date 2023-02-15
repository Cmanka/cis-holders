import {Image, Text, View} from 'react-native';
import {ServiceItemHeaderProps, ServiceItemProps} from './types';
import {styles} from './styles';
const ServiceItem = ({title, imageUri}: ServiceItemProps) => {
  return (
    <View style={styles.item}>
      <Text style={styles.title}>{title}</Text>
      <Image source={{uri: imageUri}} style={styles.image} />
    </View>
  );
};

const ServiceItemHeader = ({title}: ServiceItemHeaderProps) => {
  return <Text style={styles.header}>{title}</Text>;
};

export {ServiceItem, ServiceItemHeader};
