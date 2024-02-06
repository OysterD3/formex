import type { EditorComponentProps } from '../types';
import type { DateTimePickerProps } from '../types';

export const DEFAULT_DATE_TIME_PICKER_PROPS: EditorComponentProps<DateTimePickerProps> =
  {
    defaultValue: '',
    description: '',
    disabled: false,
    disablePast: false,
    format: 'YYYY-MM-DD HH:mm',
    id: '',
    interval: 15,
    label: 'Date time picker',
    name: '',
    placeholder: 'Select date & time',
    readOnly: false,
    required: false,
    tooltip: '',
  };
