import { Control, FieldValue, FieldValues } from 'react-hook-form';

export interface SelectProps {
  name: string;
  control: Control<FieldValue<FieldValues>>;
  values: string[];
}
