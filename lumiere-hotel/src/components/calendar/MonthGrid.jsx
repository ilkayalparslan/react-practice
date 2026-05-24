import { format } from 'date-fns';
import { getMonthData } from '../../utils/calendarHelper';
import './MonthGrid.css';

function MonthGrid({ monthDate }) {
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
        {days.map((day) => (
          <button
            key={day.toISOString()}
            type='button'
            className='month-grid-day'
          >
            {format(day, 'd')}
          </button>
        ))}
      </div>
    </div>
  );
}

export default MonthGrid;
