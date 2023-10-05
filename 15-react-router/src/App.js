import {
  createBrowserRouter,
  RouterProvider,
  Route,
  createRoutesFromElements} from 'react-router-dom';
import { Home } from './routes/Home';
import './App.css';
import { Products } from './routes/Products';
import { RootLayout } from './routes/Root';
import { Error } from './routes/Error';

// const routeDefinitions = createRoutesFromElements(
//   <Route>
//     <Route path='/home' element={<Home/>} />
//     <Route path='/products' element={<Products/>} />
//   </Route>
// );

const router = createBrowserRouter([
  {
    path: '/',
    element: <RootLayout/>,
    errorElement: <Error />,
    children: [
      {path: '/', element: <Home />},
      {path: '/products', element: <Products />}
    ]
  }
])

// const router = createBrowserRouter(routeDefinitions);

function App() {
  return (
    <div>
      <h1>react router</h1>
      <RouterProvider router={router} />
    </div>
  );
}

export default App;
