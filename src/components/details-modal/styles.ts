import { StyleSheet } from 'react-native';
import { DARK, WHITE } from 'styles/variables';

export const styles = StyleSheet.create({
  centeredView: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  modalView: {
    backgroundColor: DARK,
    borderRadius: 20,
    padding: 35,
  },
  image: {
    height: 150,
    width: 200,
    marginBottom: 15,
  },
  title: {
    marginBottom: 15,
    textAlign: 'center',
    fontSize: 24,
    fontFamily: 'Montserrat-Bold',
    color: WHITE,
  },
  description: {
    marginBottom: 15,
    fontSize: 18,
    maxWidth: 200,
    fontFamily: 'Montserrat-Regular',
    color: WHITE,
  },
});
