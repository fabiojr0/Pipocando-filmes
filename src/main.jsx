import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';

import { createBrowserRouter, RouterProvider } from 'react-router-dom';

import Home from './routes/Home';
import Movies from './routes/Movies';
import Series from './routes/Series';
import Search from './routes/Search';
import ItemDetails from './routes/ItemDetails';
import PageNotFound from './routes/PageNotFound'

const router = createBrowserRouter([
  {
    path: "/",
    element: <App />,
    errorElement: <PageNotFound/>,
    children:  [
      {
        path: "/", 
        element: <Home />
      },
      {
        path: "movies",
        element: <Movies />
      },
      {
        path: "series",
        element: <Series />
      },
      {
        path: "search",
        element: <Search />
      },
      {
        path: "item/:id", 
        element: <ItemDetails/>
      }
    ]
  }
]);

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
    <RouterProvider router={router} />
);
