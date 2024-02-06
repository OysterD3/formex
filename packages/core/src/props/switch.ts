import type { EditorComponentProps } from '../types';
import type { SwitchProps } from '../types';

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
