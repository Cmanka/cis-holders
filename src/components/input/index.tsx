import { TextInput } from 'react-native';
import { useController } from 'react-hook-form';
import { InputProps } from 'components/input/types';
import { styles } from './styles';

export const Input = ({ name, control, placeholder, type = 'default' }: InputProps) => {
  const { field } = useController({ control, name, defaultValue: '' });

  return (
    <TextInput
      style={styles.input}
      value={field.value}
      onChangeText={field.onChange}
      onBlur={field.onBlur}
      keyboardType={type}
      placeholderTextColor="#000"
      placeholder={placeholder}
    />
  );
};
