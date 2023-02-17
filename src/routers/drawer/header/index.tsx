import { Image, Text, TouchableOpacity, View } from 'react-native';
import { styles } from './styles';
import { GlobalStyles } from 'styles';
import { AppRoutes } from 'constants/app-routes';
import menu from 'assets/images/burger-menu.png';
import arrow from 'assets/images/arrow.png';
import filters from 'assets/images/filters.png';
import sort from 'assets/images/sort.png';
import { ImageSourcePropType } from 'react-native/Libraries/Image/Image';
import { HeaderProps } from './types';
import { ModalType } from 'constants/modal-type';

const textFromRoute: Record<AppRoutes, string> = {
  [AppRoutes.Home]: AppRoutes.Services,
  [AppRoutes.Add]: 'Add Service',
  [AppRoutes.Services]: AppRoutes.Services,
  [AppRoutes.Map]: 'Services map',
  [AppRoutes.About]: AppRoutes.About,
};

const iconFromRoute: Record<string, ImageSourcePropType> = {
  [AppRoutes.Home]: menu,
  [AppRoutes.About]: arrow,
};

const filterRoutes: string[] = [AppRoutes.Home, AppRoutes.Map];

export const Header = ({ navigation, route, handleFilters }: HeaderProps) => {
  const state = navigation.getState().routes[0].state;
  const routeName = state?.index && route.name !== AppRoutes.About ? state.routes[state.index].name : route.name;
  const showFilters = filterRoutes.includes(routeName);

  const handleHeaderIcon = () => {
    if (route.name === AppRoutes.Home) {
      navigation.openDrawer();
    }
    if (route.name === AppRoutes.About) {
      navigation.navigate(AppRoutes.Home);
    }
  };

  return (
    <View style={styles.headerWrapper}>
      <TouchableOpacity style={styles.menu} onPress={handleHeaderIcon}>
        <Image source={iconFromRoute[route.name]} style={styles.menu} />
      </TouchableOpacity>
      <Text style={GlobalStyles.h1}>{textFromRoute[routeName as AppRoutes]}</Text>
      <View style={styles.filters}>
        {showFilters && (
          <>
            <TouchableOpacity onPress={handleFilters(ModalType.Sort)}>
              <Image source={sort} style={styles.filtersIcon} />
            </TouchableOpacity>
            <TouchableOpacity onPress={handleFilters(ModalType.Filters)}>
              <Image source={filters} style={styles.filtersIcon} />
            </TouchableOpacity>
          </>
        )}
      </View>
    </View>
  );
};
