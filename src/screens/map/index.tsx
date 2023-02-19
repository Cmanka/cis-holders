import { Text, View } from 'react-native';
import MapView, { Marker } from 'react-native-maps';
import { useSelector } from 'react-redux';
import { InitialRegion } from 'constants/initial-region';
import { ModalType } from 'constants/modal-type';
import { Service } from 'interfaces/service';
import { selectFilteredServices } from 'store/selectors/service';
import { GlobalStyles } from 'styles';
import { BrTag } from 'styles/variables';
import { withFilters } from 'utils/hocs/with-filters';
import { useModal } from 'utils/hooks/use-modal';

import { DetailsModal } from 'components/details-modal';

import { styles } from './styles';

export const MapScreen = withFilters(() => {
  const { markers, filter } = useSelector(selectFilteredServices);
  const { handleOpen, handleClose, type, open, data } = useModal(ModalType.Details);

  const onPressMarker = (service: Service) => () => {
    handleOpen(service);
  };

  return (
    <View style={styles.wrapper}>
      <Text style={GlobalStyles.p}>
        On this page you can take a look at the points created {BrTag} (markers: {markers.length}
        {filter ? `, type:${filter}` : ''})
      </Text>
      {type === ModalType.Details && <DetailsModal open={open} handleClose={handleClose} service={data as Service} />}
      <View style={styles.mapWrapper}>
        <MapView style={styles.map} initialRegion={InitialRegion}>
          {markers.map(({ id, coordinates, ...data }) => (
            <Marker onPress={onPressMarker({ ...data, coordinates, id })} key={id} coordinate={coordinates} />
          ))}
        </MapView>
      </View>
    </View>
  );
});
