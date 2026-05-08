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
    <div className="min-h-screen flex flex-col items-center px-6 pt-14 pb-20"
      style={{
        background: "radial-gradient(ellipse at 10% 0%, rgba(210,180,140,0.25) 0%, transparent 60%), radial-gradient(ellipse at 90% 100%, rgba(180,140,100,0.15) 0%, transparent 60%), #f5f0e8"
      }}
    >
      {/* Header */}
      <div className="text-center mb-12">
        <p className="text-[11px] font-medium tracking-[0.2em] uppercase text-[#9c7a4e] mb-3">
          Feline Encyclopedia
        </p>
        <h1 className="font-serif text-5xl font-bold leading-tight text-[#1a1410] mb-2">
          Discover <em className="italic text-[#9c7a4e]">Cat Breeds</em>
        </h1>
        <p className="text-[15px] font-light text-[#6b5a47] tracking-wide">
          Explore the world's most fascinating felines
        </p>
      </div>

      {/* Button */}
      <button
        onClick={fetchCat}
        className="inline-flex items-center gap-2.5 bg-[#1a1410] text-[#f5f0e8] rounded-full px-8 py-3.5 text-sm font-medium tracking-wide mb-14 shadow-lg cursor-pointer transition-all duration-200 hover:bg-[#9c7a4e] hover:-translate-y-0.5 hover:shadow-[0_8px_28px_rgba(156,122,78,0.35)] active:translate-y-0"
      >
        <span className="text-lg">🐾</span>
        Discover a Cat
      </button>

      {loading ? <Spinner /> : catInfo.id && <Card cat={cat} />}
    </div>
  );
}

export default Home;
