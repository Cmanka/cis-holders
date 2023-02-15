import { NavigationContainer } from '@react-navigation/native';
import { Router } from 'routers';
import { Provider } from 'react-redux';
import { store } from 'store';

export const App = () => {
  return (
    <Provider store={store}>
      <NavigationContainer>
        <Router />
      </NavigationContainer>
    </Provider>
  );
};
