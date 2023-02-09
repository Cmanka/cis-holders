import {SafeAreaView, SectionList} from 'react-native';
import {MOCK_SERVICES} from './mock';
import {ServiceItem, ServiceItemHeader} from 'components/service-item';
import {styles} from './styles';

export const ServicesScreen = () => {
  return (
    <SafeAreaView style={styles.container}>
      <SectionList
        sections={MOCK_SERVICES}
        keyExtractor={({service}) => service}
        renderItem={({item}) => <ServiceItem {...item} />}
        renderSectionHeader={({section: {title}}) => (
          <ServiceItemHeader title={title} />
        )}
      />
    </SafeAreaView>
  );
};
