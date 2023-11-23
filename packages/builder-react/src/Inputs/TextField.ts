export interface TextFieldProps {
  type?: HTMLInputElement['type'];
  label?: string;
  id?: string;
  name?: string;
  helperText?: string;
  placeholder?: string;
  prefix?: string;
  suffix?: string;
  value?: string;
  defaultValue?: string;
  onChange?: (e: React.ChangeEvent<HTMLInputElement>) => void;
  inputProps?: Pick<
    React.DetailedHTMLProps<
      React.InputHTMLAttributes<HTMLInputElement>,
      HTMLInputElement
    >,
    'inputMode' | 'disabled' | 'readOnly'
  >;
  disabled?: boolean;
  readOnly?: boolean;
}

export const DEFAULT_TEXT_FIELD_PROPS = {
  label: 'Text input',
  type: 'text',
  id: undefined,
  name: undefined,
  helperText: undefined,
  placeholder: 'Type something...',
  prefix: undefined,
  suffix: undefined,
  value: undefined,
  defaultValue: undefined,
  inputProps: {},
  disabled: false,
  readOnly: false,
};
