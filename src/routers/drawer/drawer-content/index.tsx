import { Text, TouchableOpacity } from 'react-native';
import { DrawerContentComponentProps } from '@react-navigation/drawer/src/types';
import { AppRoutes } from 'constants/app-routes';
import { GlobalStyles } from 'styles';

export const DrawerContent = ({ navigation }: DrawerContentComponentProps) => {
  const handleToAbout = () => {
    navigation.navigate(AppRoutes.About);
  };

  return (
    <TouchableOpacity onPress={handleToAbout}>
      <Text style={GlobalStyles.h1}>About</Text>
    </TouchableOpacity>
  );
};
