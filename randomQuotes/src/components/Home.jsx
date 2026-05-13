import useQuotes from "../hooks/useQuotes";
import Card from "./Card";

function Home() {
  const { quote, fetchQuote } = useQuotes();

  return (
    <div className="min-h-screen bg-[#f5f0e8] px-6 py-12">
      <div className="max-w-3xl mx-auto">
        <div className="mb-10">
          <p className="text-[11px] uppercase tracking-[0.2em] text-[#9c7a4e] font-medium mb-2">
            Daily Inspiration
          </p>

          <h1 className="text-4xl font-bold text-[#1a1410]">
            Discover Beautiful{" "}
            <span className="italic text-[#9c7a4e]">Quotes</span>
          </h1>
        </div>

        <button
          onClick={fetchQuote}
          className="mb-10 bg-[#1a1410] text-[#f5f0e8] px-8 py-3 rounded-full text-sm font-medium tracking-wide shadow-md hover:bg-[#9c7a4e] hover:-translate-y-0.5 transition-all duration-200 cursor-pointer"
        >
          Next Quote
        </button>

        {quote && <Card quote={quote} />}
      </div>
    </div>
  );
}

export default Home;
