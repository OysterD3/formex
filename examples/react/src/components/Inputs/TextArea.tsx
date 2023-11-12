import { forwardRef, useId } from 'react';
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
  disabled?: boolean;
  readOnly?: boolean;
}

export const DEFAULT_TEXT_AREA_PROPS = {
  label: 'Textarea',
  id: undefined,
  name: undefined,
  helperText: undefined,
  placeholder: 'Type something...',
  rows: 3,
  value: undefined,
  defaultValue: undefined,
  disabled: false,
  readOnly: false,
};

const TextArea = forwardRef<HTMLTextAreaElement, TextAreaProps>(
  (props, ref) => {
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
      disabled,
      readOnly,
    } = mergeProps(DEFAULT_TEXT_AREA_PROPS, props);
    const _id = useId();

    const inputId = id || _id;

    return (
      <InputLayout label={label} id={inputId} helperText={helperText}>
        <textarea
          ref={ref}
          onChange={onChange}
          value={defaultValue || value}
          rows={rows}
          name={name || inputId}
          id={inputId}
          placeholder={placeholder}
          disabled={disabled}
          readOnly={readOnly}
          className={bem('textarea', { disabled })}
        />
      </InputLayout>
    );
  },
);

TextArea.displayName = 'TextArea';

export default TextArea;
