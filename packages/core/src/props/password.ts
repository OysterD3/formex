import type { EditorComponentProps } from '../types';
import type { PasswordProps } from '../types';

export const DEFAULT_PASSWORD_PROPS: EditorComponentProps<PasswordProps> = {
  description: '',
  disabled: false,
  id: '',
  label: 'Password',
  name: '',
  placeholder: '',
  readOnly: false,
  required: false,
  tooltip: '',
};
