import type { EditorComponentProps } from '../types';
import type { SingleLineTextProps } from '../types';

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
