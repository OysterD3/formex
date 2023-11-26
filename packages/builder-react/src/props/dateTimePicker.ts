import type { EditorComponentProps } from '../../types/utils.ts';
import type { CommonProps } from '../../types/props/common.ts';

export type DateTimePickerProps = CommonProps & {
  defaultValue: string;
  disablePast: boolean;
  format: string;
  interval: 1 | 15 | 30;
  onChange: (value: string) => void;
  value: string;
};

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
