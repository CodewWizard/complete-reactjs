import {
  createBrowserRouter,
  RouterProvider} from 'react-router-dom';
import './App.css';
import {Home} from './pages/Home';
import {Events} from './pages/Events';
import {NewEvent} from './pages/NewEvent';
import {MainNavigation} from './components/MainNavigation';
import {EventsList} from './components/EventsList';

const router = createBrowserRouter([
  {
    path : '/',
    element: <MainNavigation />,
    children: [
      {path: '/', element: <Home />},
      {path: '/events' , element: <Events />},
      {path: '/events/new', element: <NewEvent />},
      {path: '/events/eventslist', element: <EventsList />}
    ]
  }
])

function App() {
  return (
    <div className="App">
      <RouterProvider router={router} />
    </div>
  );
}

export default App;
