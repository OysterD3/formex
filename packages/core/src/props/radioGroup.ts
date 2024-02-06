import type { EditorComponentProps } from '../types';
import type { RadioGroupProps } from '../types';

export const DEFAULT_RADIO_GROUP_PROPS: EditorComponentProps<RadioGroupProps> =
  {
    description: '',
    disabled: false,
    id: '',
    label: 'Radio group',
    name: '',
    options: [],
    required: false,
    row: false,
    tooltip: '',
    variant: 'default',
  };
