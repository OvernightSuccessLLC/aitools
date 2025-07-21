import { Link } from "react-router-dom";

export function Header() {
  return (
    <header className="bg-brand-black border-b border-brand-black/20 px-4 py-3">
      <div className="max-w-7xl mx-auto flex items-center justify-between">
        <div className="flex items-center space-x-8">
          <Link to="/" className="flex items-center">
            <div className="text-brand-cream font-bold text-xl tracking-wide">
              Overnight Success
            </div>
          </Link>
          
          <nav className="hidden md:flex items-center space-x-6">
            <Link 
              to="/product-studio" 
              className="text-white/80 hover:text-white text-sm font-medium transition-colors"
            >
              🎯 PRODUCT STUDIO
            </Link>
            <Link 
              to="/lifestyle-studio" 
              className="text-white/80 hover:text-white text-sm font-medium transition-colors"
            >
              🌿 LIFESTYLE STUDIO
            </Link>
            <Link 
              to="/graphic-studio" 
              className="text-white/80 hover:text-white text-sm font-medium transition-colors"
            >
              🎨 GRAPHIC STUDIO
            </Link>
            <Link 
              to="/playbook" 
              className="text-white/80 hover:text-white text-sm font-medium transition-colors"
            >
              THE PLAYBOOK
            </Link>
            <Link 
              to="/templates" 
              className="text-white/80 hover:text-white text-sm font-medium transition-colors"
            >
              📋 TEMPLATES
            </Link>
          </nav>
        </div>

        <div className="flex items-center space-x-4">
          <button className="bg-brand-orange hover:bg-brand-orange/90 text-white px-4 py-2 rounded-lg text-sm font-medium transition-colors">
            🛒 AI TOOL KIT
          </button>
        </div>
      </div>
    </header>
  );
}
