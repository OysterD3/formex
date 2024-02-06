import type { EditorComponentProps } from '../types';
import type { EmailProps } from '../types';

export const DEFAULT_EMAIL_PROPS: EditorComponentProps<EmailProps> = {
  autoFocus: false,
  defaultValue: undefined,
  description: '',
  disabled: false,
  id: '',
  label: 'Email',
  name: '',
  placeholder: 'abc@example.com',
  readOnly: false,
  required: false,
  tooltip: '',
};
