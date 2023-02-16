import { StyleSheet } from 'react-native';
import { CARD, DARK, WHITE } from 'styles/variables';

export const styles = StyleSheet.create({
  item: {
    display: 'flex',
    flexDirection: 'row',
    justifyContent: 'center',
    backgroundColor: CARD,
    marginVertical: 10,
    marginHorizontal: 10,
    paddingVertical: 20,
    paddingHorizontal: 20,
    borderRadius: 20,
  },
  title: {
    color: WHITE,
    fontSize: 20,
    fontFamily: 'Montserrat-Regular',
  },
  header: {
    fontSize: 24,
    color: DARK,
    textAlign: 'center',
    fontFamily: 'Montserrat-ExtraBold',
  },
});
