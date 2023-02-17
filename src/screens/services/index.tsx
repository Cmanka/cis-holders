import { SafeAreaView, SectionList, Text, View } from 'react-native';
import { ServiceItem, ServiceItemHeader } from 'components/service-item';
import { styles } from './styles';
import { useDispatch, useSelector } from 'react-redux';
import { clearServices } from 'store/actions/service';
import { selectServiceSectionList } from 'store/selectors/service';
import { GlobalStyles } from 'styles';
import { Button } from 'components/button';
import { clearStorage } from 'store/actions/async-storage';
import { withFilters } from 'utils/hocs/with-filters';

export const ServicesScreen = withFilters(() => {
  const dispatch = useDispatch();
  const { data, filter } = useSelector(selectServiceSectionList);

  const handleClear = () => {
    dispatch(clearServices());
    dispatch(clearStorage());
  };

  if (!data.length) {
    return (
      <View style={styles.emptyWrapper}>
        <Text style={styles.emptyText}>{filter ? `No matches by ${filter}` : 'List is empty'}</Text>
        {filter && <Button label="Clear" onPress={handleClear} />}
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
});
