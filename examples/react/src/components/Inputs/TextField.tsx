import { useId } from 'react';
import InputLayout from '../InputLayout';
import { createBEM } from '../../utils/bem.ts';

export interface TextFieldProps {
  type: HTMLInputElement['type'];
  label: string;
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
    'inputMode'
  >;
}

const bem = createBEM('input-text-field');

const TextField = ({
  type,
  label,
  id,
  name,
  placeholder,
  helperText,
  prefix,
  suffix,
  inputProps,
  value,
  onChange,
  defaultValue,
}: TextFieldProps) => {
  const _id = useId();

  const inputId = id || _id;

  return (
    <InputLayout label={label} id={inputId} helperText={helperText}>
      <div className={bem('container')}>
        {prefix && <span className={bem('prefix')}>{prefix}</span>}
        <input
          {...inputProps}
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
};

export default TextField;
