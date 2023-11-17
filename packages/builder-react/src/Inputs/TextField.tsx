import { forwardRef, useId } from 'react';
import InputLayout from '../InputLayout/InputLayout';
import { createBEM } from '../utils/bem.ts';
import { mergeProps } from '../utils/props.ts';

export interface TextFieldProps {
  type?: HTMLInputElement['type'];
  label?: string;
  id?: string;
  name?: string;
  helperText?: string;
  placeholder?: string;
  prefix?: string;
  suffix?: string;
  value?: string;
  defaultValue?: string;
  onChange?: (e: React.ChangeEvent<HTMLInputElement>) => void;
  inputProps?: Pick<
    React.DetailedHTMLProps<
      React.InputHTMLAttributes<HTMLInputElement>,
      HTMLInputElement
    >,
    'inputMode' | 'disabled' | 'readOnly'
  >;
  disabled?: boolean;
  readOnly?: boolean;
}

export const DEFAULT_TEXT_FIELD_PROPS = {
  label: 'Text input',
  type: 'text',
  id: undefined,
  name: undefined,
  helperText: undefined,
  placeholder: 'Type something...',
  prefix: undefined,
  suffix: undefined,
  value: undefined,
  defaultValue: undefined,
  inputProps: {},
  disabled: false,
  readOnly: false,
};

const bem = createBEM('input-text-field');

const TextField = forwardRef<HTMLInputElement, TextFieldProps>((props, ref) => {
  const {
    label,
    id,
    name,
    helperText,
    placeholder,
    prefix,
    suffix,
    value,
    defaultValue,
    onChange,
    type,
    inputProps,
    disabled,
    readOnly,
  } = mergeProps(DEFAULT_TEXT_FIELD_PROPS, props);
  const _id = useId();

  const inputId = id || _id;

  return (
    <InputLayout label={label} id={inputId} helperText={helperText}>
      <div className={bem('container', { disabled })}>
        {prefix && <span className={bem('prefix')}>{prefix}</span>}
        <input
          {...inputProps}
          ref={ref}
          disabled={disabled}
          readOnly={readOnly}
          value={defaultValue || value}
          onChange={onChange}
          type={type}
          name={name || inputId}
          id={inputId}
          className={bem('input', {
            'with-prefix': !!prefix,
            'with-suffix': !!suffix,
          })}
          placeholder={placeholder}
        />
        {suffix && <span className={bem('suffix')}>{suffix}</span>}
      </div>
    </InputLayout>
  );
});

TextField.displayName = 'TextField';

export default TextField;
