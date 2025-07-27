import { ToolCard } from "../components/ToolCard";
import { Header } from "../components/Header";

const aiTools = [
  {
    name: "ChatGPT",
    description: "The industry-standard LLM chatbot known for its conversational fluency and versatility across a wide range of prompts and tasks.",
    features: ["Conversational AI", "Text generation", "Multi-purpose"],
    category: "freemium" as const,
    url: "https://chat.openai.com"
  },
  {
    name: "Perplexity AI",
    description: "An AI-infused search engine and chatbot with web citations, multimodal inputs, and Pro-tier API access. Valued at $14B as of June 2025.",
    features: ["AI search", "Web citations", "Multimodal inputs"],
    category: "freemium" as const,
    url: "https://www.perplexity.ai"
  },
  {
    name: "Grok (X by Elon Musk)",
    description: "A fast-evolving chatbot with image understanding, PDF parsing, and the new Grok‑3 reasoning model.",
    features: ["Image understanding", "PDF parsing", "Advanced reasoning"],
    category: "freemium" as const,
    url: "https://x.com/i/grok"
  },
  {
    name: "DeepSeek",
    description: "A rising chatbot based on DeepSeek‑R1; top‑downloaded in Jan 2025 with advanced GRM/SPCT tuning.",
    features: ["Advanced tuning", "Rising popularity", "Competitive performance"],
    category: "freemium" as const,
    url: "https://www.deepseek.com"
  },
  {
    name: "Claude (Anthropic)",
    description: "A reasoning-focused AI assistant known for nuanced responses and constitutional training.",
    features: ["Constitutional AI", "Reasoning", "Nuanced responses"],
    category: "freemium" as const,
    url: "https://claude.ai"
  },
  {
    name: "Gemini (Google)",
    description: "Google's flagship AI with multimodal capabilities and integration across Google services.",
    features: ["Multimodal", "Google integration", "Real-time info"],
    category: "freemium" as const,
    url: "https://gemini.google.com"
  },
  {
    name: "DALL-E (OpenAI)",
    description: "Advanced AI image generator known for high-quality, creative visual outputs from text prompts.",
    features: ["Image generation", "High quality", "Creative outputs"],
    category: "freemium" as const,
    url: "https://openai.com/dall-e-3"
  },
  {
    name: "Midjourney",
    description: "Popular AI art generator favored by artists and designers for its aesthetic style and community features.",
    features: ["Artistic style", "Community", "High-quality art"],
    category: "paid" as const,
    url: "https://www.midjourney.com"
  },
  {
    name: "Stable Diffusion",
    description: "Open-source image generation model with extensive customization options and local deployment capability.",
    features: ["Open source", "Customizable", "Local deployment"],
    category: "free" as const,
    url: "https://stability.ai/stable-diffusion"
  },
  {
    name: "Leonardo AI",
    description: "AI art platform focused on consistent character creation and style control for professional workflows.",
    features: ["Character consistency", "Style control", "Professional tools"],
    category: "freemium" as const,
    url: "https://leonardo.ai"
  },
  {
    name: "Runway ML",
    description: "AI video generation and editing platform with advanced motion control and real-time collaboration features.",
    features: ["Video generation", "Motion control", "Real-time collaboration"],
    category: "freemium" as const,
    url: "https://runwayml.com"
  },
  {
    name: "Luma AI",
    description: "3D capture and AI video generation platform specializing in photorealistic scene reconstruction.",
    features: ["3D capture", "Photorealistic", "Scene reconstruction"],
    category: "freemium" as const,
    url: "https://lumalabs.ai"
  },
  {
    name: "ElevenLabs",
    description: "Advanced AI voice synthesis platform with realistic speech generation and voice cloning capabilities.",
    features: ["Voice synthesis", "Speech generation", "Voice cloning"],
    category: "freemium" as const,
    url: "https://elevenlabs.io"
  },
  {
    name: "Murf AI",
    description: "Professional AI voiceover platform with natural-sounding voices for business and creative projects.",
    features: ["Professional voiceover", "Natural voices", "Business focused"],
    category: "freemium" as const,
    url: "https://murf.ai"
  },
  {
    name: "Notion AI",
    description: "Integrated AI writing assistant within Notion workspace for enhanced productivity and content creation.",
    features: ["Writing assistant", "Workspace integration", "Productivity focused"],
    category: "freemium" as const,
    url: "https://www.notion.so/product/ai"
  },
  {
    name: "Jasper AI",
    description: "Enterprise-focused AI writing platform with brand voice customization and team collaboration features.",
    features: ["Enterprise focused", "Brand voice", "Team collaboration"],
    category: "paid" as const,
    url: "https://www.jasper.ai"
  },
  {
    name: "Copy.ai",
    description: "AI copywriting tool designed for marketing teams with templates for various content types and campaigns.",
    features: ["Marketing focus", "Content templates", "Campaign tools"],
    category: "freemium" as const,
    url: "https://www.copy.ai"
  },
  {
    name: "Grammarly",
    description: "AI-powered writing assistant with grammar checking, style suggestions, and tone detection.",
    features: ["Grammar checking", "Style suggestions", "Tone detection"],
    category: "freemium" as const,
    url: "https://www.grammarly.com"
  },
  {
    name: "GitHub Copilot",
    description: "AI programming assistant that provides code suggestions and completions directly in your IDE.",
    features: ["Code suggestions", "IDE integration", "Programming assistant"],
    category: "paid" as const,
    url: "https://github.com/features/copilot"
  },
  {
    name: "Cursor",
    description: "AI-powered code editor with intelligent code completion and natural language programming capabilities.",
    features: ["Code editor", "Natural language", "Intelligent completion"],
    category: "freemium" as const,
    url: "https://cursor.sh"
  },
  {
    name: "Replit AI",
    description: "Cloud-based development environment with AI coding assistance and collaborative programming features.",
    features: ["Cloud development", "AI assistance", "Collaborative"],
    category: "freemium" as const,
    url: "https://replit.com"
  },
  {
    name: "Tabnine",
    description: "AI code completion tool that works across multiple IDEs and programming languages with privacy focus.",
    features: ["Multi-IDE support", "Multiple languages", "Privacy focused"],
    category: "freemium" as const,
    url: "https://www.tabnine.com"
  },
  {
    name: "Otter.ai",
    description: "AI meeting transcription and note-taking service with real-time collaboration and speaker identification.",
    features: ["Meeting transcription", "Real-time collaboration", "Speaker ID"],
    category: "freemium" as const,
    url: "https://otter.ai"
  },
  {
    name: "Descript",
    description: "All-in-one audio and video editing platform with AI transcription and voice synthesis capabilities.",
    features: ["Audio/video editing", "AI transcription", "Voice synthesis"],
    category: "freemium" as const,
    url: "https://www.descript.com"
  }
];

