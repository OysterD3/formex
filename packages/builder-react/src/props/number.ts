import type { EditorComponentProps } from '../../types/utils.ts';
import type { CommonProps } from '../../types/props/common.ts';

export type NumberProps = CommonProps & {
  autoFocus: boolean;
  defaultValue: string | undefined;
  max: number;
  min: number;
  onChange: (e: React.ChangeEvent<HTMLInputElement>) => void;
  prefix: string;
  suffix: string;
  value: string;
};

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
