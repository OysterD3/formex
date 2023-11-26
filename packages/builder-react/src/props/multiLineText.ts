import type { EditorComponentProps } from '../../types/utils.ts';
import type { CommonProps } from '../../types/props/common.ts';

export type MultiLineTextProps = CommonProps & {
  autoComplete: boolean;
  autoFocus: boolean;
  defaultValue: string;
  maxRows: number;
  minRows: number;
  onChange: (e: React.ChangeEvent<HTMLTextAreaElement>) => void;
  value: string;
};

export const DEFAULT_MULTI_LINE_TEXT_PROPS: EditorComponentProps<MultiLineTextProps> =
  {
    autoComplete: true,
    autoFocus: false,
    defaultValue: '',
    description: '',
    disabled: false,
    id: '',
    label: 'Textarea',
    maxRows: 5,
    minRows: 3,
    name: '',
    placeholder: 'Type something...',
    readOnly: false,
    required: false,
    tooltip: '',
  };
