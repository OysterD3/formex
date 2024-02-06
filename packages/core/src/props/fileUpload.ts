import type { EditorComponentProps } from '../types';
import type { FileUploadProps } from '../types';

export const DEFAULT_FILE_UPLOAD_PROPS: EditorComponentProps<FileUploadProps> =
  {
    accept: '*',
    description: '',
    disabled: false,
    id: '',
    label: 'File upload',
    multiple: false,
    name: '',
    readOnly: false,
    required: false,
    size: Infinity,
    tooltip: '',
  };
