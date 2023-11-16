import { forwardRef, useId, useMemo, useState } from 'react';
import dayjs from 'dayjs';
import customParseFormat from 'dayjs/plugin/customParseFormat';
import InputLayout from '../../InputLayout';
import { Popover, PopoverContent, PopoverTrigger } from '../../Popover';
import { createBEM } from '../../../utils/bem.ts';
import InputDropdownTrigger from '../../InputLayout/InputDropdownTrigger.tsx';
import { mergeProps } from '../../../utils/props.ts';
import Calendar from './Calendar.tsx';

const bem = createBEM('input-date-picker');

export interface DatePickerProps {
  label?: string;
  id?: string;
  name?: string;
  helperText?: string;
  placeholder?: string;
  format?: string;
  value?: string;
  onChange?: (value: string) => void;
  defaultValue?: string;
  disabled?: boolean;
  readOnly?: boolean;
}

dayjs.extend(customParseFormat);

export const DEFAULT_DATE_PICKER_PROPS = {
  label: 'Date picker',
  id: undefined,
  name: undefined,
  helperText: undefined,
  placeholder: 'Select date',
  format: 'YYYY-MM-DD',
  value: undefined,
  defaultValue: undefined,
  disabled: false,
  readOnly: false,
};

const DatePicker = forwardRef<HTMLButtonElement, DatePickerProps>(
  (props, ref) => {
    const {
      label,
      id,
      name,
      helperText,
      placeholder,
      format,
      value,
      onChange,
      defaultValue,
      disabled,
      readOnly,
    } = mergeProps(DEFAULT_DATE_PICKER_PROPS, props);

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
      <InputLayout label={label} id={inputId} helperText={helperText}>
        <Popover open={open} onOpenChange={setOpen}>
          <PopoverTrigger onClick={() => setOpen((v) => !v)}>
            <InputDropdownTrigger
              ref={ref}
              disabled={disabled}
              readOnly={readOnly}
              value={value}
              defaultValue={defaultValue}
              placeholder={placeholder}
              endAdornment={
                <svg
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
              }
            />
          </PopoverTrigger>
          <PopoverContent>
            <div className={bem('dropdown')}>
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
        <input
          aria-hidden="true"
          type="hidden"
          className={bem('input')}
          tabIndex={-1}
          id={inputId}
          name={name}
          value={isValidValue ? value : defaultValue}
        />
      </InputLayout>
    );
  },
);

DatePicker.displayName = 'DatePicker';

export default DatePicker;
