import { useId } from 'react';
import { createBEM } from '../../utils/bem.ts';

const bem = createBEM('input-checkbox');

export interface CheckboxProps {
  label: string;
  id?: string;
  name?: string;
  helperText?: string;
}

const Checkbox = ({ id, label, name, helperText }: CheckboxProps) => {
  const _id = useId();

  const inputId = id || _id;
  return (
    <div className={bem('container')}>
      <div className={bem('checkbox-wrapper')}>
        <input
          id={inputId}
          aria-describedby={helperText ? `${inputId}-description` : undefined}
          name={name || inputId}
          type="checkbox"
          className={bem('input')}
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

export default Checkbox;
