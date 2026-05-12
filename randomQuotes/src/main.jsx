import { StrictMode, useState } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App.jsx'
import { RouterProvider, createBrowserRouter } from 'react-router-dom'
import Home from './components/Home.jsx'
import Favorites from "./components/Favorites.jsx"

const router = createBrowserRouter([{
  path: "/",
  element: <App />,
  children: [
    {
      index: true,
      element: <Home />
    },
    {
      path: "favorite-quotes",
      element: <Favorites />
    }
  ]
}])

function Root() {
  const [favorites, setFavorites] = useState([]);

  const addFavorite = (quote) => {
    setFavorites(prev => [...prev, quote])
  }
}

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <RouterProvider router={router} />
  </StrictMode>,
)
