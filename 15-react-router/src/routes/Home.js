import React from 'react'
import {Link} from 'react-router-dom';

export const Home = () => {
  return (
    <>
        <h1>Home page</h1>
        <p>with href and achor tag <a href='/products'>list of products</a></p>
        <p>with Link from react-router-dom <Link to='/products'>list of products</Link></p>
    </>
  )
}
