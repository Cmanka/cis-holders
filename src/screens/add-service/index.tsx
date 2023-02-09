import {View, Button} from 'react-native';
import {useForm} from 'react-hook-form';
import {Service} from 'interfaces/service';
import {Input} from 'components/input';
import {useService} from 'services/service';
import {styles} from './styles';
import {Select} from 'components/select';
import {ServiceType} from 'constants/service-type';

export const AddServiceScreen = () => {
  const {control, handleSubmit} = useForm<Service>();
  const {addService} = useService();

  const onSubmit = handleSubmit(data => {
    addService(data);
  });

  return (
    <View style={styles.wrapper}>
      <View style={styles.outerWrapper}>
        <Input name="title" control={control} />
      </View>
      <View style={styles.outerWrapper}>
        <Input name="description" control={control} />
      </View>
      <View style={styles.outerWrapper}>
        <Select
          name="type"
          control={control}
          values={Object.values(ServiceType)}
        />
      </View>
      <View style={styles.button}>
        <Button title="add service" onPress={onSubmit} />
      </View>
    </View>
  );
};
