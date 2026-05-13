import { hotelInfo } from '../data/hotelInfo';
import './Header.css';

function Header() {
  return (
    <header className='header'>
      <div className='container header-inner'>
        {/* === Logo / brand === */}
        <a href='/' className='header-brand'>
          {hotelInfo.name}
        </a>
        {/* === Desktop nav === */}
        <nav className='header-nav'>
          <a href='/rooms' className='header-nav-link'>
            Rooms
          </a>
          <a href='/about' className='header-nav-link'>
            About
          </a>
          <a href='/contact' className='header-nav-link'>
            Contact
          </a>
          <a href='/manage' className='header-nav-link'>
            Manage Booking
          </a>
        </nav>
        {/* CTA  */}
        <a href='/reservation' className='header-cta'>
          Book Now
        </a>
      </div>
    </header>
  );
}
export default Header;
