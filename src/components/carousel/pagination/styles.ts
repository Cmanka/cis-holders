import { StyleSheet } from 'react-native';
import { DARK } from 'styles/variables';

export const styles = StyleSheet.create({
  container: {
    flexDirection: 'row',
    height: 64,
  },
  dot: {
    height: 10,
    borderRadius: 5,
    backgroundColor: DARK,
    marginHorizontal: 8,
  },
});
