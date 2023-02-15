import { createStackNavigator } from '@react-navigation/stack';
import { BottomTabRouter } from 'routers/bottom-tab';
import { DrawerRouter } from 'routers/drawer';

const Stack = createStackNavigator();

export const StackRouter = () => {
  return (
    <Stack.Navigator>
      <Stack.Screen name="Home" component={BottomTabRouter} />
      <Stack.Screen name="About" component={DrawerRouter} />
    </Stack.Navigator>
  );
};
