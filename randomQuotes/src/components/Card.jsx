import { useQuoteContext } from "../context/quoteContext";

function Card({ quote }) {
  const { favorites, addFavorite, removeFavorite } = useQuoteContext();

  const isFavorited = favorites?.some((f) => f.id === quote.id);

  const toggleFavorite = () => {
    isFavorited ? removeFavorite(quote.id) : addFavorite(quote);
  };

  return (
    <div className="bg-[#fffdf8] border border-[#e8dcc8] rounded-2xl p-6 shadow-sm hover:shadow-md transition-all duration-300">
      <p className="text-lg leading-relaxed text-[#2b2118] font-medium">
        “{quote.content}”
      </p>

      <p className="mt-4 text-sm italic text-[#8b7355]">— {quote.author}</p>

      {quote.tags && (
        <div className="flex flex-wrap gap-2 mt-5">
          {quote.tags.map((tag) => (
            <span
              key={tag}
              className="text-xs px-3 py-1 rounded-full bg-[#f1e7d8] text-[#7b6244]"
            >
              {tag}
            </span>
          ))}
        </div>
      )}

      <button
        onClick={toggleFavorite}
        className={`mt-6 px-5 py-2 rounded-full text-sm font-medium transition-all duration-200 border cursor-pointer
          
          ${
            isFavorited
              ? "bg-red-50 text-red-500 border-red-200 hover:bg-red-100"
              : "bg-[#f3ede3] text-[#6f563b] border-[#d7c2a3] hover:bg-[#e8dcc8]"
          }
        `}
      >
        {isFavorited ? "Remove Favorite" : "Add to Favorite"}
      </button>
    </div>
  );
}

export default Card;
