import {createDrawerNavigator} from '@react-navigation/drawer';
import {AboutScreen} from 'screens/about';
import {BottomTabRouter} from 'routers/bottom-tab';
import {TouchableOpacity, Image, Text, View} from 'react-native';
import menu from 'assets/menu.png';

const Drawer = createDrawerNavigator();

export const DrawerRouter = () => {
  return (
    <Drawer.Navigator
      initialRouteName="Home"
      screenOptions={{
        header: ({navigation, route}) => {
          const state = navigation.getState().routes[0].state;
          const routeName = state?.index
            ? state.routes[state.index].name
            : route.name;

          const openDrawer = () => {
            navigation.openDrawer();
          };

          return (
            <View
              style={{
                borderWidth: 2,
                borderColor: '#000',
                margin: 15,
                padding: 10,
                display: 'flex',
                flexDirection: 'row',
                alignItems: 'center',
                justifyContent: 'center',
              }}>
              <TouchableOpacity onPress={openDrawer}>
                <Image source={menu} style={{width: 20, height: 20}} />
              </TouchableOpacity>
              <Text
                style={{
                  color: '#000',
                  fontSize: 30,
                  width: '90%',
                  textAlign: 'center',
                }}>
                {routeName}
              </Text>
            </View>
          );
        },
      }}>
      <Drawer.Screen name="Home" component={BottomTabRouter} />
      <Drawer.Screen name="About" component={AboutScreen} />
    </Drawer.Navigator>
  );
};
