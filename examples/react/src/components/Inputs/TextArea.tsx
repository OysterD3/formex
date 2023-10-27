import { useId } from 'react';
import InputLayout from '../InputLayout';

export interface TextAreaProps {
  label: string;
  id?: string;
  name?: string;
  helperText?: string;
  placeholder?: string;
  rows?: number;
}

const TextArea = ({
  label,
  id,
  name,
  placeholder,
  helperText,
  rows = 3,
}: TextAreaProps) => {
  const _id = useId();

  const inputId = id || _id;

  return (
    <InputLayout label={label} id={inputId} helperText={helperText}>
      <div>
        <textarea
          rows={rows}
          name={name || inputId}
          id={inputId}
          placeholder={placeholder}
          className="block resize-none w-full rounded-md border-0 py-1.5 px-3 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 sm:text-sm sm:leading-6"
        />
      </div>
    </InputLayout>
  );
};

export default TextArea;
