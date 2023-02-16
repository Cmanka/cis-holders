import { View, ScrollView, Button, ActivityIndicator, Text, Alert } from 'react-native';
import { useForm } from 'react-hook-form';
import { Input } from 'components/input';
import { styles } from './styles';
import { Select } from 'components/select';
import { ServiceType } from 'constants/service-type';
import { useDispatch, useSelector } from 'react-redux';
import { addService, changeFormStatus } from 'store/actions/service';
import { selectService } from 'store/selectors/service';
import { Attachment } from 'components/attachment';
import { useEffect } from 'react';
import { Address } from 'components/address';
import { Service } from 'interfaces/service';

export const AddServiceScreen = () => {
  const dispatch = useDispatch();
  const { loading, error, formStatus } = useSelector(selectService);
  const { control, reset, handleSubmit } = useForm<Service>();

  const onSubmit = handleSubmit((data) => {
    dispatch(addService(data));
  });

  useEffect(() => {
    if (formStatus === 'success') {
      dispatch(changeFormStatus('pending'));
      reset();
      Alert.alert('Add service form', 'Successfully added');
    }
  }, [dispatch, formStatus, reset]);

  return (
    <ScrollView contentContainerStyle={styles.wrapper}>
      <View style={styles.outerWrapper}>
        <Input name="title" placeholder="title" control={control} />
      </View>
      <View style={styles.outerWrapper}>
        <Input name="description" placeholder="description" control={control} />
      </View>
      <View style={styles.outerWrapper}>
        <Select name="type" control={control} values={Object.values(ServiceType)} />
      </View>
      <View style={styles.outerWrapper}>
        <Attachment name="imageUri" control={control} />
      </View>
      <View style={styles.outerWrapper}>
        <Address name="coordinates" control={control} />
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
          <Text style={styles.error}>{error}</Text>
        </View>
      )}
    </ScrollView>
  );
};
