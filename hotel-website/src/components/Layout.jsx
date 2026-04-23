import { NavLink, Outlet } from "react-router-dom";

function Layout() {
  return (
    <div className="layout">
      <nav className="navbar">
        <NavLink to="/" className="nav-logo">
          🏨 Grand Hotel
        </NavLink>
        <div className="nav-links">
          <NavLink
            to="/"
            end
            className={({ isActive }) =>
              isActive ? "nav-link active" : "nav-link"
            }
          >
            Home
          </NavLink>
          <NavLink
            to="/rooms"
            className={({ isActive }) =>
              isActive ? "nav-link active" : "nav-link"
            }
          >
            Rooms
          </NavLink>
          <NavLink
            to="/reservation"
            className={({ isActive }) =>
              isActive ? "nav-link active" : "nav-link"
            }
          >
            Reservation
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
