import { Provider } from 'react-redux';
import { NavigationContainer } from '@react-navigation/native';
import { Router } from 'routers';
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
