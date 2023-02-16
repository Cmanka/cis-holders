import { ControlInput } from 'interfaces/control-input';

export interface SelectProps extends ControlInput {
  values: Array<{ label: string; value: string }>;
}
