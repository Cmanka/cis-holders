import { StyleSheet } from 'react-native';
import { DARK } from 'styles/variables';
import { GlobalStyles } from 'styles';

export const styles = StyleSheet.create({
  wrapper: {
    paddingLeft: 20,
    paddingTop: 20,
    backgroundColor: DARK,
  },
  text: {
    ...GlobalStyles.h1,
  },
});
