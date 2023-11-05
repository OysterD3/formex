import { useId } from 'react';
import InputLayout from '../InputLayout';
import { createBEM } from '../../utils/bem.ts';

const bem = createBEM('input-textarea');

export interface TextAreaProps {
  label: string;
  id?: string;
  name?: string;
  helperText?: string;
  placeholder?: string;
  rows?: number;
  value?: string;
  defaultValue?: string;
  onChange?: (e: React.ChangeEvent<HTMLTextAreaElement>) => void;
}

const TextArea = ({
  label,
  id,
  name,
  placeholder,
  helperText,
  rows = 3,
  onChange,
  value,
  defaultValue,
}: TextAreaProps) => {
  const _id = useId();

  const inputId = id || _id;

  return (
    <InputLayout label={label} id={inputId} helperText={helperText}>
      <textarea
        onChange={onChange}
        value={defaultValue || value}
        rows={rows}
        name={name || inputId}
        id={inputId}
        placeholder={placeholder}
        className={bem('textarea')}
      />
    </InputLayout>
  );
};

export default TextArea;
