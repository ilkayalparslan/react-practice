import { NavLink } from 'react-router-dom';
import '../css/Navbar.css';

function Navbar() {
  return (
    <nav className='navbar'>
      <div className='navbar-inner'>
        <NavLink to='/' className='navbar-logo'>
          <span className='logo-mark'>▶</span>
          <span className='logo-text'>Cinephile</span>
        </NavLink>

        <div className='navbar-links'>
          <NavLink to='/' end className='nav-link'>
            Home
          </NavLink>
          <NavLink to='/search' end className='nav-link'>
            Search
          </NavLink>
          <NavLink to='/favorites' end className='nav-link'>
            Favorites
          </NavLink>
        </div>
      </div>
    </nav>
  );
}
export default Navbar;
