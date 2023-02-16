import { KeyboardTypeOptions } from 'react-native/Libraries/Components/TextInput/TextInput';
import { ControlInput } from 'interfaces/control-input';

export interface InputProps extends ControlInput {
  placeholder: string;
  type?: KeyboardTypeOptions;
}
