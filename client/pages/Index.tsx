import { ToolCard } from "../components/ToolCard";
import { Header } from "../components/Header";

const aiTools = [
  {
    name: "Stylized.ai",
    description: "Generate product photos integrated into ecommerce platforms like Shopify",
    features: ["Product photos", "Ecommerce ready", "Shopify compatible"],
    category: "freemium" as const,
    url: "https://stylized.ai"
  },
  {
    name: "Stable Diffusion",
    description: "Open-source AI model for high-quality image generation",
    features: ["Image generation", "Open source", "Community driven"],
    category: "freemium" as const,
    url: "https://stability.ai"
  },
  {
    name: "Runway ML",
    description: "Creative AI platform for video, image, and text generation",
    features: ["Video generation", "Image editing", "Multi-modal"],
    category: "freemium" as const,
    url: "https://runwayml.com"
  },
  {
    name: "Replit Ghostwriter",
    description: "AI that helps you write and understand code in many languages",
    features: ["Code writing", "Code understanding", "Multi-language"],
    category: "freemium" as const,
    url: "https://replit.com/ghostwriter"
  },
  {
    name: "Resume",
    description: "AI resume builder that designs and complements your experiences",
    features: ["Resume builder", "Component generation", "Design assistance"],
    category: "free" as const,
    url: "https://resume.io"
  },
  {
    name: "Prompt Hunt",
    description: "Prompt library and AI art generation platform",
    features: ["Prompt library", "AI generation", "Community prompts"],
    category: "freemium" as const,
    url: "https://prompthunt.com"
  },
  {
    name: "Playground AI",
    description: "Free AI image generator and editor with multiple models",
    features: ["Image generation", "Multiple models", "Free editor"],
    category: "freemium" as const,
    url: "https://playgroundai.com"
  },
  {
    name: "Phind",
    description: "AI-powered search engine for developers and engineers",
    features: ["Developer search", "Code help", "Engineering focus"],
    category: "freemium" as const,
    url: "https://phind.com"
  },
  {
    name: "Perplexity AI",
    description: "An AI-based search engine and chatbot with intelligent Q&A capabilities",
    features: ["Search engine", "Intelligent Q&A", "Multilingual"],
    category: "premium" as const,
    url: "https://perplexity.ai"
  },
  {
    name: "Pebblely",
    description: "Generate product images in various tones and settings",
    features: ["Product images", "Tone variety", "Multiple settings"],
    category: "freemium" as const,
    url: "https://pebblely.com"
  },
  {
    name: "OpenArt",
    description: "AI image generation and prompt patterns platform",
    features: ["AI generation", "Prompt patterns", "Community driven"],
    category: "freemium" as const,
    url: "https://openart.ai"
  },
  {
    name: "NotebookLM",
    description: "A reading and note-taking assistant for analyzing documents and generating summaries",
    features: ["Research assistant", "Note analysis", "Content summary"],
    category: "free" as const,
    url: "https://notebooklm.google.com"
  },
  {
    name: "NightCafe",
    description: "AI art generator using various algorithms including VQGAN+CLIP",
    features: ["Multiple algorithms", "Art generation", "Community platform"],
    category: "premium" as const,
    url: "https://nightcafe.studio"
  },
  {
    name: "Mutable AI",
    description: "Code refactor, document, and write code faster with AI",
    features: ["Code refactoring", "Documentation", "Fast coding"],
    category: "freemium" as const,
    url: "https://mutable.ai"
  },
  {
    name: "Midjourney",
    description: "Prompt alternatives art generation platform",
    features: ["Prompt alternatives", "Art generation", "Community platform"],
    category: "freemium" as const,
    url: "https://midjourney.com"
  },
  {
    name: "Microsoft Designer",
    description: "A graphic design app by Microsoft for creating social posts and marketing visuals",
    features: ["Graphic design", "Social posts", "Marketing visuals"],
    category: "free" as const,
    url: "https://designer.microsoft.com"
  },
  {
    name: "Menu",
    description: "Multi-agent autonomous agent for complex web tasks like coding and planning",
    features: ["Multi-agent", "Web tasks", "Coding assistance"],
    category: "free" as const,
    url: "https://menu.so"
  },
  {
    name: "Magic Design",
    description: "Canva's intelligent tool that creates layouts from text input",
    features: ["Layout creation", "Text input", "Design templates"],
    category: "free" as const,
    url: "https://canva.com/magic-design"
  },
  {
    name: "Luminal AI",
    description: "AI platform for creatives to generate branded text and visual content",
    features: ["Branded content", "Text generation", "Creative platform"],
    category: "freemium" as const,
    url: "https://luminal.ai"
  },
  {
    name: "LostEnhance",
    description: "Live AI to enhance the resolution of images and videos",
    features: ["Image enhancement", "Video enhancement", "Photo improvement"],
    category: "freemium" as const,
    url: "https://lostenhance.com"
  },
  {
    name: "Leonardo AI",
    description: "AI platform for generating detailed visual artwork and creative assets",
    features: ["Visual artwork", "Creative assets", "Detailed generation"],
    category: "freemium" as const,
    url: "https://leonardo.ai"
  },
  {
    name: "King AI",
    description: "Advanced text-to-video generator for quality and affordability to create at Speed",
    features: ["Video generation", "High quality", "Cost effective"],
    category: "freemium" as const,
    url: "https://king.ai"
  },
  {
    name: "Kittl",
    description: "An intuitive graphic design tool with templates and vector support",
    features: ["Graphic design", "Templates", "Vector support"],
    category: "free" as const,
    url: "https://kittl.com"
  },
  {
    name: "Imagen 3 Veo",
    description: "Google's advanced text-to-image, Veo 2 supports coherent video from text audio",
    features: ["Image generation", "Video creation", "Audio support"],
    category: "freemium" as const,
    url: "https://imagen.google.com"
  },
  {
    name: "HotpotAI",
    description: "AI tools for image editing, enhancement, and background removal",
    features: ["Image editing", "Enhancement", "Background removal"],
    category: "freemium" as const,
    url: "https://hotpot.ai"
  },
  {
    name: "Headlines",
    description: "Copywriting assistant powered by GPT for landing pages and ads",
    features: ["Copywriting", "Landing pages", "Ad creation"],
    category: "freemium" as const,
    url: "https://headlines.ai"
  },
  {
    name: "Grok",
    description: "A free-reasoning chatbot with image understanding, categories and the new Grok 3 learning research",
    features: ["Image understanding", "Advanced reasoning", "Research capabilities"],
    category: "freemium" as const,
    url: "https://grok.x.ai"
  },
  {
    name: "GlennAI",
    description: "AI assistants for various productivity and creative tasks",
    features: ["Productivity", "Creative tasks", "AI assistance"],
    category: "freemium" as const,
    url: "https://glenn.ai"
  }
];

