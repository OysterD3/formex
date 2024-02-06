import type { CheckboxProps, EditorComponentProps } from '../types';

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
