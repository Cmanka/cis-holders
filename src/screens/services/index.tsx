import {ActivityIndicator, SafeAreaView, SectionList} from 'react-native';
import {ServiceItem, ServiceItemHeader} from 'components/service-item';
import {styles} from './styles';
import {useService} from 'services/service';
import {useEffect, useState} from 'react';
import {Service} from 'interfaces/service';

export const ServicesScreen = () => {
  const [services, setServices] = useState<Service[]>([]);
  const [loading, setLoading] = useState(true);
  const {getServices} = useService();

  useEffect(() => {
    getServices()
      .then(setServices)
      .finally(() => setLoading(false));
  }, [getServices]);

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
        sections={services}
        keyExtractor={({title, description}, index) =>
          `${title}${description}${index}`
        }
        renderItem={({item: {title}}) => <ServiceItem service={title} />}
        renderSectionHeader={({section: {type}}) => (
          <ServiceItemHeader title={type} />
        )}
      />
    </SafeAreaView>
  );
};
