import {createDrawerNavigator} from '@react-navigation/drawer';
import {BottomTabRouter} from '../bottom-tab';
import {AboutScreen} from '../../screens/about';

const Drawer = createDrawerNavigator();

export const DrawerRouter = () => {
  return (
    <Drawer.Navigator>
      <Drawer.Screen name="TabRouter" component={BottomTabRouter} />
      <Drawer.Screen name="About" component={AboutScreen} />
    </Drawer.Navigator>
  );
};
