import { Link } from "react-router-dom";

function Nav() {
  return (
    <header className="sticky top-0 z-50 bg-[#1a1410]/95 backdrop-blur-sm shadow-md">
      <nav className="max-w-5xl mx-auto px-4 sm:px-6 py-4">
        <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-4">
          <Link
            to="/"
            className="text-center sm:text-left font-serif text-[#f5f0e8] text-xl font-semibold tracking-wide hover:text-[#d4a96a] transition-colors"
          >
            Quote Generator
          </Link>

          <div className="flex flex-wrap items-center justify-center sm:justify-end gap-3">
            <Link
              to="/"
              className="text-sm font-medium text-[#d4a96a] border border-[#d4a96a]/40 rounded-full px-4 py-2 hover:bg-[#d4a96a]/10 transition-colors"
            >
              Home
            </Link>

            <Link
              to="favorite-quotes"
              className="text-sm font-medium text-[#d4a96a] border border-[#d4a96a]/40 rounded-full px-4 py-2 hover:bg-[#d4a96a]/10 transition-colors"
            >
              Favorite Quotes
            </Link>
          </div>
        </div>
      </nav>
    </header>
  );
}

export default Nav;
