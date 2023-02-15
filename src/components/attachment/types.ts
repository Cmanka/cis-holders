import {Control, FieldValue, FieldValues} from 'react-hook-form';

export interface AttachmentProps {
  name: string;
  control: Control<FieldValue<FieldValues>>;
}
