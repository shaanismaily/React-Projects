import { useQuoteContext } from "../context/quoteContext";

function Favorites() {
  const { favorites, removeFavorite } = useQuoteContext();

  return (
    <div className="min-h-screen bg-[#f5f0e8] px-6 pt-12 pb-20">
      <div className="max-w-3xl mx-auto">
        <p className="text-[11px] uppercase tracking-[0.2em] text-[#9c7a4e] font-medium mb-2">
          Your Collection
        </p>

        <h1 className="text-4xl font-bold text-[#1a1410] mb-10">
          Favorite <span className="italic text-[#9c7a4e]">Quotes</span>
        </h1>

        {favorites.length === 0 ? (
          <div className="text-center py-24">
            <p className="text-6xl text-[#c2a57b] mb-4">❝❞</p>

            <p className="text-2xl italic text-[#5c4632] mb-2">
              No favorites yet
            </p>

            <p className="text-sm text-[#8b7355]">
              Head back home and add some quotes
            </p>
          </div>
        ) : (
          <div className="flex flex-col gap-5">
            {favorites.map((fav) => (
              <div
                key={fav.id}
                className="bg-[#fffdf8] border border-[#e8dcc8] rounded-2xl p-6 shadow-sm hover:shadow-md transition-shadow duration-300"
              >
                <div className="flex items-start justify-between gap-5">
                  <div className="flex-1">
                    <p className="text-lg leading-relaxed text-[#2b2118] font-medium">
                      “{fav.content}”
                    </p>

                    <p className="mt-4 text-sm text-[#8b7355] italic">
                      — {fav.author}
                    </p>
                  </div>

                  <button
                    onClick={() => removeFavorite(fav.id)}
                    className="shrink-0 border border-[#d7c2a3] px-4 py-2 rounded-full text-sm text-[#8b7355] hover:bg-red-50 hover:border-red-200 hover:text-red-500 transition-all duration-200 cursor-pointer"
                  >
                    Remove
                  </button>
                </div>
              </div>
            ))}
          </div>
        )}
      </div>
    </div>
  );
}
export default Favorites;
