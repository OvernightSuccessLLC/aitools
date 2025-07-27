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
          className="text-white rounded-lg transition-all transform hover:scale-105 active:scale-95"
          style={{
            backgroundColor: 'rgba(0, 0, 0, 1)',
            margin: '16px 0 20px',
            padding: '12px 10px 12px 24px',
            font: '600 18px/18px Inter, sans-serif'
          }}
          onMouseEnter={(e) => e.target.style.backgroundColor = '#333'}
          onMouseLeave={(e) => e.target.style.backgroundColor = 'rgba(0, 0, 0, 1)'}
        >
          <b>LEVEL UP YOUR AI &amp; CREATIVE OVERNIGHT</b>
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
