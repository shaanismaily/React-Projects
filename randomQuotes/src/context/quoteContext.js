import { createContext, useContext } from "react";

const quoteContext = createContext({
    favorites: [],
    addFavorite: () => {},
    removeFavorite: () => {},
});

export const quoteContextProvider = quoteContext.Provider

export const useQuoteContext = () => {
    return useContext(quoteContext);
}