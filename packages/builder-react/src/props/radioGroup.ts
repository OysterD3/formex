import type { Option } from '../../types/props/option.ts';
import type { EditorComponentProps } from '../../types/utils.ts';
import type { CommonProps } from '../../types/props/common.ts';

export type RadioGroupProps = Omit<CommonProps, 'placeholder' | 'readOnly'> & {
  onChange: (e: React.ChangeEvent<HTMLInputElement>) => void;
  options: Option[];
  row: boolean;
  value: string;
  variant: 'default' | 'card';
};

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
