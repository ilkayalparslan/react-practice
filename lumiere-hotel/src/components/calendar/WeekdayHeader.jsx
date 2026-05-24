import './WeekdayHeader.css';

const WEEKDAYS = ['Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat', 'Sun'];

function WeekdayHeader() {
  return (
    <div className='weekday-header'>
      {WEEKDAYS.map((day) => (
        <div key={day} className='weekday-header-day'>
          {day}
        </div>
      ))}
    </div>
  );
}

export default WeekdayHeader;
