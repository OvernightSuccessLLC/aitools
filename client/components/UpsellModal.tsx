import { useState } from "react";

interface UpsellModalProps {
  isOpen: boolean;
  onClose: () => void;
}

export function UpsellModal({ isOpen, onClose }: UpsellModalProps) {
  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 bg-black/70 flex items-center justify-center z-50 p-4">
      <div className="bg-gray-900 rounded-lg w-full max-w-4xl max-h-[90vh] overflow-y-auto">
        {/* Header */}
        <div
          className="flex items-center justify-between border-b"
          style={{
            backgroundColor: 'rgba(0, 0, 0, 1)',
            padding: '20px 24px 0',
            border: '1px solid rgba(0, 0, 0, 1)'
          }}
        >
          <div className="flex items-center gap-3">
            <div className="w-8 h-8 rounded flex items-center justify-center" style={{ backgroundColor: '#fe1b06' }}>
              <span className="text-white font-bold">⚠</span>
            </div>
            <h2 className="text-white text-xl font-bold">LEVEL UP NOW!</h2>
          </div>
          <button 
            onClick={onClose}
            className="text-gray-400 hover:text-white text-2xl leading-none"
          >
            ×
          </button>
        </div>

        {/* Pricing Section */}
        <div className="p-6" style={{ backgroundColor: 'rgba(0, 0, 0, 1)' }}>
          <div className="flex flex-col gap-6">
            <div className="flex gap-5 max-md:flex-col max-md:gap-0">
              {/* Pro Plan */}
              <div className="flex flex-col w-1/2 max-md:w-full">
                <div 
                  className="bg-black rounded-lg border-2 relative p-6"
                  style={{ border: '2px solid rgb(220, 38, 38)' }}
                >
                  <div className="text-center mb-6">
                    <div
                      className="w-12 h-12 rounded-full flex items-center justify-center mx-auto mb-4"
                      style={{
                        backgroundColor: '#fe1b06',
                        backgroundImage: 'url(https://cdn.builder.io/api/v1/image/assets%2F1964cc1516094f2c9726884f044c2ef1%2Fedeed310013a47de8a494692cea1bafc)',
                        backgroundRepeat: 'no-repeat',
                        backgroundPosition: 'center',
                        backgroundSize: 'cover'
                      }}
                    />
                    <h3 className="text-white text-xl font-bold mb-2">
                      <a href="https://overnightsuccessllc.gumroad.com/l/thebriefcase?_gl=1*122wgru*_ga*Njc3Njk2NDc3LjE3NTM2NTY0ODU.*_ga_6LJN6D94N6*czE3NTM2NTY0ODUkbzEkZzEkdDE3NTM2NTY1MzIkajEzJGwwJGgw">
                        The Briefcase
                      </a>
                    </h3>
                    <div className="text-3xl font-bold text-white">
                      $9.99<span className="text-sm font-normal text-gray-400">&nbsp;one-time</span>
                    </div>
                  </div>

                  <ul className="space-y-3 mb-6">
                    <li className="flex items-center text-sm text-gray-300">
                      <span className="text-green-500 mr-3">✓</span>
                      100+ Curated Tools
                    </li>
                    <li className="flex items-center text-sm text-gray-300">
                      <span className="text-green-500 mr-3">✓</span>
                      Frameworks & Templates
                    </li>
                    <li className="flex items-center text-sm text-gray-300">
                      <span className="text-green-500 mr-3">✓</span>
                      Full Playbook
                    </li>
                    <li className="flex items-center text-sm text-gray-300">
                      <span className="text-green-500 mr-3">✓</span>
                      Template Library
                    </li>
                    <li className="flex items-center text-sm text-gray-300">
                      <span className="text-green-500 mr-3">✓</span>
                      Lifetime Updates
                    </li>
                    <li className="flex items-center text-sm text-gray-300">
                      <span className="text-green-500 mr-3">✓</span>
                      Plus More
                    </li>
                  </ul>
                  
                  <button
                    className="w-full text-white font-semibold rounded transition-colors text-xs"
                    style={{
                      backgroundColor: '#fe1b06',
                      height: '20px',
                      padding: '2px 0'
                    }}
                    onMouseEnter={(e) => e.target.style.backgroundColor = '#e0180a'}
                    onMouseLeave={(e) => e.target.style.backgroundColor = '#fe1b06'}
                  >
                    <a href="https://overnightsuccessllc.gumroad.com/l/thebriefcase?_gl=1*122wgru*_ga*Njc3Njk2NDc3LjE3NTM2NTY0ODU.*_ga_6LJN6D94N6*czE3NTM2NTY0ODUkbzEkZzEkdDE3NTM2NTY1MzIkajEzJGwwJGgw">
                      GET ACCESS NOW
                    </a>
                  </button>
                </div>
              </div>

              {/* Enterprise Plan */}
              <div className="flex flex-col w-1/2 ml-5 max-md:w-full max-md:ml-0">
                <div 
                  className="bg-black rounded-lg p-6"
                  style={{ border: '2px solid #fe1b06' }}
                >
                  <div className="text-center mb-6">
                    <div
                      className="w-12 h-12 rounded-full flex items-center justify-center mx-auto mb-4"
                      style={{
                        backgroundColor: '#fe1b06',
                        backgroundImage: 'url(https://cdn.builder.io/api/v1/image/assets%2F1964cc1516094f2c9726884f044c2ef1%2F90ab89f4555a48adb4dc892b50483726)',
                        backgroundRepeat: 'no-repeat',
                        backgroundPosition: 'center',
                        backgroundSize: 'cover'
                      }}
                    />
                    <h3 className="text-white text-xl font-bold mb-2">
                      <a href="https://overnightsuccessllc.gumroad.com/l/creativeos?_gl=1*1252yyk*_ga*Njc3Njk2NDc3LjE3NTM2NTY0ODU.*_ga_6LJN6D94N6*czE3NTM2NTY0ODUkbzEkZzEkdDE3NTM2NTY1MzIkajEzJGwwJGgw">
                        Creative O/S
                      </a>
                    </h3>
                    <div className="text-3xl font-bold text-white">
                      $29<span className="text-sm font-normal text-gray-400">&nbsp;one-time</span>
                    </div>
                  </div>

                  <ul className="space-y-3 mb-6">
                    <li className="flex items-center text-sm text-gray-300">
                      <span className="text-green-500 mr-3">✓</span>
                      200+ Curated Tools
                    </li>
                    <li className="flex items-center text-sm text-gray-300">
                      <span className="text-green-500 mr-3">✓</span>
                      Frameworks & Integrations
                    </li>
                    <li className="flex items-center text-sm text-gray-300">
                      <span className="text-green-500 mr-3">✓</span>
                      Full Playbook
                    </li>
                    <li className="flex items-center text-sm text-gray-300">
                      <span className="text-green-500 mr-3">✓</span>
                      Template Library
                    </li>
                    <li className="flex items-center text-sm text-gray-300">
                      <span className="text-green-500 mr-3">✓</span>
                      Custom Prompt Generators
                    </li>
                    <li className="flex items-center text-sm text-gray-300">
                      <span className="text-green-500 mr-3">✓</span>
                      Pre-Built Keyworld Library
                    </li>
                  </ul>
                  
                  <button
                    className="w-full text-white font-semibold rounded transition-colors text-xs"
                    style={{
                      backgroundColor: '#fe1b06',
                      height: '20px',
                      padding: '2px 0'
                    }}
                    onMouseEnter={(e) => e.target.style.backgroundColor = '#e0180a'}
                    onMouseLeave={(e) => e.target.style.backgroundColor = '#fe1b06'}
                  >
                    <a href="https://overnightsuccessllc.gumroad.com/l/creativeos?_gl=1*1252yyk*_ga*Njc3Njk2NDc3LjE3NTM2NTY0ODU.*_ga_6LJN6D94N6*czE3NTM2NTY0ODUkbzEkZzEkdDE3NTM2NTY1MzIkajEzJGwwJGgw">
                      GET ACCESS NOW
                    </a>
                  </button>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
