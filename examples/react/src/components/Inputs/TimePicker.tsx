import dayjs from 'dayjs';
import customParseFormat from 'dayjs/plugin/customParseFormat';
import { useId, useMemo, useState } from 'react';
import { Popover, PopoverContent, PopoverTrigger } from '../Popover';
import InputLayout from '../InputLayout';
import { getElementAttribute } from '../../utils/dom.ts';
import InputDropdownTrigger from '../InputLayout/InputDropdownTrigger.tsx';
import { createBEM } from '../../utils/bem.ts';

const bem = createBEM('input-time-picker');

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
          <InputDropdownTrigger
            placeholder={placeholder}
            value={value}
            defaultValue={defaultValue}
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
        <PopoverContent>
          <ul onClick={handleChange} className={bem('dropdown')}>
            {times.map((time) => (
              <li
                key={time}
                className={bem('option')}
                id="listbox-option-0"
                role="option"
                data-value={time}
              >
                <span className={bem('option-label')}>{time}</span>
              </li>
            ))}
          </ul>
        </PopoverContent>
      </Popover>
      <input
        aria-hidden="true"
        className={bem('input')}
        id={inputId}
        name={name || inputId}
        tabIndex={-1}
      />
    </InputLayout>
  );
};

export default TimePicker;
