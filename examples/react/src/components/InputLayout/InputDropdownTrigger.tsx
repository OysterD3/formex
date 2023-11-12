import { forwardRef } from 'react';
import { createBEM } from '../../utils/bem.ts';

const bem = createBEM('input-dropdown-trigger');

export interface InputDropdownTriggerProps {
  value?: React.ReactNode;
  defaultValue?: string;
  placeholder?: string;
  endAdornment?: React.ReactNode;
  onClick?: React.MouseEventHandler<HTMLButtonElement>;
  disabled?: boolean;
  readOnly?: boolean;
}

const InputDropdownTrigger = forwardRef<
  HTMLButtonElement,
  InputDropdownTriggerProps
>(
  (
    {
      defaultValue,
      value,
      placeholder,
      endAdornment,
      onClick,
      disabled,
      readOnly,
    },
    ref,
  ) => {
    return (
      <button
        disabled={disabled}
        onClick={!readOnly && !disabled ? onClick : undefined}
        ref={ref}
        type="button"
        className={bem({ disabled })}
      >
        <span className={bem('value')}>{defaultValue || value}</span>
        {placeholder && !value && !defaultValue && (
          <span className={bem('placeholder')}>{placeholder}</span>
        )}
        {endAdornment && (
          <span className={bem('end-adornment')}>{endAdornment}</span>
        )}
      </button>
    );
  },
);

InputDropdownTrigger.displayName = 'InputDropdownTrigger';

export default InputDropdownTrigger;
