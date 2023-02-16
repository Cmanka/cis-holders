import { StyleSheet } from 'react-native';
import { DARK, WHITE } from 'styles/variables';

export const styles = StyleSheet.create({
  wrapper: {
    borderRadius: 10,
    borderColor: DARK,
    borderWidth: 1,
  },
  text: {
    fontSize: 18,
    fontFamily: 'Montserrat-Medium',
    color: DARK,
    paddingLeft: 10,
  },
  picker: {
    backgroundColor: WHITE,
    borderRadius: 10,
    borderColor: DARK,
    borderWidth: 2,
  },
  placeholder: {
    paddingLeft: 10,
  },
});
