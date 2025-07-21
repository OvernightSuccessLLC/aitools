import { Header } from "../components/Header";

export default function Playbook() {
  return (
    <div className="min-h-screen bg-brand-red">
      <Header />
      
      <main className="max-w-6xl mx-auto px-3 sm:px-4 py-8">
        {/* Header Section */}
        <div className="text-center mb-12">
          <h1 className="text-4xl md:text-6xl font-bold text-brand-cream mb-6" style={{
            fontFamily: "'Georgia', serif",
            textShadow: "4px 4px 0px #000, -2px -2px 0px #000, 2px -2px 0px #000, -2px 2px 0px #000"
          }}>
            Image Generation with Sora & ChatGPT
          </h1>
          <p className="text-white/90 text-lg md:text-xl max-w-4xl mx-auto mb-8">
            Complete guide for creating stunning images using OpenAI's Sora platform integrated with ChatGPT. 
            From basic prompting techniques to advanced formulas and automation.
          </p>
        </div>

        {/* Table of Contents */}
        <div className="bg-brand-black/30 backdrop-blur-sm rounded-xl p-6 mb-12">
          <h2 className="text-2xl font-bold text-brand-cream mb-6">Table of Contents</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            <div className="space-y-2">
              <a href="#introduction" className="block text-white/80 hover:text-brand-cream transition-colors">1. Introduction to Sora Image Generation</a>
              <a href="#basics" className="block text-white/80 hover:text-brand-cream transition-colors">2. Basics of Prompting (for Beginners)</a>
              <a href="#components" className="block text-white/80 hover:text-brand-cream transition-colors">3. Key Prompt Components & Variables</a>
              <a href="#lifestyle" className="block text-white/80 hover:text-brand-cream transition-colors">4. Lifestyle Photography Prompts</a>
              <a href="#product" className="block text-white/80 hover:text-brand-cream transition-colors">5. Product & Studio Photography</a>
            </div>
            <div className="space-y-2">
              <a href="#graphics" className="block text-white/80 hover:text-brand-cream transition-colors">6. Custom Graphics & Design</a>
              <a href="#editing" className="block text-white/80 hover:text-brand-cream transition-colors">7. Scene Regeneration & Object Placement</a>
              <a href="#formulas" className="block text-white/80 hover:text-brand-cream transition-colors">8. Using Modular Prompt Formulas</a>
              <a href="#tips" className="block text-white/80 hover:text-brand-cream transition-colors">9. Tips, Best Practices, and Warnings</a>
            </div>
          </div>
        </div>

        {/* Section 1: Introduction */}
        <section id="introduction" className="bg-brand-black/20 rounded-xl p-6 md:p-8 mb-8">
          <h2 className="text-3xl font-bold text-brand-cream mb-6">1. Introduction to Sora Image Generation</h2>
          <div className="text-white/90 space-y-4">
            <p>
              Sora is OpenAI's advanced platform that extends ChatGPT's capabilities to create images from text prompts. 
              It leverages the latest image generation model (GPT-4) which excels at following detailed instructions and 
              even rendering text within images.
            </p>
            <div className="bg-brand-black/30 rounded-lg p-4">
              <h3 className="text-xl font-semibold text-brand-cream mb-2">How it Works:</h3>
              <p>
                In Sora (or ChatGPT's image mode), you simply describe the image you want. The AI interprets your 
                description and generates an image to match. You can specify visual details like style, lighting, 
                composition, and more to guide the outcome.
              </p>
            </div>
            <div className="bg-brand-black/30 rounded-lg p-4">
              <h3 className="text-xl font-semibold text-brand-cream mb-2">Who This Guide is For:</h3>
              <p>
                Anyone looking to create images – from beginners who have never written an image prompt, to advanced 
                users seeking to fine-tune their results, up to experts who want to automate prompt generation or 
                integrate branding elements.
              </p>
            </div>
          </div>
        </section>

        {/* Section 2: Basics of Prompting */}
        <section id="basics" className="bg-brand-black/20 rounded-xl p-6 md:p-8 mb-8">
          <h2 className="text-3xl font-bold text-brand-cream mb-6">2. Basics of Prompting (Prompting 101)</h2>
          <div className="text-white/90 space-y-6">
            <p>
              If you're new to AI image generation, start here. Crafting a good prompt is a mix of art and science. 
              A prompt is simply the description you give to Sora/ChatGPT about the image you want.
            </p>
            
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <div className="bg-brand-black/30 rounded-lg p-4">
                <h3 className="text-lg font-semibold text-brand-cream mb-3">Be Specific and Clear</h3>
                <p className="text-sm">
                  Provide concrete details about the subject and scene. "A young woman in a red coat walking 
                  through a snowy forest" is much better than "a person in a city".
                </p>
              </div>
              <div className="bg-brand-black/30 rounded-lg p-4">
                <h3 className="text-lg font-semibold text-brand-cream mb-3">Mention Style or Mood</h3>
                <p className="text-sm">
                  Let the AI know if you want a photo, painting, 3D render, etc. Use words like "photorealistic, 
                  4K detail, ultra-realistic" for photorealistic images.
                </p>
              </div>
              <div className="bg-brand-black/30 rounded-lg p-4">
                <h3 className="text-lg font-semibold text-brand-cream mb-3">Keep It Simple (at first)</h3>
                <p className="text-sm">
                  Start with a single sentence focusing on one scene. Complex prompts can confuse the model. 
                  You can always refine in steps.
                </p>
              </div>
              <div className="bg-brand-black/30 rounded-lg p-4">
                <h3 className="text-lg font-semibold text-brand-cream mb-3">Use Natural Language</h3>
                <p className="text-sm">
                  Write as if describing an image to a person. "A clear photo of a golden retriever puppy 
                  playing in a green field at sunset."
                </p>
              </div>
            </div>

            <div className="bg-brand-black/40 rounded-lg p-6">
              <h3 className="text-xl font-semibold text-brand-cream mb-4">Example Progression:</h3>
              <div className="space-y-4">
                <div>
                  <h4 className="text-brand-cream font-medium">Beginner:</h4>
                  <p className="text-sm">"Photo of a cat sitting on a windowsill."</p>
                </div>
                <div>
                  <h4 className="text-brand-cream font-medium">Advanced:</h4>
                  <p className="text-sm">"A tabby cat lounging on a sunny windowsill with soft morning light filtering through lace curtains, looking outside at birds."</p>
                </div>
                <div>
                  <h4 className="text-brand-cream font-medium">Expert:</h4>
                  <p className="text-sm">"Candid pet photography, close-up shot of a green-eyed tabby cat lounging on a sunlit Victorian bay window, rays of golden morning light patterning its fur through ornate lace curtains. Shot with a shallow depth of field (85mm f/1.8)."</p>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Section 3: Key Components */}
        <section id="components" className="bg-brand-black/20 rounded-xl p-6 md:p-8 mb-8">
          <h2 className="text-3xl font-bold text-brand-cream mb-6">3. Key Prompt Components & Variables</h2>
          <div className="text-white/90 space-y-6">
            <div className="bg-brand-black/40 rounded-lg p-6">
              <h3 className="text-xl font-semibold text-brand-cream mb-4">Prompt Structure Formula:</h3>
              <div className="bg-brand-black/50 rounded p-4 font-mono text-sm">
                [Subject] + [Action/Pose] + [Environment/Setting] + [Lighting] + [Camera Details] + [Style/Mood] + [Quality Parameters]
              </div>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
              <div className="bg-brand-black/30 rounded-lg p-4">
                <h4 className="text-lg font-semibold text-brand-cream mb-2">Subject Description</h4>
                <p className="text-sm">Who or what is the focus. Be specific with colors, size, distinctive features.</p>
                <div className="text-xs text-white/70 mt-2">Example: "a majestic white Siberian tiger with electric blue eyes"</div>
              </div>
              <div className="bg-brand-black/30 rounded-lg p-4">
                <h4 className="text-lg font-semibold text-brand-cream mb-2">Action/Pose</h4>
                <p className="text-sm">What the subject is doing or how positioned. Adds dynamism.</p>
                <div className="text-xs text-white/70 mt-2">Example: "leaping across a ravine"</div>
              </div>
              <div className="bg-brand-black/30 rounded-lg p-4">
                <h4 className="text-lg font-semibold text-brand-cream mb-2">Environment/Setting</h4>
                <p className="text-sm">The surroundings or background providing context and mood.</p>
                <div className="text-xs text-white/70 mt-2">Example: "in a misty bamboo forest at dawn"</div>
              </div>
              <div className="bg-brand-black/30 rounded-lg p-4">
                <h4 className="text-lg font-semibold text-brand-cream mb-2">Lighting</h4>
                <p className="text-sm">Quality and direction of light. One of the most powerful mood setters.</p>
                <div className="text-xs text-white/70 mt-2">Example: "dramatic side lighting creating long shadows"</div>
              </div>
              <div className="bg-brand-black/30 rounded-lg p-4">
                <h4 className="text-lg font-semibold text-brand-cream mb-2">Camera Details</h4>
                <p className="text-sm">Perspective, lens effects, composition terms.</p>
                <div className="text-xs text-white/70 mt-2">Example: "shot with a 50mm lens at f/1.8"</div>
              </div>
              <div className="bg-brand-black/30 rounded-lg p-4">
                <h4 className="text-lg font-semibold text-brand-cream mb-2">Style/Mood</h4>
                <p className="text-sm">Artistic style, genre, or overall vibe.</p>
                <div className="text-xs text-white/70 mt-2">Example: "in the style of Studio Ghibli"</div>
              </div>
            </div>

            <div className="bg-brand-black/40 rounded-lg p-6">
              <h3 className="text-xl font-semibold text-brand-cream mb-4">Reference Variables:</h3>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div>
                  <h4 className="font-semibold text-brand-cream mb-2">Lighting Examples:</h4>
                  <ul className="text-sm space-y-1">
                    <li>• Soft diffused light (gentle, minimal shadows)</li>
                    <li>• Golden hour sunlight (warm, dramatic shadows)</li>
                    <li>• Neon glow (colored urban light)</li>
                    <li>• Candlelight (dim, warm, flickering)</li>
                  </ul>
                </div>
                <div>
                  <h4 className="font-semibold text-brand-cream mb-2">Camera Angles:</h4>
                  <ul className="text-sm space-y-1">
                    <li>• Eye-level (human perspective, natural)</li>
                    <li>• Low-angle (looking up, heroic)</li>
                    <li>• Bird's-eye (top-down overview)</li>
                    <li>• First-person POV (subject's viewpoint)</li>
                  </ul>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Section 4: Lifestyle Photography */}
        <section id="lifestyle" className="bg-brand-black/20 rounded-xl p-6 md:p-8 mb-8">
          <h2 className="text-3xl font-bold text-brand-cream mb-6">4. Lifestyle Photography Prompts</h2>
          <div className="text-white/90 space-y-6">
            <p>
              Lifestyle images capture people in everyday, real-life contexts. They feel candid, authentic, 
              and relatable – like stock photos or personal snapshots that tell a story.
            </p>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
              <div className="bg-brand-black/30 rounded-lg p-4">
                <h4 className="text-lg font-semibold text-brand-cream mb-2">Everyday Scenarios</h4>
                <p className="text-sm">Focus on common activities: friends at cafe, family cooking, jogging in park.</p>
              </div>
              <div className="bg-brand-black/30 rounded-lg p-4">
                <h4 className="text-lg font-semibold text-brand-cream mb-2">Natural Styling</h4>
                <p className="text-sm">Use "candid", "unposed", "in the moment" for authenticity.</p>
              </div>
              <div className="bg-brand-black/30 rounded-lg p-4">
                <h4 className="text-lg font-semibold text-brand-cream mb-2">Environmental Context</h4>
                <p className="text-sm">Setting grounds the lifestyle with props and background details.</p>
              </div>
            </div>

            <div className="bg-brand-black/40 rounded-lg p-6">
              <h3 className="text-xl font-semibold text-brand-cream mb-4">Example Prompts:</h3>
              <div className="space-y-4">
                <div>
                  <h4 className="text-brand-cream font-medium">Beginner:</h4>
                  <p className="text-sm">"Lifestyle photo of a woman drinking coffee at a kitchen table."</p>
                </div>
                <div>
                  <h4 className="text-brand-cream font-medium">Advanced:</h4>
                  <p className="text-sm">"A young mother in a sunlit kitchen, laughing as she teaches her child to mix batter in a bowl. Morning light pours through the window onto rustic wooden countertops, creating a warm, cozy atmosphere."</p>
                </div>
                <div>
                  <h4 className="text-brand-cream font-medium">Expert:</h4>
                  <p className="text-sm">"Candid outdoor lifestyle shot, golden-hour sun flare. A group of diverse friends in hiking gear reach the summit of a hill, cheering with exhilaration. Low camera angle looking up emphasizes achievement, with lens flare and long shadows adding drama."</p>
                </div>
              </div>
            </div>

            <div className="bg-brand-orange/20 border border-brand-orange/30 rounded-lg p-4">
              <h4 className="font-semibold text-brand-cream mb-2">💡 Pro Tip:</h4>
              <p className="text-sm">
                Mention camera or film style for photorealism: "35mm film photograph", "DSLR photo", 
                or "shot on Canon EOS 5D". Include slight imperfections like "motion blur on moving hands" 
                for authentic feel.
              </p>
            </div>
          </div>
        </section>

        {/* Section 5: Product Photography */}
        <section id="product" className="bg-brand-black/20 rounded-xl p-6 md:p-8 mb-8">
          <h2 className="text-3xl font-bold text-brand-cream mb-6">5. Product & Studio Photography Prompts</h2>
          <div className="text-white/90 space-y-6">
            <p>
              Product photography focuses on highlighting features in a clear, visually appealing way. 
              From classic studio shots to stylized setups.
            </p>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <div className="bg-brand-black/30 rounded-lg p-4">
                <h4 className="text-lg font-semibold text-brand-cream mb-3">Isolate the Product</h4>
                <p className="text-sm mb-2">Clean background, good lighting, product centered.</p>
                <div className="text-xs text-white/70">"High-quality product photo of a stainless steel wristwatch on a plain white background, with soft studio lighting."</div>
              </div>
              <div className="bg-brand-black/30 rounded-lg p-4">
                <h4 className="text-lg font-semibold text-brand-cream mb-3">Lighting & Reflections</h4>
                <p className="text-sm mb-2">Match lighting to material. Shiny objects need softbox lighting.</p>
                <div className="text-xs text-white/70">"Softbox from above", "ring light front-fill", "dramatic rim lighting"</div>
              </div>
              <div className="bg-brand-black/30 rounded-lg p-4">
                <h4 className="text-lg font-semibold text-brand-cream mb-3">Camera and Focus</h4>
                <p className="text-sm mb-2">Sharp focus, high resolution for detail. Consider angles.</p>
                <div className="text-xs text-white/70">"Sharp focus, 8K detail", "top-down view", "45-degree angle"</div>
              </div>
              <div className="bg-brand-black/30 rounded-lg p-4">
                <h4 className="text-lg font-semibold text-brand-cream mb-3">Styling and Branding</h4>
                <p className="text-sm mb-2">Incorporate brand aesthetics, colors, modern/minimalist styling.</p>
                <div className="text-xs text-white/70">"Styled in a modern, minimalist way, using black and gold color accents"</div>
              </div>
            </div>

            <div className="bg-brand-black/40 rounded-lg p-6">
              <h3 className="text-xl font-semibold text-brand-cream mb-4">Progressive Examples:</h3>
              <div className="space-y-4">
                <div>
                  <h4 className="text-brand-cream font-medium">Beginner:</h4>
                  <p className="text-sm">"Product photo of a pair of headphones on a white background."</p>
                </div>
                <div>
                  <h4 className="text-brand-cream font-medium">Advanced:</h4>
                  <p className="text-sm">"A sleek pair of wireless headphones displayed on a transparent stand against a gradient gray studio background. Soft rim lighting outlines their silhouette, and a subtle reflection is visible below."</p>
                </div>
                <div>
                  <h4 className="text-brand-cream font-medium">Expert:</h4>
                  <p className="text-sm">"Hero shot of a new smartphone levitating above a matte black pedestal, against a dimly lit studio with two-point lighting (cool blue fill light from the left, soft white key light from the right). The phone's screen displays a faint glow."</p>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Section 6: Custom Graphics */}
        <section id="graphics" className="bg-brand-black/20 rounded-xl p-6 md:p-8 mb-8">
          <h2 className="text-3xl font-bold text-brand-cream mb-6">6. Custom Graphics & Design Prompts</h2>
          <div className="text-white/90 space-y-6">
            <p>
              Beyond photos, Sora can generate graphic designs: logos, icons, banners with text, 
              illustrations for branding, and more.
            </p>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <div className="bg-brand-black/30 rounded-lg p-4">
                <h4 className="text-lg font-semibold text-brand-cream mb-3">Logos and Icons</h4>
                <ul className="text-sm space-y-2">
                  <li>• Keep it simple: "minimalist logo" or "bold emblem-style"</li>
                  <li>• Define elements: "lightning bolt with 'VoltCorp' below"</li>
                  <li>• Specify style: "modern flat design", "vintage retro"</li>
                  <li>• Colors: "navy blue and white", hex codes</li>
                </ul>
              </div>
              <div className="bg-brand-black/30 rounded-lg p-4">
                <h4 className="text-lg font-semibold text-brand-cream mb-3">Banners/Hero Images</h4>
                <ul className="text-sm space-y-2">
                  <li>• Indicate composition: "space on right for tagline"</li>
                  <li>• Specify aspect ratio: "wide banner format", "16:9"</li>
                  <li>• Content and theme: describe what's shown and vibe</li>
                  <li>• Style choice: photographic vs graphic/illustrated</li>
                </ul>
              </div>
            </div>

            <div className="bg-brand-black/40 rounded-lg p-6">
              <h3 className="text-xl font-semibold text-brand-cream mb-4">Example Prompts:</h3>
              <div className="space-y-4">
                <div>
                  <h4 className="text-brand-cream font-medium">Logo Design:</h4>
                  <p className="text-sm">"Logo design for a bakery called 'SweetBite', in a cute minimalist style. Features a simple icon of a cupcake outline next to the text 'SweetBite'. Use pastel pink and brown colors."</p>
                </div>
                <div>
                  <h4 className="text-brand-cream font-medium">Website Banner:</h4>
                  <p className="text-sm">"Website banner showing a new sports car in a showroom, at a 16:9 ratio. The scene is sleek and modern, with bright showroom lights. Empty space on the left with plain dark background for tagline text."</p>
                </div>
                <div>
                  <h4 className="text-brand-cream font-medium">Packaging Design:</h4>
                  <p className="text-sm">"Mockup of a craft beer can with a vintage label design, featuring ornate gold lettering and navy blue background. The can is shown upright on a plain backdrop with lighting that makes the metallic accents shine."</p>
                </div>
              </div>
            </div>

            <div className="bg-brand-orange/20 border border-brand-orange/30 rounded-lg p-4">
              <h4 className="font-semibold text-brand-cream mb-2">⚡ Advanced Text Integration:</h4>
              <p className="text-sm">
                GPT-4o can embed text correctly in images. Use quotes for exact text: "a poster with the title 'Summer Festival 2025'". 
                Specify text style: "in red bold font" or "handwritten style text".
              </p>
            </div>
          </div>
        </section>

        {/* Section 7: Scene Editing */}
        <section id="editing" className="bg-brand-black/20 rounded-xl p-6 md:p-8 mb-8">
          <h2 className="text-3xl font-bold text-brand-cream mb-6">7. Scene Regeneration & Object Placement</h2>
          <div className="text-white/90 space-y-6">
            <p>
              One of Sora's powerful features is editing and iterating on generated images. Take an initial 
              image and ask for changes – adding/removing objects, changing mood, or extending scenes.
            </p>

            <div className="bg-brand-black/40 rounded-lg p-6">
              <h3 className="text-xl font-semibold text-brand-cream mb-4">How to Use Remix (Editing):</h3>
              <p className="mb-4">After generating an image in Sora, open it and select "Remix" (or press R). This lets you describe changes.</p>
              
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                <div className="bg-brand-black/30 rounded p-4">
                  <h4 className="font-semibold text-brand-cream mb-2">Identify Elements by Description</h4>
                  <p className="text-sm">Describe what you want changed: "add fog", "make it nighttime", "remove background objects"</p>
                </div>
                <div className="bg-brand-black/30 rounded p-4">
                  <h4 className="font-semibold text-brand-cream mb-2">Be Spatially Specific</h4>
                  <p className="text-sm">Use directional terms: "Place a potted plant on the table in the left foreground"</p>
                </div>
                <div className="bg-brand-black/30 rounded p-4">
                  <h4 className="font-semibold text-brand-cream mb-2">Maintain Consistency</h4>
                  <p className="text-sm">Consider overall scene coherence: "add a brown leather sofa matching the room's vintage style"</p>
                </div>
                <div className="bg-brand-black/30 rounded p-4">
                  <h4 className="font-semibold text-brand-cream mb-2">One Change at a Time</h4>
                  <p className="text-sm">For big edits, work stepwise. First "add a dog", then "change to dusk lighting"</p>
                </div>
              </div>
            </div>

            <div className="bg-brand-black/40 rounded-lg p-6">
              <h3 className="text-xl font-semibold text-brand-cream mb-4">Edit Examples:</h3>
              <div className="space-y-4">
                <div>
                  <h4 className="text-brand-cream font-medium">Adding Objects:</h4>
                  <p className="text-sm">"Add a second sofa matching the existing one on the opposite side of the coffee table."</p>
                </div>
                <div>
                  <h4 className="text-brand-cream font-medium">Changing Time/Mood:</h4>
                  <p className="text-sm">"Make it look like evening, with a sunset sky. Add string lights hanging between the trees to create a cozy atmosphere."</p>
                </div>
                <div>
                  <h4 className="text-brand-cream font-medium">Background Changes:</h4>
                  <p className="text-sm">"Place the sneaker onto a running track background instead of the studio background, and add motion blur to imply movement."</p>
                </div>
              </div>
            </div>

            <div className="bg-red-900/30 border border-red-500/30 rounded-lg p-4">
              <h4 className="font-semibold text-brand-cream mb-2">⚠️ Warning:</h4>
              <p className="text-sm">
                Edits still respect content guidelines. Major changes might introduce artifacts. 
                Always review edited images carefully. Scene editing is iterative – give feedback and adjust.
              </p>
            </div>
          </div>
        </section>

        {/* Section 8: Modular Formulas */}
        <section id="formulas" className="bg-brand-black/20 rounded-xl p-6 md:p-8 mb-8">
          <h2 className="text-3xl font-bold text-brand-cream mb-6">8. Using Modular Prompt Formulas</h2>
          <div className="text-white/90 space-y-6">
            <p>
              For power users and teams, create modular formulas – templates that can be filled with different 
              values. This ensures consistency and saves time, especially useful for brand style guides.
            </p>

            <div className="bg-brand-black/40 rounded-lg p-6">
              <h3 className="text-xl font-semibold text-brand-cream mb-4">Setting Up in Notion:</h3>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div>
                  <h4 className="font-semibold text-brand-cream mb-2">Create Table Columns:</h4>
                  <ul className="text-sm space-y-1">
                    <li>• Subject</li>
                    <li>• Action</li>
                    <li>• Setting</li>
                    <li>• Lighting</li>
                    <li>• Style</li>
                    <li>• Primary Color</li>
                    <li>• Secondary Color</li>
                    <li>• Aspect Ratio</li>
                  </ul>
                </div>
                <div>
                  <h4 className="font-semibold text-brand-cream mb-2">Formula Benefits:</h4>
                  <ul className="text-sm space-y-1">
                    <li>• Consistency across all prompts</li>
                    <li>• Quick brainstorming variations</li>
                    <li>• Scaling for product catalogs</li>
                    <li>• A/B testing creative ideas</li>
                  </ul>
                </div>
              </div>
            </div>

            <div className="bg-brand-black/40 rounded-lg p-6">
              <h3 className="text-xl font-semibold text-brand-cream mb-4">Example Formula Structure:</h3>
              <div className="bg-brand-black/50 rounded p-4 font-mono text-sm mb-4">
                "{Subject} {Action} in {Setting}, lit by {Lighting}, {Style}. Colors: {PrimaryColor} and {SecondaryColor}. Shot with {Camera} --aspect {AspectRatio}"
              </div>
              <p className="text-sm">
                <strong>Example Output:</strong> "A sleek vape pen is centered on a frosted glass pedestal in a minimalist studio, 
                lit by soft ambient glow, captured top-down with a 50mm macro lens. Presented in editorial style. 
                Colors: #000000 and #F5C044. --aspect 4:5"
              </p>
            </div>

            <div className="bg-brand-orange/20 border border-brand-orange/30 rounded-lg p-4">
              <h4 className="font-semibold text-brand-cream mb-2">💡 Pro Tip:</h4>
              <p className="text-sm">
                When designing formulas, ensure output reads like natural English, not mad-lib gibberish. 
                Use separators like commas and conjunctions in the right places. Test outputs to refine wording.
              </p>
            </div>
          </div>
        </section>

        {/* Section 9: Tips and Best Practices */}
        <section id="tips" className="bg-brand-black/20 rounded-xl p-6 md:p-8 mb-8">
          <h2 className="text-3xl font-bold text-brand-cream mb-6">9. Tips, Best Practices, and Warnings</h2>
          <div className="text-white/90 space-y-6">
            
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <div className="bg-brand-black/30 rounded-lg p-4">
                <h4 className="text-lg font-semibold text-brand-cream mb-3">General Tips for Better Results</h4>
                <ul className="text-sm space-y-2">
                  <li>• <strong>Be Specific, Avoid Redundancy:</strong> "red ball on wooden table" not "nice pretty red ball sitting on brown table"</li>
                  <li>• <strong>Avoid Ambiguity:</strong> "black Jaguar car" not just "Jaguar" (could be animal)</li>
                  <li>• <strong>Test in Parts:</strong> Try "mid-century modern living room" alone first</li>
                  <li>• <strong>Use Structure:</strong> "Scene: bustling market. Subject: spice merchant. Action: arranging bowls"</li>
                </ul>
              </div>
              <div className="bg-brand-black/30 rounded-lg p-4">
                <h4 className="text-lg font-semibold text-brand-cream mb-3">Leveraging ChatGPT's Strengths</h4>
                <ul className="text-sm space-y-2">
                  <li>• <strong>Ask for Improvements:</strong> "How can I make this prompt more detailed?"</li>
                  <li>• <strong>Request Variations:</strong> "Give me five variations of this idea"</li>
                  <li>• <strong>Use Chat Context:</strong> Describe conversationally, then ask for a polished prompt</li>
                  <li>• <strong>Community Learning:</strong> Study prompts from galleries and forums</li>
                </ul>
              </div>
            </div>

            <div className="bg-brand-black/40 rounded-lg p-6">
              <h3 className="text-xl font-semibold text-brand-cream mb-4">Aspect Ratios and Cropping:</h3>
              <p className="mb-4">Decide orientation before prompting. Wide vs. tall affects composition. Consider multiple formats for different platforms.</p>
              <div className="grid grid-cols-3 gap-4 text-center">
                <div className="bg-brand-black/30 rounded p-3">
                  <div className="font-semibold text-brand-cream">Square 1:1</div>
                  <div className="text-sm">Instagram posts</div>
                </div>
                <div className="bg-brand-black/30 rounded p-3">
                  <div className="font-semibold text-brand-cream">Wide 16:9</div>
                  <div className="text-sm">Website banners</div>
                </div>
                <div className="bg-brand-black/30 rounded p-3">
                  <div className="font-semibold text-brand-cream">Portrait 9:16</div>
                  <div className="text-sm">Mobile stories</div>
                </div>
              </div>
            </div>

            <div className="bg-red-900/30 border border-red-500/30 rounded-lg p-6">
              <h3 className="text-xl font-semibold text-brand-cream mb-4">⚠️ Policy and Content Warnings:</h3>
              <ul className="text-sm space-y-2">
                <li>• <strong>No Disallowed Content:</strong> Avoid violence, gore, sexual, hate content</li>
                <li>• <strong>No Real Person Likeness:</strong> Don't use "photo of Tom Cruise" - use "man who looks like classic Hollywood actor"</li>
                <li>• <strong>No Filter Circumvention:</strong> Don't misspell words to bypass filters</li>
                <li>• <strong>Change Concept if Flagged:</strong> Don't persist with problematic prompts</li>
              </ul>
            </div>

            <div className="bg-brand-black/40 rounded-lg p-6">
              <h3 className="text-xl font-semibold text-brand-cream mb-4">When Things Go Wrong:</h3>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                <div>
                  <h4 className="font-semibold text-brand-cream mb-2">Common Issues:</h4>
                  <ul className="text-sm space-y-1">
                    <li>• Conflicting elements in prompt</li>
                    <li>• Prompt too long or story-like</li>
                    <li>• AI doesn't know obscure terms</li>
                    <li>• Objects look distorted</li>
                  </ul>
                </div>
                <div>
                  <h4 className="font-semibold text-brand-cream mb-2">Solutions:</h4>
                  <ul className="text-sm space-y-1">
                    <li>• Resolve conflicts by clarifying</li>
                    <li>• Break into one scene at a time</li>
                    <li>• Use simpler descriptions</li>
                    <li>• Describe less detail or more precisely</li>
                  </ul>
                </div>
              </div>
            </div>

            <div className="bg-green-900/30 border border-green-500/30 rounded-lg p-6">
              <h3 className="text-xl font-semibold text-brand-cream mb-4">🎯 Final Success Tips:</h3>
              <ul className="text-sm space-y-2">
                <li>• <strong>Iterate and Evolve:</strong> Treat each generation as a prototype. Use Remix feature to refine.</li>
                <li>• <strong>Use Variations:</strong> Sometimes re-running the same prompt yields better composition</li>
                <li>• <strong>Have Fun:</strong> Experiment with turning day to night, adding imaginative elements</li>
                <li>• <strong>Practice:</strong> The more you prompt, the better your intuition becomes</li>
              </ul>
              <p className="text-sm mt-4 font-medium">
                Image generation with Sora and ChatGPT opens up immense possibilities, from realistic photography 
                to imaginative art. This guide provides structure, but the real magic comes from experimentation!
              </p>
            </div>
          </div>
        </section>

        {/* Footer */}
        <div className="text-center mt-12 py-8">
          <p className="text-white/60 text-sm">
            Sources & References: This guide was compiled with insights from OpenAI's documentation and 
            community best practices, including prompt formulas, example use cases, and official tips on 
            leveraging Sora's features.
          </p>
        </div>
      </main>
    </div>
  );
}
