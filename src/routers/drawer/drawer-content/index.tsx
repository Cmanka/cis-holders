import { Text, TouchableOpacity } from 'react-native';
import { GlobalStyles } from 'styles';
import { DrawerContentComponentProps } from '@react-navigation/drawer/src/types';
import { AppRoutes } from 'constants/app-routes';

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
