export interface DatePickerProps {
  label?: string;
  id?: string;
  name?: string;
  helperText?: string;
  placeholder?: string;
  format?: string;
  value?: string;
  onChange?: (value: string) => void;
  defaultValue?: string;
  disabled?: boolean;
  readOnly?: boolean;
}
