import { NavLink, Outlet } from 'react-router-dom';

function Layout() {
  return (
    <div className='layout'>
      <nav className='navbar'>
        <NavLink to='/' className='nav-logo'>
          🚀 MiniApps
        </NavLink>
        <div className='nav-links'>
          <NavLink
            to='/'
            end
            className={({ isActive }) => `nav-link ${isActive ? 'active' : ''}`}
          >
            Home
          </NavLink>
          <NavLink
            to='/about'
            className={({ isActive }) => `nav-link ${isActive ? 'active' : ''}`}
          >
            About
          </NavLink>
        </div>
      </nav>
      <main className='main-content'>
        <Outlet />
      </main>
    </div>
  );
}
export default Layout;
