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
    name: "DALL·E 3 / ChatGPT images",
    description: "Top-tier for creative image generation integrated into ChatGPT's workspace.",
    features: ["Image generation", "ChatGPT integration", "Creative tools"],
    category: "freemium" as const,
    url: "https://chat.openai.com"
  },
  {
    name: "Midjourney",
    description: "Primary alternative art-generation platform.",
    features: ["Art generation", "High quality", "Creative community"],
    category: "premium" as const,
    url: "https://www.midjourney.com"
  },
  {
    name: "Freepik AI",
    description: "AI-based graphic and design generation tools.",
    features: ["Graphic design", "Design templates", "Creative assets"],
    category: "freemium" as const,
    url: "https://www.freepik.com"
  },
  {
    name: "Imagen & Veo (Google DeepMind)",
    description: "Imagen generates visuals, Veo 3 supports coherent video with audio.",
    features: ["Visual generation", "Video creation", "Audio support"],
    category: "freemium" as const,
    url: "https://en.wikipedia.org/wiki/Google_DeepMind"
  },
  {
    name: "Kling 2",
    description: "Awarded Best AI video generator for quality and affordability in recent AI awards.",
    features: ["Video generation", "Award winning", "High quality"],
    category: "freemium" as const,
    url: "https://kling.tv"
  },
  {
    name: "Runway",
    description: "Creative video tools used in professional-grade content.",
    features: ["Video editing", "Professional tools", "Creative suite"],
    category: "freemium" as const,
    url: "https://runwayml.com"
  },
  {
    name: "NotebooksLM (Google)",
    description: "A research & note-taking assistant for analyzing data and generating summaries.",
    features: ["Research assistant", "Note-taking", "Data analysis"],
    category: "free" as const,
    url: "https://notebooklm.google/"
  },
  {
    name: "Manus",
    description: "Multimodal autonomous agent for complex web tasks like coding and planning.",
    features: ["Web automation", "Coding assistance", "Task planning"],
    category: "freemium" as const,
    url: "https://en.wikipedia.org/wiki/Manus_%28AI_agent%29"
  },
  {
    name: "Flux",
    description: "Next-gen text-to-image model with in-context editing.",
    features: ["Text-to-image", "In-context editing", "Next-gen model"],
    category: "freemium" as const,
    url: "https://en.wikipedia.org/wiki/Flux_%28text-to-image_model%29"
  },
  {
    name: "Tome.app",
    description: "AI-powered storytelling and presentation creation platform.",
    features: ["Storytelling", "Presentations", "Content creation"],
    category: "freemium" as const,
    url: "https://tome.app/"
  },
  {
    name: "Descript",
    description: "AI-enhanced audio/video editor with transcription and editing.",
    features: ["Audio editing", "Video editing", "Transcription"],
    category: "freemium" as const,
    url: "https://www.descript.com"
  },
  {
    name: "Dia Browser",
    description: "AI-integrated browser with built-in assistants for web automation.",
    features: ["AI browser", "Web automation", "Built-in assistants"],
    category: "freemium" as const,
    url: "https://www.theverge.com/web/685232/dia-browser-ai-arc"
  },
  {
    name: "Zapier AI",
    description: "Collections of tested AI automations for workflows.",
    features: ["Workflow automation", "AI integrations", "Productivity tools"],
    category: "freemium" as const,
    url: "https://zapier.com/blog/best-ai-productivity-tools"
  },
  {
    name: "Synthesia",
    description: "AI video avatars, voice cloning & screen-record capabilities.",
    features: ["Video avatars", "Voice cloning", "Screen recording"],
    category: "premium" as const,
    url: "https://www.synthesia.io"
  },
  {
    name: "V7 Labs",
    description: "Categorized list of 35+ best AI tools for writing, coding, image/video.",
    features: ["Tool directory", "AI catalog", "Resource hub"],
    category: "free" as const,
    url: "https://www.v7labs.com/blog/best-ai-tools-listed"
  },
  {
    name: "Framer",
    description: "Build and instantly publish AI-generated websites with a visual editor.",
    features: ["Website builder", "Visual editor", "AI generation"],
    category: "freemium" as const,
    url: "https://framer.com/"
  },
  {
    name: "Taskade",
    description: "Visualize your tasks and notes with AI-powered productivity tools.",
    features: ["Task management", "Note visualization", "Productivity"],
    category: "freemium" as const,
    url: "https://taskade.com/"
  },
  {
    name: "Bing Image Creator",
    description: "Generate images from natural text descriptions, powered by DALL-E.",
    features: ["Image generation", "DALL-E powered", "Text descriptions"],
    category: "free" as const,
    url: "https://www.bing.com/create"
  },
  {
    name: "AutoDraw",
    description: "Turns freehand sketches into refined icons and illustrations.",
    features: ["Sketch to icon", "Drawing assistance", "Icon creation"],
    category: "free" as const,
    url: "https://www.autodraw.com/"
  },
  {
    name: "Pebblely",
    description: "AI image generator for product images in various styles and settings.",
    features: ["Product images", "Style variety", "E-commerce focused"],
    category: "freemium" as const,
    url: "https://pebblely.com/"
  },
  {
    name: "Booth.ai",
    description: "Generates professional-quality product photos using AI, focused on furniture, fashion, and packaged goods.",
    features: ["Product photography", "Professional quality", "E-commerce"],
    category: "premium" as const,
    url: "http://booth.ai/"
  },
  {
    name: "Stylized.ai",
    description: "Generates product photos integrated into ecommerce platforms like Shopify.",
    features: ["Product photos", "Shopify integration", "E-commerce ready"],
    category: "freemium" as const,
    url: "http://stylized.ai/"
  },
  {
    name: "Fronty",
    description: "Converts uploaded images or drawings into HTML and CSS code using AI.",
    features: ["Image to code", "HTML generation", "CSS creation"],
    category: "freemium" as const,
    url: "https://fronty.com/"
  },
  {
    name: "LetsEnhance",
    description: "Uses AI to enhance the resolution of images and photographs.",
    features: ["Image enhancement", "Resolution upscaling", "Photo improvement"],
    category: "freemium" as const,
    url: "https://letsenhance.io/"
  },
  {
    name: "Remove.bg",
    description: "Recognizes and removes image backgrounds effectively without requiring signup.",
    features: ["Background removal", "No signup required", "Easy to use"],
    category: "freemium" as const,
    url: "http://remove.bg/"
  },
  {
    name: "Ideogram 3.0",
    description: "Advanced AI image generation with improved text rendering and creative capabilities.",
    features: ["Image generation", "Text rendering", "Creative tools"],
    category: "freemium" as const,
    url: "https://ideogram.ai/"
  },
  {
    name: "GlamAI",
    description: "AI-powered beauty and fashion content generation platform.",
    features: ["Beauty content", "Fashion AI", "Style generation"],
    category: "freemium" as const,
    url: "https://glam.ai/"
  }
];

export default function Index() {
  return (
    <div className="min-h-screen bg-brand-red">
      <Header />
      
      <main className="max-w-7xl mx-auto px-3 sm:px-4 py-0">
        <div className="text-center mb-8 sm:mb-12">
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
      </footer>
    </div>
  );
}
