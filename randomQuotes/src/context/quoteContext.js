import { createContext, useContext } from "react";

const quoteContext = createContext({
    favorites: [],
    addFavorite: (quote) => {},
    removeFavorite: (id) => {},
});

export const QuoteContextProvider = quoteContext.Provider

export const useQuoteContext = () => {
    return useContext(quoteContext);
}