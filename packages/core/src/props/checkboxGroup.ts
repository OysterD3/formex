import type { CheckboxGroupProps } from '../types';
import type { EditorComponentProps } from '../types';

export const DEFAULT_CHECKBOX_GROUP_PROPS: EditorComponentProps<CheckboxGroupProps> =
  {
    description: '',
    disabled: false,
    id: '',
    label: 'Checkbox group',
    name: '',
    options: [],
    required: false,
    row: false,
    tooltip: '',
    variant: 'default',
  };
