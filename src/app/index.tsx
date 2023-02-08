import React from 'react';
import {Text, View} from 'react-native';
import {GlobalStyles} from './styles';

export const App = () => {
  return (
    <View style={GlobalStyles.container}>
      <Text>Hello World!</Text>
    </View>
  );
};
