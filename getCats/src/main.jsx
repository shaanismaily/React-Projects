import { StrictMode, useEffect, useState } from "react";
import { createRoot } from "react-dom/client";

import "./index.css";

import App from "./App.jsx";
import Favorites from "./components/Favorites.jsx";
import Home from "./components/Home.jsx";

import { createBrowserRouter, RouterProvider } from "react-router-dom";

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

const getInitialState = () => {
  const favorites = localStorage.getItem("favorites");
  return favorites ? JSON.parse(favorites) : [];
};
const getInitialTheme = () => {
  return localStorage.getItem("theme") !== "dark";
};
function Root() {
  const [favorites, setFavorites] = useState(getInitialState);
  const [lightTheme, setLightTheme] = useState(getInitialTheme);

  const addFavorite = (cat) => {
    setFavorites((prev) => [...prev, cat]);
  };

  const removeFavorite = (id) => {
    setFavorites((prev) => prev.filter((cat) => cat.id !== id));
  };

  useEffect(() => {
    const html = document.querySelector("html");
    html.classList.add(lightTheme ? "light" : "dark");
  }, []);

  const toggleTheme = () => {
    const html = document.querySelector("html");
    const newTheme = !lightTheme;

    html.classList.replace(
      lightTheme ? "light" : "dark",
      newTheme ? "light" : "dark",
    );
    localStorage.setItem("theme", newTheme ? "light" : "dark");
    setLightTheme(newTheme);
  };

  useEffect(() => {
    localStorage.setItem("favorites", JSON.stringify(favorites));
  }, [favorites]);

  return (
    <CatProvider
      value={{
        favorites,
        addFavorite,
        removeFavorite,
        lightTheme,
        toggleTheme,
      }}
    >
      <RouterProvider router={router} />
    </CatProvider>
  );
}

createRoot(document.getElementById("root")).render(
  <StrictMode>
    <Root />
  </StrictMode>,
);
