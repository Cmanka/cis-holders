import { Alert, Image, PermissionsAndroid, Text, TouchableOpacity } from 'react-native';
import { styles } from './styles';
import { launchCamera } from 'react-native-image-picker';
import { getCameraPermission } from 'utils/helpers/get-camera-permession';
import { useController } from 'react-hook-form';
import { ControlInput } from 'interfaces/control-input';

export const Attachment = ({ control, name }: ControlInput) => {
  const { field } = useController({ control, name, rules: { required: "You didn't attach a photo" } });

  const onAddAtach = async () => {
    const granted = await getCameraPermission();

    if (granted === PermissionsAndroid.RESULTS.GRANTED) {
      const { assets } = await launchCamera({
        cameraType: 'back',
        mediaType: 'photo',
      });

      if (assets?.length && assets[0]?.uri) {
        const { uri } = assets[0];
        field.onChange(uri);
      }
    } else {
      Alert.alert('Camera permission denied');
    }
  };

  return (
    <TouchableOpacity onPress={onAddAtach} style={styles.wrapper}>
      <Text style={styles.text}>{field.value ? '+ Change attacment' : '+ Add attachment'}</Text>
      {field.value && <Image source={{ uri: field.value }} style={styles.image} />}
    </TouchableOpacity>
  );
};
