import Hero from '../components/Hero';
import FeaturedRooms from '../components/FeaturedRooms';
import BookingSearch from '../components/search/BookingSearch';

function Home() {
  return (
    <>
      <Hero />
      <div style={{ padding: '40px 0' }}>
        <BookingSearch />
      </div>
      <FeaturedRooms />
    </>
  );
}
export default Home;
