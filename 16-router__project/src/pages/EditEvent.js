import React from 'react';
import {Link} from 'react-router-dom';

const DUMMY_EVENTS = [
  {
    id: 'e1',
    title: 'some event'
  },
  {
    id: 'e2',
    title: 'another event'
  }
]


const EditEvent = () => {
  return (
    <>
      <h1>events page</h1>
      <ul>
        {DUMMY_EVENTS.map((event)=> 
          <li key={event.id}>
            <Link to={event.id}>{event.title}</Link>
          </li>)}
      </ul>
    </>
  )
}

export default EditEvent;