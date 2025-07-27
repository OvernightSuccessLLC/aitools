import { Link } from "react-router-dom";

export function Header() {
  return (
    <header className="bg-brand-black border-b border-brand-black/20 px-3 sm:px-4">
      <div className="max-w-7xl mx-auto flex items-center justify-between">
        <div className="flex items-center space-x-4 lg:space-x-8">
          <Link to="/tools" className="flex items-center">
            <img
              src="https://cdn.builder.io/api/v1/image/assets%2F1964cc1516094f2c9726884f044c2ef1%2Ffa47f670249e457380e59612b7a8a5aa?format=webp&width=800"
              alt="Overnight Success"
              className="w-auto"
              style={{ height: '76px' }}
            />
          </Link>
        </div>

        <div className="flex items-center space-x-4">
        </div>
      </div>
    </header>
  );
}
