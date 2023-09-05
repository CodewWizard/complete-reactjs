import React from 'react';
import mealsImg from '../../assets/meals.jpg';
import classes from './Header.module.css';
import HeaderCartButton from './HeaderCartButton';

const Header =(props)=>{
    return(
        <>
            <header className={classes.header}>
                <h1>ReactMeals</h1>
                <HeaderCartButton/>
            </header>
            <div className={classes['main-image']}>
                <img src={mealsImg} alt='a table of delicious food' />  
            </div>
        </>
    )
}

export default Header;