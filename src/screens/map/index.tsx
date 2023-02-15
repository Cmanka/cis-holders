import {View} from 'react-native';
import MapView, {Marker} from 'react-native-maps';

const points = [
  {
    title: 'Point 1',
    latitude: 55.1939784,
    longitude: 30.1948941,
  },
  {
    title: 'Point 2',
    latitude: 55.2939784,
    longitude: 30.1948941,
  },
];

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
        {points.map(({title, ...coordinates}) => (
          <Marker key={title} title={title} coordinate={coordinates} />
        ))}
      </MapView>
    </View>
  );
};
