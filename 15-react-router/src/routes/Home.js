import React from 'react'
import {Link, useNavigate} from 'react-router-dom';

// useNavigate hook is used to redirect programmatically.
// it returns a function that lets you navigate programmatically.

export const Home = () => {
  const navigate = useNavigate();

  const navigateHandler =()=>{
    navigate('/products')
  }
  return (
    <>
        <h1>Home page</h1>
        <p>
          with href and achor tag <a href='/products'>list of products</a>
        </p>

        <p>
          with Link from react-router-dom <Link to='/products'>list of products</Link>
        </p>

        <p> 
           this navigates programmatically &nbsp;
          <button onClick={navigateHandler}>Navigate</button>
        </p>
    </>
  )
}
