import { useState } from "react";

interface UpsellModalProps {
  isOpen: boolean;
  onClose: () => void;
}

export function UpsellModal({ isOpen, onClose }: UpsellModalProps) {
  const [accessKey, setAccessKey] = useState("");

  if (!isOpen) return null;

  const handleAccessSubmit = () => {
    // Handle access key submission
    console.log("Access key submitted:", accessKey);
  };

  return (
    <div className="fixed inset-0 bg-black/70 flex items-center justify-center z-50 p-4">
      <div className="bg-gray-900 rounded-lg w-full max-w-4xl max-h-[90vh] overflow-y-auto">
        {/* Header */}
        <div className="flex items-center justify-between p-6 border-b border-gray-700">
          <div className="flex items-center gap-3">
            <div className="w-8 h-8 bg-red-600 rounded flex items-center justify-center">
              <span className="text-white font-bold">⚠</span>
            </div>
            <h2 className="text-white text-xl font-bold">Upgrade Required</h2>
          </div>
          <button 
            onClick={onClose}
            className="text-gray-400 hover:text-white text-2xl leading-none"
          >
            ×
          </button>
        </div>

        {/* Quick Access Section */}
        <div className="p-6 border-b border-gray-700">
          <div className="flex items-center gap-2 mb-4">
            <span className="text-red-500">🔑</span>
            <h3 className="text-white font-semibold">Quick Access with Key</h3>
          </div>
          
          <div className="flex gap-3 mb-4">
            <input
              type="text"
              value={accessKey}
              onChange={(e) => setAccessKey(e.target.value)}
              placeholder="Enter your access key..."
              className="flex-1 bg-gray-700 text-white px-4 py-3 rounded border border-gray-600 focus:outline-none focus:border-red-500"
            />
            <button
              onClick={handleAccessSubmit}
              className="px-6 py-3 bg-red-600 text-white font-semibold rounded hover:bg-red-700 transition-colors"
            >
              Access
            </button>
          </div>

          <div className="text-sm text-gray-400 mb-2">Demo access keys for testing:</div>
          <div className="flex flex-wrap gap-4 text-sm">
            <span className="text-gray-300">
              <span className="font-mono bg-gray-800 px-2 py-1 rounded">DEMO-FREE-2025</span>
              <span className="ml-2 text-gray-500">Free Plan</span>
            </span>
            <span className="text-gray-300">
              <span className="font-mono bg-gray-800 px-2 py-1 rounded">PRO-ACCESS-2025</span>
              <span className="ml-2 text-gray-500">Pro Plan</span>
            </span>
            <span className="text-gray-300">
              <span className="font-mono bg-gray-800 px-2 py-1 rounded">ENTERPRISE-2025</span>
              <span className="ml-2 text-gray-500">Enterprise</span>
            </span>
          </div>
        </div>

        {/* Pricing Tiers */}
        <div className="p-6">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {/* Free Plan */}
            <div className="bg-gray-800 rounded-lg p-6 border border-gray-700">
              <div className="text-center mb-6">
                <div className="w-12 h-12 bg-gray-600 rounded-full flex items-center justify-center mx-auto mb-4">
                  <span className="text-white text-xl">👑</span>
                </div>
                <h3 className="text-white text-xl font-bold mb-2">Free</h3>
                <div className="text-3xl font-bold text-white">
                  $0<span className="text-sm font-normal text-gray-400">/forever</span>
                </div>
              </div>
              
              <ul className="space-y-3 mb-6">
                <li className="flex items-center text-sm text-gray-300">
                  <span className="text-green-500 mr-3">✓</span>
                  Basic prompt generation
                </li>
                <li className="flex items-center text-sm text-gray-300">
                  <span className="text-green-500 mr-3">✓</span>
                  10 prompts per day
                </li>
                <li className="flex items-center text-sm text-gray-300">
                  <span className="text-green-500 mr-3">✓</span>
                  Standard templates
                </li>
                <li className="flex items-center text-sm text-gray-300">
                  <span className="text-green-500 mr-3">✓</span>
                  Community support
                </li>
              </ul>
              
              <button className="w-full bg-gray-600 text-white py-3 rounded font-semibold hover:bg-gray-500 transition-colors">
                Use Free Key
              </button>
            </div>

            {/* Pro Plan */}
            <div className="bg-gray-800 rounded-lg p-6 border-2 border-red-600 relative">
              <div className="absolute -top-3 left-1/2 transform -translate-x-1/2">
                <span className="bg-red-600 text-white text-xs font-bold px-3 py-1 rounded-full">
                  🔥 Most Popular
                </span>
              </div>
              
              <div className="text-center mb-6">
                <div className="w-12 h-12 bg-red-600 rounded-full flex items-center justify-center mx-auto mb-4">
                  <span className="text-white text-xl">👑</span>
                </div>
                <h3 className="text-white text-xl font-bold mb-2">Pro</h3>
                <div className="text-3xl font-bold text-white">
                  $29<span className="text-sm font-normal text-gray-400">/month</span>
                </div>
              </div>
              
              <ul className="space-y-3 mb-6">
                <li className="flex items-center text-sm text-gray-300">
                  <span className="text-green-500 mr-3">✓</span>
                  Unlimited prompts
                </li>
                <li className="flex items-center text-sm text-gray-300">
                  <span className="text-green-500 mr-3">✓</span>
                  Advanced analytics
                </li>
                <li className="flex items-center text-sm text-gray-300">
                  <span className="text-green-500 mr-3">✓</span>
                  Priority support
                </li>
                <li className="flex items-center text-sm text-gray-300">
                  <span className="text-green-500 mr-3">✓</span>
                  Exclusive templates
                </li>
                <li className="flex items-center text-sm text-gray-300">
                  <span className="text-green-500 mr-3">✓</span>
                  Advanced quality optimizer
                </li>
                <li className="flex items-center text-sm text-gray-300">
                  <span className="text-green-500 mr-3">✓</span>
                  Export capabilities
                </li>
              </ul>
              
              <button 
                className="w-full text-white py-3 rounded font-semibold transition-colors"
                style={{ backgroundColor: '#fe1b06' }}
                onMouseEnter={(e) => e.target.style.backgroundColor = '#e0180a'}
                onMouseLeave={(e) => e.target.style.backgroundColor = '#fe1b06'}
              >
                Use Pro Key
              </button>
            </div>

            {/* Enterprise Plan */}
            <div className="bg-gray-800 rounded-lg p-6 border border-gray-700">
              <div className="text-center mb-6">
                <div className="w-12 h-12 bg-purple-600 rounded-full flex items-center justify-center mx-auto mb-4">
                  <span className="text-white text-xl">👑</span>
                </div>
                <h3 className="text-white text-xl font-bold mb-2">Enterprise</h3>
                <div className="text-3xl font-bold text-white">
                  $99<span className="text-sm font-normal text-gray-400">/month</span>
                </div>
              </div>
              
              <ul className="space-y-3 mb-6">
                <li className="flex items-center text-sm text-gray-300">
                  <span className="text-green-500 mr-3">✓</span>
                  Everything in Pro
                </li>
                <li className="flex items-center text-sm text-gray-300">
                  <span className="text-green-500 mr-3">✓</span>
                  API access
                </li>
                <li className="flex items-center text-sm text-gray-300">
                  <span className="text-green-500 mr-3">✓</span>
                  Custom integrations
                </li>
                <li className="flex items-center text-sm text-gray-300">
                  <span className="text-green-500 mr-3">✓</span>
                  Dedicated support
                </li>
                <li className="flex items-center text-sm text-gray-300">
                  <span className="text-green-500 mr-3">✓</span>
                  Team collaboration
                </li>
                <li className="flex items-center text-sm text-gray-300">
                  <span className="text-green-500 mr-3">✓</span>
                  White-label options
                </li>
              </ul>
              
              <button className="w-full bg-purple-600 text-white py-3 rounded font-semibold hover:bg-purple-700 transition-colors">
                Use Enterprise Key
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
