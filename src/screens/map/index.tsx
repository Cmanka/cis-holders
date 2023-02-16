import { Text, View } from 'react-native';
import MapView, { Marker } from 'react-native-maps';
import { useSelector } from 'react-redux';
import { selectService } from 'store/selectors/service';
import { styles } from './styles';
import { InitialRegion } from 'constants/initial-region';
import { Service } from 'interfaces/service';
import { useModal } from 'utils/hooks/use-modal';
import { DetailsModal } from 'components/details-modal';
import { GlobalStyles } from 'styles';

export const MapScreen = () => {
  const { data: markers } = useSelector(selectService);
  const { handleOpen, handleClose, open, data } = useModal();

  const onPressMarker = (service: Service) => () => {
    handleOpen(service);
  };

  return (
    <View style={styles.wrapper}>
      <Text style={GlobalStyles.p}>On this page you can take a look at the points created</Text>
      <DetailsModal open={open} handleClose={handleClose} service={data as Service} />
      <View style={styles.mapWrapper}>
        <MapView style={styles.map} initialRegion={InitialRegion}>
          {markers.map(({ id, coordinates, ...data }) => (
            <Marker onPress={onPressMarker({ ...data, coordinates, id })} key={id} coordinate={coordinates} />
          ))}
        </MapView>
      </View>
    </View>
  );
};
