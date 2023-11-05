import { useId } from 'react';
import InputLayout from '../InputLayout';
import { createBEM } from '../../utils/bem.ts';

const bem = createBEM('input-switch');

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
        className={bem('input')}
      />
      <div
        onClick={handleChange}
        className={bem('wrapper', { checked: isTrueValue })}
        role="switch"
        aria-checked={isTrueValue}
      >
        <span className="sr-only">Use setting</span>
        <span
          aria-hidden="true"
          className={bem('thumb', { checked: isTrueValue })}
        ></span>
      </div>
    </InputLayout>
  );
};

export default Switch;
