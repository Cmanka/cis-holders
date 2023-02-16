import { StyleSheet } from 'react-native';
import { GlobalStyles } from 'styles';

export const styles = StyleSheet.create({
  wrapper: {
    flex: 1,
  },
  mapWrapper: {
    flex: 1,
    marginBottom: 20,
    marginHorizontal: 20,
    ...GlobalStyles.map,
  },
  map: {
    flex: 1,
  },
});
