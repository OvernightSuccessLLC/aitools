interface ToolCardProps {
  name: string;
  description: string;
  features: string[];
  category: "freemium" | "premium" | "free" | "paid";
  url: string;
}

export function ToolCard({ name, description, features, category, url }: ToolCardProps) {
  const categoryColors = {
    freemium: "bg-category-freemium",
    premium: "bg-category-premium", 
    free: "bg-category-free",
    paid: "bg-category-paid"
  };

  const categoryLabels = {
    freemium: "Freemium",
    premium: "Premium",
    free: "Free",
    paid: "Paid"
  };

    return (
    <div className="bg-brand-black rounded-xl p-4 border border-brand-black/20 hover:border-brand-orange/30 transition-all duration-200 hover:transform hover:scale-[1.02] flex flex-col h-full">
      <div className="flex items-center justify-between mb-3">
        <div className={`${categoryColors[category]} text-white text-xs font-bold px-2 py-1 rounded-full`}>
          {categoryLabels[category]}
        </div>
      </div>

      <h3 className="text-white font-black text-base mb-2 leading-tight">
        {name}
      </h3>

      <p className="text-white/80 text-xs mb-3 leading-tight line-clamp-1 overflow-hidden text-ellipsis whitespace-nowrap">
        {description}
      </p>

      <div className="mb-4 flex-grow">
        <ul className="space-y-1">
          {features.slice(0, 3).map((feature, index) => (
            <li key={index} className="text-white/70 text-xs flex items-center">
              <span className="text-brand-orange mr-2 text-xs">●</span>
              <span className="line-clamp-1">{feature}</span>
            </li>
          ))}
        </ul>
      </div>

      <button
        onClick={() => window.open(url, '_blank')}
        className="w-full bg-brand-orange hover:bg-brand-orange/90 text-white font-bold py-2 px-4 rounded-lg transition-colors duration-200 text-xs mt-auto"
      >
        🔗 Visit Tool
      </button>
    </div>
  );
}
