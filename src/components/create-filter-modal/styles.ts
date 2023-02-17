import { StyleSheet } from 'react-native';
import { DARK, WHITE } from 'styles/variables';

export const styles = StyleSheet.create({
  centeredView: {
    backgroundColor: DARK,
    borderTopRightRadius: 20,
    borderTopLeftRadius: 20,
    height: '25%',
    width: '100%',
    position: 'absolute',
    bottom: 0,
    left: 0,
    justifyContent: 'space-between',
    alignItems: 'center',
  },
  text: {
    fontSize: 18,
    fontFamily: 'Montserrat-Bold',
    color: WHITE,
  },
  filters: {
    paddingTop: 20,
    flexDirection: 'row',
    gap: 30,
  },
  button: {
    width: '100%',
  },
  clear: {},
});
