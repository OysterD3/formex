import { createBEM } from '../../utils/bem.ts';

const bem = createBEM('input-card');

export interface InputCardProps {
  type: 'radio' | 'checkbox';
  label: string;
  name?: string;
  helperText?: string;
  checked?: boolean;
  value?: string;
}

const InputCard = ({
  type,
  label,
  name,
  helperText,
  checked,
  value,
}: InputCardProps) => {
  return (
    <label className={bem('container', { checked: !!checked })}>
      <input type={type} name={name} value={value} className={bem('input')} />
      <span className={bem('wrapper')}>
        <span className={bem('label')}>{label}</span>
        <span className={bem('helper-text')}>{helperText}</span>
      </span>
      <svg
        className={bem('checked-icon', { hidden: !checked })}
        viewBox="0 0 20 20"
        fill="currentColor"
        aria-hidden={!checked}
      >
        <path
          fillRule="evenodd"
          d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.857-9.809a.75.75 0 00-1.214-.882l-3.483 4.79-1.88-1.88a.75.75 0 10-1.06 1.061l2.5 2.5a.75.75 0 001.137-.089l4-5.5z"
          clipRule="evenodd"
        />
      </svg>
      <span
        className={bem('highlight', { checked: !!checked })}
        aria-hidden="true"
      ></span>
    </label>
  );
};

export default InputCard;
