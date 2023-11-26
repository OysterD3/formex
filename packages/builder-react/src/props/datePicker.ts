import type { EditorComponentProps } from '../../types/utils.ts';
import type { CommonProps } from '../../types/props/common.ts';

export type DatePickerProps = CommonProps & {
  defaultValue: string;
  disablePast: boolean;
  format: string;
  onChange: (value: string) => void;
  value: string;
};

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
