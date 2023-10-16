import classes from '../components/MainNavigation.module.css';
import {Link, Outlet} from 'react-router-dom';

export function MainNavigation() {
  return (
    <header className={classes.header}>
      <nav>
        <ul className={classes.list}>
          <li>
            <Link to='/'>Home</Link>
          </li>
          <li>
            <Link to='/events'>Events</Link>
          </li>
        </ul>
        <Outlet/>
      </nav>
    </header>
  );
}

