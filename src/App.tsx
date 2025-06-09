import { createBrowserRouter } from 'react-router-dom'
import { Home } from './pages/home'
import { Login } from './pages/login'
import { Register } from './pages/register'
import { Dashboard } from './pages/dashboard'
import { NewItem } from './pages/dashboard/newItem'
import { ItemDetail } from './pages/itemDetail'
import { Layout } from './components/layout'

const routes = createBrowserRouter([
  {
    element: <Layout />,
    children: [
      {
        path: "/",
        element: <Home />
      },
      {
        path: "/itemDetail/:id",
        element: <ItemDetail />
      },
      {
        path: "/dashboard",
        element: <Dashboard />
      },
      {
        path: "/dashboard/newItem",
        element: <NewItem />
      }
    ]
  },
  {
    path: "/login",
    element: <Login />
  }
  ,
  {
    path: "/register",
    element: <Register />
  }
])

export { routes }

