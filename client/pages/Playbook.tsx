import { Header } from "../components/Header";

export default function Playbook() {
  return (
    <div className="min-h-screen bg-brand-red">
      <Header />
      
      <main className="max-w-6xl mx-auto px-3 sm:px-4 py-8">
        {/* Hero Section - Matching Branding Style */}
        <div className="text-center mb-16">
          {/* Pill Badge */}
          <div className="inline-flex items-center bg-black rounded-full px-6 py-3 mb-8">
            <div className="w-2 h-2 bg-white rounded-full mr-3"></div>
            <span className="text-white font-medium text-sm tracking-wide">NOW WITH SORA INTEGRATION</span>
          </div>
          
          {/* Main Headline */}
          <div className="mb-8">
            <h1 className="text-5xl md:text-7xl lg:text-8xl font-black text-black mb-4 leading-tight tracking-tight">
              THE FUTURE OF
            </h1>
            <div className="bg-black px-8 py-4 inline-block mb-6">
              <h2 className="text-5xl md:text-7xl lg:text-8xl font-black text-brand-red leading-tight tracking-tight">
                LIFESTYLE CREATION
              </h2>
            </div>
          </div>
          
          {/* Subtitle */}
          <p className="text-black text-lg md:text-xl max-w-4xl mx-auto mb-12 font-medium leading-relaxed">
            Professional AI-powered content generation system trusted by 10,000+ creators worldwide. 
            Generate stunning lifestyle content with precision and speed.
          </p>
          
          {/* CTA Buttons */}
          <div className="flex flex-col sm:flex-row gap-4 justify-center mb-16">
            <button className="bg-black text-white px-8 py-4 rounded-lg text-lg font-bold hover:bg-black/90 transition-colors">
              👑 GET FULL ACCESS →
            </button>
            <button className="border-2 border-black text-black px-8 py-4 rounded-lg text-lg font-bold hover:bg-black hover:text-white transition-colors">
              ▶ TRY FREE VERSION
            </button>
          </div>
          
          {/* Statistics */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-4xl mx-auto">
            <div className="text-center">
              <div className="text-4xl md:text-5xl font-black text-black mb-2">10K+</div>
              <div className="text-black font-semibold">Active Creators</div>
            </div>
            <div className="text-center">
              <div className="text-4xl md:text-5xl font-black text-black mb-2">1M+</div>
              <div className="text-black font-semibold">Prompts Generated</div>
            </div>
            <div className="text-center">
              <div className="text-4xl md:text-5xl font-black text-black mb-2">98%</div>
              <div className="text-black font-semibold">Satisfaction Rate</div>
            </div>
          </div>
        </div>

        {/* Content Sections with Updated Styling */}
        <div className="space-y-12">
          {/* Table of Contents */}
          <div className="bg-black/90 backdrop-blur-sm rounded-2xl p-8 mb-12">
            <h2 className="text-3xl font-black text-white mb-8">MASTER THE PLAYBOOK</h2>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <div className="space-y-4">
                <a href="#introduction" className="block text-white/90 hover:text-brand-red transition-colors font-medium">1. Introduction to Sora Image Generation</a>
                <a href="#basics" className="block text-white/90 hover:text-brand-red transition-colors font-medium">2. Basics of Prompting (for Beginners)</a>
                <a href="#components" className="block text-white/90 hover:text-brand-red transition-colors font-medium">3. Key Prompt Components & Variables</a>
                <a href="#lifestyle" className="block text-white/90 hover:text-brand-red transition-colors font-medium">4. Lifestyle Photography Prompts</a>
                <a href="#product" className="block text-white/90 hover:text-brand-red transition-colors font-medium">5. Product & Studio Photography</a>
              </div>
              <div className="space-y-4">
                <a href="#graphics" className="block text-white/90 hover:text-brand-red transition-colors font-medium">6. Custom Graphics & Design</a>
                <a href="#editing" className="block text-white/90 hover:text-brand-red transition-colors font-medium">7. Scene Regeneration & Object Placement</a>
                <a href="#formulas" className="block text-white/90 hover:text-brand-red transition-colors font-medium">8. Using Modular Prompt Formulas</a>
                <a href="#tips" className="block text-white/90 hover:text-brand-red transition-colors font-medium">9. Tips, Best Practices, and Warnings</a>
              </div>
            </div>
          </div>

          {/* Section 1: Introduction */}
          <section id="introduction" className="bg-black/20 backdrop-blur-sm rounded-2xl p-8 mb-8">
            <h2 className="text-4xl font-black text-black mb-8">1. INTRODUCTION TO SORA</h2>
            <div className="text-black/90 space-y-6">
              <p className="text-lg leading-relaxed">
                Sora is OpenAI's advanced platform that extends ChatGPT's capabilities to create images from text prompts. 
                It leverages the latest image generation model (GPT-4) which excels at following detailed instructions and 
                even rendering text within images.
              </p>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div className="bg-black/80 rounded-xl p-6">
                  <h3 className="text-xl font-bold text-white mb-3">HOW IT WORKS</h3>
                  <p className="text-white/90 text-sm leading-relaxed">
                    In Sora (or ChatGPT's image mode), you simply describe the image you want. The AI interprets your 
                    description and generates an image to match. You can specify visual details like style, lighting, 
                    composition, and more to guide the outcome.
                  </p>
                </div>
                <div className="bg-black/80 rounded-xl p-6">
                  <h3 className="text-xl font-bold text-white mb-3">WHO THIS IS FOR</h3>
                  <p className="text-white/90 text-sm leading-relaxed">
                    Anyone looking to create images – from beginners who have never written an image prompt, to advanced 
                    users seeking to fine-tune their results, up to experts who want to automate prompt generation or 
                    integrate branding elements.
                  </p>
                </div>
              </div>
            </div>
          </section>

          {/* Section 2: Basics */}
          <section id="basics" className="bg-black/20 backdrop-blur-sm rounded-2xl p-8 mb-8">
            <h2 className="text-4xl font-black text-black mb-8">2. PROMPTING FUNDAMENTALS</h2>
            <div className="text-black/90 space-y-6">
              <p className="text-lg leading-relaxed">
                Crafting a good prompt is a mix of art and science. A prompt is simply the description you give to 
                Sora/ChatGPT about the image you want.
              </p>
              
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div className="bg-black/80 rounded-xl p-6">
                  <h3 className="text-lg font-bold text-white mb-3">BE SPECIFIC & CLEAR</h3>
                  <p className="text-white/90 text-sm mb-3">
                    "A young woman in a red coat walking through a snowy forest" beats "a person in a city"
                  </p>
                </div>
                <div className="bg-black/80 rounded-xl p-6">
                  <h3 className="text-lg font-bold text-white mb-3">MENTION STYLE/MOOD</h3>
                  <p className="text-white/90 text-sm mb-3">
                    Use "photorealistic, 4K detail, ultra-realistic" for photo-real images
                  </p>
                </div>
                <div className="bg-black/80 rounded-xl p-6">
                  <h3 className="text-lg font-bold text-white mb-3">KEEP IT SIMPLE</h3>
                  <p className="text-white/90 text-sm mb-3">
                    Start with single sentences. Complex prompts can confuse the model
                  </p>
                </div>
                <div className="bg-black/80 rounded-xl p-6">
                  <h3 className="text-lg font-bold text-white mb-3">USE NATURAL LANGUAGE</h3>
                  <p className="text-white/90 text-sm mb-3">
                    Write as if describing to a person, not code or special syntax
                  </p>
                </div>
              </div>

              <div className="bg-black/90 rounded-xl p-6">
                <h3 className="text-2xl font-bold text-white mb-6">PROGRESSION EXAMPLES</h3>
                <div className="space-y-4">
                  <div>
                    <h4 className="text-brand-red font-bold mb-2">BEGINNER:</h4>
                    <p className="text-white/90 text-sm">"Photo of a cat sitting on a windowsill."</p>
                  </div>
                  <div>
                    <h4 className="text-brand-red font-bold mb-2">ADVANCED:</h4>
                    <p className="text-white/90 text-sm">"A tabby cat lounging on a sunny windowsill with soft morning light filtering through lace curtains, looking outside at birds."</p>
                  </div>
                  <div>
                    <h4 className="text-brand-red font-bold mb-2">EXPERT:</h4>
                    <p className="text-white/90 text-sm">"Candid pet photography, close-up shot of a green-eyed tabby cat lounging on a sunlit Victorian bay window, rays of golden morning light patterning its fur through ornate lace curtains. Shot with a shallow depth of field (85mm f/1.8)."</p>
                  </div>
                </div>
              </div>
            </div>
          </section>

          {/* Section 3: Components */}
          <section id="components" className="bg-black/20 backdrop-blur-sm rounded-2xl p-8 mb-8">
            <h2 className="text-4xl font-black text-black mb-8">3. PROMPT ARCHITECTURE</h2>
            <div className="text-black/90 space-y-6">
              <div className="bg-black/90 rounded-xl p-6">
                <h3 className="text-2xl font-bold text-white mb-4">FORMULA STRUCTURE</h3>
                <div className="bg-black rounded p-4 font-mono text-sm text-brand-red">
                  [Subject] + [Action/Pose] + [Environment/Setting] + [Lighting] + [Camera Details] + [Style/Mood] + [Quality Parameters]
                </div>
              </div>

              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
                <div className="bg-black/80 rounded-xl p-4">
                  <h4 className="text-lg font-bold text-white mb-2">SUBJECT</h4>
                  <p className="text-white/90 text-sm">Who or what is the focus. Be specific with colors, size, features.</p>
                  <div className="text-xs text-brand-red mt-2">"majestic white Siberian tiger with electric blue eyes"</div>
                </div>
                <div className="bg-black/80 rounded-xl p-4">
                  <h4 className="text-lg font-bold text-white mb-2">ACTION/POSE</h4>
                  <p className="text-white/90 text-sm">What the subject is doing. Adds dynamism.</p>
                  <div className="text-xs text-brand-red mt-2">"leaping across a ravine"</div>
                </div>
                <div className="bg-black/80 rounded-xl p-4">
                  <h4 className="text-lg font-bold text-white mb-2">ENVIRONMENT</h4>
                  <p className="text-white/90 text-sm">Surroundings providing context and mood.</p>
                  <div className="text-xs text-brand-red mt-2">"misty bamboo forest at dawn"</div>
                </div>
                <div className="bg-black/80 rounded-xl p-4">
                  <h4 className="text-lg font-bold text-white mb-2">LIGHTING</h4>
                  <p className="text-white/90 text-sm">Quality and direction of light. Powerful mood setter.</p>
                  <div className="text-xs text-brand-red mt-2">"dramatic side lighting creating shadows"</div>
                </div>
                <div className="bg-black/80 rounded-xl p-4">
                  <h4 className="text-lg font-bold text-white mb-2">CAMERA</h4>
                  <p className="text-white/90 text-sm">Perspective, lens effects, composition.</p>
                  <div className="text-xs text-brand-red mt-2">"shot with 50mm lens at f/1.8"</div>
                </div>
                <div className="bg-black/80 rounded-xl p-4">
                  <h4 className="text-lg font-bold text-white mb-2">STYLE/MOOD</h4>
                  <p className="text-white/90 text-sm">Artistic style, genre, overall vibe.</p>
                  <div className="text-xs text-brand-red mt-2">"in the style of Studio Ghibli"</div>
                </div>
              </div>
            </div>
          </section>

          {/* Quick Reference Card */}
          <div className="bg-black rounded-2xl p-8 text-center">
            <h3 className="text-3xl font-black text-white mb-6">MASTER YOUR CRAFT</h3>
            <p className="text-white/90 text-lg mb-8 max-w-2xl mx-auto">
              Ready to create professional-grade AI images? Apply these techniques and transform your creative workflow.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <button className="bg-brand-red text-white px-8 py-4 rounded-lg text-lg font-bold hover:bg-brand-red/90 transition-colors">
                START CREATING NOW
              </button>
              <button className="border-2 border-white text-white px-8 py-4 rounded-lg text-lg font-bold hover:bg-white hover:text-black transition-colors">
                VIEW ALL TOOLS
              </button>
            </div>
          </div>
        </div>

        {/* Footer */}
        <div className="text-center mt-16 py-8">
          <p className="text-black/60 text-sm font-medium">
            Professional AI-powered content generation • Trusted by 10,000+ creators worldwide
          </p>
        </div>
      </main>
    </div>
  );
}
