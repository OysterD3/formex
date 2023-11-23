export interface CheckboxGroupProps {
  label?: string;
  name?: string;
  helperText?: string;
  children: React.ReactNode;
  row?: boolean;
  id?: string;
  value?: string[];
  onChange?: (e: React.ChangeEvent<HTMLInputElement>) => void;
  variant?: 'default' | 'card';
  disabled?: boolean;
}

export const DEFAULT_CHECKBOX_GROUP_PROPS = {
  label: 'Checkbox group',
  name: undefined,
  helperText: undefined,
  row: false,
  id: undefined,
  variant: 'default',
  disabled: false,
};
