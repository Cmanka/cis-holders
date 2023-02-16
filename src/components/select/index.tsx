import { useController } from 'react-hook-form';
import { SelectProps } from 'components/select/types';
import { styles } from './styles';
import { useEffect, useState } from 'react';
import DropDownPicker from 'react-native-dropdown-picker';

export const Select = ({ name, control, values }: SelectProps) => {
  const [open, setOpen] = useState(false);
  const [value, setValue] = useState();
  const { field } = useController({
    control,
    name,
    rules: { required: `You didn't fill ${name}` },
  });

  useEffect(() => {
    field.onChange(value);
  }, [value]);

  return (
    <DropDownPicker
      open={open}
      value={field.value}
      items={values}
      setOpen={setOpen}
      style={styles.picker}
      textStyle={styles.text}
      setValue={setValue}
      placeholder={`Select ${name}`}
      placeholderStyle={styles.placeholder}
      listMode="MODAL"
    />
  );
};
