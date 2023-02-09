import React from 'react';
import {NavigationContainer} from '@react-navigation/native';
import {DrawerRouter} from 'routers/drawer';

export const App = () => {
  return (
    <NavigationContainer>
      <DrawerRouter />
    </NavigationContainer>
  );
};
