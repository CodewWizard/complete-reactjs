import { Link } from 'react-router-dom';
import React from 'react'
import classes from './MainNavigation.module.css';


export const MainNavigation = () => {
  return (
    <header className={classes.header}>
        <nav>
            <ul className={classes.list}>
                <li>
                    <Link to='/'>Home</Link>
                </li>
                <li>
                    <Link to='/products'>Products</Link>
                </li>
            </ul>
        </nav>
    </header>
  )
}
