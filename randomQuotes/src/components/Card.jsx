import { useState } from "react";
import { useQuoteContext } from "../context/quoteContext";

function Card({ quote }) {

  const [favorites, setFavorites] = useState({});

  const { favorites, addFavorite, removeFavorite } = useQuoteContext();

  
  return (
    <div className="bg-[#8811aa] rounded-lg m-4 p-4">
      <h2 className="text-white font-bold">{quote.content}</h2>
      <p className="text-white" > Author:  {quote.author}</p>
      <div>
        {quote.tags && quote.tags.map((tag) => (
          <span id={tag}>Category: {tag}</span>
        ))}
      </div>
      <button className="border-gray-600 bg-gray-400 p-2 rounded-lg"

      >Add to favorite</button>
    </div>
  );
}
export default Card;
