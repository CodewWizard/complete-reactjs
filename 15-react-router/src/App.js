import {createBrowserRouter, RouterProvider} from 'react-router-dom';
import { Home } from './routes/Home';
import './App.css';

const router = createBrowserRouter([
  {path: '/'},
  {path: '/home', element: <Home />},
  {}
])

function App() {
  return (
    <div className="App">
      <h1>react router</h1>
      <RouterProvider router={router} />
    </div>
  );
}

export default App;
