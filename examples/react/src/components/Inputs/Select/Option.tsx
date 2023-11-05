import { createBEM } from '../../../utils/bem.ts';

const bem = createBEM('input-select-option');

export interface OptionProps {
  value: string;
  children: string | React.ReactNode;
  isSelected?: boolean;
}

const Option = ({ value, children, isSelected }: OptionProps) => {
  return (
    <li
      className={bem('wrapper')}
      data-value={value}
      role="option"
      aria-selected={isSelected}
    >
      {typeof children === 'string' ? (
        <span className={bem('text')}>{children}</span>
      ) : (
        children
      )}
      <span className={bem('checkmark-wrapper')}>
        <svg
          className={bem('checkmark', { hidden: !isSelected })}
          viewBox="0 0 20 20"
          fill="currentColor"
          aria-hidden={!isSelected}
        >
          <path
            fillRule="evenodd"
            d="M16.704 4.153a.75.75 0 01.143 1.052l-8 10.5a.75.75 0 01-1.127.075l-4.5-4.5a.75.75 0 011.06-1.06l3.894 3.893 7.48-9.817a.75.75 0 011.05-.143z"
            clipRule="evenodd"
          />
        </svg>
      </span>
    </li>
  );
};

export default Option;
