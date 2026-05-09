import { useContext } from "react";
import { createContext } from "react";

export const catContext = createContext({
    favorites: [],
    addFavorite: (cat) => {},
    removeFavorite: (id) => {},
    lightTheme: true,
    toggleTheme: () => {}
})

export const useCats = () => {
    return useContext(catContext)
}

export const CatProvider = catContext.Provider