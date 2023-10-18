import {Outlet} from 'react'
import EventsNavigation from '../components/EventsNavigation'

function EventsRoot () {
  return (
    <>
        <EventsNavigation />
        <Outlet />
    </>
  )
}

export default EventsRoot;