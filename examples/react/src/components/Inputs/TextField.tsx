import { useId } from 'react';
import classNames from 'classnames';
import InputLayout from '../InputLayout';

export interface TextFieldProps {
  type: HTMLInputElement['type'];
  label: string;
  id?: string;
  name?: string;
  helperText?: string;
  placeholder?: string;
  prefix?: string;
  suffix?: string;
  inputProps?: Pick<
    React.DetailedHTMLProps<
      React.InputHTMLAttributes<HTMLInputElement>,
      HTMLInputElement
    >,
    'inputMode'
  >;
}

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
}: TextFieldProps) => {
  const _id = useId();

  const inputId = id || _id;

  return (
    <InputLayout label={label} id={inputId} helperText={helperText}>
      <div className="flex rounded-md shadow-sm ring-1 ring-inset ring-gray-300 sm:max-w-md">
        {prefix && (
          <span className="flex select-none items-center pl-3 text-gray-500 sm:text-sm">
            {prefix}
          </span>
        )}
        <input
          type={type}
          name={name || inputId}
          id={inputId}
          className={classNames(
            'block flex-1 border-0 bg-transparent py-1.5 pl-1 text-gray-900 placeholder:text-gray-400 focus:ring-0 sm:text-sm sm:leading-6',
            !prefix && 'pl-3',
            !suffix && 'pr-3',
          )}
          placeholder={placeholder}
          {...inputProps}
        />
        {suffix && (
          <span className="flex select-none items-center pr-3 text-gray-500 sm:text-sm">
            {suffix}
          </span>
        )}
      </div>
    </InputLayout>
  );
};

export default TextField;
