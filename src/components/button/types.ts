type ButtonTheme = 'dark' | 'light' | 'gray';

export interface ButtonProps {
  label: string;
  onPress?: () => void;
  theme?: ButtonTheme;
}
