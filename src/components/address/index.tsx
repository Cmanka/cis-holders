import { View, Text, Switch, TextInput } from 'react-native';
import { styles } from './styles';
import { useState } from 'react';
import MapView, { MapPressEvent, Marker } from 'react-native-maps';
import { InitialRegion } from 'constants/initial-region';
import { useController } from 'react-hook-form';
import { ControlInput } from 'interfaces/control-input';
import { GlobalStyles } from 'styles';
import { BrTag, DARK, LIGHT_DARK, WHITE } from 'styles/variables';

export const Address = ({ control, name }: ControlInput) => {
  const { field } = useController({ control, name, rules: { required: `You didn't choice ${name}` } });
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
    <View>
      <View style={styles.toggleWrapper}>
        <Switch
          value={isManually}
          onChange={onToggle}
          trackColor={{ false: LIGHT_DARK, true: DARK }}
          thumbColor={isManually ? WHITE : WHITE}
        />
        <Text style={GlobalStyles.p}>
          Choose coordinates {BrTag} {isManually ? 'manually' : 'by map'}
        </Text>
      </View>
      {isManually ? (
        <>
          <TextInput
            style={GlobalStyles.input}
            onChangeText={onChangeInput('latitude')}
            keyboardType="numeric"
            placeholderTextColor="#000"
            placeholder="latitude"
          />
          <View style={styles.margin} />
          <TextInput
            style={GlobalStyles.input}
            onChangeText={onChangeInput('longitude')}
            keyboardType="numeric"
            placeholderTextColor="#000"
            placeholder="longitude"
          />
        </>
      ) : (
        <View style={GlobalStyles.map}>
          <MapView style={styles.map} initialRegion={InitialRegion} onPress={onPressMap} onPoiClick={() => {}}>
            {field.value && <Marker coordinate={field.value} />}
          </MapView>
        </View>
      )}
    </View>
  );
};
