import { useMemo, useState } from 'react';
import dayjs from 'dayjs';
import classNames from 'classnames';
import { getElementAttribute } from '../../../utils/dom.ts';

const MONTH_NAMES = [
  'January',
  'February',
  'March',
  'April',
  'May',
  'June',
  'July',
  'August',
  'September',
  'October',
  'November',
  'December',
] as const;
const DAYS = ['Sun', 'Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat'] as const;

const getBeforeDate = (fullDate: dayjs.Dayjs) => {
  const dates: { date: number; enabled: false; fullDate: dayjs.Dayjs }[] = [];
  const firstDayOfWeek = fullDate.startOf('month').day();
  if (firstDayOfWeek === 0) {
    return dates;
  }
  let currentDate = fullDate.subtract(firstDayOfWeek, 'day');
  while (currentDate.isBefore(fullDate, 'day')) {
    dates.push({
      date: currentDate.date(),
      enabled: false,
      fullDate: currentDate,
    });
    currentDate = currentDate.add(1, 'day');
  }
  return dates;
};

const getAfterDate = (fullDate: dayjs.Dayjs) => {
  const dates: { date: number; enabled: false; fullDate: dayjs.Dayjs }[] = [];
  const lastDayOfWeek = fullDate.endOf('month').day();
  if (lastDayOfWeek === 6) {
    return dates;
  }
  let currentDate = fullDate.add(1, 'month').startOf('month');
  while (currentDate.isAfter(fullDate, 'day') && currentDate.day() !== 0) {
    dates.push({
      date: currentDate.date(),
      enabled: false,
      fullDate: currentDate,
    });
    currentDate = currentDate.add(1, 'day');
  }
  return dates;
};

export interface CalendarProps {
  value: dayjs.Dayjs | undefined;
  onChange: (value: dayjs.Dayjs) => void;
  defaultValue?: dayjs.Dayjs;
}

const Calendar = ({ value, onChange, defaultValue }: CalendarProps) => {
  const _value = value || defaultValue;
  const [currentYear, setCurrentYear] = useState((_value ?? dayjs()).year());
  const [currentMonth, setCurrentMonth] = useState((_value ?? dayjs()).month());

  const dates = useMemo(() => {
    const fullDate = dayjs(`${currentYear}-${currentMonth + 1}-01`);
    const daysInMonth = fullDate.daysInMonth();
    const dates: { date: number; enabled: boolean; fullDate: dayjs.Dayjs }[] =
      getBeforeDate(fullDate);

    for (let i = 1; i <= daysInMonth; i++) {
      dates.push({ date: i, enabled: true, fullDate: fullDate.date(i) });
    }

    return dates.concat(getAfterDate(fullDate));
  }, [currentMonth, currentYear]);

  const handlePreviousMonth = () => {
    if (currentMonth === 0) {
      setCurrentMonth(11);
      setCurrentYear(currentYear - 1);
    } else {
      setCurrentMonth(currentMonth - 1);
    }
  };

  const handleNextMonth = () => {
    if (currentMonth === 11) {
      setCurrentMonth(0);
      setCurrentYear(currentYear + 1);
    } else {
      setCurrentMonth(currentMonth + 1);
    }
  };

  const handleSelect = (e: React.MouseEvent<HTMLDivElement>) => {
    const data = getElementAttribute(e, 'data-value');
    if (data) {
      const date = dayjs(data);
      if (date.month() !== currentMonth) {
        setCurrentMonth(date.month());
        setCurrentYear(date.year());
      }
      onChange(dayjs(data));
    }
  };

  return (
    <div className="p-4">
      <div className="flex items-center">
        <h2 className="flex-auto font-semibold text-gray-900">
          {MONTH_NAMES[currentMonth]} {currentYear}
        </h2>
        <button
          onClick={handlePreviousMonth}
          type="button"
          className="-my-1.5 flex flex-none items-center justify-center p-1.5 text-gray-400 hover:text-gray-500"
        >
          <span className="sr-only">Previous month</span>
          <svg
            className="h-5 w-5"
            viewBox="0 0 20 20"
            fill="currentColor"
            aria-hidden="true"
          >
            <path
              fillRule="evenodd"
              d="M12.79 5.23a.75.75 0 01-.02 1.06L8.832 10l3.938 3.71a.75.75 0 11-1.04 1.08l-4.5-4.25a.75.75 0 010-1.08l4.5-4.25a.75.75 0 011.06.02z"
              clipRule="evenodd"
            />
          </svg>
        </button>
        <button
          onClick={handleNextMonth}
          type="button"
          className="-my-1.5 -mr-1.5 ml-2 flex flex-none items-center justify-center p-1.5 text-gray-400 hover:text-gray-500"
        >
          <span className="sr-only">Next month</span>
          <svg
            className="h-5 w-5"
            viewBox="0 0 20 20"
            fill="currentColor"
            aria-hidden="true"
          >
            <path
              fillRule="evenodd"
              d="M7.21 14.77a.75.75 0 01.02-1.06L11.168 10 7.23 6.29a.75.75 0 111.04-1.08l4.5 4.25a.75.75 0 010 1.08l-4.5 4.25a.75.75 0 01-1.06-.02z"
              clipRule="evenodd"
            />
          </svg>
        </button>
      </div>
      <div className="mt-4 grid grid-cols-7 text-center text-xs leading-6 text-gray-500">
        {DAYS.map((day) => (
          <span key={day}>{day}</span>
        ))}
      </div>
      <div className="mt-2 grid grid-cols-7 text-sm" onClick={handleSelect}>
        {dates.map((date, i) => {
          const isSelected = (_value ?? dayjs()).isSame(date.fullDate, 'day');
          const isToday = dayjs().isSame(date.fullDate, 'day');
          const isCurrentMonth = date.fullDate.month() === currentMonth;

          return (
            <div
              key={i}
              className={classNames(
                i > 6 && 'border-t border-gray-200',
                'py-2',
              )}
              data-value={date.fullDate.format('YYYY-MM-DD')}
            >
              <span
                className={classNames(
                  isSelected && 'text-white',
                  !isSelected && isToday && 'text-indigo-600',
                  !isSelected && !isToday && isCurrentMonth && 'text-gray-900',
                  !isSelected && !isToday && !isCurrentMonth && 'text-gray-400',
                  isSelected && isToday && 'bg-indigo-600',
                  isSelected && !isToday && 'bg-gray-900',
                  !isSelected && 'hover:bg-gray-200',
                  (isSelected || isToday) && 'font-semibold',
                  'mx-auto select-none flex h-8 w-8 items-center justify-center rounded-full cursor-pointer',
                )}
              >
                <time
                  dateTime={`${currentYear}-${currentMonth + 1}-${date.date}`}
                >
                  {date.date}
                </time>
              </span>
            </div>
          );
        })}
      </div>
    </div>
  );
};

export default Calendar;
