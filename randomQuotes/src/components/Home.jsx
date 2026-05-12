import useQuotes from "../hooks/useQuotes";
import Card from "./Card";

function Home() {
    const {quote, fetchQuote} = useQuotes()
    return (
        <div>
           <button
        onClick={fetchQuote}
        className="bg-[#1a1410] dark:bg-amber-500 text-[#f5f0e8] dark:text-zinc-900 rounded-full px-8 py-3.5 text-sm font-medium tracking-wide mb-14 shadow-lg cursor-pointer transition-all duration-200 hover:bg-[#9c7a4e] dark:hover:bg-amber-400 hover:-translate-y-0.5"
      >
        
        Next Quote
      </button>
            <Card quote={quote} />
        </div>
    )
}
export default Home;