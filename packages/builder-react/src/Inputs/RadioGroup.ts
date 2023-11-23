export interface RadioGroupProps {
  label?: string;
  name?: string;
  helperText?: string;
  children: React.ReactNode;
  row?: boolean;
  id?: string;
  value?: string;
  onChange?: (e: React.ChangeEvent<HTMLInputElement>) => void;
  variant?: 'default' | 'card';
  disabled?: boolean;
}

export const DEFAULT_RADIO_GROUP_PROPS = {
  label: 'Radio group',
  name: undefined,
  helperText: undefined,
  children: undefined,
  row: false,
  id: undefined,
  variant: 'default',
  disabled: false,
};