export default function Tools() {
  const freeTools = aiTools.filter(tool => tool.category === "free");
  const freemiumTools = aiTools.filter(tool => tool.category === "freemium");
  const paidTools = aiTools.filter(tool => tool.category === "paid");

  return (
    <div className="min-h-screen bg-brand-red">
      <Header />
      <main className="max-w-7xl mx-auto px-4 py-8">
        <div className="text-center mb-12">
          <h1 className="text-4xl md:text-6xl font-bold text-brand-cream mb-6 drop-shadow-lg">
            🛠️ AI Tool Kit
          </h1>
          <p className="text-white/90 text-lg md:text-xl max-w-3xl mx-auto">
            Discover and access the most powerful AI tools available today. From chatbots to image generators, 
            find the perfect tool for your creative and professional needs.
          </p>
        </div>

        {/* Free Tools */}
        {freeTools.length > 0 && (
          <section className="mb-12">
            <h2 className="text-2xl md:text-3xl font-bold text-brand-cream mb-6 flex items-center">
              <span className="bg-green-500 text-white px-3 py-1 rounded-full text-sm mr-3">FREE</span>
              Open Source & Free Tools
            </h2>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
              {freeTools.map((tool, index) => (
                <ToolCard key={index} {...tool} />
              ))}
            </div>
          </section>
        )}

        {/* Freemium Tools */}
        {freemiumTools.length > 0 && (
          <section className="mb-12">
            <h2 className="text-2xl md:text-3xl font-bold text-brand-cream mb-6 flex items-center">
              <span className="bg-blue-500 text-white px-3 py-1 rounded-full text-sm mr-3">FREEMIUM</span>
              Free with Premium Options
            </h2>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
              {freemiumTools.map((tool, index) => (
                <ToolCard key={index} {...tool} />
              ))}
            </div>
          </section>
        )}

        {/* Paid Tools */}
        {paidTools.length > 0 && (
          <section className="mb-12">
            <h2 className="text-2xl md:text-3xl font-bold text-brand-cream mb-6 flex items-center">
              <span className="bg-orange-500 text-white px-3 py-1 rounded-full text-sm mr-3">PAID</span>
              Premium Tools
            </h2>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
              {paidTools.map((tool, index) => (
                <ToolCard key={index} {...tool} />
              ))}
            </div>
          </section>
        )}
      </main>
    </div>
  );
}
