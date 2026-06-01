import { useState } from 'react';
import WeekdayHeader from './WeekdayHeader';
import MonthGrid from './MonthGrid';
import './BookingCalendar.css';
import { getMonthsList } from '../../utils/calendarHelper';

function BookingCalendar() {
  const [checkIn, setCheckIn] = useState(null);
  const [checkOut, setCheckOut] = useState(null);

  const months = getMonthsList(6);

  const handleDayClick = (date) => {
    if (checkIn === null) {
      setCheckIn(date);
      return;
    }

    if (checkOut === null) {
      if (date.getTime() === checkIn.getTime()) {
        return;
      }
      setCheckOut(date);
      return;
    }

    setCheckIn(date);
    setCheckOut(null);
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
