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
    <div className="bg-brand-black rounded-xl p-4 sm:p-6 border border-brand-black/20 hover:border-brand-orange/30 transition-all duration-200 hover:transform hover:scale-[1.02]">
      <div className="flex items-start justify-between mb-4">
        <div className={`${categoryColors[category]} text-white text-xs font-medium px-3 py-1 rounded-full`}>
          {categoryLabels[category]}
        </div>
      </div>
      
      <h3 className="text-white font-bold text-lg mb-3 leading-tight">
        {name}
      </h3>
      
      <p className="text-white/80 text-sm mb-4 leading-relaxed">
        {description}
      </p>
      
      <div className="mb-6">
        <h4 className="text-white font-semibold text-sm mb-3">Key Features:</h4>
        <ul className="space-y-2">
          {features.map((feature, index) => (
            <li key={index} className="text-white/70 text-sm flex items-start">
              <span className="text-brand-orange mr-2 text-xs">●</span>
              <span>{feature}</span>
            </li>
          ))}
        </ul>
      </div>
      
      <button 
        onClick={() => window.open(url, '_blank')}
        className="w-full bg-brand-orange hover:bg-brand-orange/90 text-white font-medium py-3 px-6 rounded-lg transition-colors duration-200 text-sm"
      >
        🔗 Visit Tool
      </button>
    </div>
  );
}
