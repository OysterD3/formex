export type RadioButtonProps = {
  label?: string;
  id?: string;
  name?: string;
  helperText?: string;
  defaultChecked?: boolean;
  variant?: 'default' | 'card';
  value?: string;
  onChange?: (e: React.ChangeEvent<HTMLInputElement>) => void;
  disabled?: boolean;
};

export const DEFAULT_RADIO_BUTTON_PROPS = {
  label: 'Radio button',
  id: undefined,
  name: undefined,
  helperText: undefined,
  defaultChecked: undefined,
  variant: 'default',
  value: '',
  disabled: false,
};
