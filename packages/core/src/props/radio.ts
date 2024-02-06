import type { EditorComponentProps } from '../types';
import type { RadioProps } from '../types';

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
