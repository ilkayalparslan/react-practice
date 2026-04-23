import { Link } from 'react-router-dom';
import { useNavigate } from 'react-router-dom';
import useStore from '../store';
import './Home.css';

function Home() {
  const navigate = useNavigate();
  const checkIn = useStore((state) => state.checkIn);
  const setCheckIn = useStore((state) => state.setCheckIn);
  const checkOut = useStore((state) => state.checkOut);
  const setCheckOut = useStore((state) => state.setCheckOut);
  const guests = useStore((state) => state.guests);
  const setGuests = useStore((state) => state.setGuests);
  const children = useStore((state) => state.children);
  const setChildren = useStore((state) => state.setChildren);
  return (
    <div className='home'>
      {/* hero */}
      <section className='hero'>
        <div className='hero-content'>
          <h1 className='hero-title'>Welcome to Grand Hotel</h1>
          <p className='hero-subtitle'>
            Experience luxury in the heart of Istanbul
          </p>
          {/* booking bar */}
          <div className='booking-bar'>
            <div className='booking-field'>
              <label className='booking-label'>Check-in</label>
              <input
                value={checkIn}
                type='date'
                className='booking-input'
                onChange={(e) => setCheckIn(e.target.value)}
              />
            </div>
            <div className='booking-field'>
              <label className='booking-label'>Check-out</label>
              <input
                value={checkOut}
                type='date'
                className='booking-input'
                onChange={(e) => setCheckOut(e.target.value)}
              />
            </div>
            <div className='booking-field'>
              <label className='booking-label'>Guests</label>
              <select
                className='booking-input'
                value={guests}
                onChange={(e) => setGuests(e.target.value)}
              >
                <option value='1'>1 Adult</option>
                <option value='2'>2 Adults</option>
                <option value='3'>3 Adults</option>
                <option value='4'>4 Adults</option>
                <option value='5'>5 Adults</option>
              </select>
            </div>
            <div className='booking-field'>
              <label className='booking-label'>Child</label>
              <select
                className='booking-input'
                value={children}
                onChange={(e) => setChildren(e.target.value)}
              >
                <option value='0'>No Children</option>
                <option value='1'>1 Child</option>
                <option value='2'>2 Children</option>
                <option value='3'>3 Children</option>
              </select>
            </div>
            <button
              className='booking-search-btn'
              onClick={() => navigate('/rooms')}
            >
              Check Availability
            </button>
          </div>
        </div>
      </section>

      {/* featured rooms */}
      <section className='featured-section'>
        <h2 className='section-title'>Our Rooms</h2>
        <div className='featured-grid'>
          <div className='room-card'>
            <img
              src='https://images.unsplash.com/photo-1631049307264-da0ec9d70304?w=600'
              alt='Standard Room'
              className='room-image'
            />
            <div className='room-info'>
              <h3 className='room-name'>Standard Room</h3>
              <p className='room-desc'>Comfortable room with city view</p>
              <p className='room-price'>
                $120 <span>/night</span>
              </p>
            </div>
          </div>

          <div className='room-card'>
            <img
              src='https://images.unsplash.com/photo-1618773928121-c32242e63f39?w=600'
              alt='Deluxe Room'
              className='room-image'
            />
            <div className='room-info'>
              <h3 className='room-name'>Deluxe Room</h3>
              <p className='room-desc'>Spacious suite with sea view</p>
              <p className='room-price'>
                $220 <span>/night</span>
              </p>
            </div>
          </div>

          <div className='room-card'>
            <img
              className='room-image'
              src='https://images.unsplash.com/photo-1566665797739-1674de7a421a?w=600'
              alt='Family Room'
            />
            <div className='room-info'>
              <h3 className='room-name'>Family Room</h3>
              <p className='room-desc'>Perfect for families with children</p>
              <p className='room-price'>
                $180 <span>/night</span>
              </p>
            </div>
          </div>
        </div>
        <div className='section-cta'>
          <Link to='/rooms' className='view-all-btn'>
            View All Rooms →
          </Link>
        </div>
      </section>
      {/* About */}
      <section className='about-section'>
        <h2 className='section-title'>About Us</h2>
        <p className='about-text'>
          Located in the heart of Istanbul, Grand Hotel offers an unforgettable
          experience with stunning views, world-class service, and elegant
          rooms. Whether you're traveling for business or leisure, we provide
          the perfect blend of comfort and luxury.
        </p>
      </section>
    </div>
  );
}
export default Home;
