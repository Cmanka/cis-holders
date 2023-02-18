import { StyleSheet } from 'react-native';
import { WHITE, DARK, ERROR } from 'styles/variables';

export const GlobalStyles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  h1: {
    fontSize: 30,
    color: WHITE,
    fontFamily: 'Montserrat-Bold',
  },
  p: {
    fontSize: 18,
    textAlign: 'center',
    marginVertical: 10,
    marginHorizontal: 10,
    color: DARK,
    fontFamily: 'Montserrat-Regular',
  },
  map: {
    borderWidth: 2,
    borderColor: DARK,
    borderRadius: 20,
    overflow: 'hidden',
  },
  error: {
    fontSize: 14,
    marginVertical: 5,
    color: ERROR,
    fontFamily: 'Montserrat-Medium',
  },
  input: {
    fontSize: 18,
    fontFamily: 'Montserrat-Medium',
    borderRadius: 10,
    borderColor: DARK,
    borderWidth: 2,
    paddingHorizontal: 20,
    color: DARK,
  },
  loader: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: WHITE,
  },
});
