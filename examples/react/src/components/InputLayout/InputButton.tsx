import { forwardRef, useId } from 'react';
import { createBEM } from '../../utils/bem.ts';

const bem = createBEM('input-button');

export interface InputButtonProps {
  label: string;
  id?: string;
  name?: string;
  helperText?: string;
  defaultChecked?: boolean;
  type: 'radio' | 'checkbox';
  value?: string;
  onChange?: (e: React.ChangeEvent<HTMLInputElement>) => void;
  disabled?: boolean;
  readOnly?: boolean;
}

const InputButton = forwardRef<HTMLInputElement, InputButtonProps>(
  (
    {
      label,
      id,
      name,
      helperText,
      defaultChecked,
      type,
      value,
      onChange,
      disabled,
      readOnly,
    },
    ref,
  ) => {
    const _id = useId();

    const inputId = id || _id;

    return (
      <div className={bem('container')}>
        <div className={bem('input-wrapper')}>
          <input
            ref={ref}
            id={inputId}
            aria-describedby={helperText ? `${inputId}-description` : undefined}
            disabled={disabled}
            readOnly={readOnly}
            name={name || inputId}
            type={type}
            className={bem('input', { disabled })}
            defaultChecked={defaultChecked}
            value={value}
            onChange={onChange}
          />
        </div>
        <div className={bem('label-wrapper')}>
          <label htmlFor={inputId} className={bem('label')}>
            {label}
          </label>
          {helperText && (
            <p id={`${inputId}-description`} className={bem('helper-text')}>
              {helperText}
            </p>
          )}
        </div>
      </div>
    );
  },
);

InputButton.displayName = 'InputButton';

export default InputButton;
