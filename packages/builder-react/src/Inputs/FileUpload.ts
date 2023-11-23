export interface FileUploadProps {
  label?: string;
  id?: string;
  name?: string;
  helperText?: string;
  accept?: HTMLInputElement['accept'];
  multiple?: boolean;
  value?: File;
  onChange?: (value: File) => void;
  defaultValue?: File;
  uploadText?: string;
  dragAndDropText?: string;
  size?: number;
  disabled?: boolean;
  readOnly?: boolean;
  error?: boolean;
  errorMessage?: string;
}

export const DEFAULT_FILE_UPLOAD_PROPS = {
  label: 'File upload',
  id: undefined,
  name: undefined,
  helperText: undefined,
  accept: undefined,
  multiple: false,
  value: undefined,
  defaultValue: undefined,
  uploadText: 'Upload a file',
  dragAndDropText: 'or drag and drop',
  size: undefined,
  disabled: false,
  readOnly: false,
};
