import { StyleSheet } from 'react-native';
import { DARK } from 'styles/variables';

export const styles = StyleSheet.create({
  headerWrapper: {
    padding: 10,
    display: 'flex',
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    backgroundColor: DARK,
  },
  menu: {
    height: 30,
    width: 30,
  },
  filters: {
    flexDirection: 'row',
    gap: 10,
  },
  filtersIcon: {
    height: 25,
    width: 25,
  },
});
