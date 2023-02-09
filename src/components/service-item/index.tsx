import {Image, Text, View} from 'react-native';
import {ServiceItemHeaderProps, ServiceItemProps} from './types';
import {styles} from './styles';
const ServiceItem = ({service, logo}: ServiceItemProps) => {
  return (
    <View style={styles.item}>
      <Text style={styles.title}>{service}</Text>
      <Image source={logo} style={styles.image} />
    </View>
  );
};

const ServiceItemHeader = ({title}: ServiceItemHeaderProps) => {
  return <Text style={styles.header}>{title}</Text>;
};

export {ServiceItem, ServiceItemHeader};
