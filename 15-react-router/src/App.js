import {
  createBrowserRouter,
  RouterProvider,
  Route,
  createRoutesFromElements} from 'react-router-dom';
import { Home } from './routes/Home';
import './App.css';
import { ProductsPage } from './routes/Products';
import { RootLayout } from './routes/Root';
import { Error } from './routes/Error';
import  ProductDetailPage  from './routes/ProductDetail';

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
      {path: '/products', element: <ProductsPage />},
      // " : " means dynamc identifier
      {path: '/products/:productId', element: <ProductDetailPage />}
    ]
  }
])

// const router = createBrowserRouter(routeDefinitions);

function App() {
  return (
    <div>
      <RouterProvider router={router} />
    </div>
  );
}

export default App;
