import { useMemo, useState } from 'react';
import dayjs from 'dayjs';
import { getElementAttribute } from '../../../utils/dom.ts';
import { createBEM } from '../../../utils/bem.ts';

const bem = createBEM('input-calendar');

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
    <div className={bem('container')}>
      <div className={bem('header')}>
        <h2 className={bem('year-month')}>
          {MONTH_NAMES[currentMonth]} {currentYear}
        </h2>
        <button
          onClick={handlePreviousMonth}
          type="button"
          className={bem('btn', ['prev'])}
        >
          <span className="sr-only">Previous month</span>
          <svg viewBox="0 0 20 20" fill="currentColor" aria-hidden="true">
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
          className={bem('btn', ['next'])}
        >
          <span className="sr-only">Next month</span>
          <svg viewBox="0 0 20 20" fill="currentColor" aria-hidden="true">
            <path
              fillRule="evenodd"
              d="M7.21 14.77a.75.75 0 01.02-1.06L11.168 10 7.23 6.29a.75.75 0 111.04-1.08l4.5 4.25a.75.75 0 010 1.08l-4.5 4.25a.75.75 0 01-1.06-.02z"
              clipRule="evenodd"
            />
          </svg>
        </button>
      </div>
      <div className={bem('week')}>
        {DAYS.map((day) => (
          <span key={day}>{day}</span>
        ))}
      </div>
      <div className={bem('date')} onClick={handleSelect}>
        {dates.map((date, i) => {
          const isSelected = (_value ?? dayjs()).isSame(date.fullDate, 'day');
          const isToday = dayjs().isSame(date.fullDate, 'day');
          const isCurrentMonth = date.fullDate.month() === currentMonth;

          return (
            <div
              key={i}
              className={bem('day-of-month-wrapper', {
                'not-first-week': i > 6,
              })}
              data-value={date.fullDate.format('YYYY-MM-DD')}
            >
              <span
                className={bem('day-of-month', {
                  selected: isSelected,
                  today: isToday,
                  'current-month': isCurrentMonth,
                })}
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
