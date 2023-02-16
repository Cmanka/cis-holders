import { createDrawerNavigator } from '@react-navigation/drawer';
import { AboutScreen } from 'screens/about';
import { BottomTabRouter } from 'routers/bottom-tab';
import { Header } from './header';
import { AppRoutes } from 'constants/app-routes';
import { DrawerContent } from 'routers/drawer/drawer-content';
import { styles } from './drawer-content/styles';
const Drawer = createDrawerNavigator();

export const DrawerRouter = () => {
  return (
    <Drawer.Navigator
      initialRouteName={AppRoutes.Home}
      drawerContent={DrawerContent}
      screenOptions={{
        header: Header,
        drawerStyle: styles.wrapper,
      }}
    >
      <Drawer.Screen name={AppRoutes.Home} component={BottomTabRouter} />
      <Drawer.Screen name={AppRoutes.About} component={AboutScreen} />
    </Drawer.Navigator>
  );
};
