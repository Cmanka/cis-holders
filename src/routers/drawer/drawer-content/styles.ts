import { StyleSheet } from 'react-native';
import { GlobalStyles } from 'styles';
import { DARK } from 'styles/variables';

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
