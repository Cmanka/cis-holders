import { Text, View } from 'react-native';
import { ServiceItemHeaderProps, ServiceItemProps } from './types';
import { styles } from './styles';
const ServiceItem = ({ title }: ServiceItemProps) => {
  return (
    <View style={styles.item}>
      <Text style={styles.title}>{title}</Text>
    </View>
  );
};

const ServiceItemHeader = ({ title }: ServiceItemHeaderProps) => {
  return <Text style={styles.header}>{title}</Text>;
};

export { ServiceItem, ServiceItemHeader };
