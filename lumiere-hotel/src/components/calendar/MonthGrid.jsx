import { format, addDays } from 'date-fns';
import { getMonthData } from '../../utils/calendarHelper';
import './MonthGrid.css';

function MonthGrid({ monthDate, onDayClick, checkIn, checkOut }) {
  const { monthLabel, firstDayOffset, days } = getMonthData(monthDate);

  return (
    <div className='month-grid'>
      <div className='month-grid-title'>{monthLabel}</div>
      <div className='month-grid-days'>
        {Array.from({ length: firstDayOffset }).map((_, i) => (
          <div
            key={`empty-${i}`}
            className='month-grid-day month-grid-day-empty'
          />
        ))}
        {days.map((day) => {
          const isCheckIn = checkIn && day.getTime() === checkIn.getTime();
          const isCheckOut = checkOut && day.getTime() === checkOut.getTime();
          const isSelected = isCheckIn || isCheckOut;
          const isInRange =
            checkIn &&
            checkOut &&
            day.getTime() > checkIn.getTime() &&
            day.getTime() < checkOut.getTime();

          const today = new Date();
          today.setHours(0, 0, 0, 0);
          const isPast = day.getTime() < today.getTime();
          const isBeforeCheckIn =
            checkIn && !checkOut && day.getTime() < checkIn.getTime();

          const maxStayDate = checkIn ? addDays(checkIn, 30) : null;
          const isAfterMaxStay =
            checkIn &&
            !checkOut &&
            maxStayDate &&
            day.getTime() > maxStayDate.getTime();

          const isDisabled = isPast || isBeforeCheckIn || isAfterMaxStay;

          let className = 'month-grid-day';
          if (isSelected) className += ' selected';
          if (isInRange) className += ' in-range';
          if (isDisabled) className += ' past';

          return (
            <button
              key={day.toISOString()}
              type='button'
              className={className}
              onClick={() => onDayClick(day)}
              disabled={isDisabled}
            >
              {format(day, 'd')}
            </button>
          );
        })}
      </div>
    </div>
  );
}

export default MonthGrid;
