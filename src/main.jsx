import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import './index.css'
import { RouterProvider, createBrowserRouter } from 'react-router-dom'
import Login from './Pages/Login/Login.jsx'
import Registration from './Pages/Registration/Registration.jsx'
import Profile from './Pages/Profile/Profile.jsx'

const router = createBrowserRouter([
  {
    path: "/",
    element: <App></App>,
    children: [
      {
        path: "/",
        element: <Login></Login>
      },
      {
        path:"/register",
        element: <Registration></Registration>
      },
      {
        path: "/account",
        element: <Profile></Profile>
      }
    ]
  }
])

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <RouterProvider router={router}></RouterProvider>
  </React.StrictMode>,
)
