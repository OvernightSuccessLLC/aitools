import { useState } from "react";
import { useNavigate } from "react-router-dom";

export default function LandingPage() {
  const [email, setEmail] = useState("");
  const [isSubmitted, setIsSubmitted] = useState(false);
  const [isLoading, setIsLoading] = useState(false);
  const navigate = useNavigate();

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!email) return;

    setIsLoading(true);
    
    try {
      const response = await fetch('/api/capture-email', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({ email }),
      });

      if (response.ok) {
        setIsSubmitted(true);
        setTimeout(() => {
          navigate('/tools');
        }, 2000);
      }
    } catch (error) {
      console.error('Error submitting email:', error);
    } finally {
      setIsLoading(false);
    }
  };

  if (isSubmitted) {
    return (
      <div className="min-h-screen flex items-center justify-center" style={{ backgroundColor: '#F0440F' }}>
        <div className="max-w-md mx-auto text-center px-6">
          <div className="bg-black rounded-3xl p-8">
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
    <div className="min-h-screen flex items-center justify-center" style={{ backgroundColor: '#F0440F' }}>
      <div className="max-w-md mx-auto text-center px-6">
        <div className="bg-black rounded-3xl p-8">
          <h1 className="text-3xl font-bold text-white mb-4">
            🚀 AI TOOLKIT
          </h1>
          <p className="text-white/80 mb-8 text-lg">
            Access the most powerful AI tools in one place. Enter your email to get started.
          </p>
          
          <form onSubmit={handleSubmit} className="space-y-6">
            <div>
              <input
                type="email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                placeholder="Enter your email address"
                className="w-full px-4 py-3 rounded-lg bg-white/10 border border-white/20 text-white placeholder-white/60 focus:outline-none focus:border-white/50 focus:bg-white/20 transition-all"
                required
                disabled={isLoading}
              />
            </div>
            
            <button
              type="submit"
              disabled={isLoading || !email}
              className="w-full py-3 px-6 bg-white text-black font-bold rounded-lg hover:bg-white/90 disabled:opacity-50 disabled:cursor-not-allowed transition-all"
            >
              {isLoading ? (
                <div className="flex items-center justify-center">
                  <div className="animate-spin rounded-full h-5 w-5 border-b-2 border-black mr-2"></div>
                  Getting you in...
                </div>
              ) : (
                'Access AI Tools →'
              )}
            </button>
          </form>
          
          <p className="text-white/60 text-sm mt-6">
            Join thousands of creators using AI to build amazing things.
          </p>
        </div>
      </div>
    </div>
  );
}
