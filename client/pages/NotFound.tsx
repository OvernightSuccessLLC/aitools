import { Link } from "react-router-dom";
import { Header } from "../components/Header";
import { UpsellBanner } from "../components/UpsellBanner";

export default function NotFound() {
  return (
    <div className="min-h-screen bg-brand-red">
      <Header />
      <main className="max-w-7xl mx-auto px-3 sm:px-4 py-16">
        <div className="text-center">
          <h1 className="text-4xl md:text-6xl font-bold text-brand-cream mb-6" style={{
            fontFamily: "'Georgia', serif",
            textShadow: "4px 4px 0px #000, -2px -2px 0px #000, 2px -2px 0px #000, -2px 2px 0px #000"
          }}>
            Page Not Found
          </h1>
          <div className="bg-brand-black/30 backdrop-blur-sm rounded-xl p-8 max-w-md mx-auto">
            <p className="text-white/80 text-lg mb-6">
              The page you're looking for doesn't exist.
            </p>
            <Link 
              to="/" 
              className="inline-block text-white font-medium py-3 px-6 rounded-lg transition-colors duration-200"
              style={{ backgroundColor: '#fe1b06' }}
              onMouseEnter={(e) => e.target.style.backgroundColor = '#e0180a'}
              onMouseLeave={(e) => e.target.style.backgroundColor = '#fe1b06'}
            >
              Back to AI Toolkit
            </Link>
          </div>
        </div>
      </main>
    </div>
  );
}
