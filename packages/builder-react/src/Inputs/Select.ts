export interface SelectProps<T> {
  label?: string;
  id?: string;
  name?: string;
  helperText?: string;
  placeholder?: string;
  value?: T;
  onChange?: (value: T) => void;
  defaultValue?: string;
  displayValue?: (value: T) => React.ReactNode;
  children: React.ReactNode;
  disabled?: boolean;
  readOnly?: boolean;
}

export const DEFAULT_SELECT_PROPS = {
  label: 'Select',
  id: undefined,
  name: undefined,
  helperText: undefined,
  placeholder: 'Select option',
  value: undefined,
  defaultValue: undefined,
  disabled: false,
  readOnly: false,
};
