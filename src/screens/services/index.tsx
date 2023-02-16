import { ActivityIndicator, SafeAreaView, SectionList, View, Text } from 'react-native';
import { ServiceItem, ServiceItemHeader } from 'components/service-item';
import { styles } from './styles';
import { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { fetchService } from 'store/actions/service';
import { selectServiceSectionList } from 'store/selectors/service';
import { DARK } from 'styles/variables';
import { GlobalStyles } from 'styles';

export const ServicesScreen = () => {
  const dispatch = useDispatch();
  const { data, loading } = useSelector(selectServiceSectionList);

  useEffect(() => {
    dispatch(fetchService());
  }, [dispatch]);

  if (loading) {
    return (
      <View style={styles.loader}>
        <ActivityIndicator size="large" color={DARK} />
      </View>
    );
  }

  if (!data.length) {
    return (
      <View style={styles.emptyWrapper}>
        <Text style={styles.emptyText}>List is empty</Text>
      </View>
    );
  }

  return (
    <SafeAreaView style={styles.container}>
      <Text style={GlobalStyles.p}>All the services we could find</Text>
      <SectionList
        sections={data}
        keyExtractor={({ id }) => id}
        renderItem={({ item: { title } }) => <ServiceItem title={title} />}
        renderSectionHeader={({ section: { type } }) => <ServiceItemHeader title={type} />}
      />
    </SafeAreaView>
  );
};
