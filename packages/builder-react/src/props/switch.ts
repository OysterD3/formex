import type { EditorComponentProps } from '../../types/utils.ts';
import type { CommonProps } from '../../types/props/common.ts';

type Value = string | number | boolean;

export type SwitchProps = Omit<CommonProps, 'placeholder'> & {
  defaultValue: Value;
  falseValue: Value;
  onChange: (value: Value) => void;
  trueValue: Value;
  value: Value;
};

export const DEFAULT_SWITCH_PROPS: EditorComponentProps<SwitchProps> = {
  defaultValue: false,
  description: '',
  disabled: false,
  falseValue: false,
  id: '',
  label: 'Switch',
  name: '',
  readOnly: false,
  required: false,
  tooltip: '',
  trueValue: true,
};
