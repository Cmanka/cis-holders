import {TextInput} from 'react-native';
import {useController} from 'react-hook-form';
import {InputProps} from 'components/input/types';

export const Input = ({name, control}: InputProps) => {
  const {field} = useController({control, name, defaultValue: ''});

  return (
    <TextInput
      style={{borderColor: '#000', borderWidth: 2, color: '#000'}}
      value={field.value}
      onChangeText={field.onChange}
      onBlur={field.onBlur}
      placeholderTextColor="#000"
    />
  );
};
