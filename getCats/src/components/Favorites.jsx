import { useCats } from "../context/catContext";

function Favorites() {
  const { favorites, removeFavorite } = useCats();

  return (
    <div className="min-h-screen px-6 pt-12 pb-20 bg-[#f5f0e8] dark:bg-zinc-900 transition-colors duration-300">
      <div className="max-w-3xl mx-auto">
        <p className="text-[11px] font-medium tracking-[0.2em] uppercase text-[#9c7a4e] dark:text-amber-400 mb-2">
          Your Collection
        </p>
        <h1 className="font-serif text-4xl font-bold text-[#1a1410] dark:text-[#f5f0e8] mb-10">
          Favorite{" "}
          <em className="italic text-[#9c7a4e] dark:text-amber-400">Cats</em>
        </h1>

        {favorites.length === 0 ? (
          <div className="text-center py-24 text-[#b09070]">
            <p className="text-5xl mb-4">🐱</p>
            <p className="font-serif italic text-xl dark:text-zinc-400">
              No favorites yet
            </p>
            <p className="text-sm font-light mt-1 dark:text-zinc-500">
              Head back home and tap a heart
            </p>
          </div>
        ) : (
          <div className="flex flex-col gap-4">
            {favorites.map((cat) => (
              <div
                key={cat.id}
                className="flex items-center justify-between gap-4 bg-[#fffdf8] dark:bg-zinc-800 rounded-2xl px-5 py-4 shadow-sm border border-[#e8dcc8] dark:border-zinc-700"
              >
                <div className="flex items-center gap-4">
                  {cat.image && (
                    <img
                      src={cat.image}
                      alt={cat.name}
                      className="w-14 h-14 rounded-xl object-cover shrink-0"
                    />
                  )}
                  <div>
                    <p className="font-serif text-lg font-semibold text-[#1a1410] dark:text-zinc-100 leading-tight">
                      {cat.name}
                    </p>
                    <p className="text-xs text-[#9c7a4e] dark:text-amber-400 font-light mt-0.5">
                      {cat.origin}
                    </p>
                  </div>
                </div>

                <button
                  onClick={() => removeFavorite(cat.id)}
                  className="shrink-0 text-xs font-medium text-[#b09070] dark:text-zinc-400 border border-[#d4c4aa] dark:border-zinc-600 rounded-full px-3 py-1.5 hover:bg-red-50 dark:hover:bg-red-900/20 hover:text-red-400 hover:border-red-200 transition-colors cursor-pointer"
                >
                  Remove
                </button>
              </div>
            ))}
          </div>
        )}
      </div>
    </div>
  );
}

export default Favorites;
