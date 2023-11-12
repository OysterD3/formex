import {
  ChangeEvent,
  DragEventHandler,
  forwardRef,
  useId,
  useRef,
  useState,
} from 'react';
import InputLayout from '../InputLayout';
import { createBEM } from '../../utils/bem.ts';
import { mergeProps } from '../../utils/props.ts';

const bem = createBEM('input-upload');

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
};

const FileUpload = forwardRef<HTMLInputElement, FileUploadProps>(
  (props, ref) => {
    const {
      label,
      id,
      name,
      helperText,
      accept,
      multiple,
      value,
      onChange,
      defaultValue,
      uploadText,
      dragAndDropText,
      size,
    } = mergeProps(DEFAULT_FILE_UPLOAD_PROPS, props);

    const _id = useId();
    const inputId = id || _id;
    const uploadRef = useRef<HTMLInputElement>(null);
    const [isDragging, setIsDragging] = useState(false);
    const [fileInfo, setFileInfo] = useState<File | null>(
      defaultValue || value || null,
    );

    const openFileUploader = () => {
      if (uploadRef.current) {
        uploadRef.current.click();
      }
    };

    const handleDragOver: DragEventHandler<HTMLDivElement> = (e) => {
      e.preventDefault();
      setIsDragging(true);
    };

    const handleDragLeave: DragEventHandler<HTMLDivElement> = (e) => {
      e.preventDefault();
      setIsDragging(false);
    };

    const handleDrop: DragEventHandler<HTMLDivElement> = (e) => {
      e.preventDefault();
      setIsDragging(false);
      if (e.dataTransfer?.files.length > 0) {
        const file = e.dataTransfer.files[0];
        if (accept && !validateAccept(file)) return;
        setFileInfo(file);
        onChange?.(file);
      }
    };

    const validateAccept = (file: File): boolean => {
      if (!accept) return true;
      const allowed = (accept as HTMLInputElement['accept'])
        .split(',')
        .map((v) => v.trim());
      return (
        allowed.includes(file.type) ||
        allowed.includes(file.type.split('/')[0] + '/*') ||
        allowed.includes(('.' + file.name.split('.').pop()) as string)
      );
    };

    const handleChange = (e: ChangeEvent<HTMLInputElement>) => {
      if (e.target.files && e.target.files.length > 0) {
        const file = e.target.files[0];
        setFileInfo(file);
        onChange?.(file);
      }
    };

    return (
      <InputLayout label={label} id={inputId} helperText={helperText}>
        <div
          onClick={openFileUploader}
          onDragOver={handleDragOver}
          onDragLeave={handleDragLeave}
          onDrop={handleDrop}
          className={bem('container', {
            dragging: isDragging,
            'has-file': !!fileInfo,
          })}
        >
          <div className={bem('wrapper')}>
            <svg
              className={bem('icon')}
              viewBox="0 0 24 24"
              fill="currentColor"
              aria-hidden="true"
            >
              <path
                fillRule="evenodd"
                d="M1.5 6a2.25 2.25 0 012.25-2.25h16.5A2.25 2.25 0 0122.5 6v12a2.25 2.25 0 01-2.25 2.25H3.75A2.25 2.25 0 011.5 18V6zM3 16.06V18c0 .414.336.75.75.75h16.5A.75.75 0 0021 18v-1.94l-2.69-2.689a1.5 1.5 0 00-2.12 0l-.88.879.97.97a.75.75 0 11-1.06 1.06l-5.16-5.159a1.5 1.5 0 00-2.12 0L3 16.061zm10.125-7.81a1.125 1.125 0 112.25 0 1.125 1.125 0 01-2.25 0z"
                clipRule="evenodd"
              />
            </svg>
            <div className={bem('label-wrapper')}>
              <label
                onClick={(e) => e.stopPropagation()}
                className={bem('label')}
              >
                <span>{uploadText}</span>
                <input
                  ref={ref || uploadRef}
                  id={inputId}
                  name={name || inputId}
                  type="file"
                  className={bem('input')}
                  multiple={multiple}
                  accept={accept}
                  tabIndex={-1}
                  aria-hidden="true"
                  size={size}
                  onChange={handleChange}
                />
              </label>
              <p className={bem('dnd-text')}>{dragAndDropText}</p>
            </div>
          </div>
        </div>
      </InputLayout>
    );
  },
);

FileUpload.displayName = 'FileUpload';

export default FileUpload;
