import type { EditorComponentProps } from '../../types/utils.ts';
import type { CommonProps } from '../../types/props/common.ts';

export type PhoneProps = CommonProps & {
  autoFocus: boolean;
  defaultValue: string | undefined;
  onChange: (e: React.ChangeEvent<HTMLInputElement>) => void;
  prefix: string;
  value: string;
};

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
