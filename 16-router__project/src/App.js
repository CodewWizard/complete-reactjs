import { createBrowserRouter, RouterProvider } from "react-router-dom";
import "./App.css";
import { Home } from "./pages/Home";
import { Events } from "./pages/Events";
import { NewEvent } from "./pages/NewEvent";
import EventDetail from './pages/EventDetail';
import Root from "./pages/Root";
import EditEvent from './pages/EditEvent';
import EventsRoot from "./pages/EventsRoot";

const router = createBrowserRouter([
  {
    path: '/',
    element: <Root />,
    children: [
      { index: true, element: <Home />},
      {
        path: 'events',
        element: <EventsRoot />,
        children: [
          {index: true, element: <Events />},
          {path: ':eventId', element: <EventDetail />},
          {path: 'new', element: <NewEvent />},
          {path: ':eventId/edit', element: <EditEvent />},
        ]
      }
    ]
  }
]);

function App() {
  return (
    <div className="App">
      <RouterProvider router={router} />
    </div>
  );
}

export default App;
