type ButtonTheme = 'dark' | 'light';

export interface ButtonProps {
  label: string;
  onPress?: () => void;
  theme?: ButtonTheme;
}
