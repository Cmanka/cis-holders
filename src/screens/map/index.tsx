import { View } from 'react-native';
import MapView, { Marker } from 'react-native-maps';
import { useSelector } from 'react-redux';
import { selectService } from 'store/selectors/service';
import { styles } from './styles';
import { InitialRegion } from 'constants/initial-region';

export const MapScreen = () => {
  const { data } = useSelector(selectService);
  return (
    <View style={styles.wrapper}>
      <MapView style={styles.map} initialRegion={InitialRegion}>
        {data.map(({ id, title, coordinates }) => (
          <Marker key={id} title={title} coordinate={coordinates} />
        ))}
      </MapView>
    </View>
  );
};
