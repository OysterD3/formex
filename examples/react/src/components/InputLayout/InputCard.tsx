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
}

const InputCard = forwardRef<HTMLInputElement, InputCardProps>(
  ({ type, label, name, helperText, defaultChecked, value, onChange }, ref) => {
    return (
      <label className={bem('container', { checked: !!defaultChecked })}>
        <input
          ref={ref}
          type={type}
          name={name}
          value={value}
          onChange={onChange}
          className={bem('input')}
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
