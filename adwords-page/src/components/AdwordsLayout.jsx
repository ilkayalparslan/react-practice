import { NavLink, Outlet } from 'react-router-dom';

function AdwordsLayout() {
  return (
    <div className='adwords-layout'>
      <nav className='adwords-nav'>
        <NavLink to='/' className='adwords-logo'>
          Dijitalotelcilik<span>.com</span>
        </NavLink>
        <div className='adwords-links'>
          <NavLink
            to='/'
            end
            className={({ isActive }) =>
              isActive ? 'ad-link active' : 'ad-link'
            }
          >
            Google Ads
          </NavLink>
          <NavLink
            to='/packages'
            className={({ isActive }) =>
              isActive ? 'ad-link active' : 'ad-link'
            }
          >
            Package
          </NavLink>
          <NavLink
            to='/results'
            className={({ isActive }) =>
              isActive ? 'ad-link active' : 'ad-link'
            }
          >
            Results
          </NavLink>
          <NavLink
            to='/get-started'
            className={({ isActive }) =>
              isActive ? 'ad-link active' : 'ad-link'
            }
          >
            Get Started
          </NavLink>
        </div>
      </nav>
      <main>
        <Outlet />
      </main>
      <footer className='adwords-footer'>
        <p>© 2026 dijitalotelcilik.com — Digital Marketing for Hotels</p>
      </footer>
    </div>
  );
}
export default AdwordsLayout;
