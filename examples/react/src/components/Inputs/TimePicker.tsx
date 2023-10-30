import dayjs from 'dayjs';
import customParseFormat from 'dayjs/plugin/customParseFormat';
import { useId, useMemo, useState } from 'react';
import { Popover, PopoverContent, PopoverTrigger } from '../Popover';
import InputLayout from '../InputLayout';
import { getElementAttribute } from '../../utils/dom.ts';

dayjs.extend(customParseFormat);

export interface TimePickerProps {
  value?: string;
  onChange?: (value: string) => void;
  label: string;
  placeholder?: string;
  helperText?: string;
  interval?: 1 | 15 | 30;
  format?: string;
  id?: string;
  name?: string;
  defaultValue?: string;
}

export const generateTimes = (interval: number, format: string) => {
  const startTime = dayjs().startOf('day');
  const endTime = dayjs().endOf('day').subtract(interval, 'minute');
  const times: string[] = [];

  let currentTime = startTime;
  while (currentTime.isBefore(endTime)) {
    times.push(currentTime.format(format));
    currentTime = currentTime.add(interval, 'minute');
  }

  times.push(currentTime.format(format));
  return times;
};

// if value is undefined - uses current date in company timezone as the base date
// if value is defined - sets the hour and minute of the provided date

const TimePicker = ({
  value,
  onChange,
  interval = 15,
  label,
  name,
  id,
  format = 'HH:mm',
  defaultValue,
  placeholder,
}: TimePickerProps) => {
  const _id = useId();

  const inputId = id || _id;
  const [open, setOpen] = useState(false);

  const _value = useMemo(() => value ?? defaultValue, [value, defaultValue]);

  const handleChange = (e: React.MouseEvent<HTMLUListElement>) => {
    const data = getElementAttribute(e, 'data-value');
    if (data) {
      onChange?.(data);
      setOpen(false);
    }
  };

  const times = useMemo(
    () => generateTimes(interval, format),
    [interval, format],
  );

  return (
    <InputLayout label={label} id={inputId}>
      <Popover open={open} onOpenChange={setOpen}>
        <PopoverTrigger onClick={() => setOpen((v) => !v)}>
          <button
            type="button"
            className="relative w-full cursor-default rounded-md bg-white py-1.5 pl-3 pr-10 text-left text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 focus:outline-none focus:ring-2 focus:ring-indigo-600 sm:text-sm sm:leading-6"
          >
            <span className="block truncate">{_value}</span>
            {placeholder && !_value && (
              <span className="block truncate text-gray-500">
                {placeholder}
              </span>
            )}
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
        </PopoverTrigger>
        <PopoverContent>
          <ul
            onClick={handleChange}
            className="z-10 mt-1 max-h-60 w-full overflow-auto rounded-md bg-white py-1 text-base shadow-lg ring-1 ring-black ring-opacity-5 focus:outline-none sm:text-sm"
          >
            {times.map((time) => (
              <li
                key={time}
                className="text-gray-900 relative cursor-default select-none py-2 pl-3 pr-9"
                id="listbox-option-0"
                role="option"
                data-value={time}
              >
                <span className="font-normal block truncate">{time}</span>
              </li>
            ))}
          </ul>
        </PopoverContent>
      </Popover>
      <input
        aria-hidden="true"
        className="sr-only"
        id={inputId}
        name={name || inputId}
        tabIndex={-1}
      />
    </InputLayout>
  );
};

export default TimePicker;
