import { useId } from 'react';
import { createBEM } from '../../utils/bem.ts';

const bem = createBEM('input-button');

export interface InputButtonProps {
  label: string;
  id?: string;
  name?: string;
  helperText?: string;
  checked?: boolean;
  type: 'radio' | 'checkbox';
  value?: string;
}

const InputButton = ({
  label,
  id,
  name,
  helperText,
  checked,
  type,
  value,
}: InputButtonProps) => {
  const _id = useId();

  const inputId = id || _id;

  return (
    <div className={bem('container')}>
      <div className={bem('input-wrapper')}>
        <input
          id={inputId}
          aria-describedby={helperText ? `${inputId}-description` : undefined}
          name={name || inputId}
          type={type}
          className={bem('input')}
          checked={checked}
          value={value}
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
};

export default InputButton;
