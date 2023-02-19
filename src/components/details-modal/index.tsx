import { Image, Modal, Text, View } from 'react-native';

import { Button } from 'components/button';

import { styles } from './styles';
import { DetailsModalProps } from './types';

export const DetailsModal = ({ handleClose, open, service }: DetailsModalProps) => {
  if (!open) {
    return null;
  }

  return (
    <Modal transparent animationType="fade" visible={open} onRequestClose={handleClose}>
      <View style={styles.centeredView}>
        <View style={styles.modalView}>
          <Text style={styles.title}>{service.title}</Text>
          <Image style={styles.image} source={{ uri: service.imageUri }} />
          <Text style={styles.description}>Type:{service.type}</Text>
          <Text style={styles.description}>Description:{service.description}</Text>
          <Button label="Close" theme="light" onPress={handleClose} />
        </View>
      </View>
    </Modal>
  );
};
