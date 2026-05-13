import { QuoteContextProvider } from "./context/quoteContext";
import { useEffect, useState } from "react";
import Nav from "./components/Nav";
import { Outlet } from "react-router-dom";

const getInitialState = () => {
  const quotes = localStorage.getItem("quotes");
  return quotes ? JSON.parse(quotes) : [];
};

function App() {
  const [favorites, setFavorites] = useState(getInitialState);

  const addFavorite = (quote) => {
    setFavorites((prev) => {
      const alreadyExist = prev.some((item) => item.id === quote.id);

      if (alreadyExist) return prev;

      return [...prev, quote];
    });
  };
  const removeFavorite = (id) => {
    setFavorites((quotes) => quotes.filter((quote) => quote.id !== id));
  };

  useEffect(() => {
    localStorage.setItem("quotes", JSON.stringify(favorites));
  }, [favorites]);
  return (
    <QuoteContextProvider value={{ favorites, addFavorite, removeFavorite }}>
      <Nav />
      <main>
        <Outlet />
      </main>
    </QuoteContextProvider>
  );
}

export default App;
