import { Alert, Image, PermissionsAndroid, Text, TouchableOpacity } from 'react-native';
import { styles } from './styles';
import { launchCamera } from 'react-native-image-picker';
import { getCameraPermission } from 'lib/get-camera-permession';
import { AttachmentProps } from 'components/attachment/types';
import { useController } from 'react-hook-form';

export const Attachment = ({ name, control }: AttachmentProps) => {
  const { field } = useController({ control, name, defaultValue: '' });

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
      <Text style={styles.text}>+ Add attach</Text>
      {field.value && <Image source={{ uri: field.value }} style={{ width: '100%', height: 300 }} />}
    </TouchableOpacity>
  );
};
