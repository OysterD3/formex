import type { EditorComponentProps } from '../../types/utils.ts';
import type { CommonProps } from '../../types/props/common.ts';

export type PasswordProps = CommonProps & {
  onChange: (e: React.ChangeEvent<HTMLInputElement>) => void;
  value: string;
};

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
