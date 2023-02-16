import { View, Text, Switch, TextInput } from 'react-native';
import { styles } from './styles';
import { useState, Fragment } from 'react';
import MapView, { MapPressEvent, Marker } from 'react-native-maps';
import { InitialRegion } from 'constants/initial-region';
import { useController } from 'react-hook-form';
import { ControlInput } from 'interfaces/control-input';

export const Address = ({ control, name }: ControlInput) => {
  const { field } = useController({ control, name });
  const [isManually, setIsManually] = useState(false);

  const onToggle = () => {
    setIsManually((prev) => {
      field.onChange(null);

      return !prev;
    });
  };

  const onPressMap = (e: MapPressEvent) => {
    field.onChange(e.nativeEvent.coordinate);
  };

  const onChangeInput = (name: 'longitude' | 'latitude') => (value: string) => {
    field.onChange({ ...field.value, [name]: value });
  };

  return (
    <View style={styles.wrapper}>
      <View style={styles.toggleWrapper}>
        <Text style={styles.toggleText}>{isManually ? 'Manually' : 'By map'}</Text>
        <Switch value={isManually} onChange={onToggle} />
      </View>
      {isManually ? (
        <Fragment>
          <TextInput
            style={styles.input}
            onChangeText={onChangeInput('latitude')}
            keyboardType="numeric"
            placeholderTextColor="#000"
            placeholder="latitude"
          />
          <TextInput
            style={styles.input}
            onChangeText={onChangeInput('longitude')}
            keyboardType="numeric"
            placeholderTextColor="#000"
            placeholder="longitude"
          />
        </Fragment>
      ) : (
        <MapView style={styles.map} initialRegion={InitialRegion} onPress={onPressMap} onPoiClick={() => {}}>
          {field.value && <Marker title="Current marker" coordinate={field.value} />}
        </MapView>
      )}
    </View>
  );
};
