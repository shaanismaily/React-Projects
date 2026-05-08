import { Outlet, Link } from "react-router-dom";

function App() {
  return (
    <>
      <header className="sticky top-0 z-50 bg-[#1a1410]/95 backdrop-blur-sm shadow-md">
        <nav className="max-w-3xl mx-auto px-6 py-4 flex items-center justify-between">
          <Link
            to="/"
            className="font-serif text-[#f5f0e8] text-lg font-semibold tracking-wide hover:text-[#d4a96a] transition-colors"
          >
            🐾 FelinePedia
          </Link>
          <Link
            to="/favorite-cats"
            className="text-sm font-medium text-[#d4a96a] border border-[#d4a96a]/40 rounded-full px-4 py-1.5 hover:bg-[#d4a96a]/10 transition-colors"
          >
            My Favorites
          </Link>
        </nav>
      </header>
      <main>
        <Outlet />
      </main>
    </>
  );
}

export default App;