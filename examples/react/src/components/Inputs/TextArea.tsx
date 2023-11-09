import { useId } from 'react';
import InputLayout from '../InputLayout';
import { createBEM } from '../../utils/bem.ts';
import { mergeProps } from '../../utils/props.ts';

const bem = createBEM('input-textarea');

export interface TextAreaProps {
  label?: string;
  id?: string;
  name?: string;
  helperText?: string;
  placeholder?: string;
  rows?: number;
  value?: string;
  defaultValue?: string;
  onChange?: (e: React.ChangeEvent<HTMLTextAreaElement>) => void;
}

export const DEFAULT_TEXT_AREA_PROPS = {
  label: '',
  id: undefined,
  name: undefined,
  helperText: undefined,
  placeholder: undefined,
  rows: 3,
  value: undefined,
  defaultValue: undefined,
};

const TextArea = (props: TextAreaProps) => {
  const {
    label,
    id,
    name,
    helperText,
    placeholder,
    rows,
    value,
    defaultValue,
    onChange,
  } = mergeProps(DEFAULT_TEXT_AREA_PROPS, props);
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
