import { hotelInfo } from '../data/hotelInfo';
import { Link, NavLink } from 'react-router-dom';
import './Header.css';

const navLinkClass = ({ isActive }) =>
  isActive ? 'header-nav-link header-nav-link-active' : 'header-nav-link';

function Header() {
  return (
    <header className='header'>
      <div className='container header-inner'>
        {/* === Logo / brand === */}
        <Link to='/' className='header-brand'>
          {hotelInfo.name}
        </Link>
        {/* === Desktop nav === */}
        <nav className='header-nav'>
          <NavLink to='/rooms' className={navLinkClass}>
            Rooms
          </NavLink>
          <NavLink to='/about' className={navLinkClass}>
            About
          </NavLink>
          <NavLink to='/contact' className={navLinkClass}>
            Contact
          </NavLink>
          <NavLink to='/manage' className={navLinkClass}>
            Manage Booking
          </NavLink>
        </nav>
        {/* CTA  */}
        <Link to='/rooms' className='header-cta'>
          Book Now
        </Link>
      </div>
    </header>
  );
}
export default Header;
