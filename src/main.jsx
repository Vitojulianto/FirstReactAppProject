import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'

import { Link, RouterProvider, createBrowserRouter } from 'react-router-dom'
import Login from './pages/login.jsx'
import Register from './pages/register.jsx'
import Dashboard from './pages/dashboard.jsx'
import Todoapp from './pages/todoapp.jsx'
import Anime from './pages/anime.jsx'
import Animedesc from './pages/animedesc.jsx'

const Route = createBrowserRouter([
  {
    path: '/',
    element: <Link to={'/login'}>Login</Link>,

  },
  {
    path:'/login',
    element:< Login/>
  },
  {
    path:'/register',
    element:<Register />
  },
  {
    path:'/dashboard',
    element:<Dashboard />
  },
  {
    path:'/todoapp',
    element:<Todoapp />
  }
  ,
  {
    path:'/anime',
    element:<Anime />
  },
  {
    path:'/anime/:id',
    element:<Animedesc />
  }
])

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <RouterProvider router={Route} />
  </StrictMode>,
)
