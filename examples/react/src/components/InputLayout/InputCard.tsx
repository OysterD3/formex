import { forwardRef } from 'react';
import { createBEM } from '../../utils/bem.ts';

const bem = createBEM('input-card');

export interface InputCardProps {
  type: 'radio' | 'checkbox';
  label: string;
  name?: string;
  helperText?: string;
  defaultChecked?: boolean;
  value?: string;
  onChange?: (e: React.ChangeEvent<HTMLInputElement>) => void;
  disabled?: boolean;
}

const InputCard = forwardRef<HTMLInputElement, InputCardProps>(
  (
    {
      type,
      label,
      name,
      helperText,
      defaultChecked,
      value,
      onChange,
      disabled,
    },
    ref,
  ) => {
    return (
      <label
        className={bem('container', { checked: !!defaultChecked, disabled })}
      >
        <input
          ref={ref}
          type={type}
          name={name}
          disabled={disabled}
          value={value}
          onChange={onChange}
          className={bem('input', { disabled })}
          defaultChecked={defaultChecked}
        />
        <span className={bem('wrapper')}>
          <span className={bem('label')}>{label}</span>
          <span className={bem('helper-text')}>{helperText}</span>
        </span>
      </label>
    );
  },
);

InputCard.displayName = 'InputCard';

export default InputCard;
