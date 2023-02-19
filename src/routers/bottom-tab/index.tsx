import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { AppRoutes } from 'constants/app-routes';
import { TabBar } from 'routers/bottom-tab/tab-bar';
import { AddServiceScreen } from 'screens/add-service';
import { MapScreen } from 'screens/map';
import { ServicesScreen } from 'screens/services';

const Tab = createBottomTabNavigator();

export const BottomTabRouter = () => {
  return (
    <Tab.Navigator initialRouteName={AppRoutes.Services} screenOptions={{ headerShown: false }} tabBar={TabBar}>
      <Tab.Screen name={AppRoutes.Services} component={ServicesScreen} />
      <Tab.Screen name={AppRoutes.Add} component={AddServiceScreen} />
      <Tab.Screen name={AppRoutes.Map} component={MapScreen} />
    </Tab.Navigator>
  );
};
