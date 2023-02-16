import { StyleSheet } from 'react-native';
import { DARK } from 'styles/variables';

export const styles = StyleSheet.create({
  wrapper: {
    borderWidth: 2,
    borderColor: DARK,
    borderRadius: 10,
    paddingTop: 10,
  },
  text: {
    fontSize: 18,
    fontFamily: 'Montserrat-Medium',
    color: DARK,
    textAlign: 'center',
    marginBottom: 10,
  },
  image: {
    width: '100%',
    height: 250,
  },
});
