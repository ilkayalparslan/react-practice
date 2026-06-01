import Hero from '../components/Hero';
import FeaturedRooms from '../components/FeaturedRooms';
import BookingCalendar from '../components/calendar/BookingCalendar';

function Home() {
  return (
    <>
      <Hero />
      <BookingCalendar />
      <FeaturedRooms />
    </>
  );
}
export default Home;
