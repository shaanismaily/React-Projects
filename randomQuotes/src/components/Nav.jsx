import {Link} from "react-router-dom";

function Nav() {
    return (
        <header className="sticky top-0 z-50 bg-[#1a1410]/95 dark:bg-zinc-900/95 backdrop-blur-sm shadow-md">
            <nav className="max-w-3xl mx-auto px-6 py-4 flex items-center justify-between">
                <Link
                to="/"
                className="
                font-serif text-[#f5f0e8] text-lg font-semibold tracking-wide hover:text-[#d4a96a] transition-colors"
                >Quote Generator</Link>
                <div className="flex items-center gap-3">
                        <Link
                        to="/"
              className="text-sm font-medium text-[#d4a96a] border border-[#d4a96a]/40 rounded-full px-4 py-1.5 hover:bg-[#d4a96a]/10 transition-colors"
                                >
                            Home
                        </Link>
                        <Link
                        to="favorite-quotes"
              className="text-sm font-medium text-[#d4a96a] border border-[#d4a96a]/40 rounded-full px-4 py-1.5 hover:bg-[#d4a96a]/10 transition-colors"
            >
                            Favorite Quotes
                        </Link>
                </div>
            </nav>
        </header>
    )
}
export default Nav;