export default function Index() {
  return (
    <div className="min-h-screen bg-brand-red">
      <Header />
      
      <main className="max-w-7xl mx-auto px-3 sm:px-4 py-6 sm:py-8">
        <div className="text-center mb-8 sm:mb-12">
                    <h1 className="text-3xl sm:text-4xl md:text-6xl font-bold text-brand-cream mb-4" style={{
            fontFamily: "'Georgia', serif",
            textShadow: "4px 4px 0px #000, -2px -2px 0px #000, 2px -2px 0px #000, -2px 2px 0px #000"
          }}>
            AI Toolkit
          </h1>
          <p className="text-white/90 text-base sm:text-lg md:text-xl max-w-2xl mx-auto px-4">
            Discover the best AI tools for productivity, creativity, and innovation. 
            Hand-curated collection of premium and free AI solutions.
          </p>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 sm:gap-6">
          {aiTools.map((tool, index) => (
            <ToolCard
              key={index}
              name={tool.name}
              description={tool.description}
              features={tool.features}
              category={tool.category}
              url={tool.url}
            />
          ))}
        </div>
      </main>
      
      <footer className="bg-brand-black/20 border-t border-brand-black/30 mt-16">
        <div className="max-w-7xl mx-auto px-3 sm:px-4 py-8 text-center">
          <p className="text-white/60 text-sm">
            © 2024 Overnight Success. Curated AI tools for modern creators.
          </p>
        </div>
      </footer>
    </div>
  );
}
