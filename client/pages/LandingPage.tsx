import { useState } from "react";
import { useNavigate } from "react-router-dom";

export default function LandingPage() {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [isSubmitted, setIsSubmitted] = useState(false);
  const [isLoading, setIsLoading] = useState(false);
  const navigate = useNavigate();

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!email || !name) return;

    setIsLoading(true);

    try {
      const response = await fetch("/api/capture-email", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({ email, name }),
      });

      if (response.ok) {
        setIsSubmitted(true);
        setTimeout(() => {
          navigate("/tools");
        }, 2000);
      }
    } catch (error) {
      console.error("Error submitting details:", error);
    } finally {
      setIsLoading(false);
    }
  };

  if (isSubmitted) {
    return (
      <div className="min-h-screen flex flex-col items-center justify-center bg-[#FF4426]">
        <div className="mb-12">
          <img
            src="https://cdn.builder.io/api/v1/image/assets%2F1964cc1516094f2c9726884f044c2ef1%2Ffa47f670249e457380e59612b7a8a5aa?format=webp&width=800"
            alt="Overnight Success"
            className="w-auto h-16"
          />
        </div>

        <div className="bg-black rounded-lg p-8 w-full max-w-md mx-4">
          <div className="text-center">
            <div className="text-6xl mb-6">✅</div>
            <h1 className="text-2xl font-bold text-white mb-4">
              Welcome to the AI Toolkit!
            </h1>
            <p className="text-white/80 mb-6">
              You're all set. Redirecting you to the tools...
            </p>
            <div className="animate-spin rounded-full h-8 w-8 border-b-2 border-white mx-auto"></div>
          </div>
        </div>
      </div>
    );
  }

  return (
    <div className="min-h-screen flex flex-col items-center justify-center px-4" style={{ backgroundColor: '#fc1c04' }}>
      {/* Logo */}
      <div className="mb-8 sm:mb-12">
        <img
          src="https://cdn.builder.io/api/v1/image/assets%2F1964cc1516094f2c9726884f044c2ef1%2Ffa47f670249e457380e59612b7a8a5aa?format=webp&width=800"
          alt="Overnight Success"
          className="w-auto max-w-[280px] sm:max-w-none"
          style={{ height: '175px', lineHeight: '12px' }}
        />
      </div>

      {/* Form Card */}
      <div
        className="bg-black rounded-lg w-full max-w-md mx-4"
        style={{ padding: '12px 32px 24px' }}
      >
        <div className="text-center mb-6">
          <h1
            className="text-xl sm:text-2xl font-bold mb-2"
            style={{ color: "rgba(255, 255, 255, 1)" }}
          >
            Get Access
          </h1>
          <p
            className="text-sm sm:text-base"
            style={{ color: "rgba(255, 255, 255, 1)", fontSize: '14px' }}
          >
            Enter your details to access the AI Playbook and Toolkit
          </p>
        </div>

        <form onSubmit={handleSubmit} className="space-y-4">
          <div>
            <input
              type="text"
              value={name}
              onChange={(e) => setName(e.target.value)}
              placeholder="Your Name"
              className="w-full px-3 sm:px-4 py-3 sm:py-4 text-sm sm:text-base rounded bg-gray-700 border border-gray-600 text-white placeholder-gray-400 focus:outline-none focus:border-gray-500 focus:ring-2 focus:ring-gray-500/50 transition-all"
              required
              disabled={isLoading}
            />
          </div>

          <div>
            <input
              type="email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              placeholder="Your Email Address"
              className="w-full px-3 sm:px-4 py-3 sm:py-4 text-sm sm:text-base rounded bg-gray-700 border border-gray-600 text-white placeholder-gray-400 focus:outline-none focus:border-gray-500 focus:ring-2 focus:ring-gray-500/50 transition-all"
              required
              disabled={isLoading}
            />
          </div>

          <button
            type="submit"
            disabled={isLoading || !email || !name}
            className="w-full py-3 sm:py-4 px-6 text-sm sm:text-base text-white font-bold rounded hover:bg-[#e03d1f] active:bg-[#d03419] disabled:cursor-not-allowed transition-all transform hover:scale-[1.02] active:scale-[0.98]"
            style={{ opacity: "1", backgroundColor: '#fc1c04' }}
          >
            {isLoading ? (
              <div className="flex items-center justify-center">
                <div className="animate-spin rounded-full h-5 w-5 border-b-2 border-white mr-2"></div>
                <span className="text-sm sm:text-base">Processing...</span>
              </div>
            ) : (
              "GET ACCESS NOW"
            )}
          </button>
        </form>
      </div>
    </div>
  );
}
