import { forwardRef, useId } from 'react';
import InputLayout from '../InputLayout/InputLayout';
import { createBEM } from '../utils/bem.ts';
import { mergeProps } from '../utils/props.ts';

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
  disabled?: boolean;
  readOnly?: boolean;
}

export const DEFAULT_SWITCH_PROPS = {
  label: 'Switch',
  id: undefined,
  name: undefined,
  helperText: undefined,
  value: undefined,
  defaultValue: undefined,
  trueValue: true,
  falseValue: false,
  disabled: false,
  readOnly: false,
};

const Switch = forwardRef<HTMLInputElement, SwitchProps>((props, ref) => {
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
    disabled,
    readOnly,
  } = mergeProps(DEFAULT_SWITCH_PROPS, props);

  const _id = useId();
  const inputId = id || _id;

  const isTrueValue = (value || defaultValue) === trueValue;

  const handleChange = () => {
    if (disabled || readOnly) return;
    if (isTrueValue) {
      onChange?.(falseValue);
    } else {
      onChange?.(trueValue);
    }
  };

  return (
    <InputLayout label={label} id={inputId} helperText={helperText}>
      <input
        ref={ref}
        type="checkbox"
        value={`${trueValue}`}
        defaultChecked={isTrueValue}
        aria-checked={isTrueValue}
        name={name || inputId}
        id={inputId}
        aria-hidden={true}
        className={bem('input')}
      />
      <div
        onClick={handleChange}
        className={bem('wrapper', {
          checked: isTrueValue,
          disabled,
          readonly: readOnly,
        })}
        role="switch"
        aria-checked={isTrueValue}
      >
        <span className="sr-only">Use setting</span>
        <span
          aria-hidden="true"
          className={bem('thumb', {
            checked: isTrueValue,
            disabled,
            readonly: readOnly,
          })}
        ></span>
      </div>
    </InputLayout>
  );
});

Switch.displayName = 'Switch';

export default Switch;
