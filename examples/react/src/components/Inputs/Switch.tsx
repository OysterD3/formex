import { useId } from 'react';
import classNames from 'classnames';
import InputLayout from '../InputLayout';

type Value = string | number | boolean;

export interface SwitchProps {
  id?: string;
  name?: string;
  label: string;
  helperText?: string;
  value?: Value;
  onChange?: (value: Value) => void;
  trueValue?: Value;
  falseValue?: Value;
  defaultValue?: Value;
}

const Switch = ({
  id,
  name,
  label,
  trueValue = true,
  falseValue = false,
  defaultValue,
  value,
  helperText,
  onChange,
}: SwitchProps) => {
  const _id = useId();
  const inputId = id || _id;

  const isTrueValue = (value || defaultValue) === trueValue;

  const handleChange = () => {
    if (isTrueValue) {
      onChange?.(falseValue);
    } else {
      onChange?.(trueValue);
    }
  };

  return (
    <InputLayout label={label} id={inputId} helperText={helperText}>
      <input
        type="checkbox"
        value={`${trueValue}`}
        checked={isTrueValue}
        aria-checked={isTrueValue}
        name={name || inputId}
        id={inputId}
        aria-hidden={true}
        className="sr-only"
      />
      <div
        onClick={handleChange}
        className={classNames(
          'bg-gray-200 relative inline-flex h-6 w-11 flex-shrink-0 cursor-pointer rounded-full border-2 border-transparent transition-colors duration-200 ease-in-out focus:outline-none focus:ring-2 focus:ring-indigo-600 focus:ring-offset-2',
          isTrueValue ? 'bg-indigo-600' : 'bg-gray-200',
        )}
        role="switch"
        aria-checked="false"
      >
        <span className="sr-only">Use setting</span>
        <span
          aria-hidden="true"
          className={classNames(
            'pointer-events-none inline-block h-5 w-5 transform rounded-full bg-white shadow ring-0 transition duration-200 ease-in-out',
            isTrueValue ? 'translate-x-5' : 'translate-x-0',
          )}
        ></span>
      </div>
    </InputLayout>
  );
};

export default Switch;
