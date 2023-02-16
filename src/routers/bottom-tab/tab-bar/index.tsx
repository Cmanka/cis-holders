import { styles } from 'routers/bottom-tab/styles';
import { Image, Text, TouchableOpacity, View } from 'react-native';
import addServiceLogo from 'assets/images/plus.png';
import { BottomTabBarProps } from '@react-navigation/bottom-tabs';

const routes = [{ label: 'Services' }, { label: 'Add', logo: addServiceLogo }, { label: 'Map' }];

export const TabBar = ({ navigation }: BottomTabBarProps) => {
  const onNavigate = (name: string) => () => {
    navigation.navigate(name);
  };

  return (
    <View style={styles.navigationWrapper}>
      {routes.map(({ logo, label }) => {
        return (
          <TouchableOpacity key={label} onPress={onNavigate(label)}>
            {logo && <Image source={logo} style={styles.navigationImage} />}
            {!logo && (
              <Text key={label} style={styles.navigationText}>
                {label}
              </Text>
            )}
          </TouchableOpacity>
        );
      })}
    </View>
  );
};
