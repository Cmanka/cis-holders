import { StyleSheet } from 'react-native';
import { DARK, WHITE } from 'styles/variables';

export const styles = StyleSheet.create({
  button: {
    alignItems: 'center',
    justifyContent: 'center',
    paddingVertical: 15,
    paddingHorizontal: 30,
    borderRadius: 5,
    elevation: 5,
    backgroundColor: DARK,
    zIndex: 1,
  },
  text: {
    fontSize: 16,
    color: WHITE,
    fontFamily: 'Montserrat-Bold',
  },
});
