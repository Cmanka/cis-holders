import { Picker } from '@react-native-picker/picker';
import { useController } from 'react-hook-form';
import { SelectProps } from 'components/select/types';
import { View } from 'react-native';
import { styles } from './styles';

export const Select = ({ name, control, values }: SelectProps) => {
  const { field } = useController({ control, name, defaultValue: values[0] });

  return (
    <View style={styles.wrapper}>
      <Picker selectedValue={field.value} onValueChange={field.onChange} onBlur={field.onBlur} style={styles.picker}>
        {values.map((label) => (
          <Picker.Item label={label} value={label} key={label} />
        ))}
      </Picker>
    </View>
  );
};
