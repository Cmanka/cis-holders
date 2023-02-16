import { Image, Modal, Pressable, Text, View } from 'react-native';
import { styles } from './styles';
import { DetailsModalProps } from './types';

export const DetailsModal = ({ handleClose, open, service }: DetailsModalProps) => {
  if (!open) {
    return null;
  }

  return (
    <Modal transparent={true} visible={open} onRequestClose={handleClose}>
      <View style={styles.centeredView}>
        <View style={styles.modalView}>
          <Text style={styles.modalText}>
            {service.type}: {service.title}
          </Text>
          <Image style={styles.image} source={{ uri: service.imageUri }} />
          <Text style={styles.modalText}>{service.description}</Text>
          <Pressable style={[styles.button, styles.buttonClose]} onPress={handleClose}>
            <Text style={styles.textStyle}>Hide Modal</Text>
          </Pressable>
        </View>
      </View>
    </Modal>
  );
};
