export interface CheckboxProps {
  label?: string;
  variant?: 'card' | 'default';
  id?: string;
  name?: string;
  helperText?: string;
  defaultChecked?: boolean;
  value?: string;
  onChange?: (e: React.ChangeEvent<HTMLInputElement>) => void;
  disabled?: boolean;
}

export const DEFAULT_CHECKBOX_PROPS = {
  label: 'Checkbox',
  variant: 'default',
  id: undefined,
  name: undefined,
  helperText: undefined,
  defaultChecked: false,
  value: '',
  disabled: false,
};
