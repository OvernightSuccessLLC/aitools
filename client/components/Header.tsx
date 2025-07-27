import { Link } from "react-router-dom";

export function Header() {
  return (
    <header className="bg-brand-black border-b border-brand-black/20 px-3 sm:px-4 py-2 sm:py-3">
      <div className="max-w-7xl mx-auto flex items-center justify-between">
        <div className="flex items-center">
          <Link to="/tools" className="flex items-center">
            <img
              src="https://cdn.builder.io/api/v1/image/assets%2F1964cc1516094f2c9726884f044c2ef1%2Ffa47f670249e457380e59612b7a8a5aa?format=webp&width=800"
              alt="Overnight Success"
              className="w-auto max-w-[200px] sm:max-w-none"
              style={{ height: "clamp(50px, 8vw, 76px)" }}
            />
          </Link>
        </div>

        <div className="flex items-center"></div>
      </div>
    </header>
  );
}
