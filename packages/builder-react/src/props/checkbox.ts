import type { EditorComponentProps } from '../../types/utils.ts';
import type { CommonProps } from '../../types/props/common.ts';

export type CheckboxProps = Omit<CommonProps, 'placeholder' | 'readOnly'> & {
  defaultChecked: boolean;
  onChange: (e: React.ChangeEvent<HTMLInputElement>) => void;
  value: string;
  variant: 'card' | 'default';
};

export const DEFAULT_CHECKBOX_PROPS: EditorComponentProps<CheckboxProps> = {
  defaultChecked: false,
  description: '',
  disabled: false,
  id: '',
  label: 'Checkbox',
  name: '',
  required: false,
  tooltip: '',
  variant: 'default',
};
