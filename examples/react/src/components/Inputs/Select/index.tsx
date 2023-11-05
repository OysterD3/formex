import {
  Children,
  cloneElement,
  isValidElement,
  useId,
  useRef,
  useState,
} from 'react';
import InputLayout from '../../InputLayout';
import { Popover, PopoverContent, PopoverTrigger } from '../../Popover';
import { getElementAttribute } from '../../../utils/dom.ts';
import InputDropdownTrigger from '../../InputLayout/InputDropdownTrigger.tsx';
import { createBEM } from '../../../utils/bem.ts';

const bem = createBEM('input-select');

export interface SelectProps {
  label: string;
  id?: string;
  name?: string;
  helperText?: string;
  placeholder?: string;
  value?: string;
  onChange?: (value: string) => void;
  defaultValue?: string;
  children: React.ReactNode;
}

const Select = ({
  label,
  id,
  name,
  value,
  onChange,
  defaultValue,
  placeholder,
  children,
}: SelectProps) => {
  const _id = useId();

  const inputId = id || _id;
  const activatorRef = useRef<HTMLButtonElement>(null);
  const [open, setOpen] = useState(false);

  const handleChange = (e: React.MouseEvent<HTMLUListElement>) => {
    const data = getElementAttribute(e, 'data-value');
    if (data) {
      onChange?.(data);
      setOpen(false);
    }
  };

  return (
    <InputLayout label={label} id={inputId}>
      <Popover open={open} onOpenChange={setOpen}>
        <PopoverTrigger onClick={() => setOpen((v) => !v)}>
          <InputDropdownTrigger
            ref={activatorRef}
            value={value}
            defaultValue={defaultValue}
            placeholder={placeholder}
            endAdornment={
              <svg viewBox="0 0 20 20" fill="currentColor" aria-hidden="true">
                <path
                  fillRule="evenodd"
                  d="M10 3a.75.75 0 01.55.24l3.25 3.5a.75.75 0 11-1.1 1.02L10 4.852 7.3 7.76a.75.75 0 01-1.1-1.02l3.25-3.5A.75.75 0 0110 3zm-3.76 9.2a.75.75 0 011.06.04l2.7 2.908 2.7-2.908a.75.75 0 111.1 1.02l-3.25 3.5a.75.75 0 01-1.1 0l-3.25-3.5a.75.75 0 01.04-1.06z"
                  clipRule="evenodd"
                />
              </svg>
            }
          />
        </PopoverTrigger>
        <PopoverContent style={{ minWidth: activatorRef.current?.clientWidth }}>
          <ul className={bem('dropdown')} onClick={handleChange}>
            {Children.map(children, (child) => {
              if (isValidElement(child)) {
                return cloneElement(child as React.ReactElement, {
                  name,
                  isSelected: true,
                });
              }
              return null;
            })}
          </ul>
        </PopoverContent>
      </Popover>
      <input
        aria-hidden="true"
        className={bem('input')}
        id={inputId}
        name={name || inputId}
        tabIndex={-1}
        value={value ?? defaultValue}
      />
    </InputLayout>
  );
};

export default Select;
