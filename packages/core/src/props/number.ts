import type { EditorComponentProps } from '../types';
import type { NumberProps } from '../types';

export const DEFAULT_NUMBER_PROPS: EditorComponentProps<NumberProps> = {
  autoFocus: false,
  defaultValue: undefined,
  description: '',
  disabled: false,
  id: '',
  label: 'Number',
  max: Infinity,
  min: 0,
  name: '',
  placeholder: '',
  prefix: '',
  readOnly: false,
  required: false,
  suffix: '',
  tooltip: '',
};
