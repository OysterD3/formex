import type { EditorComponentProps } from '../../types/utils.ts';
import type { CommonProps } from '../../types/props/common.ts';

export type TimePickerProps = CommonProps & {
  defaultValue: string;
  disablePast: boolean;
  format: string;
  interval: 1 | 15 | 30;
  onChange: (value: string) => void;
  value: string;
};

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
