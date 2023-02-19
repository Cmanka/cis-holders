import { useEffect } from 'react';
import { ActivityIndicator, Text, View } from 'react-native';
import { useDispatch, useSelector } from 'react-redux';
import { fetchCarousel } from 'store/actions/carousel';
import { selectCarousel } from 'store/selectors/carousel';
import { GlobalStyles } from 'styles';
import { DARK } from 'styles/variables';

import { Carousel } from 'components/carousel';

export const AboutScreen = () => {
  const dispatch = useDispatch();
  const { data, loading } = useSelector(selectCarousel);

  useEffect(() => {
    dispatch(fetchCarousel());
  }, [dispatch]);

  if (loading) {
    return (
      <View style={GlobalStyles.loader}>
        <ActivityIndicator size="large" color={DARK} />
      </View>
    );
  }

  if (!data.length) {
    return (
      <View style={GlobalStyles.container}>
        <Text style={[GlobalStyles.h1, { color: DARK }]}>Carousel is empty</Text>
      </View>
    );
  }

  return (
    <>
      <Carousel data={data} />
    </>
  );
};
