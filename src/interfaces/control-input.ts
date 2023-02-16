import { Control, FieldValue, FieldValues } from 'react-hook-form';

export interface ControlInput {
  name: string;
  control: Control<FieldValue<FieldValues>>;
}
