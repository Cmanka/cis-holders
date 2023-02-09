import {Control, FieldValue, FieldValues} from 'react-hook-form';

export interface InputProps {
  name: string;
  control: Control<FieldValue<FieldValues>>;
}
