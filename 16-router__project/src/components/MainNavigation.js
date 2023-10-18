import classes from "../components/MainNavigation.module.css";
import { NavLink, Link, Outlet } from "react-router-dom";

export function MainNavigation() {
  return (
    <header className={classes.header}>
      <nav>
        <ul className={classes.list}>
          <li>
            <NavLink
              to="/"
              className={({ isActive }) =>
                isActive ? classes.active : undefined
              }
              end
            >
              Home
            </NavLink>
          </li>
          <li>
            <NavLink to="/events"  className={({ isActive }) =>
                isActive ? classes.active : undefined
              }>Events</NavLink>
          </li>
        </ul>
        <Outlet />
      </nav>
    </header>
  );
}
