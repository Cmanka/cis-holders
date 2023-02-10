import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';
import {ServicesScreen} from 'screens/services';
import {MapScreen} from 'screens/map';
import {AddServiceScreen} from 'screens/add-service';
import {Image, Text, TouchableOpacity, View} from 'react-native';
import servicesLogo from 'assets/services.png';
import addServiceLogo from 'assets/add-service.png';
import mapLogo from 'assets/map.png';
import menu from 'assets/menu.png';

const Tab = createBottomTabNavigator();

const routes = [
  {label: 'Services', logo: servicesLogo},
  {label: 'Add', logo: addServiceLogo, withoutLabel: true},
  {label: 'Map', logo: mapLogo},
];

export const BottomTabRouter = () => {
  return (
    <Tab.Navigator
      initialRouteName="Home"
      screenOptions={{headerShown: false}}
      tabBar={({navigation}) => {
        const onNavigate = (name: string) => () => {
          navigation.navigate(name);
        };

        return (
          <View
            style={{
              borderWidth: 2,
              borderColor: '#000',
              margin: 15,
              padding: 5,
              display: 'flex',
              flexDirection: 'row',
              justifyContent: 'space-between',
              alignItems: 'center',
            }}>
            {routes.map(({logo, label, withoutLabel}) => {
              if (withoutLabel) {
                return (
                  <TouchableOpacity key={label} onPress={onNavigate(label)}>
                    <Image source={logo} style={{width: 20, height: 20}} />
                  </TouchableOpacity>
                );
              }

              return (
                <TouchableOpacity
                  key={label}
                  onPress={onNavigate(label)}
                  style={{display: 'flex', alignItems: 'center'}}>
                  <Image source={logo} style={{width: 20, height: 20}} />
                  <Text
                    key={label}
                    style={{
                      color: '#000',
                    }}>
                    {label}
                  </Text>
                </TouchableOpacity>
              );
            })}
          </View>
        );
      }}>
      <Tab.Screen name="Services" component={ServicesScreen} />
      <Tab.Screen name="Add" component={AddServiceScreen} />
      <Tab.Screen name="Map" component={MapScreen} />
    </Tab.Navigator>
  );
};
