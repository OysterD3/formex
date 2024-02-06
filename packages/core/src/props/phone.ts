import type { EditorComponentProps } from '../types';
import type { PhoneProps } from '../types';

export const DEFAULT_PHONE_PROPS: EditorComponentProps<PhoneProps> = {
  autoFocus: false,
  defaultValue: undefined,
  description: '',
  disabled: false,
  id: '',
  label: 'Phone number',
  name: '',
  placeholder: '',
  prefix: '',
  readOnly: false,
  required: false,
  tooltip: '',
};
