import {ActivityIndicator, SafeAreaView, SectionList} from 'react-native';
import {ServiceItem, ServiceItemHeader} from 'components/service-item';
import {styles} from './styles';
import {useEffect} from 'react';
import {useDispatch, useSelector} from 'react-redux';
import {fetchService} from 'store/actions/service';
import {selectServiceSectionList} from 'store/selectors/service';

export const ServicesScreen = () => {
  const dispatch = useDispatch();
  const {data, loading} = useSelector(selectServiceSectionList);

  useEffect(() => {
    dispatch(fetchService());
  }, [dispatch]);

  if (loading) {
    return (
      <ActivityIndicator
        size="large"
        style={{flex: 1, justifyContent: 'center', alignItems: 'center'}}
      />
    );
  }

  return (
    <SafeAreaView style={styles.container}>
      <SectionList
        sections={data}
        keyExtractor={({id}) => id}
        renderItem={({item: {title}}) => <ServiceItem service={title} />}
        renderSectionHeader={({section: {type}}) => (
          <ServiceItemHeader title={type} />
        )}
      />
    </SafeAreaView>
  );
};
