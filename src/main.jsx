import React from 'react'
import ReactDOM from 'react-dom/client'
import './index.css'
import {
  createBrowserRouter,
  RouterProvider,
} from "react-router-dom";
import Root from './Pages/Root/Root.jsx';
import Home from './Pages/Home/Home';
import ErrorPage from './Pages/ErrorPage/ErrorPage';
import Donation from './Pages/ErrorPage/Donation/Donation';
import DonationCard from './Pages/DonationCard/DonationCard';
import Statistic from './Pages/Statistic/Statistic';

const router = createBrowserRouter([
  {
    path: "/",
    element: <Root></Root>,
    errorElement:<ErrorPage></ErrorPage>,
    children:[
      {
        path:'/',
        element:<Home></Home>,
        loader:()=>fetch('/public/cart.json')
      },
      {
        path:'/donation/:id',
        element:<Donation></Donation>,
        loader:()=>fetch('/public/cart.json')
      },
      {
        path:'/donationcard',
        element:<DonationCard></DonationCard>
        // loader:()=>fetch('/public/cart.json')
      },
      {
        path:'/statistic',
        element:<Statistic></Statistic>
      }
    ]
  },
]);

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
 <RouterProvider router={router} />
  </React.StrictMode>,
)
