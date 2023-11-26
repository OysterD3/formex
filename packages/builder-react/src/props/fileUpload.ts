import { EditorComponentProps } from '../../types/utils.ts';
import type { CommonProps } from '../../types/props/common.ts';

export type FileUploadProps = Omit<CommonProps, 'placeholder'> & {
  accept: HTMLInputElement['accept'];
  multiple: boolean;
  onChange: (value: File) => void;
  size: number;
  value: File;
};

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
