import { StrictMode, useState } from "react";
import { createRoot } from "react-dom/client";

import "./index.css";

import App from "./App.jsx";
import Favorites from "./components/Favorites.jsx";
import Home from "./components/Home.jsx";

import {
  createBrowserRouter,
  RouterProvider,
} from "react-router-dom";

import { CatProvider } from "./context/catContext.js";

const router = createBrowserRouter([
  {
    path: "/",
    element: <App />,
    children: [
      {
        index: true,
        element: <Home />,
      },
      {
        path: "favorite-cats",
        element: <Favorites />,
      },
    ],
  },
]);

function Root() {
  const [favorites, setFavorites] = useState([]);

  const addFavorite = (cat) => {
    setFavorites((prev) => [...prev, cat]);
  };

  const removeFavorite = (id) => {
    setFavorites((prev) =>
      prev.filter((cat) => cat.id !== id)
    );
  };

  return (
    <CatProvider
      value={{
        favorites,
        addFavorite,
        removeFavorite,
      }}
    >
      <RouterProvider router={router} />
    </CatProvider>
  );
}

createRoot(document.getElementById("root")).render(
  <StrictMode>
    <Root />
  </StrictMode>
);