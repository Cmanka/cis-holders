import { useEffect } from 'react';
import { useForm } from 'react-hook-form';
import { ActivityIndicator, Alert,ScrollView, Text, View } from 'react-native';
import { useDispatch, useSelector } from 'react-redux';
import { ServiceType } from 'constants/service-type';
import { Service } from 'interfaces/service';
import { addService, changeFormStatus } from 'store/actions/service';
import { selectService } from 'store/selectors/service';
import { GlobalStyles } from 'styles';
import { DARK } from 'styles/variables';

import { Address } from 'components/address';
import { Attachment } from 'components/attachment';
import { Button } from 'components/button';
import { Input } from 'components/input';
import { Select } from 'components/select';

import { styles } from './styles';

export const AddServiceScreen = () => {
  const dispatch = useDispatch();
  const { loading, error, formStatus } = useSelector(selectService);
  const {
    control,
    reset,
    handleSubmit,
    formState: { errors },
  } = useForm<Service>();

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
      <Text style={GlobalStyles.p}>Create new service and help your russian neighbor</Text>
      <View style={styles.outerWrapper}>
        <Input name="title" placeholder="title" control={control} />
        {Boolean(errors.title) && <Text style={GlobalStyles.error}>{errors.title?.message}</Text>}
      </View>
      <View style={styles.outerWrapper}>
        <Input name="description" placeholder="description" control={control} />
        {Boolean(errors.description) && <Text style={GlobalStyles.error}>{errors.description?.message}</Text>}
      </View>
      <View style={styles.outerWrapper}>
        <Select
          name="type"
          control={control}
          values={Object.entries(ServiceType).map(([label, value]) => ({ label, value }))}
        />
        {Boolean(errors.type) && <Text style={GlobalStyles.error}>{errors.type?.message}</Text>}
      </View>
      <View style={styles.outerWrapper}>
        <Attachment name="imageUri" control={control} />
        {Boolean(errors.imageUri) && <Text style={GlobalStyles.error}>{errors.imageUri?.message}</Text>}
      </View>
      <View style={styles.outerWrapper}>
        <Address name="coordinates" control={control} />
        {Boolean(errors.coordinates) && <Text style={GlobalStyles.error}>{errors.coordinates?.message}</Text>}
      </View>
      {loading ? (
        <ActivityIndicator color={DARK} size="large" />
      ) : (
        <View style={styles.button}>
          <Button label="Add Service" onPress={onSubmit} />
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
