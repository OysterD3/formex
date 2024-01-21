import type { EditorComponentProps } from '../../types/utils.ts';
import type { CommonProps } from '../../types/props/common.ts';

export type URLProps = CommonProps & {
  autoFocus: boolean;
  defaultValue: string | undefined;
  onChange: (e: React.ChangeEvent<HTMLInputElement>) => void;
  prefix: string;
  suffix: string;
  value: string;
};

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
