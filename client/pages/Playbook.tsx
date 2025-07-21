import { Header } from "../components/Header";

export default function Playbook() {
  return (
    <div className="min-h-screen bg-brand-red">
      <Header />
      
      <main className="max-w-6xl mx-auto px-3 sm:px-4 py-8">
        {/* Hero Section */}
        <div className="text-center mb-16">
          <div className="inline-flex items-center bg-black rounded-full px-6 py-3 mb-8">
            <div className="w-2 h-2 bg-white rounded-full mr-3"></div>
            <span className="text-white font-medium text-sm tracking-wide">NOW WITH SORA INTEGRATION</span>
          </div>
          
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
          
          <p className="text-black text-lg md:text-xl max-w-4xl mx-auto mb-12 font-medium leading-relaxed">
            Master AI-powered image generation with Sora & ChatGPT. From basic prompting to advanced techniques - 
            your complete guide to creating stunning visuals with precision and speed.
          </p>
        </div>

        {/* Table of Contents */}
        <div className="bg-black/90 rounded-2xl p-8 mb-12">
          <h2 className="text-3xl font-black text-white mb-8">MASTER THE PLAYBOOK</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <div className="space-y-4">
              <a href="#basics" className="block text-white/90 hover:text-brand-red transition-colors font-medium">1. Basics of Prompting (Prompting 101)</a>
              <a href="#components" className="block text-white/90 hover:text-brand-red transition-colors font-medium">2. Key Prompt Components & Variables</a>
              <a href="#lifestyle" className="block text-white/90 hover:text-brand-red transition-colors font-medium">3. Lifestyle Photography Prompts</a>
              <a href="#product" className="block text-white/90 hover:text-brand-red transition-colors font-medium">4. Product & Studio Photography</a>
            </div>
            <div className="space-y-4">
              <a href="#graphics" className="block text-white/90 hover:text-brand-red transition-colors font-medium">5. Custom Graphics & Design</a>
              <a href="#editing" className="block text-white/90 hover:text-brand-red transition-colors font-medium">6. Scene Regeneration & Object Placement</a>
              <a href="#formulas" className="block text-white/90 hover:text-brand-red transition-colors font-medium">7. Using Modular Prompt Formulas</a>
              <a href="#tips" className="block text-white/90 hover:text-brand-red transition-colors font-medium">8. Tips, Best Practices, and Warnings</a>
            </div>
          </div>
        </div>

        {/* Section 1: Basics of Prompting */}
        <section id="basics" className="bg-black/20 backdrop-blur-sm rounded-2xl p-8 mb-8">
          <h2 className="text-4xl font-black text-black mb-8">1. BASICS OF PROMPTING</h2>
          <div className="text-black space-y-6">
            <p className="text-lg leading-relaxed font-medium">
              If you're new to AI image generation, start here. Crafting a good prompt is a mix of art and science. 
              A prompt is simply the description you give to Sora/ChatGPT about the image you want.
            </p>
            
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <div className="bg-black/80 rounded-xl p-6">
                <h3 className="text-xl font-bold text-white mb-3">BE SPECIFIC & CLEAR</h3>
                <p className="text-white/90 text-sm mb-3">
                  Provide concrete details about the subject and scene. "A young woman in a red coat walking through a snowy forest" beats "a person in a city"
                </p>
                <div className="text-brand-red text-xs font-medium">Always include who/what, where, and distinctive features</div>
              </div>
              
              <div className="bg-black/80 rounded-xl p-6">
                <h3 className="text-xl font-bold text-white mb-3">MENTION STYLE/MOOD</h3>
                <p className="text-white/90 text-sm mb-3">
                  Let the AI know if you want a photo, painting, 3D render, etc. For photorealistic: "photorealistic, 4K detail, ultra-realistic"
                </p>
                <div className="text-brand-red text-xs font-medium">"Shot in natural, casual style" or "Pixar animation style"</div>
              </div>
              
              <div className="bg-black/80 rounded-xl p-6">
                <h3 className="text-xl font-bold text-white mb-3">KEEP IT SIMPLE</h3>
                <p className="text-white/90 text-sm mb-3">
                  Start with single sentences focusing on one scene. Complex prompts can confuse the model. Refine in steps.
                </p>
                <div className="text-brand-red text-xs font-medium">Generate first, then adjust iteratively</div>
              </div>
              
              <div className="bg-black/80 rounded-xl p-6">
                <h3 className="text-xl font-bold text-white mb-3">USE NATURAL LANGUAGE</h3>
                <p className="text-white/90 text-sm mb-3">
                  Write as if describing to a person. "A clear photo of a golden retriever puppy playing in a green field at sunset."
                </p>
                <div className="text-brand-red text-xs font-medium">No code or special syntax needed</div>
              </div>
            </div>

            <div className="bg-black/90 rounded-xl p-8">
              <h3 className="text-2xl font-bold text-white mb-6">PROGRESSION EXAMPLES</h3>
              <div className="space-y-6">
                <div>
                  <div className="bg-green-600 text-white px-4 py-2 rounded-lg inline-block mb-3 font-bold text-sm">BEGINNER</div>
                  <p className="text-white/90">"Photo of a cat sitting on a windowsill."</p>
                  <p className="text-white/70 text-sm mt-2">Simple prompt specifying subject and basic setting.</p>
                </div>
                
                <div>
                  <div className="bg-orange-600 text-white px-4 py-2 rounded-lg inline-block mb-3 font-bold text-sm">ADVANCED</div>
                  <p className="text-white/90">"A tabby cat lounging on a sunny windowsill with soft morning light filtering through lace curtains, looking outside at birds."</p>
                  <p className="text-white/70 text-sm mt-2">Added specifics: cat type, time of day, lighting quality, implied action.</p>
                </div>
                
                <div>
                  <div className="bg-red-600 text-white px-4 py-2 rounded-lg inline-block mb-3 font-bold text-sm">EXPERT</div>
                  <p className="text-white/90">"Candid pet photography, close-up shot of a green-eyed tabby cat lounging on a sunlit Victorian bay window, rays of golden morning light patterning its fur through ornate lace curtains. Shot with shallow depth of field (85mm f/1.8)."</p>
                  <p className="text-white/70 text-sm mt-2">Includes camera specifics, composition, lighting mood, and style cues.</p>
                </div>
              </div>
            </div>

            <div className="bg-brand-red/20 border-2 border-black/30 rounded-xl p-6">
              <h4 className="font-black text-black text-lg mb-3">💡 PRO TIP</h4>
              <p className="text-black font-medium">
                <strong>Clarity is king.</strong> Describe one idea at a time, avoid ambiguity. Instead of "in front of a bank", 
                say "standing on the steps in front of a large, stone bank building" to avoid confusion with other meanings.
              </p>
            </div>
          </div>
        </section>

        {/* Section 2: Key Components */}
        <section id="components" className="bg-black/20 backdrop-blur-sm rounded-2xl p-8 mb-8">
          <h2 className="text-4xl font-black text-black mb-8">2. KEY PROMPT COMPONENTS</h2>
          <div className="text-black space-y-8">
            <p className="text-lg leading-relaxed font-medium">
              Professional-quality prompts follow a formula, ensuring you cover all important aspects of an image.
            </p>

            <div className="bg-black/90 rounded-xl p-6">
              <h3 className="text-2xl font-bold text-white mb-4">PROMPT STRUCTURE FORMULA</h3>
              <div className="bg-black rounded p-4 font-mono text-sm text-brand-red border border-brand-red/30">
                [Subject] + [Action/Pose] + [Environment/Setting] + [Lighting] + [Camera Details] + [Style/Mood] + [Quality Parameters]
              </div>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
              <div className="bg-black/80 rounded-xl p-5">
                <h4 className="text-lg font-bold text-white mb-3">SUBJECT DESCRIPTION</h4>
                <p className="text-white/90 text-sm mb-3">Who or what is the focus. Be specific with colors, size, distinctive features.</p>
                <div className="text-brand-red text-xs font-bold">Example: "majestic white Siberian tiger with electric blue eyes"</div>
              </div>
              
              <div className="bg-black/80 rounded-xl p-5">
                <h4 className="text-lg font-bold text-white mb-3">ACTION/POSE</h4>
                <p className="text-white/90 text-sm mb-3">What the subject is doing or how positioned. Adds dynamism to the image.</p>
                <div className="text-brand-red text-xs font-bold">Example: "leaping across a ravine" or "sitting cross-legged reading"</div>
              </div>
              
              <div className="bg-black/80 rounded-xl p-5">
                <h4 className="text-lg font-bold text-white mb-3">ENVIRONMENT/SETTING</h4>
                <p className="text-white/90 text-sm mb-3">Surroundings or background providing context and mood.</p>
                <div className="text-brand-red text-xs font-bold">Example: "misty bamboo forest at dawn" or "studio backdrop"</div>
              </div>
              
              <div className="bg-black/80 rounded-xl p-5">
                <h4 className="text-lg font-bold text-white mb-3">LIGHTING</h4>
                <p className="text-white/90 text-sm mb-3">One of the most powerful mood setters. Quality and direction of light.</p>
                <div className="text-brand-red text-xs font-bold">Example: "dramatic side lighting creating long shadows"</div>
              </div>
              
              <div className="bg-black/80 rounded-xl p-5">
                <h4 className="text-lg font-bold text-white mb-3">CAMERA DETAILS</h4>
                <p className="text-white/90 text-sm mb-3">Perspective, lens effects, composition terms.</p>
                <div className="text-brand-red text-xs font-bold">Example: "shot with 50mm lens at f/1.8 (shallow depth)"</div>
              </div>
              
              <div className="bg-black/80 rounded-xl p-5">
                <h4 className="text-lg font-bold text-white mb-3">STYLE/MOOD</h4>
                <p className="text-white/90 text-sm mb-3">Artistic style, genre, overall vibe.</p>
                <div className="text-brand-red text-xs font-bold">Example: "in the style of Studio Ghibli" or "cinematic look"</div>
              </div>
            </div>

            <div className="bg-black/90 rounded-xl p-8">
              <h3 className="text-2xl font-bold text-white mb-6">QUICK REFERENCE VARIABLES</h3>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                <div>
                  <h4 className="text-lg font-bold text-brand-red mb-4">LIGHTING OPTIONS</h4>
                  <ul className="space-y-2 text-white/90 text-sm">
                    <li>• <strong>Soft diffused light</strong> - gentle, minimal shadows</li>
                    <li>• <strong>Golden hour sunlight</strong> - warm, dramatic shadows</li>
                    <li>• <strong>Neon glow</strong> - colored urban light</li>
                    <li>• <strong>Candlelight</strong> - dim, warm, flickering</li>
                  </ul>
                </div>
                
                <div>
                  <h4 className="text-lg font-bold text-brand-red mb-4">CAMERA ANGLES</h4>
                  <ul className="space-y-2 text-white/90 text-sm">
                    <li>• <strong>Eye-level</strong> - human perspective, natural</li>
                    <li>• <strong>Low-angle</strong> - looking up, makes subject larger</li>
                    <li>• <strong>Bird's-eye</strong> - top-down overview</li>
                    <li>• <strong>First-person POV</strong> - subject's viewpoint</li>
                  </ul>
                </div>
                
                <div>
                  <h4 className="text-lg font-bold text-brand-red mb-4">SHOT TYPES</h4>
                  <ul className="space-y-2 text-white/90 text-sm">
                    <li>• <strong>Close-up</strong> - focus on face/object details</li>
                    <li>• <strong>Medium shot</strong> - subject from waist up</li>
                    <li>• <strong>Wide shot</strong> - full scene/environment</li>
                    <li>• <strong>Panoramic</strong> - ultra-wide scene</li>
                  </ul>
                </div>
                
                <div>
                  <h4 className="text-lg font-bold text-brand-red mb-4">COLOR PALETTES</h4>
                  <ul className="space-y-2 text-white/90 text-sm">
                    <li>• <strong>Vivid technicolor</strong> - bright, saturated</li>
                    <li>• <strong>Muted sepia</strong> - vintage, brownish tones</li>
                    <li>• <strong>Monochrome</strong> - single color or B&W</li>
                    <li>• <strong>Pastel palette</strong> - soft, muted colors</li>
                  </ul>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Section 3: Lifestyle Photography */}
        <section id="lifestyle" className="bg-black/20 backdrop-blur-sm rounded-2xl p-8 mb-8">
          <h2 className="text-4xl font-black text-black mb-8">3. LIFESTYLE PHOTOGRAPHY</h2>
          <div className="text-black space-y-6">
            <p className="text-lg leading-relaxed font-medium">
              Lifestyle images capture people in everyday, real-life contexts. They feel candid, authentic, 
              and relatable – like stock photos or personal snapshots that tell a story.
            </p>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
              <div className="bg-black/80 rounded-xl p-6">
                <h4 className="text-lg font-bold text-white mb-3">EVERYDAY SCENARIOS</h4>
                <p className="text-white/90 text-sm mb-3">Focus on common activities: friends at cafe, family cooking, jogging in park.</p>
                <div className="text-brand-red text-xs font-bold">Goal: slice-of-life feel</div>
              </div>
              
              <div className="bg-black/80 rounded-xl p-6">
                <h4 className="text-lg font-bold text-white mb-3">NATURAL STYLING</h4>
                <p className="text-white/90 text-sm mb-3">Use "candid", "unposed", "in the moment" for authenticity.</p>
                <div className="text-brand-red text-xs font-bold">Poses should not feel stiff</div>
              </div>
              
              <div className="bg-black/80 rounded-xl p-6">
                <h4 className="text-lg font-bold text-white mb-3">ENVIRONMENTAL CONTEXT</h4>
                <p className="text-white/90 text-sm mb-3">Setting grounds the lifestyle. Add props and background details for realism.</p>
                <div className="text-brand-red text-xs font-bold">Coffee cup + laptop = remote work scene</div>
              </div>
            </div>

            <div className="bg-black/90 rounded-xl p-8">
              <h3 className="text-2xl font-bold text-white mb-6">LIFESTYLE EXAMPLES</h3>
              <div className="space-y-6">
                <div>
                  <div className="bg-green-600 text-white px-4 py-2 rounded-lg inline-block mb-3 font-bold text-sm">BEGINNER</div>
                  <p className="text-white/90 mb-2">"Lifestyle photo of a woman drinking coffee at a kitchen table."</p>
                  <p className="text-white/70 text-sm">Simple but plausible scene. Generic but effective starting point.</p>
                </div>
                
                <div>
                  <div className="bg-orange-600 text-white px-4 py-2 rounded-lg inline-block mb-3 font-bold text-sm">ADVANCED</div>
                  <p className="text-white/90 mb-2">"A young mother in a sunlit kitchen, laughing as she teaches her child to mix batter in a bowl. Morning light pours through the window onto rustic wooden countertops, creating a warm, cozy atmosphere. Shot in a natural, candid style."</p>
                  <p className="text-white/70 text-sm">Specifies subjects, action, environment details, lighting, and style.</p>
                </div>
                
                <div>
                  <div className="bg-red-600 text-white px-4 py-2 rounded-lg inline-block mb-3 font-bold text-sm">EXPERT</div>
                  <p className="text-white/90 mb-2">"Candid outdoor lifestyle shot, golden-hour sun flare. A group of diverse friends in hiking gear reach the summit of a hill, cheering with exhilaration. Camera positioned low looking up at triumphant poses against vibrant sky, emphasizing achievement. Lens flare and long shadows add drama."</p>
                  <p className="text-white/70 text-sm">Specifies time, camera angle, composition, action, and emotional tone.</p>
                </div>
              </div>
            </div>

            <div className="bg-brand-red/20 border-2 border-black/30 rounded-xl p-6">
              <h4 className="font-black text-black text-lg mb-3">📸 PHOTOREALISM TIP</h4>
              <p className="text-black font-medium">
                Mention camera/film style: "35mm film photograph", "DSLR photo", or "shot on Canon EOS 5D". 
                Include slight imperfections: "motion blur on moving hands" or "wind tousling hair" for authenticity.
              </p>
            </div>
          </div>
        </section>

        {/* Section 4: Product Photography */}
        <section id="product" className="bg-black/20 backdrop-blur-sm rounded-2xl p-8 mb-8">
          <h2 className="text-4xl font-black text-black mb-8">4. PRODUCT & STUDIO PHOTOGRAPHY</h2>
          <div className="text-black space-y-6">
            <p className="text-lg leading-relaxed font-medium">
              Product photography focuses on highlighting features in a clear, visually appealing way. 
              From classic studio shots to stylized setups.
            </p>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <div className="bg-black/80 rounded-xl p-6">
                <h4 className="text-lg font-bold text-white mb-3">ISOLATE THE PRODUCT</h4>
                <p className="text-white/90 text-sm mb-3">Clean background (white, solid color, gradient), good lighting, product centered.</p>
                <div className="text-brand-red text-xs font-bold">Example: "stainless steel wristwatch on plain white background"</div>
              </div>
              
              <div className="bg-black/80 rounded-xl p-6">
                <h4 className="text-lg font-bold text-white mb-3">LIGHTING & REFLECTIONS</h4>
                <p className="text-white/90 text-sm mb-3">Match lighting to material. Shiny objects need softbox lighting for reflections.</p>
                <div className="text-brand-red text-xs font-bold">"Softbox from above", "ring light front-fill", "dramatic rim lighting"</div>
              </div>
              
              <div className="bg-black/80 rounded-xl p-6">
                <h4 className="text-lg font-bold text-white mb-3">CAMERA & FOCUS</h4>
                <p className="text-white/90 text-sm mb-3">Sharp focus, high resolution for detail. Consider angles and perspectives.</p>
                <div className="text-brand-red text-xs font-bold">"Sharp focus, 8K detail", "top-down view", "45-degree angle"</div>
              </div>
              
              <div className="bg-black/80 rounded-xl p-6">
                <h4 className="text-lg font-bold text-white mb-3">STYLING & BRANDING</h4>
                <p className="text-white/90 text-sm mb-3">Incorporate brand aesthetics, colors, modern/minimalist styling.</p>
                <div className="text-brand-red text-xs font-bold">"Modern, minimalist way using black and gold accents"</div>
              </div>
            </div>

            <div className="bg-black/90 rounded-xl p-8">
              <h3 className="text-2xl font-bold text-white mb-6">PRODUCT EXAMPLES</h3>
              <div className="space-y-6">
                <div>
                  <div className="bg-green-600 text-white px-4 py-2 rounded-lg inline-block mb-3 font-bold text-sm">BEGINNER</div>
                  <p className="text-white/90">"Product photo of a pair of headphones on a white background."</p>
                </div>
                
                <div>
                  <div className="bg-orange-600 text-white px-4 py-2 rounded-lg inline-block mb-3 font-bold text-sm">ADVANCED</div>
                  <p className="text-white/90">"A sleek pair of wireless headphones displayed on a transparent stand against a gradient gray studio background. Soft rim lighting outlines their silhouette, and a subtle reflection is visible below. Shot with a 50mm lens at a slight angle to show earcup detail, in ultra-high resolution."</p>
                </div>
                
                <div>
                  <div className="bg-red-600 text-white px-4 py-2 rounded-lg inline-block mb-3 font-bold text-sm">EXPERT</div>
                  <p className="text-white/90">"Hero shot of a new smartphone levitating above a matte black pedestal, against a dimly lit studio with two-point lighting (cool blue fill light from the left, soft white key light from the right). The phone's screen displays a faint glow. Detailed reflections on edges highlight metallic frame. Background in deep shadow with bokeh of city lights."</p>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Section 5: Graphics & Design */}
        <section id="graphics" className="bg-black/20 backdrop-blur-sm rounded-2xl p-8 mb-8">
          <h2 className="text-4xl font-black text-black mb-8">5. CUSTOM GRAPHICS & DESIGN</h2>
          <div className="text-black space-y-6">
            <p className="text-lg leading-relaxed font-medium">
              Beyond photos, Sora can generate graphic designs: logos, icons, banners with text, 
              illustrations for branding, and more.
            </p>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              <div className="bg-black/80 rounded-xl p-6">
                <h4 className="text-xl font-bold text-white mb-4">LOGOS & ICONS</h4>
                <ul className="space-y-3 text-white/90 text-sm">
                  <li><strong className="text-brand-red">Keep Simple:</strong> "minimalist logo" or "bold emblem-style"</li>
                  <li><strong className="text-brand-red">Define Elements:</strong> "lightning bolt with 'VoltCorp' below"</li>
                  <li><strong className="text-brand-red">Specify Style:</strong> "modern flat design", "vintage retro"</li>
                  <li><strong className="text-brand-red">Colors:</strong> "navy blue and white", hex codes</li>
                </ul>
              </div>
              
              <div className="bg-black/80 rounded-xl p-6">
                <h4 className="text-xl font-bold text-white mb-4">BANNERS & HEROES</h4>
                <ul className="space-y-3 text-white/90 text-sm">
                  <li><strong className="text-brand-red">Composition:</strong> "space on right for tagline"</li>
                  <li><strong className="text-brand-red">Aspect Ratio:</strong> "wide banner format", "16:9"</li>
                  <li><strong className="text-brand-red">Content/Theme:</strong> describe what's shown and vibe</li>
                  <li><strong className="text-brand-red">Style Choice:</strong> photographic vs graphic/illustrated</li>
                </ul>
              </div>
            </div>

            <div className="bg-black/90 rounded-xl p-8">
              <h3 className="text-2xl font-bold text-white mb-6">DESIGN EXAMPLES</h3>
              <div className="space-y-4">
                <div>
                  <h4 className="text-brand-red font-bold mb-2">LOGO DESIGN:</h4>
                  <p className="text-white/90 text-sm">"Logo design for a bakery called 'SweetBite', in a cute minimalist style. Features a simple icon of a cupcake outline next to the text 'SweetBite'. Use pastel pink and brown colors. The font should look handwritten or cursive, conveying a friendly vibe."</p>
                </div>
                
                <div>
                  <h4 className="text-brand-red font-bold mb-2">WEBSITE BANNER:</h4>
                  <p className="text-white/90 text-sm">"Website banner showing a new sports car in a showroom, at a 16:9 ratio. The scene is sleek and modern, with bright showroom lights reflecting off the car's hood. Empty space on the left with plain dark background for tagline text."</p>
                </div>
              </div>
            </div>

            <div className="bg-brand-red/20 border-2 border-black/30 rounded-xl p-6">
              <h4 className="font-black text-black text-lg mb-3">✨ TEXT INTEGRATION</h4>
              <p className="text-black font-medium">
                GPT-4o can embed text correctly! Use quotes for exact text: "poster with title 'Summer Festival 2025'". 
                Specify style: "in red bold font" or "handwritten style text". Keep text concise for best results.
              </p>
            </div>
          </div>
        </section>

        {/* Section 6: Scene Editing */}
        <section id="editing" className="bg-black/20 backdrop-blur-sm rounded-2xl p-8 mb-8">
          <h2 className="text-4xl font-black text-black mb-8">6. SCENE REGENERATION & EDITING</h2>
          <div className="text-black space-y-6">
            <p className="text-lg leading-relaxed font-medium">
              One of Sora's powerful features is editing and iterating on generated images. Take an initial 
              image and ask for changes – adding/removing objects, changing mood, or extending scenes.
            </p>

            <div className="bg-black/90 rounded-xl p-6">
              <h3 className="text-xl font-bold text-white mb-4">HOW TO USE REMIX</h3>
              <p className="text-white/90 mb-4">After generating an image in Sora, open it and select "Remix" (or press R). This lets you describe changes.</p>
              
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                <div className="bg-black/50 rounded p-4">
                  <h4 className="font-bold text-brand-red mb-2">IDENTIFY BY DESCRIPTION</h4>
                  <p className="text-white/90 text-sm">Describe what you want changed: "add fog", "make it nighttime", "remove background objects"</p>
                </div>
                <div className="bg-black/50 rounded p-4">
                  <h4 className="font-bold text-brand-red mb-2">BE SPATIALLY SPECIFIC</h4>
                  <p className="text-white/90 text-sm">Use directions: "Place potted plant on table in left foreground"</p>
                </div>
                <div className="bg-black/50 rounded p-4">
                  <h4 className="font-bold text-brand-red mb-2">MAINTAIN CONSISTENCY</h4>
                  <p className="text-white/90 text-sm">Consider overall scene: "add brown leather sofa matching room's vintage style"</p>
                </div>
                <div className="bg-black/50 rounded p-4">
                  <h4 className="font-bold text-brand-red mb-2">ONE CHANGE AT A TIME</h4>
                  <p className="text-white/90 text-sm">For big edits, work stepwise. First "add dog", then "change to dusk lighting"</p>
                </div>
              </div>
            </div>

            <div className="bg-black/90 rounded-xl p-8">
              <h3 className="text-2xl font-bold text-white mb-6">EDITING EXAMPLES</h3>
              <div className="space-y-6">
                <div>
                  <h4 className="text-brand-red font-bold mb-2">ADDING OBJECTS:</h4>
                  <p className="text-white/90 text-sm">"Add a second sofa matching the existing one on the opposite side of the coffee table."</p>
                </div>
                
                <div>
                  <h4 className="text-brand-red font-bold mb-2">CHANGING TIME/MOOD:</h4>
                  <p className="text-white/90 text-sm">"Make it look like evening, with a sunset sky. Add string lights hanging between the trees to create a cozy atmosphere."</p>
                </div>
                
                <div>
                  <h4 className="text-brand-red font-bold mb-2">BACKGROUND CHANGES:</h4>
                  <p className="text-white/90 text-sm">"Place the sneaker onto a running track background instead of the studio background, and add motion blur to imply movement."</p>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Section 7: Modular Formulas */}
        <section id="formulas" className="bg-black/20 backdrop-blur-sm rounded-2xl p-8 mb-8">
          <h2 className="text-4xl font-black text-black mb-8">7. MODULAR PROMPT FORMULAS</h2>
          <div className="text-black space-y-6">
            <p className="text-lg leading-relaxed font-medium">
              For power users and teams, create modular formulas – templates filled with different values. 
              Ensures consistency and saves time, especially useful for brand style guides.
            </p>

            <div className="bg-black/90 rounded-xl p-8">
              <h3 className="text-2xl font-bold text-white mb-6">SETTING UP IN NOTION</h3>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                <div>
                  <h4 className="font-bold text-brand-red mb-3">CREATE TABLE COLUMNS:</h4>
                  <ul className="space-y-2 text-white/90 text-sm">
                    <li>• Subject, Action, Setting</li>
                    <li>• Lighting, Style, Camera</li>
                    <li>• Primary Color, Secondary Color</li>
                    <li>• Aspect Ratio, Text to Include</li>
                  </ul>
                </div>
                <div>
                  <h4 className="font-bold text-brand-red mb-3">FORMULA BENEFITS:</h4>
                  <ul className="space-y-2 text-white/90 text-sm">
                    <li>• Consistency across all prompts</li>
                    <li>• Quick brainstorming variations</li>
                    <li>• Scaling for product catalogs</li>
                    <li>• A/B testing creative ideas</li>
                  </ul>
                </div>
              </div>
            </div>

            <div className="bg-black/90 rounded-xl p-8">
              <h3 className="text-2xl font-bold text-white mb-4">EXAMPLE FORMULA</h3>
              <div className="bg-black rounded p-4 font-mono text-sm text-brand-red border border-brand-red/30 mb-4">
                "&#123;Subject&#125; &#123;Action&#125; in &#123;Setting&#125;, lit by &#123;Lighting&#125;, &#123;Style&#125;. Colors: &#123;PrimaryColor&#125; and &#123;SecondaryColor&#125;. Shot with &#123;Camera&#125; --aspect &#123;AspectRatio&#125;"
              </div>
              <div className="bg-black/50 rounded p-4">
                <h4 className="font-bold text-brand-red mb-2">EXAMPLE OUTPUT:</h4>
                <p className="text-white/90 text-sm">"A sleek vape pen is centered on a frosted glass pedestal in a minimalist studio, lit by soft ambient glow, captured top-down with a 50mm macro lens. Presented in editorial style. Colors: #000000 and #F5C044. --aspect 4:5"</p>
              </div>
            </div>
          </div>
        </section>

        {/* Section 8: Tips & Best Practices */}
        <section id="tips" className="bg-black/20 backdrop-blur-sm rounded-2xl p-8 mb-8">
          <h2 className="text-4xl font-black text-black mb-8">8. TIPS, BEST PRACTICES & WARNINGS</h2>
          <div className="text-black space-y-8">
            
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              <div className="bg-black/80 rounded-xl p-6">
                <h4 className="text-xl font-bold text-white mb-4">GENERAL TIPS</h4>
                <ul className="space-y-3 text-white/90 text-sm">
                  <li><strong className="text-brand-red">Be Specific, Avoid Redundancy:</strong> "red ball on wooden table" not "nice pretty red ball on brown table"</li>
                  <li><strong className="text-brand-red">Avoid Ambiguity:</strong> "black Jaguar car" not just "Jaguar"</li>
                  <li><strong className="text-brand-red">Test in Parts:</strong> Try "mid-century modern living room" alone first</li>
                  <li><strong className="text-brand-red">Use Structure:</strong> "Scene: market. Subject: merchant. Action: arranging spices"</li>
                </ul>
              </div>
              
              <div className="bg-black/80 rounded-xl p-6">
                <h4 className="text-xl font-bold text-white mb-4">LEVERAGE CHATGPT</h4>
                <ul className="space-y-3 text-white/90 text-sm">
                  <li><strong className="text-brand-red">Ask for Improvements:</strong> "How can I make this prompt more detailed?"</li>
                  <li><strong className="text-brand-red">Request Variations:</strong> "Give me five variations of this idea"</li>
                  <li><strong className="text-brand-red">Use Chat Context:</strong> Describe conversationally, then ask for prompt</li>
                  <li><strong className="text-brand-red">Community Learning:</strong> Study prompts from galleries</li>
                </ul>
              </div>
            </div>

            <div className="bg-red-900/30 border-2 border-red-500/50 rounded-xl p-6">
              <h3 className="text-2xl font-bold text-white mb-4">⚠️ POLICY & CONTENT WARNINGS</h3>
              <ul className="space-y-3 text-white/90">
                <li><strong className="text-red-300">No Disallowed Content:</strong> Avoid violence, gore, sexual, hate content</li>
                <li><strong className="text-red-300">No Real Person Likeness:</strong> Don't use "photo of Tom Cruise" - use "man who looks like classic Hollywood actor"</li>
                <li><strong className="text-red-300">No Filter Circumvention:</strong> Don't misspell words to bypass filters</li>
                <li><strong className="text-red-300">Change Concept if Flagged:</strong> Don't persist with problematic prompts</li>
              </ul>
            </div>

            <div className="bg-green-900/30 border-2 border-green-500/50 rounded-xl p-6">
              <h3 className="text-2xl font-bold text-white mb-4">✅ SUCCESS STRATEGIES</h3>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div>
                  <h4 className="font-bold text-green-300 mb-2">WHEN THINGS GO WRONG:</h4>
                  <ul className="space-y-2 text-white/90 text-sm">
                    <li>• Conflicting elements in prompt</li>
                    <li>• Prompt too long or story-like</li>
                    <li>• AI doesn't know obscure terms</li>
                    <li>• Objects look distorted</li>
                  </ul>
                </div>
                <div>
                  <h4 className="font-bold text-green-300 mb-2">SOLUTIONS:</h4>
                  <ul className="space-y-2 text-white/90 text-sm">
                    <li>• Resolve conflicts by clarifying</li>
                    <li>• Break into one scene at a time</li>
                    <li>• Use simpler descriptions</li>
                    <li>• Use variations and re-run prompts</li>
                  </ul>
                </div>
              </div>
            </div>

            <div className="bg-black/90 rounded-xl p-8 text-center">
              <h3 className="text-3xl font-black text-white mb-4">ITERATE AND EVOLVE</h3>
              <p className="text-white/90 text-lg mb-6 max-w-3xl mx-auto">
                Great images may not come out on the first try. Use the Remix feature to refine. 
                Treat each generation as a prototype – even professional artists make many sketches!
              </p>
              <p className="text-brand-red font-bold text-xl">
                Have fun and be creative! Image generation opens up immense possibilities.
              </p>
            </div>
          </div>
        </section>

        {/* CTA Section */}
        <div className="bg-black rounded-2xl p-8 text-center mb-8">
          <h3 className="text-4xl font-black text-white mb-6">READY TO CREATE?</h3>
          <p className="text-white/90 text-lg mb-8 max-w-2xl mx-auto">
            Apply these professional techniques and transform your AI image generation workflow today.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <button className="bg-brand-red text-white px-8 py-4 rounded-lg text-lg font-bold hover:bg-brand-red/90 transition-colors">
              START CREATING NOW
            </button>
            <button className="border-2 border-white text-white px-8 py-4 rounded-lg text-lg font-bold hover:bg-white hover:text-black transition-colors">
              VIEW AI TOOLS
            </button>
          </div>
        </div>

        {/* Footer */}
        <div className="text-center py-8">
          <p className="text-black/60 text-sm font-medium">
            Professional AI-powered content generation • Trusted by 10,000+ creators worldwide
          </p>
        </div>
      </main>
    </div>
  );
}
