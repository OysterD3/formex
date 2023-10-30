import { useId, useMemo, useState } from 'react';
import dayjs from 'dayjs';
import customParseFormat from 'dayjs/plugin/customParseFormat';
import InputLayout from '../../InputLayout';
import { Popover, PopoverContent, PopoverTrigger } from '../../Popover';
import Calendar from './Calendar.tsx';

export interface DatePickerProps {
  label: string;
  id?: string;
  name?: string;
  helperText?: string;
  placeholder?: string;
  format?: string;
  value?: string;
  onChange?: (value: string) => void;
  defaultValue?: string;
}

dayjs.extend(customParseFormat);

const DatePicker = ({
  label,
  id,
  value,
  onChange,
  defaultValue,
  format = 'YYYY-MM-DD',
  placeholder,
}: DatePickerProps) => {
  const _id = useId();

  const inputId = id || _id;
  const [open, setOpen] = useState(false);

  const isValidValue = useMemo(
    () => dayjs(value, format).isValid(),
    [value, format],
  );
  const isValidDefaultValue = useMemo(
    () => dayjs(defaultValue, format).isValid(),
    [defaultValue, format],
  );

  const handleCalendarChange = (date: dayjs.Dayjs) => {
    onChange?.(date.format(format));
    setOpen(false);
  };

  return (
    <InputLayout label={label} id={inputId}>
      <Popover open={open} onOpenChange={setOpen}>
        <PopoverTrigger onClick={() => setOpen((v) => !v)}>
          <button
            type="button"
            className="relative w-full cursor-default rounded-md bg-white py-1.5 pl-3 pr-10 text-left text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 focus:outline-none focus:ring-2 focus:ring-indigo-600 sm:text-sm sm:leading-6"
          >
            <span className="block truncate">{defaultValue || value}</span>
            {placeholder && !value && !defaultValue && (
              <span className="block truncate text-gray-500">
                {placeholder}
              </span>
            )}
            <span className="pointer-events-none absolute inset-y-0 right-0 flex items-center pr-2">
              <svg
                className="h-5 w-5 text-gray-400"
                fill="none"
                stroke="currentColor"
                strokeWidth={1.5}
                viewBox="0 0 24 24"
                xmlns="http://www.w3.org/2000/svg"
                aria-hidden="true"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  d="M6.75 3v2.25M17.25 3v2.25M3 18.75V7.5a2.25 2.25 0 012.25-2.25h13.5A2.25 2.25 0 0121 7.5v11.25m-18 0A2.25 2.25 0 005.25 21h13.5A2.25 2.25 0 0021 18.75m-18 0v-7.5A2.25 2.25 0 015.25 9h13.5A2.25 2.25 0 0121 11.25v7.5"
                />
              </svg>
            </span>
          </button>
        </PopoverTrigger>
        <PopoverContent>
          <div className="z-10 w-full rounded-md bg-white py-1 text-base shadow-lg ring-1 ring-black ring-opacity-5 focus:outline-none sm:text-sm">
            <Calendar
              value={isValidValue ? dayjs(value, format) : undefined}
              defaultValue={
                isValidDefaultValue ? dayjs(defaultValue, format) : undefined
              }
              onChange={handleCalendarChange}
            />
          </div>
        </PopoverContent>
      </Popover>
    </InputLayout>
  );
};

export default DatePicker;
