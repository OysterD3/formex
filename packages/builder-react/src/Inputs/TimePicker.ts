export interface TimePickerProps {
  value?: string;
  onChange?: (value: string) => void;
  label?: string;
  placeholder?: string;
  helperText?: string;
  interval?: 1 | 15 | 30;
  format?: string;
  id?: string;
  name?: string;
  defaultValue?: string;
  disabled?: boolean;
  readOnly?: boolean;
}

export const DEFAULT_TIME_PICKER_PROPS = {
  label: 'Time picker',
  placeholder: 'Select time',
  helperText: undefined,
  value: undefined,
  defaultValue: undefined,
  interval: 15,
  format: 'HH:mm',
  disabled: false,
  readOnly: false,
};
