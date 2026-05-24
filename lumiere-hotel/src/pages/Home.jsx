import Hero from '../components/Hero';
import FeaturedRooms from '../components/FeaturedRooms';
import MonthGrid from '../components/calendar/MonthGrid';
import WeekdayHeader from '../components/calendar/WeekdayHeader';
import { getMonthsList } from '../utils/calendarHelper';

function Home() {
  const months = getMonthsList(6);
  return (
    <>
      <Hero />
      <div
        style={{
          padding: 0,
          maxWidth: '500px',
          margin: '0 auto',
          maxHeight: '500px',
          overflowY: 'auto',
        }}
      >
        <h2 style={{ marginBottom: '24px' }}>Calendar grid test:</h2>
        <WeekdayHeader />
        {months.map((monthDate) => (
          <MonthGrid key={monthDate.toISOString()} monthDate={monthDate} />
        ))}
      </div>
      <FeaturedRooms />
    </>
  );
}
export default Home;
