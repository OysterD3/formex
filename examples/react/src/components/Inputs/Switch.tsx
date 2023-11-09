import { useId } from 'react';
import InputLayout from '../InputLayout';
import { createBEM } from '../../utils/bem.ts';
import { mergeProps } from '../../utils/props.ts';

const bem = createBEM('input-switch');

type Value = string | number | boolean;

export interface SwitchProps {
  id?: string;
  name?: string;
  label?: string;
  helperText?: string;
  value?: Value;
  onChange?: (value: Value) => void;
  trueValue?: Value;
  falseValue?: Value;
  defaultValue?: Value;
}

export const DEFAULT_SWITCH_PROPS = {
  label: '',
  id: undefined,
  name: undefined,
  helperText: undefined,
  value: undefined,
  defaultValue: undefined,
  trueValue: true,
  falseValue: false,
};

const Switch = (props: SwitchProps) => {
  const {
    label,
    id,
    name,
    helperText,
    value,
    onChange,
    defaultValue,
    trueValue,
    falseValue,
  } = mergeProps(DEFAULT_SWITCH_PROPS, props);

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
