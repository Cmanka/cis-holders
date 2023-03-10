import { Text,TouchableOpacity } from 'react-native';
import { CARD, DARK, WHITE } from 'styles/variables';

import { styles } from './styles';
import { ButtonProps } from './types';

const AttributesWrapper = {
  dark: {
    backgroundColor: DARK,
  },
  light: {
    backgroundColor: WHITE,
  },
  gray: {
    backgroundColor: CARD,
  },
};

const AttributesText = {
  dark: {
    color: WHITE,
  },
  light: {
    color: DARK,
  },
  gray: {
    color: WHITE,
  },
};

export const Button = ({ onPress, label, theme = 'dark' }: ButtonProps) => {
  return (
    <TouchableOpacity style={[styles.button, AttributesWrapper[theme]]} activeOpacity={0.6} onPress={onPress}>
      <Text style={[styles.text, AttributesText[theme]]}>{label}</Text>
    </TouchableOpacity>
  );
};
