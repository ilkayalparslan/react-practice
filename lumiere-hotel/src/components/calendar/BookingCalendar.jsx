import WeekdayHeader from './WeekdayHeader';
import MonthGrid from './MonthGrid';
import './BookingCalendar.css';
import { getMonthsList } from '../../utils/calendarHelper';

function BookingCalendar({ checkIn, checkOut, dispatch }) {
  const months = getMonthsList(6);

  const handleDayClick = (date) => {
    dispatch({ type: 'SELECT_DAY', payload: date });
  };

  return (
    <div className='booking-calendar'>
      <WeekdayHeader />
      {months.map((monthDate) => (
        <MonthGrid
          key={monthDate.toISOString()}
          monthDate={monthDate}
          onDayClick={handleDayClick}
          checkIn={checkIn}
          checkOut={checkOut}
        />
      ))}
    </div>
  );
}
export default BookingCalendar;
