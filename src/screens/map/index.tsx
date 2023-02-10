import {View} from 'react-native';
import MapView, {Marker} from 'react-native-maps';

export const MapScreen = () => {
  return (
    <View style={{flex: 1}}>
      <MapView
        style={{height: '100%'}}
        initialRegion={{
          latitude: 55.1939784,
          longitude: 30.1948941,
          latitudeDelta: 0.0922,
          longitudeDelta: 0.0421,
        }}>
        <Marker
          coordinate={{latitude: 55.1939784, longitude: 30.1948941}}
          title="bebra"
        />
      </MapView>
    </View>
  );
};
