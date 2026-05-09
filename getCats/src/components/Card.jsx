import { useCats } from "../context/catContext";

function Card({ cat }) {
  const traits = cat.character
    ? cat.character
        .split(",")
        .map((t) => t.trim())
        .filter(Boolean)
    : [];

  const { addFavorite, removeFavorite, favorites } = useCats();
  const isFavorited = favorites.some((f) => f.id === cat.id);

  const toggleFavorite = () => {
    isFavorited ? removeFavorite(cat.id) : addFavorite(cat);
  };

  return (
    <div className="w-full max-w-xl bg-[#fffdf8] dark:bg-zinc-800 rounded-2xl overflow-hidden shadow-[0_2px_4px_rgba(26,20,16,0.04),0_12px_40px_rgba(26,20,16,0.10)] animate-[cardIn_0.45s_cubic-bezier(0.16,1,0.3,1)_both] dark:shadow-[0_12px_40px_rgba(0,0,0,0.4)]">
      {/* Image */}
      <div className="relative w-full h-72 overflow-hidden bg-[#e8e0d0] group">
        {cat.image && (
          <img
            className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
            src={cat.image}
            alt={`${cat.name} cat`}
          />
        )}
        <div className="absolute inset-x-0 bottom-0 h-28 bg-linear-to-t from-black/55 to-transparent pointer-events-none" />
        <span className="absolute bottom-5 left-6 font-serif text-2xl font-bold text-white drop-shadow-lg leading-tight">
          {cat.name}
        </span>

        {/* Favorite button */}
        <button
          onClick={toggleFavorite}
          aria-label={
            isFavorited ? "Remove from favorites" : "Add to favorites"
          }
          className={`absolute top-4 right-4 w-9 h-9 rounded-full flex items-center justify-center shadow-md transition-all duration-200 hover:scale-110 cursor-pointer
            ${
              isFavorited
                ? "bg-red-500 hover:bg-red-600 shadow-red-300"
                : "bg-white/85 backdrop-blur-sm hover:bg-white"
            }`}
        >
          {isFavorited ? (
            <span className="text-white text-base leading-none">♥</span>
          ) : (
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="w-4 h-4"
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              strokeWidth="2"
              strokeLinecap="round"
              strokeLinejoin="round"
            >
              <path d="M20.84 4.61a5.5 5.5 0 0 0-7.78 0L12 5.67l-1.06-1.06a5.5 5.5 0 0 0-7.78 7.78l1.06 1.06L12 21.23l7.78-7.78 1.06-1.06a5.5 5.5 0 0 0 0-7.78z" />
            </svg>
          )}
        </button>
      </div>

      {/* Body */}
      <div className="px-7 pt-6 pb-8">
        {cat.altNames && cat.altNames !== "None" && (
          <p className="text-[11px] font-medium tracking-[0.12em] uppercase text-[#9c7a4e] dark:text-amber-400 mb-5">
            Also known as: {cat.altNames}
          </p>
        )}

        {traits.length > 0 && (
          <div className="flex flex-wrap gap-2 mb-6">
            {traits.map((trait) => (
              <span
                key={trait}
                className="bg-[#f0e8d8] dark:bg-zinc-700 text-[#6b5a47] dark:text-zinc-300 border border-[#9c7a4e]/20 dark:border-zinc-600 rounded-full px-3 py-1 text-xs"
              >
                {trait}
              </span>
            ))}
          </div>
        )}

        <div className="h-px bg-linear-to-r from-[#9c7a4e]/30 dark:from-amber-400/20 to-transparent mb-5" />

        <div className="grid grid-cols-2 gap-x-6 gap-y-4 mb-6">
          <div className="flex flex-col gap-0.5">
            <span className="text-[10px] font-medium tracking-[0.18em] uppercase text-[#b09070] dark:text-zinc-500">
              Origin
            </span>
            <span className="text-[15px] text-[#1a1410] dark:text-zinc-100">
              {cat.origin}
            </span>
          </div>
          <div className="flex flex-col gap-0.5">
            <span className="text-[10px] font-medium tracking-[0.18em] uppercase text-[#b09070] dark:text-zinc-500">
              Life Span
            </span>
            <span className="text-[15px] text-[#1a1410] dark:text-zinc-100">
              {cat.lifeSpan} years
            </span>
          </div>
        </div>

        {cat.description && (
          <p className="text-sm leading-relaxed text-[#5a4a3a] dark:text-zinc-400 font-light mb-6">
            {cat.description}
          </p>
        )}

        {cat.wikipedia && (
          <a
            href={cat.wikipedia}
            target="_blank"
            rel="noopener noreferrer"
            className="text-[13px] font-medium text-[#9c7a4e] dark:text-amber-400 border-b border-[#9c7a4e]/40 dark:border-amber-400/40 hover:text-[#1a1410] dark:hover:text-amber-300"
          >
            Read on Wikipedia →
          </a>
        )}
      </div>
    </div>
  );
}

export default Card;
