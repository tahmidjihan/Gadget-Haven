import { StrictMode } from 'react';
import { createRoot } from 'react-dom/client';
import { createBrowserRouter, RouterProvider } from 'react-router-dom';
import './index.css';
import Home from './pages/home';
import Statistics from './pages/Statistics';
import Dashboard from './pages/Dashboard';
import Root from './root';
import Product from './pages/product';
import Warranty from './pages/Warranty';
import Err from './pages/404';

const router = createBrowserRouter([
  {
    path: '/',
    element: <Root />,
    errorElement: <Err />,
    children: [
      {
        path: '/',
        element: <Home />,
      },
      {
        path: '/statistics',
        element: <Statistics />,
      },
      {
        path: '/dashboard',
        element: <Dashboard />,
      },
      {
        path: '/warranty',
        element: <Warranty />,
      },
      {
        path: '/product/:id',
        loader: ({ params }) => {
          return params;
        },
        element: <Product />,
      },
    ],
  },
]);

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <RouterProvider router={router} />
  </StrictMode>
);
