import {View, Button, ActivityIndicator, Text} from 'react-native';
import {useForm} from 'react-hook-form';
import {Service} from 'interfaces/service';
import {Input} from 'components/input';
import {styles} from './styles';
import {Select} from 'components/select';
import {ServiceType} from 'constants/service-type';
import {useDispatch, useSelector} from 'react-redux';
import {addService} from 'store/actions/service';
import {selectService} from 'store/selectors/service';

export const AddServiceScreen = () => {
  const dispatch = useDispatch();
  const {loading, error} = useSelector(selectService);
  const {control, handleSubmit} = useForm<Service>();

  const onSubmit = handleSubmit(data => {
    dispatch(addService(data));
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
      {loading ? (
        <ActivityIndicator />
      ) : (
        <View style={styles.button}>
          <Button title="add service" onPress={onSubmit} />
        </View>
      )}
      {error && (
        <View style={styles.outerWrapper}>
          <Text style={{color: 'red', textAlign: 'center', marginTop: 20}}>
            Error: {error}
          </Text>
        </View>
      )}
    </View>
  );
};
