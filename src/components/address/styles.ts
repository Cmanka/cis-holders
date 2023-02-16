import { StyleSheet } from 'react-native';

export const styles = StyleSheet.create({
  wrapper: {
    display: 'flex',
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    borderWidth: 2,
    borderColor: '#000',
    padding: 20,
  },
  text: {
    color: '#000',
  },
  map: {
    height: 200,
    width: 200,
  },
  toggleWrapper: {
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
    justifyContent: 'center',
  },
  toggleText: {
    color: '#000',
  },
  input: {
    borderColor: '#000',
    borderWidth: 2,
    color: '#000',
  },
});
