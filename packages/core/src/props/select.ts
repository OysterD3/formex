import type { SelectProps } from '../types';
import type { EditorComponentProps } from '../types';

export const DEFAULT_SELECT_PROPS: EditorComponentProps<SelectProps> = {
  defaultValue: '',
  description: '',
  disabled: false,
  id: '',
  label: 'Select',
  multiple: false,
  name: '',
  options: [],
  placeholder: 'Select option',
  readOnly: false,
  required: false,
  tooltip: '',
};
