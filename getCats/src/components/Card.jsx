import { useCats } from "../context/catContext";

function Card({ cat }) {
  const traits = cat.character
    ? cat.character.split(",").map((t) => t.trim()).filter(Boolean)
    : [];

  const { addFavorite, removeFavorite, favorites } = useCats();
  const isFavorited = favorites.some((f) => f.id === cat.id);

  const toggleFavorite = () => {
    isFavorited ? removeFavorite(cat.id) : addFavorite(cat);
  };

  return (
    <div className="w-full max-w-xl bg-[#fffdf8] rounded-2xl overflow-hidden shadow-[0_2px_4px_rgba(26,20,16,0.04),0_12px_40px_rgba(26,20,16,0.10),0_0_0_1px_rgba(156,122,78,0.12)] animate-[cardIn_0.45s_cubic-bezier(0.16,1,0.3,1)_both]">

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
          aria-label={isFavorited ? "Remove from favorites" : "Add to favorites"}
          className={`absolute top-4 right-4 w-9 h-9 rounded-full flex items-center justify-center shadow-md transition-all duration-200 hover:scale-110 cursor-pointer
            ${isFavorited
              ? "bg-red-500 hover:bg-red-600 shadow-red-300"
              : "bg-white/85 backdrop-blur-sm hover:bg-white"
            }`}
        >
          {isFavorited ? (
            <span className="text-white text-base leading-none">♥</span>
          ) : (
            <img src="src/assets/heart.png" alt="Favorite" className="w-4.5 h-4.5 object-contain" />
          )}
        </button>
      </div>

      {/* Body */}
      <div className="px-7 pt-6 pb-8">
        {cat.altNames && cat.altNames !== "None" && (
          <p className="text-[11px] font-medium tracking-[0.12em] uppercase text-[#9c7a4e] mb-5">
            Also known as: {cat.altNames}
          </p>
        )}

        {traits.length > 0 && (
          <div className="flex flex-wrap gap-2 mb-6">
            {traits.map((trait) => (
              <span
                key={trait}
                className="bg-[#f0e8d8] text-[#6b5a47] border border-[#9c7a4e]/20 rounded-full px-3 py-1 text-xs"
              >
                {trait}
              </span>
            ))}
          </div>
        )}

        <div className="h-px bg-linear-to-r from-[#9c7a4e]/30 to-transparent mb-5" />

        <div className="grid grid-cols-2 gap-x-6 gap-y-4 mb-6">
          <div className="flex flex-col gap-0.5">
            <span className="text-[10px] font-medium tracking-[0.18em] uppercase text-[#b09070]">Origin</span>
            <span className="text-[15px] text-[#1a1410]">{cat.origin}</span>
          </div>
          <div className="flex flex-col gap-0.5">
            <span className="text-[10px] font-medium tracking-[0.18em] uppercase text-[#b09070]">Life Span</span>
            <span className="text-[15px] text-[#1a1410]">{cat.lifeSpan} years</span>
          </div>
        </div>

        {cat.description && (
          <p className="text-sm leading-relaxed text-[#5a4a3a] font-light mb-6">
            {cat.description}
          </p>
        )}

        {cat.wikipedia && (
          <a
            href={cat.wikipedia}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-1.5 text-[13px] font-medium text-[#9c7a4e] border-b border-[#9c7a4e]/40 pb-0.5 tracking-wide hover:text-[#1a1410] hover:border-[#1a1410] transition-colors"
          >
            Read on Wikipedia →
          </a>
        )}
      </div>
    </div>
  );
}

export default Card;