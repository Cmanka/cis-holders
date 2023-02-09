import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';
import {ServicesScreen} from 'screens/services';
import {MapScreen} from 'screens/map';
import {AddServiceScreen} from 'screens/add-service';

const Tab = createBottomTabNavigator();

export const BottomTabRouter = () => {
  return (
    <Tab.Navigator initialRouteName="Home" screenOptions={{headerShown: false}}>
      <Tab.Screen name="Services" component={ServicesScreen} />
      <Tab.Screen name="Add" component={AddServiceScreen} />
      <Tab.Screen name="Map" component={MapScreen} />
    </Tab.Navigator>
  );
};
