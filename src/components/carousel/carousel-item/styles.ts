import { StyleSheet } from 'react-native';
import { CARD, DARK } from 'styles/variables';

export const styles = StyleSheet.create({
  image: {
    flex: 0.7,
    justifyContent: 'center',
  },
  descriptionContainer: {
    flex: 0.3,
  },
  title: {
    fontSize: 32,
    marginBottom: 10,
    color: CARD,
    textAlign: 'center',
    fontFamily: 'Montserrat-Regular',
  },
  description: {
    fontSize: 14,
    marginBottom: 10,
    color: DARK,
    textAlign: 'center',
    fontFamily: 'Montserrat-Regular',
  },
});
