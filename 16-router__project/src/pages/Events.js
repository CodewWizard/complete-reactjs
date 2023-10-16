import React from 'react'
import {Link} from 'react-router-dom';

export const Events = () => {
  return (
    <>
      <h1>Events page</h1>
      <Link to='/events/new'>New Event</Link>
    </>
  )
}