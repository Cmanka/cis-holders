import { StyleSheet } from 'react-native';
import { DARK, WHITE } from 'styles/variables';

export const styles = StyleSheet.create({
  navigationWrapper: {
    paddingVertical: 15,
    paddingHorizontal: 20,
    display: 'flex',
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    backgroundColor: DARK,
    borderTopRightRadius: 10,
    borderTopLeftRadius: 10,
  },
  navigationText: {
    fontSize: 18,
    color: WHITE,
    fontFamily: 'Montserrat-Regular',
  },
  navigationImage: {
    height: 30,
    width: 30,
  },
});
