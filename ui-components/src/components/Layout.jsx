import { NavLink, Outlet } from 'react-router-dom';

function Layout() {
  return (
    <div className='layout'>
      <nav className='navbar'>
        <span className='nav-logo'>🧩 UI Components</span>
        <div className='nav-links'>
          <NavLink
            to='/'
            end
            className={({ isActive }) =>
              isActive ? 'nav-link active' : 'nav-link'
            }
          >
            Home
          </NavLink>
          <NavLink
            to='/faq'
            className={({ isActive }) =>
              isActive ? 'nav-link active' : 'nav-link'
            }
          >
            FAQ
          </NavLink>
          <NavLink
            to='/testimonials'
            className={({ isActive }) =>
              isActive ? 'nav-link active' : 'nav-link'
            }
          >
            Testimonials
          </NavLink>
        </div>
      </nav>
      <main>
        <Outlet />
      </main>
    </div>
  );
}
export default Layout;
