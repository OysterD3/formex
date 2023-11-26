import type { EditorComponentProps } from '../../types/utils.ts';
import type { CommonProps } from '../../types/props/common.ts';

export type RichTextProps = CommonProps & {
  defaultValue: string;
  onChange: (value: string) => void;
  value: string;
};

export const DEFAULT_RICH_TEXT_PROPS: EditorComponentProps<RichTextProps> = {
  defaultValue: '',
  description: '',
  disabled: false,
  id: '',
  label: 'Rich text',
  name: '',
  placeholder: 'Type something...',
  readOnly: false,
  required: false,
  tooltip: '',
};
