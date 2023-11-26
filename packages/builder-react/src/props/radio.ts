import type { EditorComponentProps } from '../../types/utils.ts';
import type { CommonProps } from '../../types/props/common.ts';

export type RadioProps = Omit<CommonProps, 'placeholder' | 'readOnly'> & {
  defaultChecked: boolean;
  onChange: (e: React.ChangeEvent<HTMLInputElement>) => void;
  value: string;
  variant: 'default' | 'card';
};

export const DEFAULT_RADIO_PROPS: EditorComponentProps<RadioProps> = {
  defaultChecked: false,
  description: '',
  disabled: false,
  id: '',
  label: 'Radio button',
  name: '',
  required: false,
  tooltip: '',
  variant: 'default',
};
