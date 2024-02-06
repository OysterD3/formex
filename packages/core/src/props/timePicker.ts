import type { EditorComponentProps } from '../types';
import type { TimePickerProps } from '../types';

export const DEFAULT_TIME_PICKER_PROPS: EditorComponentProps<TimePickerProps> =
  {
    defaultValue: '',
    description: '',
    disabled: false,
    disablePast: false,
    format: 'HH:mm',
    id: '',
    interval: 15,
    label: 'Time picker',
    name: '',
    placeholder: 'Select time',
    readOnly: false,
    required: false,
    tooltip: '',
  };
