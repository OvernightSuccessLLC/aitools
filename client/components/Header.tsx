import { Link } from "react-router-dom";

export function Header() {
  return (
    <header className="bg-brand-black border-b border-brand-black/20 px-3 sm:px-4 py-3">
      <div className="max-w-7xl mx-auto flex items-center justify-between">
        <div className="flex items-center space-x-4 lg:space-x-8">
          <Link to="/tools" className="flex items-center">
            <span className="text-white font-bold text-lg">🚀 AI TOOLKIT</span>
          </Link>
        </div>

        <div className="flex items-center space-x-4">
          <Link
            to="/tools"
            className="bg-brand-orange hover:bg-brand-orange/90 text-white px-3 py-2 rounded-lg text-xs sm:text-sm font-medium transition-colors whitespace-nowrap"
          >
            🛒 AI TOOLS
          </Link>
        </div>
      </div>
    </header>
  );
}
