import { ToolCard } from "../components/ToolCard";
import { Header } from "../components/Header";
import { UpsellBanner } from "../components/UpsellBanner";

const aiTools = [
  // AI Category - Core AI Tools & LLMs
  {
    name: "ChatGPT",
    description:
      "The industry-standard LLM chatbot known for its conversational fluency and versatility across a wide range of prompts and tasks.",
    features: ["Conversational AI", "Text generation", "Multi-purpose"],
    category: "AI" as const,
    url: "https://chat.openai.com",
  },

  {
    name: "Perplexity AI",
    description:
      "An AI-infused search engine and chatbot with web citations, multimodal inputs, and Pro-tier API access. Valued at $14B as of June 2025.",
    features: ["AI search", "Web citations", "Multimodal inputs"],
    category: "AI" as const,
    url: "https://www.perplexity.ai",
  },
  {
    name: "Grok (X by Elon Musk)",
    description:
      "A fast-evolving chatbot with image understanding, PDF parsing, and the new Grok‑3 reasoning model.",
    features: ["Image understanding", "PDF parsing", "Advanced reasoning"],
    category: "AI" as const,
    url: "https://x.com/i/grok",
  },
  {
    name: "DeepSeek",
    description:
      "A rising chatbot based on DeepSeek‑R1; top‑downloaded in Jan 2025 with advanced GRM/SPCT tuning.",
    features: [
      "Advanced tuning",
      "Rising popularity",
      "Competitive performance",
    ],
    category: "AI" as const,
    url: "https://www.deepseek.com",
  },
  {
    name: "Claude (Anthropic)",
    description:
      "A reasoning-focused AI assistant known for nuanced responses and constitutional training.",
    features: ["Constitutional AI", "Reasoning", "Nuanced responses"],
    category: "AI" as const,
    url: "https://claude.ai",
  },

  {
    name: "Gemini (Google)",
    description:
      "Google's flagship AI with multimodal capabilities and integration across Google services.",
    features: ["Multimodal", "Google integration", "Real-time info"],
    category: "AI" as const,
    url: "https://gemini.google.com",
  },
  {
    name: "GitHub Copilot",
    description:
      "AI programming assistant that provides code suggestions and completions directly in your IDE.",
    features: ["Code suggestions", "IDE integration", "Programming assistant"],
    category: "AI" as const,
    url: "https://github.com/features/copilot",
  },
  {
    name: "Cursor",
    description:
      "AI-powered code editor with intelligent code completion and natural language programming capabilities.",
    features: ["Code editor", "Natural language", "Intelligent completion"],
    category: "AI" as const,
    url: "https://cursor.sh",
  },
  {
    name: "Replit AI",
    description:
      "Cloud-based development environment with AI coding assistance and collaborative programming features.",
    features: ["Cloud development", "AI assistance", "Collaborative"],
    category: "AI" as const,
    url: "https://replit.com",
  },
  {
    name: "Tabnine",
    description:
      "AI code completion tool that works across multiple IDEs and programming languages with privacy focus.",
    features: ["Multi-IDE support", "Multiple languages", "Privacy focused"],
    category: "AI" as const,
    url: "https://www.tabnine.com",
  },
  {
    name: "Codeium",
    description: "Free AI code completion tool for all major IDEs.",
    features: ["Free tier", "Multi-IDE", "Code completion"],
    category: "AI" as const,
    url: "https://codeium.com",
  },
  {
    name: "CodeWhisperer",
    description: "Amazon's coding assistant integrated into IDEs.",
    features: ["AWS integration", "Security scanning", "Multi-language"],
    category: "AI" as const,
    url: "https://aws.amazon.com/codewhisperer",
  },
  {
    name: "Ask Codi",
    description: "Natural language to code generation and query platform.",
    features: ["Natural language", "Code generation", "Query support"],
    category: "AI" as const,
    url: "https://www.askcodi.com",
  },
  {
    name: "Phind",
    description: "AI-powered search engine for developers and engineers.",
    features: ["Developer focused", "Code search", "Technical answers"],
    category: "AI" as const,
    url: "https://www.phind.com",
  },
  {
    name: "Mutable AI",
    description: "Helps refactor, document, and write code faster with AI.",
    features: ["Code refactoring", "Documentation", "Productivity"],
    category: "AI" as const,
    url: "https://mutable.ai",
  },
  {
    name: "Codium AI",
    description: "AI that auto-generates tests and suggests improvements.",
    features: ["Test generation", "Code improvement", "Quality assurance"],
    category: "AI" as const,
    url: "https://www.codium.ai",
  },
  {
    name: "Bito AI",
    description:
      "Copilot for engineers with auto-suggestions and doc generation.",
    features: ["Engineering focus", "Documentation", "Auto-suggestions"],
    category: "AI" as const,
    url: "https://bito.ai",
  },
  {
    name: "CodePal",
    description: "Helps you write and troubleshoot code with natural language.",
    features: ["Natural language", "Troubleshooting", "Code writing"],
    category: "AI" as const,
    url: "https://codepal.ai",
  },
  {
    name: "Askthecode",
    description: "AI assistant for code explanations and debugging.",
    features: ["Code explanation", "Debugging", "Learning aid"],
    category: "AI" as const,
    url: "https://askthecode.ai",
  },
  {
    name: "Manus",
    description:
      "Multimodal autonomous agent for complex web tasks like coding and planning.",
    features: ["Autonomous agent", "Web tasks", "Complex planning"],
    category: "AI" as const,
    url: "https://manus.chat",
  },

  // Design Category
  {
    name: "DALL-E (OpenAI)",
    description:
      "Advanced AI image generator known for high-quality, creative visual outputs from text prompts.",
    features: ["Image generation", "High quality", "Creative outputs"],
    category: "Design" as const,
    url: "https://openai.com/dall-e-3",
  },
  {
    name: "Midjourney",
    description:
      "Popular AI art generator favored by artists and designers for its aesthetic style and community features.",
    features: ["Artistic style", "Community", "High-quality art"],
    category: "Design" as const,
    url: "https://www.midjourney.com",
  },
  {
    name: "Stable Diffusion",
    description:
      "Open-source image generation model with extensive customization options and local deployment capability.",
    features: ["Open source", "Customizable", "Local deployment"],
    category: "Design" as const,
    url: "https://stability.ai/stable-diffusion",
  },
  {
    name: "Leonardo AI",
    description:
      "AI art platform focused on consistent character creation and style control for professional workflows.",
    features: ["Character consistency", "Style control", "Professional tools"],
    category: "Design" as const,
    url: "https://leonardo.ai",
  },
  {
    name: "Ideogram 3.0",
    description:
      "Advanced AI image generator with text rendering and creative control.",
    features: ["Text rendering", "Creative control", "High quality"],
    category: "Design" as const,
    url: "https://ideogram.ai",
  },
  {
    name: "Freepik AI",
    description: "AI-based graphic and design generation tools.",
    features: ["Graphic design", "Templates", "Commercial use"],
    category: "Design" as const,
    url: "https://www.freepik.com",
  },
  {
    name: "Flux",
    description: "Next-gen text-to-image model with in-context editing.",
    features: ["In-context editing", "High quality", "Advanced features"],
    category: "Design" as const,
    url: "https://flux1.ai",
  },
  {
    name: "Adobe Firefly",
    description: "Adobe's AI image generation and editing tool.",
    features: ["Commercial safe", "Adobe integration", "Professional grade"],
    category: "Design" as const,
    url: "https://firefly.adobe.com",
  },
  {
    name: "Bing Image Creator",
    description:
      "Generate images from natural text descriptions, powered by DALL-E.",
    features: ["Free to use", "DALL-E powered", "Microsoft integration"],
    category: "Design" as const,
    url: "https://www.bing.com/create",
  },
  {
    name: "AutoDraw",
    description:
      "Turns freehand sketches into refined icons and illustrations.",
    features: ["Sketch to vector", "Free to use", "Google tool"],
    category: "Design" as const,
    url: "https://www.autodraw.com",
  },
  {
    name: "Framer",
    description:
      "Build and instantly publish AI-generated websites with a visual editor.",
    features: ["Website builder", "Visual editor", "Instant publish"],
    category: "Design" as const,
    url: "https://framer.com",
  },
  {
    name: "Microsoft Designer",
    description:
      "AI graphic design tool by Microsoft for creating social posts and marketing visuals.",
    features: ["Social media", "Marketing visuals", "Microsoft integration"],
    category: "Design" as const,
    url: "https://designer.microsoft.com",
  },
  {
    name: "Relume",
    description: "AI tool to generate website designs and components.",
    features: ["Website design", "Components", "Webflow integration"],
    category: "Design" as const,
    url: "https://relume.io",
  },

  {
    name: "Visual Electric",
    description: "Generative design tool for creatives and agencies.",
    features: ["Generative design", "Creative focus", "Agency tools"],
    category: "Design" as const,
    url: "https://visualelectric.com",
  },
  {
    name: "Figma AI",
    description: "AI-powered design assistant inside Figma.",
    features: [
      "Figma integration",
      "Design assistance",
      "Workflow optimization",
    ],
    category: "Design" as const,
    url: "https://www.figma.com/blog/introducing-ai-in-figma",
  },
  {
    name: "Kittl",
    description:
      "AI-powered graphic design tool with templates and vector support.",
    features: ["Vector graphics", "Templates", "Design tools"],
    category: "Design" as const,
    url: "https://www.kittl.com",
  },
  {
    name: "Exactly",
    description: "AI for generating commercial-quality artwork.",
    features: [
      "Commercial quality",
      "Artwork generation",
      "Professional grade",
    ],
    category: "Design" as const,
    url: "https://www.exactly.ai",
  },
  {
    name: "Canva Visual Suite",
    description: "Suite of design tools with AI enhancements from Canva.",
    features: ["Design suite", "AI enhancements", "Templates"],
    category: "Design" as const,
    url: "https://www.canva.com",
  },
  {
    name: "Adobe Express",
    description:
      "Simplified Adobe suite with AI features for quick content creation.",
    features: ["Quick creation", "Adobe integration", "AI features"],
    category: "Design" as const,
    url: "https://express.adobe.com",
  },
  {
    name: "Fronty",
    description:
      "Converts uploaded images or drawings into HTML and CSS code using AI.",
    features: ["Image to code", "HTML/CSS", "Design conversion"],
    category: "Design" as const,
    url: "https://fronty.com",
  },
  {
    name: "Remove.bg",
    description:
      "Recognizes and removes image backgrounds effectively without requiring signup.",
    features: ["Background removal", "No signup", "Batch processing"],
    category: "Design" as const,
    url: "https://remove.bg",
  },
  {
    name: "LetsEnhance",
    description: "Uses AI to enhance the resolution of images and photographs.",
    features: ["Image enhancement", "Resolution increase", "Photo quality"],
    category: "Design" as const,
    url: "https://letsenhance.io",
  },
  {
    name: "Hotpot.ai",
    description:
      "AI tools for image editing, enhancement, and background removal.",
    features: ["Image editing", "Background removal", "Enhancement"],
    category: "Design" as const,
    url: "https://hotpot.ai",
  },
  {
    name: "Fotor AI Art",
    description: "Photo editing and AI image generation suite.",
    features: ["Photo editing", "AI generation", "Templates"],
    category: "Design" as const,
    url: "https://www.fotor.com/features/ai-image-generator",
  },

  // Creative Category
  {
    name: "NightCafe",
    description:
      "AI art generator using various algorithms including VQGAN+CLIP.",
    features: ["Multiple algorithms", "Community", "Print services"],
    category: "Creative" as const,
    url: "https://creator.nightcafe.studio",
  },
  {
    name: "Artbreeder",
    description: "Collaborative platform for blending and evolving art via AI.",
    features: ["Collaborative", "Image blending", "Evolution"],
    category: "Creative" as const,
    url: "https://www.artbreeder.com",
  },
  {
    name: "Playground AI",
    description: "Free AI image generator and editor with collaboration tools.",
    features: ["Free tier", "Collaboration", "Editing tools"],
    category: "Creative" as const,
    url: "https://playgroundai.com",
  },
  {
    name: "BlueWillow",
    description: "Alternative AI art generation platform like Midjourney.",
    features: ["Discord-based", "Community", "High quality"],
    category: "Creative" as const,
    url: "https://www.bluewillow.ai",
  },
  {
    name: "DeepArt",
    description: "Turn your photos into artworks using neural networks.",
    features: ["Photo transformation", "Artistic styles", "Neural networks"],
    category: "Creative" as const,
    url: "https://deepart.io",
  },
  {
    name: "Dream by Wombo",
    description: "AI app for creating vibrant artwork from text prompts.",
    features: ["Mobile app", "Vibrant art", "Easy to use"],
    category: "Creative" as const,
    url: "https://www.wombo.art",
  },
  {
    name: "Deep Dream",
    description: "Transforms images using deep learning for dreamlike results.",
    features: ["Deep learning", "Dreamlike effects", "Image transformation"],
    category: "Creative" as const,
    url: "https://deepdreamgenerator.com",
  },
  {
    name: "Runway ML",
    description:
      "AI video generation and editing platform with advanced motion control and real-time collaboration features.",
    features: ["Video generation", "Motion control", "Real-time collaboration"],
    category: "Creative" as const,
    url: "https://runwayml.com",
  },
  {
    name: "Luma AI",
    description:
      "3D capture and AI video generation platform specializing in photorealistic scene reconstruction.",
    features: ["3D capture", "Photorealistic", "Scene reconstruction"],
    category: "Creative" as const,
    url: "https://lumalabs.ai",
  },
  {
    name: "Kling 2",
    description:
      "Awarded Best AI video generator for quality and affordability in recent AI awards.",
    features: ["Award winning", "High quality", "Affordable"],
    category: "Creative" as const,
    url: "https://kling.tv",
  },
  {
    name: "Synthesia",
    description:
      "AI video avatars, voice cloning & screen-record capabilities.",
    features: ["AI avatars", "Voice cloning", "Professional videos"],
    category: "Creative" as const,
    url: "https://www.synthesia.io",
  },
  {
    name: "ElevenLabs",
    description:
      "Advanced AI voice synthesis platform with realistic speech generation and voice cloning capabilities.",
    features: ["Voice synthesis", "Speech generation", "Voice cloning"],
    category: "Creative" as const,
    url: "https://elevenlabs.io",
  },
  {
    name: "Murf AI",
    description:
      "Professional AI voiceover platform with natural-sounding voices for business and creative projects.",
    features: ["Professional voiceover", "Natural voices", "Business focused"],
    category: "Creative" as const,
    url: "https://murf.ai",
  },
  {
    name: "Descript",
    description:
      "All-in-one audio and video editing platform with AI transcription and voice synthesis capabilities.",
    features: ["Audio/video editing", "AI transcription", "Voice synthesis"],
    category: "Creative" as const,
    url: "https://www.descript.com",
  },
  {
    name: "OpenArt",
    description: "AI-powered art generation and prompt platform.",
    features: ["Art generation", "Prompt library", "Community"],
    category: "Creative" as const,
    url: "https://openart.ai",
  },
  {
    name: "Prompt Hunt",
    description: "Prompt library and AI art generator platform.",
    features: ["Prompt library", "Art generation", "Community"],
    category: "Creative" as const,
    url: "https://prompthunt.com",
  },
  {
    name: "Tome.app",
    description: "AI-powered storytelling and presentation creation platform.",
    features: ["Presentations", "Storytelling", "AI generation"],
    category: "Creative" as const,
    url: "https://tome.app",
  },

  // Marketing Category
  {
    name: "Copy.ai",
    description:
      "AI copywriting tool designed for marketing teams with templates for various content types and campaigns.",
    features: ["Marketing focus", "Content templates", "Campaign tools"],
    category: "Marketing" as const,
    url: "https://www.copy.ai",
  },
  {
    name: "Jasper AI",
    description:
      "Enterprise-focused AI writing platform with brand voice customization and team collaboration features.",
    features: ["Enterprise focused", "Brand voice", "Team collaboration"],
    category: "Marketing" as const,
    url: "https://www.jasper.ai",
  },
  {
    name: "Headlime",
    description:
      "Copywriting assistant powered by GPT for landing pages and ads.",
    features: ["Landing pages", "Ad copy", "GPT powered"],
    category: "Marketing" as const,
    url: "https://headlime.com",
  },
  {
    name: "Lummi AI",
    description:
      "AI platform for creatives to generate branded content and marketing assets.",
    features: ["Branded content", "Marketing assets", "Creative tools"],
    category: "Marketing" as const,
    url: "https://lummi.ai",
  },
  {
    name: "Pebblely",
    description:
      "AI image generator for product images in various styles and settings.",
    features: ["Product photography", "Various styles", "E-commerce"],
    category: "Marketing" as const,
    url: "https://pebblely.com",
  },
  {
    name: "Booth.ai",
    description:
      "Generates professional-quality product photos using AI, focused on furniture, fashion, and packaged goods.",
    features: [
      "Product photography",
      "Professional quality",
      "Multiple categories",
    ],
    category: "Marketing" as const,
    url: "https://booth.ai",
  },
  {
    name: "Stylized.ai",
    description:
      "Generates product photos integrated into ecommerce platforms like Shopify.",
    features: ["E-commerce integration", "Product photos", "Shopify support"],
    category: "Marketing" as const,
    url: "https://stylized.ai",
  },

  // Sales Category
  {
    name: "Booking-Agent.io",
    description:
      "Map-based event booking tool to find promoters, events, and artist schedules by location.",
    features: ["Event booking", "Map-based", "Artist schedules"],
    category: "Sales" as const,
    url: "https://booking-agent.io",
  },

  // Productivity Category
  {
    name: "Notion AI",
    description:
      "Integrated AI writing assistant within Notion workspace for enhanced productivity and content creation.",
    features: [
      "Writing assistant",
      "Workspace integration",
      "Productivity focused",
    ],
    category: "Productivity" as const,
    url: "https://www.notion.so/product/ai",
  },
  {
    name: "Grammarly",
    description:
      "AI-powered writing assistant with grammar checking, style suggestions, and tone detection.",
    features: ["Grammar checking", "Style suggestions", "Tone detection"],
    category: "Productivity" as const,
    url: "https://www.grammarly.com",
  },
  {
    name: "Otter.ai",
    description:
      "AI meeting transcription and note-taking service with real-time collaboration and speaker identification.",
    features: [
      "Meeting transcription",
      "Real-time collaboration",
      "Speaker ID",
    ],
    category: "Productivity" as const,
    url: "https://otter.ai",
  },
  {
    name: "NotebooksLM (Google)",
    description:
      "A research & note-taking assistant for analyzing data and generating summaries.",
    features: ["Research assistant", "Data analysis", "Summaries"],
    category: "Productivity" as const,
    url: "https://notebooklm.google.com",
  },
  {
    name: "Taskade",
    description:
      "Visualize your tasks and notes with AI-powered productivity tools.",
    features: ["Task management", "Visual organization", "AI productivity"],
    category: "Productivity" as const,
    url: "https://taskade.com",
  },
  {
    name: "Zapier AI",
    description: "Collections of tested AI automations for workflows.",
    features: ["Workflow automation", "AI integrations", "No-code"],
    category: "Productivity" as const,
    url: "https://zapier.com/blog/best-ai-productivity-tools",
  },
  {
    name: "Dia Browser",
    description:
      "AI-integrated browser with built-in assistants for web automation.",
    features: ["AI browser", "Web automation", "Built-in assistants"],
    category: "Productivity" as const,
    url: "https://dia.so",
  },
  {
    name: "Sweep AI",
    description: "AI tool that helps maintain and improve your codebase.",
    features: ["Codebase maintenance", "Code improvement", "Automated fixes"],
    category: "Productivity" as const,
    url: "https://sweep.dev",
  },

  // Other Category
  {
    name: "V7 Labs",
    description:
      "Categorized list of 35+ best AI tools for writing, coding, image/video.",
    features: ["Tool directory", "Categorized", "Comprehensive list"],
    category: "Other" as const,
    url: "https://www.v7labs.com/blog/best-ai-tools-listed",
  },
  {
    name: "GlamAI",
    description:
      "AI-powered beauty and fashion tool for virtual try-ons and styling.",
    features: ["Virtual try-on", "Beauty tech", "Fashion styling"],
    category: "Other" as const,
    url: "https://glamai.com",
  },
];

