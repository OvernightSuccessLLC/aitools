import { useState } from "react";
import { UpsellModal } from "./UpsellModal";

interface UpsellBannerProps {
  className?: string;
  style?: React.CSSProperties;
}

export function UpsellBanner({ className = "", style = {} }: UpsellBannerProps) {
  const [isUpsellModalOpen, setIsUpsellModalOpen] = useState(false);

  return (
    <>
      <div className={`text-center ${className}`} style={style}>
        <button
          onClick={() => setIsUpsellModalOpen(true)}
          className="inline-flex items-center gap-2 px-6 py-3 text-white font-semibold rounded-lg transition-all transform hover:scale-105 active:scale-95"
          style={{
            backgroundColor: 'rgba(0, 0, 0, 1)',
            margin: '16px 0 20px'
          }}
          onMouseEnter={(e) => e.target.style.backgroundColor = '#333'}
          onMouseLeave={(e) => e.target.style.backgroundColor = 'rgba(0, 0, 0, 1)'}
        >
          <span className="text-xl">🚀</span>
          <span style={{ font: '18px/20px Inter, sans-serif' }}>
            Upgrade for Premium Access
          </span>
        </button>
      </div>

      {/* Upsell Modal */}
      <UpsellModal
        isOpen={isUpsellModalOpen}
        onClose={() => setIsUpsellModalOpen(false)}
      />
    </>
  );
}
