import { useContext } from "react";
import { createContext } from "react";

export const catContext = createContext({
    cats: [],
    toggleFavorite: (id) => {}
})

export const useCats = () => {
    return useContext(catContext)
}

export const catProvider = catContext.Provider()

