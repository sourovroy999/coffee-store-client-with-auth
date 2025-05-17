import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App.jsx'

import {
  createBrowserRouter,
  RouterProvider,
} from "react-router";
import MainLayout from './layouts/MainLayout.jsx';
import Home from './components/Home.jsx';
import AddCoffee from './components/AddCoffee.jsx';
import UpdateCoffee from './components/UpdateCoffee.jsx';
import CoffeeDetails from './components/CoffeeDetails.jsx';
import Login from './components/Login.jsx';
import Register from './components/Register.jsx';
import AuthProvider from './components/Provider/AuthProvider.jsx';
import Users from './components/Users.jsx';

const router = createBrowserRouter([
  {
    path: "/",
    Component: MainLayout,
    children: [
      {
        index: true,
        loader: () => fetch('https://coffee-store-server-dun-nu.vercel.app/coffees'),
        Component: Home
      },
      {
        path: 'addCoffee',
        Component: AddCoffee
      },
      {
        path: 'coffee/:id',
        Component: CoffeeDetails
      },
      {
        path: 'updateCoffee/:id',
        loader: ({ params }) => fetch(`https://coffee-store-server-dun-nu.vercel.app/coffees/${params.id}`),
        Component: UpdateCoffee
      },{
        path:'logIn',
        element:<Login/>

      },{
        path:'signUp',
        element:<Register/>
      },{
        path:'users',
        element:<Users/>,
        loader:()=>fetch('https://coffee-store-server-dun-nu.vercel.app/users')

      }
    ]
  },
]);

createRoot(document.getElementById('root')).render(

    <AuthProvider>
    <RouterProvider router={router} />

    </AuthProvider>,

)
