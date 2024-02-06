import type { EditorComponentProps } from '../types';
import type { URLProps } from '../types';

export const DEFAULT_URL_PROPS: EditorComponentProps<URLProps> = {
  autoFocus: false,
  defaultValue: undefined,
  description: '',
  disabled: false,
  id: '',
  label: 'Email',
  name: '',
  placeholder: 'abc@example.com',
  prefix: '',
  readOnly: false,
  required: false,
  suffix: '',
  tooltip: '',
};
