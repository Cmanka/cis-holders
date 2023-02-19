import { useController } from 'react-hook-form';
import { TextInput } from 'react-native';
import { GlobalStyles } from 'styles';
import { DARK } from 'styles/variables';
import { capitalize } from 'utils/helpers/capitalize';

import { InputProps } from 'components/input/types';

export const Input = ({ name, control, placeholder, type = 'default' }: InputProps) => {
  const { field } = useController({ control, name, rules: { required: `You didn't fill ${name}` } });

  return (
    <TextInput
      style={GlobalStyles.input}
      value={field.value}
      onChangeText={field.onChange}
      keyboardType={type}
      placeholderTextColor={DARK}
      placeholder={capitalize(placeholder)}
      selectionColor={DARK}
    />
  );
};
