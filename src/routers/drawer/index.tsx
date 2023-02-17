import { createDrawerNavigator } from '@react-navigation/drawer';
import { AboutScreen } from 'screens/about';
import { BottomTabRouter } from 'routers/bottom-tab';
import { Header } from './header';
import { AppRoutes } from 'constants/app-routes';
import { DrawerContent } from 'routers/drawer/drawer-content';
import { styles } from './drawer-content/styles';
import { useDispatch } from 'react-redux';
import { openModal } from 'store/actions/modal';
import { ModalType } from 'constants/modal-type';
const Drawer = createDrawerNavigator();

export const DrawerRouter = () => {
  const dispatch = useDispatch();

  const handleFilters = (type: ModalType) => () => {
    dispatch(openModal(type));
  };

  return (
    <Drawer.Navigator
      initialRouteName={AppRoutes.Home}
      drawerContent={DrawerContent}
      screenOptions={{
        header: (props) => <Header {...props} handleFilters={handleFilters} />,
        drawerStyle: styles.wrapper,
      }}
    >
      <Drawer.Screen name={AppRoutes.Home} component={BottomTabRouter} />
      <Drawer.Screen name={AppRoutes.About} component={AboutScreen} />
    </Drawer.Navigator>
  );
};
