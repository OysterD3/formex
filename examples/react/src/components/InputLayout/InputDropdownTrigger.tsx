import { forwardRef } from 'react';
import { createBEM } from '../../utils/bem.ts';

const bem = createBEM('input-dropdown-trigger');

export interface InputDropdownTriggerProps {
  value?: string;
  defaultValue?: string;
  placeholder?: string;
  endAdornment?: React.ReactNode;
  onClick?: React.MouseEventHandler<HTMLButtonElement>;
}

const InputDropdownTrigger = forwardRef<
  HTMLButtonElement,
  InputDropdownTriggerProps
>(({ defaultValue, value, placeholder, endAdornment, onClick }, ref) => {
  return (
    <button onClick={onClick} ref={ref} type="button" className={bem()}>
      <span className={bem('value')}>{defaultValue || value}</span>
      {placeholder && !value && !defaultValue && (
        <span className={bem('placeholder')}>{placeholder}</span>
      )}
      {endAdornment && (
        <span className={bem('end-adornment')}>{endAdornment}</span>
      )}
    </button>
  );
});

InputDropdownTrigger.displayName = 'InputDropdownTrigger';

export default InputDropdownTrigger;
