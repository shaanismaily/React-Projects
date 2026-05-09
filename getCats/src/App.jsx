import { useCats } from "./context/catContext";
import { Link, Outlet } from "react-router-dom";

function App() {
  const { toggleTheme, lightTheme } = useCats();

  return (
    <>
      <header className="sticky top-0 z-50 bg-[#1a1410]/95 dark:bg-zinc-900/95 backdrop-blur-sm shadow-md">
        <nav className="max-w-3xl mx-auto px-6 py-4 flex items-center justify-between">
          <Link
            to="/"
            className="font-serif text-[#f5f0e8] text-lg font-semibold tracking-wide hover:text-[#d4a96a] transition-colors"
          >
            🐾 FelinePedia
          </Link>
          <div className="flex items-center gap-3">
            <button
              onClick={toggleTheme}
              className="text-sm text-[#d4a96a] border border-[#d4a96a]/40 rounded-full px-3 py-1.5 hover:bg-[#d4a96a]/10 transition-colors cursor-pointer"
            >
              {lightTheme ? "🌙" : "☀️"}
            </button>
            <Link
              to="/"
              className="text-sm font-medium text-[#d4a96a] border border-[#d4a96a]/40 rounded-full px-4 py-1.5 hover:bg-[#d4a96a]/10 transition-colors"
            >
              Home
            </Link>
            <Link
              to="/favorite-cats"
              className="text-sm font-medium text-[#d4a96a] border border-[#d4a96a]/40 rounded-full px-4 py-1.5 hover:bg-[#d4a96a]/10 transition-colors"
            >
              My Favorites
            </Link>
          </div>
        </nav>
      </header>
      <main>
        <Outlet />
      </main>
    </>
  );
}

export default App;
