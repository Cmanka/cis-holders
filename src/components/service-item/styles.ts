import {StyleSheet} from 'react-native';

export const styles = StyleSheet.create({
  item: {
    display: 'flex',
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    flex: 1,
    resizeMode: 'cover',
    marginVertical: 10,
    padding: 20,
    backgroundColor: '#6c9a77',
  },
  title: {
    color: '#000',
    fontSize: 20,
  },
  image: {
    height: 40,
    width: 40,
  },
  header: {
    fontSize: 32,
    color: '#000',
    borderColor: '#000',
    borderWidth: 2,
    textAlign: 'center',
  },
});
