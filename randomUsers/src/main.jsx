import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App.jsx'
import { createBrowserRouter, RouterProvider } from 'react-router-dom'

import UsersPage from "../src/pages/UsersPage.jsx"
import UserDetailPage from './pages/UserDetailPage.jsx'

const router = createBrowserRouter([{
  path: "/",
  element: <App />,
  children: [
    {
      index: true,
      element: <UsersPage />
    },
    {
      path: "/user/:id",
      element: <UserDetailPage />
    }
  ]
}])

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <RouterProvider router={router} />
  </StrictMode>,
)
