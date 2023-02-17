import { StyleSheet } from 'react-native';
import { WHITE } from 'styles/variables';
import { GlobalStyles } from 'styles';

export const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: WHITE,
    marginVertical: 10,
  },
  emptyWrapper: {
    flex: 1,
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
  },
  emptyText: {
    ...GlobalStyles.p,
    fontSize: 32,
  },
});
