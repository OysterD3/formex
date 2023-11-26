import type { EditorComponentProps } from '../../types/utils.ts';
import type { Option } from '../../types/props/option.ts';
import type { CommonProps } from '../../types/props/common.ts';

export type SelectProps<TValue = string> = CommonProps & {
  defaultValue: TValue;
  onChange: (value: TValue) => void;
  options: Option<TValue>[];
  value: TValue;
};

export const DEFAULT_SELECT_PROPS: EditorComponentProps<SelectProps> = {
  defaultValue: '',
  description: '',
  disabled: false,
  id: '',
  label: 'Select',
  name: '',
  options: [],
  placeholder: 'Select option',
  readOnly: false,
  required: false,
  tooltip: '',
};
