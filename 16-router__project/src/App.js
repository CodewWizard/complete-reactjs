import { createBrowserRouter, RouterProvider } from "react-router-dom";
import "./App.css";
import { Home } from "./pages/Home";
import { Events } from "./pages/Events";
import { NewEvent } from "./pages/NewEvent";
import { EventsList } from "./components/EventsList";
import EventDetail from './pages/EventDetail';
import Root from "./pages/Root";
import EditEvent from './pages/EditEvent';

const router = createBrowserRouter([
  { path: "/", element: <Root />},
  { path: "/", element: <Home /> },
  { path: "/events", element: <Events /> },
  { path: "/events/:eventId", element: <EventDetail />},
  { path: "/events/new", element: <NewEvent /> },
  { path: "/events/:eventId/edit", element: <EditEvent />},
  { path: "/events/eventslist", element: <EventsList /> }
]);

function App() {
  return (
    <div className="App">
      <RouterProvider router={router} />
    </div>
  );
}

export default App;
