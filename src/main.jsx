import React from 'react'
import ReactDOM from 'react-dom/client'
import './index.css'
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import Root from './root/Root.jsx';
import ErrorPage from './components/errorPage/ErrorPage.jsx';
import Home from './components/home/Home.jsx';
import Login from './components/login/Login.jsx';
import Register from './components/register/Register.jsx';
import ArtAndCraft from './components/artAndCraft/ArtAndCraft.jsx';
import AddCraft from './components/addCraft/AddCraft.jsx';
import AuthProvider from './providers/AuthProvider.jsx';

const router = createBrowserRouter([
  {
    path: "/",
    element: <Root></Root>,
    errorElement:<ErrorPage></ErrorPage>,
    children: [
      {
        path:'/',
        element:<Home></Home>,
      },
      {
        path:'/login',
        element:<Login></Login>,
      },
      {
        path:'/register',
        element:<Register></Register>,
      },
      {
        path:'/art&craft',
        element:<ArtAndCraft></ArtAndCraft>
      },
      {
        path:'/addCraft',
        element:<AddCraft></AddCraft>
      }

    ]
  },

]);
ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <AuthProvider>
      <RouterProvider router={router} />
    </AuthProvider>
  </React.StrictMode>,
)
