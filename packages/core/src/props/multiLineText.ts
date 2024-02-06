import type { EditorComponentProps } from '../types';
import type { MultiLineTextProps } from '../types';

export const DEFAULT_MULTI_LINE_TEXT_PROPS: EditorComponentProps<MultiLineTextProps> =
  {
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
