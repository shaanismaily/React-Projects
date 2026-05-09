import Card from "./Card";
import Spinner from "./Spinner";
import useCatInfo from "../hooks/useCatInfo";

function Home() {
  const { catInfo, loading, fetchCat } = useCatInfo();

  const cat = {
    id: catInfo.id,
    name: catInfo.name || "Unknown",
    image: catInfo.image || "",
    character: catInfo.temperament || "N/A",
    description: catInfo.description || "",
    origin: catInfo.origin || "N/A",
    lifeSpan: catInfo.life_span || "",
    wikipedia: catInfo.wikipedia_url || "",
    altNames: catInfo.alt_names || "None",
  };

  return (
    <div className="min-h-screen flex flex-col items-center px-6 pt-14 pb-20 bg-[#f5f0e8] dark:bg-zinc-900 transition-colors duration-300">
      {/* eyebrow */}
      <p className="text-[11px] font-medium tracking-[0.2em] uppercase text-[#9c7a4e] dark:text-amber-400 mb-3">
        Feline Encyclopedia
      </p>
      {/* title */}
      <h1 className="font-serif text-5xl font-bold text-[#1a1410] dark:text-[#f5f0e8] mb-2">
        Discover{" "}
        <em className="italic text-[#9c7a4e] dark:text-amber-400">
          Cat Breeds
        </em>
      </h1>
      {/* subtitle */}
      <p className="text-[15px] font-light text-[#6b5a47] dark:text-zinc-400 tracking-wide mb-12">
        Explore the world's most fascinating felines
      </p>

      <button
        onClick={fetchCat}
        className="inline-flex items-center gap-2.5 bg-[#1a1410] dark:bg-amber-500 text-[#f5f0e8] dark:text-zinc-900 rounded-full px-8 py-3.5 text-sm font-medium tracking-wide mb-14 shadow-lg cursor-pointer transition-all duration-200 hover:bg-[#9c7a4e] dark:hover:bg-amber-400 hover:-translate-y-0.5"
      >
        <span className="text-lg">🐾</span>
        Discover a Cat
      </button>

      {loading ? <Spinner /> : catInfo.id && <Card cat={cat} />}
    </div>
  );
}

export default Home;
