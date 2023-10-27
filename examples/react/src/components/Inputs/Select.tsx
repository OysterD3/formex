import { useId, useRef, useState } from 'react';
import { useFloating } from '@floating-ui/react-dom';
import { createPortal } from 'react-dom';
import ClickAwayListener from 'react-click-away-listener';
import InputLayout from '../InputLayout';

export interface SelectProps {
  label: string;
  id?: string;
  name?: string;
  helperText?: string;
  placeholder?: string;
}

const Select = ({ label, id }: SelectProps) => {
  const _id = useId();
  const { refs, floatingStyles } = useFloating();
  const [open, setOpen] = useState(false);
  const activatorRef = useRef<HTMLButtonElement>(null);

  const inputId = id || _id;

  return (
    <InputLayout label={label} id={inputId}>
      <ClickAwayListener onClickAway={() => setOpen(false)}>
        <div ref={refs.setReference}>
          <button
            ref={activatorRef}
            onClick={() => setOpen(!open)}
            type="button"
            className="relative w-full cursor-default rounded-md bg-white py-1.5 pl-3 pr-10 text-left text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 focus:outline-none focus:ring-2 focus:ring-indigo-600 sm:text-sm sm:leading-6"
          >
            <span className="block truncate">Tom Cook</span>
            <span className="pointer-events-none absolute inset-y-0 right-0 flex items-center pr-2">
              <svg
                className="h-5 w-5 text-gray-400"
                viewBox="0 0 20 20"
                fill="currentColor"
                aria-hidden="true"
              >
                <path
                  fillRule="evenodd"
                  d="M10 3a.75.75 0 01.55.24l3.25 3.5a.75.75 0 11-1.1 1.02L10 4.852 7.3 7.76a.75.75 0 01-1.1-1.02l3.25-3.5A.75.75 0 0110 3zm-3.76 9.2a.75.75 0 011.06.04l2.7 2.908 2.7-2.908a.75.75 0 111.1 1.02l-3.25 3.5a.75.75 0 01-1.1 0l-3.25-3.5a.75.75 0 01.04-1.06z"
                  clipRule="evenodd"
                />
              </svg>
            </span>
          </button>
          {open &&
            createPortal(
              <ul
                className="z-10 mt-1 max-h-60 w-full overflow-auto rounded-md bg-white py-1 text-base shadow-lg ring-1 ring-black ring-opacity-5 focus:outline-none sm:text-sm"
                ref={refs.setFloating}
                style={{
                  width: activatorRef.current
                    ? activatorRef.current.clientWidth
                    : undefined,
                  ...floatingStyles,
                }}
              >
                <li
                  className="text-gray-900 relative cursor-default select-none py-2 pl-3 pr-9"
                  id="listbox-option-0"
                  role="option"
                >
                  <span className="font-normal block truncate">
                    Wade Cooper
                  </span>
                </li>
              </ul>,
              document.body,
            )}
        </div>
      </ClickAwayListener>
    </InputLayout>
  );
};

export default Select;
