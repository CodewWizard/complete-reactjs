import {
  createBrowserRouter,
  RouterProvider,
  Route,
  createRoutesFromElements} from 'react-router-dom';
import { Home } from './routes/Home';
import './App.css';
import { Products } from './routes/Products';

const routeDefinitions = createRoutesFromElements(
  <Route>
    <Route path='/home' element={<Home/>} />
    <Route path='/products' element={<Products/>} />
  </Route>
);

// const router = createBrowserRouter([
//   {path: '/'},
//   {path: '/home', element: <Home />},
//   {}
// ])

const router = createBrowserRouter(routeDefinitions);

function App() {
  return (
    <div className="App">
      <h1>react router</h1>
      <RouterProvider router={router} />
    </div>
  );
}

export default App;
