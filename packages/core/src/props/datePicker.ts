import type { EditorComponentProps } from '../types';
import type { DatePickerProps } from '../types';

export const DEFAULT_DATE_PICKER_PROPS: EditorComponentProps<DatePickerProps> =
  {
    defaultValue: '',
    description: '',
    disabled: false,
    disablePast: false,
    format: 'YYYY-MM-DD',
    id: '',
    label: 'Date picker',
    name: '',
    placeholder: 'Select a date',
    readOnly: false,
    required: false,
    tooltip: '',
  };
