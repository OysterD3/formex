import type { EditorComponentProps } from '../../types/utils.ts';
import type { CommonProps } from '../../types/props/common.ts';

export type SingleLineTextProps = CommonProps & {
  autoFocus: boolean;
  defaultValue: string | undefined;
  onChange: (e: React.ChangeEvent<HTMLInputElement>) => void;
  prefix: string;
  suffix: string;
  value: string;
};

export const DEFAULT_SINGLE_LINE_TEXT_PROPS: EditorComponentProps<SingleLineTextProps> =
  {
    autoFocus: false,
    defaultValue: undefined,
    description: '',
    disabled: false,
    id: '',
    label: 'Text input',
    name: 'text',
    placeholder: 'Type something...',
    prefix: '',
    readOnly: false,
    required: false,
    suffix: '',
    tooltip: '',
  };
