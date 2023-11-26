import type { EditorComponentProps } from '../../types/utils.ts';
import type { CommonProps } from '../../types/props/common.ts';

export type EmailProps = CommonProps & {
  autoComplete: boolean;
  autoFocus: boolean;
  defaultValue: string | undefined;
  onChange: (e: React.ChangeEvent<HTMLInputElement>) => void;
  value: string;
};

export const DEFAULT_EMAIL_PROPS: EditorComponentProps<EmailProps> = {
  autoComplete: false,
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
