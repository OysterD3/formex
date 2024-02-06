import type { EditorComponentProps } from '../types';
import type { RichTextProps } from '../types';

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