export default function Tools() {

  const categories = {
    AI: {
      tools: aiTools.filter((tool) => tool.category === "AI"),
      color: "bg-purple-500",
      icon: "🤖",
    },
    Design: {
      tools: aiTools.filter((tool) => tool.category === "Design"),
      color: "bg-pink-500",
      icon: "🎨",
    },
    Creative: {
      tools: aiTools.filter((tool) => tool.category === "Creative"),
      color: "bg-orange-500",
      icon: "✨",
    },
    Marketing: {
      tools: aiTools.filter((tool) => tool.category === "Marketing"),
      color: "bg-blue-500",
      icon: "📈",
    },
    Productivity: {
      tools: aiTools.filter((tool) => tool.category === "Productivity"),
      color: "bg-green-500",
      icon: "⚡",
    },
    Sales: {
      tools: aiTools.filter((tool) => tool.category === "Sales"),
      color: "bg-yellow-500",
      icon: "💼",
    },
    Other: {
      tools: aiTools.filter((tool) => tool.category === "Other"),
      color: "bg-gray-500",
      icon: "🔧",
    },
  };

  return (
    <div className="min-h-screen flex flex-col" style={{ backgroundColor: '#fe1b06' }}>
      <Header />
      <div className="text-center">
        <UpsellBanner />
      </div>
      <main className="max-w-7xl mx-auto px-4" style={{ backgroundColor: '#fe1b06', padding: '12px 16px 20px' }}>

        {Object.entries(categories)
          .filter(
            ([categoryName]) =>
              categoryName !== "Sales" && categoryName !== "Other" && categoryName !== "Marketing",
          )
          .map(
            ([categoryName, { tools, color, icon }]) =>
              tools.length > 0 && (
                <section key={categoryName} className="mb-12 sm:mb-16 md:mb-20">
                  <h2
                    className="text-xl sm:text-2xl md:text-3xl font-bold mb-6 sm:mb-8 text-center"
                    style={{
                      color: "rgba(255, 255, 255, 1)",
                      backgroundColor: "rgba(0, 0, 0, 1)",
                      padding: "16px 24px",
                      margin: "0 -16px 24px -16px",
                      borderRadius: "8px"
                    }}
                  >
                    <span className="text-lg sm:text-xl md:text-2xl" style={{ color: "rgba(255, 255, 255, 1)" }}>
                      {categoryName === "AI" && "Core AI Tools"}
                      {categoryName === "Design" && "Design & Visual Creation"}
                      {categoryName === "Creative" &&
                        "Creative & Media Production"}
                      {categoryName === "Marketing" &&
                        "Marketing & Content Creation"}
                      {categoryName === "Productivity" &&
                        "Productivity & Organization"}
                    </span>
                  </h2>
                  <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8">
                    {tools.map((tool, index) => (
                      <ToolCard key={`${categoryName}-${index}`} {...tool} />
                    ))}
                  </div>
                </section>
              ),
          )}
      </main>


    </div>
  );
}
