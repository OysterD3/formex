type Value = string | number | boolean;

export interface SwitchProps {
  id?: string;
  name?: string;
  label?: string;
  helperText?: string;
  value?: Value;
  onChange?: (value: Value) => void;
  trueValue?: Value;
  falseValue?: Value;
  defaultValue?: Value;
  disabled?: boolean;
  readOnly?: boolean;
}

export const DEFAULT_SWITCH_PROPS = {
  label: 'Switch',
  id: undefined,
  name: undefined,
  helperText: undefined,
  value: undefined,
  defaultValue: undefined,
  trueValue: true,
  falseValue: false,
  disabled: false,
  readOnly: false,
};
