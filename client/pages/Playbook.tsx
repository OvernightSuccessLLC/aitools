import { Header } from "../components/Header";

export default function Playbook() {
  return (
    <div className="min-h-screen bg-brand-red">
      <Header />

      <main className="max-w-6xl mx-auto mt-3 px-4 pb-3">
        {/* Hero Section */}
        <div className="text-center mb-12">
          <div className="mb-5">
          </div>
        </div>

        {/* Section 1: Basics of Prompting */}
        <section id="basics" className="bg-black rounded-lg py-3 px-6 mb-3">
          <h2 className="text-4xl font-black text-white mb-6">1. BASICS OF PROMPTING</h2>
          <div className="text-white space-y-4">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              <div className="bg-black p-4">
                <h3 className="text-xl font-black text-white mb-2">BE SPECIFIC & CLEAR</h3>
                <p className="text-white font-bold text-sm mb-2">
                  Provide concrete details about the subject and scene. "A young woman in a red coat walking through a snowy forest" beats "a person in a city"
                </p>
                <div className="text-brand-red text-xs font-black">Always include who/what, where, and distinctive features</div>
              </div>
              
              <div className="bg-black p-4">
                <h3 className="text-xl font-black text-white mb-2">MENTION STYLE/MOOD</h3>
                <p className="text-white font-bold text-sm mb-2">
                  Let the AI know if you want a photo, painting, 3D render, etc. For photorealistic: "photorealistic, 4K detail, ultra-realistic"
                </p>
                <div className="text-brand-red text-xs font-black">"Shot in natural, casual style" or "Pixar animation style"</div>
              </div>
              
              <div className="bg-black p-4">
                <h3 className="text-xl font-black text-white mb-2">KEEP IT SIMPLE</h3>
                <p className="text-white font-bold text-sm mb-2">
                  Start with single sentences focusing on one scene. Complex prompts can confuse the model. Refine in steps.
                </p>
                <div className="text-brand-red text-xs font-black">Generate first, then adjust iteratively</div>
              </div>
              
              <div className="bg-black p-4">
                <h3 className="text-xl font-black text-white mb-2">USE NATURAL LANGUAGE</h3>
                <p className="text-white font-bold text-sm mb-2">
                  Write as if describing to a person. "A clear photo of a golden retriever puppy playing in a green field at sunset."
                </p>
                <div className="text-brand-red text-xs font-black">No code or special syntax needed</div>
              </div>
            </div>

            <div className="bg-black p-6">
              <h3 className="text-2xl font-black text-white mb-4">PROGRESSION EXAMPLES</h3>
              <div className="space-y-4">
                <div>
                  <div className="bg-green-600 text-white px-3 py-1 rounded inline-block mb-2 font-black text-sm">BEGINNER</div>
                  <p className="text-white font-bold">"Photo of a cat sitting on a windowsill."</p>
                  <p className="text-white/70 font-bold text-sm mt-1">Simple prompt specifying subject and basic setting.</p>
                </div>
                
                <div>
                  <div className="bg-orange-600 text-white px-3 py-1 rounded inline-block mb-2 font-black text-sm">ADVANCED</div>
                  <p className="text-white font-bold">"A tabby cat lounging on a sunny windowsill with soft morning light filtering through lace curtains, looking outside at birds."</p>
                  <p className="text-white/70 font-bold text-sm mt-1">Added specifics: cat type, time of day, lighting quality, implied action.</p>
                </div>
                
                <div>
                  <div className="bg-red-600 text-white px-3 py-1 rounded inline-block mb-2 font-black text-sm">EXPERT</div>
                  <p className="text-white font-bold">"Candid pet photography, close-up shot of a green-eyed tabby cat lounging on a sunlit Victorian bay window, rays of golden morning light patterning its fur through ornate lace curtains. Shot with shallow depth of field (85mm f/1.8)."</p>
                  <p className="text-white/70 font-bold text-sm mt-1">Includes camera specifics, composition, lighting mood, and style cues.</p>
                </div>
              </div>
              <div className="bg-black p-4 pr-0">
                <h4 className="font-black text-brand-red text-lg mb-2">💡 PRO TIP</h4>
                <p className="text-white font-bold">
                  <strong>Clarity is king.</strong> Describe one idea at a time, avoid ambiguity. Instead of "in front of a bank", say "standing on the steps in front of a large, stone bank building" to avoid confusion with other meanings.
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* Section 2: Key Components */}
        <section id="components" className="bg-black rounded-lg p-6 mb-6">
          <div className="text-white space-y-6">
            <div className="bg-black p-4 flex flex-col">
              <h3 className="text-3xl font-black text-white mb-0 mx-auto">PROMPT STRUCTURE FORMULA</h3>
              <div className="bg-black py-3 px-0 text-center self-center mx-auto font-mono text-brand-red text-4xl leading-[50px]">
                <span style={{fontWeight: 'normal'}}>[Subject] + [Pose] + [Setting] + [Lighting]<br />+ [Camera Details] + [Style] + [Quality]</span>
              </div>
            </div>
            <h3 className="text-2xl font-black text-white mb-4">QUICK REFERENCE VARIABLES</h3>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-3">
              <div className="bg-black p-4">
                <h4 className="text-lg font-black text-white mb-2">SUBJECT DESCRIPTION</h4>
                <p className="text-white font-bold text-sm mb-2">Who or what is the focus. Be specific with colors, size, distinctive features.</p>
                <div className="text-brand-red text-xs font-black">Example: "majestic white Siberian tiger with electric blue eyes"</div>
              </div>
              
              <div className="bg-black p-4">
                <h4 className="text-lg font-black text-white mb-2">ACTION/POSE</h4>
                <p className="text-white font-bold text-sm mb-2">What the subject is doing or how positioned. Adds dynamism to the image.</p>
                <div className="text-brand-red text-xs font-black">Example: "leaping across a ravine" or "sitting cross-legged reading"</div>
              </div>
              
              <div className="bg-black p-4">
                <h4 className="text-lg font-black text-white mb-2">ENVIRONMENT/SETTING</h4>
                <p className="text-white font-bold text-sm mb-2">Surroundings or background providing context and mood.</p>
                <div className="text-brand-red text-xs font-black">Example: "misty bamboo forest at dawn" or "studio backdrop"</div>
              </div>
              
              <div className="bg-black p-4">
                <h4 className="text-lg font-black text-white mb-2">LIGHTING</h4>
                <div>
                  <ul className="space-y-1 text-white font-bold text-sm">
                    <li>• <strong>Soft diffused light</strong> - gentle, minimal shadows</li>
                    <li>• <strong>Golden hour sunlight</strong> - warm, dramatic shadows</li>
                    <li>• <strong>Neon glow</strong> - colored urban light</li>
                    <li>• <strong>Candlelight</strong> - dim, warm, flickering</li>
                  </ul>
                </div>
                <p className="text-white font-bold text-sm mb-2">One of the most powerful mood setters. Quality and direction of light.</p>
                <div className="text-brand-red text-xs font-black">Example: "dramatic side lighting creating long shadows"</div>
              </div>

              <div className="bg-black p-4">
                <h4 className="text-lg font-black text-white mb-2">CAMERA DETAILS</h4>
                <div>
                  <h4 className="text-brand-red text-lg font-black mb-3">CAMERA ANGLES</h4>
                  <ul className="space-y-1 text-white font-bold text-sm">
                    <li>• <strong>Eye-level</strong> - human perspective, natural</li>
                    <li>• <strong>Low-angle</strong> - looking up, makes subject larger</li>
                    <li>• <strong>Bird's-eye</strong> - top-down overview</li>
                    <li>• <strong>First-person POV</strong> - subject's viewpoint</li>
                  </ul>
                </div>
                <p className="text-white font-bold text-sm mb-2">Perspective, lens effects, composition terms.</p>
                <div className="text-brand-red text-xs font-black">Example: "shot with 50mm lens at f/1.8 (shallow depth)"</div>
              </div>

              <div className="bg-black p-4">
                <div>
                  <h4 className="text-brand-red text-lg font-black mb-3">SHOT TYPES</h4>
                  <ul className="space-y-1 text-white font-bold text-sm">
                    <li>• <strong>Close-up</strong> - focus on face/object details</li>
                    <li>• <strong>Medium shot</strong> - subject from waist up</li>
                    <li>• <strong>Wide shot</strong> - full scene/environment</li>
                    <li>• <strong>Panoramic</strong> - ultra-wide scene</li>
                  </ul>
                </div>
                <h4 className="text-lg font-black text-white mb-2">STYLE/MOOD</h4>
                <p className="text-white font-bold text-sm mb-2">Artistic style, genre, overall vibe.</p>
                <div className="text-brand-red text-xs font-black">Example: "in the style of Studio Ghibli" or "cinematic look"</div>
              </div>
            </div>
          </div>
        </section>

        {/* Section 3: Lifestyle Photography */}
        <section id="lifestyle" className="bg-black rounded-lg p-6 mb-6">
          <h2 className="text-2xl font-black text-white mb-6">3. LIFESTYLE PHOTOGRAPHY</h2>
          <div className="text-white space-y-4">
            <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
              <div className="bg-black p-4">
                <h4 className="text-lg font-black text-white mb-2">EVERYDAY SCENARIOS</h4>
                <p className="text-white font-bold text-sm mb-2">Focus on common activities: friends at cafe, family cooking, jogging in park.</p>
                <div className="text-brand-red text-xs font-black">Goal: slice-of-life feel</div>
              </div>
              
              <div className="bg-black p-4">
                <h4 className="text-lg font-black text-white mb-2">NATURAL STYLING</h4>
                <p className="text-white font-bold text-sm mb-2">Use "candid", "unposed", "in the moment" for authenticity.</p>
                <div className="text-brand-red text-xs font-black">Poses should not feel stiff</div>
              </div>
              
              <div className="bg-black p-4">
                <h4 className="text-lg font-black text-white mb-2">ENVIRONMENTAL CONTEXT</h4>
                <p className="text-white font-bold text-sm mb-2">Setting grounds the lifestyle. Add props and background details for realism.</p>
                <div className="text-brand-red text-xs font-black">Coffee cup + laptop = remote work scene</div>
              </div>
            </div>

            <div className="bg-black py-3 px-6 pb-3">
              <h3 className="text-2xl font-black text-white mb-4">LIFESTYLE EXAMPLES</h3>
              <div className="space-y-4">
                <div>
                  <div className="bg-green-600 text-white px-3 py-1 rounded inline-block mb-2 font-black text-sm">BEGINNER</div>
                  <p className="text-white font-bold mb-1">"Lifestyle photo of a woman drinking coffee at a kitchen table."</p>
                  <p className="text-white/70 font-bold text-sm">Simple but plausible scene. Generic but effective starting point.</p>
                </div>
                
                <div>
                  <div className="bg-orange-600 text-white px-3 py-1 rounded inline-block mb-2 font-black text-sm">ADVANCED</div>
                  <p className="text-white font-bold mb-1">"A young mother in a sunlit kitchen, laughing as she teaches her child to mix batter in a bowl. Morning light pours through the window onto rustic wooden countertops, creating a warm, cozy atmosphere. Shot in a natural, candid style."</p>
                  <p className="text-white/70 font-bold text-sm">Specifies subjects, action, environment details, lighting, and style.</p>
                </div>
                
                <div>
                  <div className="bg-red-600 text-white px-3 py-1 rounded inline-block mb-2 font-black text-sm">EXPERT</div>
                  <p className="text-white font-bold mb-1">"Candid outdoor lifestyle shot, golden-hour sun flare. A group of diverse friends in hiking gear reach the summit of a hill, cheering with exhilaration. Camera positioned low looking up at triumphant poses against vibrant sky, emphasizing achievement. Lens flare and long shadows add drama."</p>
                  <p className="text-white/70 font-bold text-sm">Specifies time, camera angle, composition, action, and emotional tone.</p>
                </div>
              </div>
            </div>

            <div className="bg-black py-3 px-4">
              <h4 className="font-black text-brand-red text-lg mb-2">📸 PHOTOREALISM TIP</h4>
              <p className="text-white font-bold">
                Mention camera/film style: "35mm film photograph", "DSLR photo", or "shot on Canon EOS 5D". 
                Include slight imperfections: "motion blur on moving hands" or "wind tousling hair" for authenticity.
              </p>
            </div>
          </div>
        </section>

        {/* Section 4: Product Photography */}
        <section id="product" className="bg-black rounded-lg p-6 mb-6">
          <h2 className="text-xl font-black text-white mb-6">4. PRODUCT & STUDIO PHOTOGRAPHY</h2>
          <div className="text-white space-y-4">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              <div className="bg-black p-4">
                <h4 className="text-lg font-black text-white mb-2">ISOLATE THE PRODUCT</h4>
                <p className="text-white font-bold text-sm mb-2">Clean background (white, solid color, gradient), good lighting, product centered.</p>
                <div className="text-brand-red text-xs font-black">Example: "stainless steel wristwatch on plain white background"</div>
              </div>
              
              <div className="bg-black p-4">
                <h4 className="text-lg font-black text-white mb-2">LIGHTING & REFLECTIONS</h4>
                <p className="text-white font-bold text-sm mb-2">Match lighting to material. Shiny objects need softbox lighting for reflections.</p>
                <div className="text-brand-red text-xs font-black">"Softbox from above", "ring light front-fill", "dramatic rim lighting"</div>
              </div>
              
              <div className="bg-black p-4">
                <h4 className="text-lg font-black text-white mb-2">CAMERA & FOCUS</h4>
                <p className="text-white font-bold text-sm mb-2">Sharp focus, high resolution for detail. Consider angles and perspectives.</p>
                <div className="text-brand-red text-xs font-black">"Sharp focus, 8K detail", "top-down view", "45-degree angle"</div>
              </div>
              
              <div className="bg-black p-4">
                <h4 className="text-lg font-black text-white mb-2">STYLING & BRANDING</h4>
                <p className="text-white font-bold text-sm mb-2">Incorporate brand aesthetics, colors, modern/minimalist styling.</p>
                <div className="text-brand-red text-xs font-black">"Modern, minimalist way using black and gold accents"</div>
              </div>
            </div>

            <div className="bg-black p-6">
              <h3 className="text-2xl font-black text-white mb-4">PRODUCT EXAMPLES</h3>
              <div className="space-y-4">
                <div>
                  <div className="bg-green-600 text-white px-3 py-1 rounded inline-block mb-2 font-black text-sm">BEGINNER</div>
                  <p className="text-white font-bold">"Product photo of a pair of headphones on a white background."</p>
                </div>
                
                <div>
                  <div className="bg-orange-600 text-white px-3 py-1 rounded inline-block mb-2 font-black text-sm">ADVANCED</div>
                  <p className="text-white font-bold">"A sleek pair of wireless headphones displayed on a transparent stand against a gradient gray studio background. Soft rim lighting outlines their silhouette, and a subtle reflection is visible below. Shot with a 50mm lens at a slight angle to show earcup detail, in ultra-high resolution."</p>
                </div>
                
                <div>
                  <div className="bg-red-600 text-white px-3 py-1 rounded inline-block mb-2 font-black text-sm">EXPERT</div>
                  <p className="text-white font-bold">"Hero shot of a new smartphone levitating above a matte black pedestal, against a dimly lit studio with two-point lighting (cool blue fill light from the left, soft white key light from the right). The phone's screen displays a faint glow. Detailed reflections on edges highlight metallic frame. Background in deep shadow with bokeh of city lights."</p>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Section 5: Graphics & Design */}
        <section id="graphics" className="bg-black rounded-lg p-6 mb-6">
          <h2 className="text-xl font-black text-white mb-6">5. CUSTOM GRAPHICS & DESIGN</h2>
          <div className="text-white space-y-4">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <div className="bg-black p-4">
                <h4 className="text-xl font-black text-white mb-3">LOGOS & ICONS</h4>
                <ul className="space-y-2 text-white font-bold text-sm">
                  <li><strong className="text-brand-red">Keep Simple:</strong> "minimalist logo" or "bold emblem-style"</li>
                  <li><strong className="text-brand-red">Define Elements:</strong> "lightning bolt with 'VoltCorp' below"</li>
                  <li><strong className="text-brand-red">Specify Style:</strong> "modern flat design", "vintage retro"</li>
                  <li><strong className="text-brand-red">Colors:</strong> "navy blue and white", hex codes</li>
                </ul>
              </div>
              
              <div className="bg-black p-4">
                <h4 className="text-xl font-black text-white mb-3">BANNERS & HEROES</h4>
                <ul className="space-y-2 text-white font-bold text-sm">
                  <li><strong className="text-brand-red">Composition:</strong> "space on right for tagline"</li>
                  <li><strong className="text-brand-red">Aspect Ratio:</strong> "wide banner format", "16:9"</li>
                  <li><strong className="text-brand-red">Content/Theme:</strong> describe what's shown and vibe</li>
                  <li><strong className="text-brand-red">Style Choice:</strong> photographic vs graphic/illustrated</li>
                </ul>
              </div>
            </div>

            <div className="bg-black p-6">
              <h3 className="text-2xl font-black text-white mb-4">DESIGN EXAMPLES</h3>
              <div className="space-y-3">
                <div>
                  <h4 className="text-brand-red font-black mb-1">LOGO DESIGN:</h4>
                  <p className="text-white font-bold text-sm">"Logo design for a bakery called 'SweetBite', in a cute minimalist style. Features a simple icon of a cupcake outline next to the text 'SweetBite'. Use pastel pink and brown colors. The font should look handwritten or cursive, conveying a friendly vibe."</p>
                </div>
                
                <div>
                  <h4 className="text-brand-red font-black mb-1">WEBSITE BANNER:</h4>
                  <p className="text-white font-bold text-sm">"Website banner showing a new sports car in a showroom, at a 16:9 ratio. The scene is sleek and modern, with bright showroom lights reflecting off the car's hood. Empty space on the left with plain dark background for tagline text."</p>
                </div>
              </div>
            </div>


          </div>
        </section>

        {/* Section 6: Scene Editing */}
        <section id="editing" className="bg-black rounded-lg p-6 mb-6">
          <h2 className="text-xl font-black text-white mb-6">6. SCENE REGENERATION & EDITING</h2>
          <div className="text-white space-y-4">
            <div className="bg-black p-4">
              <h3 className="text-xl font-black text-white mb-3">HOW TO USE REMIX</h3>
              <p className="text-white font-bold mb-3">After generating an image in Sora, open it and select "Remix" (or press R). This lets you describe changes.</p>
              
              <div className="grid grid-cols-1 md:grid-cols-2 gap-3">
                <div className="bg-black p-3">
                  <h4 className="font-black text-brand-red mb-1">IDENTIFY BY DESCRIPTION</h4>
                  <p className="text-white font-bold text-sm">Describe what you want changed: "add fog", "make it nighttime", "remove background objects"</p>
                </div>
                <div className="bg-black p-3">
                  <h4 className="font-black text-brand-red mb-1">BE SPATIALLY SPECIFIC</h4>
                  <p className="text-white font-bold text-sm">Use directions: "Place potted plant on table in left foreground"</p>
                </div>
                <div className="bg-black p-3">
                  <h4 className="font-black text-brand-red mb-1">MAINTAIN CONSISTENCY</h4>
                  <p className="text-white font-bold text-sm">Consider overall scene: "add brown leather sofa matching room's vintage style"</p>
                </div>
                <div className="bg-black p-3">
                  <h4 className="font-black text-brand-red mb-1">ONE CHANGE AT A TIME</h4>
                  <p className="text-white font-bold text-sm">For big edits, work stepwise. First "add dog", then "change to dusk lighting"</p>
                </div>
              </div>
            </div>

            <div className="bg-black p-6">
              <h3 className="text-2xl font-black text-white mb-4">EDITING EXAMPLES</h3>
              <div className="space-y-4">
                <div>
                  <h4 className="text-brand-red font-black mb-1">ADDING OBJECTS:</h4>
                  <p className="text-white font-bold text-sm">"Add a second sofa matching the existing one on the opposite side of the coffee table."</p>
                </div>
                
                <div>
                  <h4 className="text-brand-red font-black mb-1">CHANGING TIME/MOOD:</h4>
                  <p className="text-white font-bold text-sm">"Make it look like evening, with a sunset sky. Add string lights hanging between the trees to create a cozy atmosphere."</p>
                </div>
                
                <div>
                  <h4 className="text-brand-red font-black mb-1">BACKGROUND CHANGES:</h4>
                  <p className="text-white font-bold text-sm">"Place the sneaker onto a running track background instead of the studio background, and add motion blur to imply movement."</p>
                </div>
              </div>
            </div>
            <div className="bg-black p-3 font-mono text-sm text-brand-red font-black mb-3">
              "&#123;Subject&#125; &#123;Action&#125; in &#123;Setting&#125;, lit by &#123;Lighting&#125;, &#123;Style&#125;. Colors: &#123;PrimaryColor&#125; and &#123;SecondaryColor&#125;. Shot with &#123;Camera&#125; --aspect &#123;AspectRatio&#125;"
            </div>
            <div className="bg-black p-3 mb-3">
              <h4 className="font-black text-brand-red mb-1">EXAMPLE OUTPUT:</h4>
              <p className="text-white font-bold text-sm">"A sleek vape pen is centered on a frosted glass pedestal in a minimalist studio, lit by soft ambient glow, captured top-down with a 50mm macro lens. Presented in editorial style. Colors: #000000 and #F5C044. --aspect 4:5"</p>
            </div>
          </div>
        </section>

        {/* Section 7: Tips & Best Practices */}
        <section id="tips" className="bg-black rounded-lg p-6 mb-6">
          <h2 className="text-4xl font-black text-white mb-6">7. TIPS, BEST PRACTICES & WARNINGS</h2>
          <div className="text-white space-y-6">
            
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <div className="bg-black p-4">
                <h4 className="text-xl font-black text-white mb-3">GENERAL TIPS</h4>
                <ul className="space-y-2 text-white font-bold text-sm">
                  <li><strong className="text-brand-red">Be Specific, Avoid Redundancy:</strong> "red ball on wooden table" not "nice pretty red ball on brown table"</li>
                  <li><strong className="text-brand-red">Avoid Ambiguity:</strong> "black Jaguar car" not just "Jaguar"</li>
                  <li><strong className="text-brand-red">Test in Parts:</strong> Try "mid-century modern living room" alone first</li>
                  <li><strong className="text-brand-red">Use Structure:</strong> "Scene: market. Subject: merchant. Action: arranging spices"</li>
                </ul>
              </div>
              
              <div className="bg-black p-4">
                <h4 className="text-xl font-black text-white mb-3">LEVERAGE CHATGPT</h4>
                <ul className="space-y-2 text-white font-bold text-sm">
                  <li><strong className="text-brand-red">Ask for Improvements:</strong> "How can I make this prompt more detailed?"</li>
                  <li><strong className="text-brand-red">Request Variations:</strong> "Give me five variations of this idea"</li>
                  <li><strong className="text-brand-red">Use Chat Context:</strong> Describe conversationally, then ask for prompt</li>
                  <li><strong className="text-brand-red">Community Learning:</strong> Study prompts from galleries</li>
                </ul>
              </div>
            </div>

            <div className="bg-red-900 p-4 mt-5">
              <h3 className="text-2xl font-black text-white mb-3">⚠️ POLICY & CONTENT WARNINGS</h3>
              <ul className="space-y-2 text-white font-bold">
                <li><strong className="text-red-300">No Disallowed Content:</strong> Avoid violence, gore, sexual, hate content</li>
                <li><strong className="text-red-300">No Real Person Likeness:</strong> Don't use "photo of Tom Cruise" - use "man who looks like classic Hollywood actor"</li>
                <li><strong className="text-red-300">No Filter Circumvention:</strong> Don't misspell words to bypass filters</li>
                <li><strong className="text-red-300">Change Concept if Flagged:</strong> Don't persist with problematic prompts</li>
              </ul>
            </div>

            <div className="bg-green-900 p-4 mt-5">
              <h3 className="text-2xl font-black text-white mb-3">✅ SUCCESS STRATEGIES</h3>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                <div>
                  <h4 className="font-black text-green-300 mb-1">WHEN THINGS GO WRONG:</h4>
                  <ul className="space-y-1 text-white font-bold text-sm">
                    <li>• Conflicting elements in prompt</li>
                    <li>• Prompt too long or story-like</li>
                    <li>• AI doesn't know obscure terms</li>
                    <li>• Objects look distorted</li>
                  </ul>
                </div>
                <div>
                  <h4 className="font-black text-green-300 mb-1">SOLUTIONS:</h4>
                  <ul className="space-y-1 text-white font-bold text-sm">
                    <li>• Resolve conflicts by clarifying</li>
                    <li>• Break into one scene at a time</li>
                    <li>• Use simpler descriptions</li>
                    <li>• Use variations and re-run prompts</li>
                  </ul>
                </div>
              </div>
            </div>

            <div className="bg-black py-6 px-6 pb-0 text-center">
              <h3 className="text-3xl font-black text-white mb-3">ITERATE AND EVOLVE</h3>
              <p className="text-white font-bold text-lg mb-4 max-w-3xl mx-auto">
                Great images may not come out on the first try. Use the Remix feature to refine.
                Treat each generation as a prototype – even professional artists make many sketches!
              </p>
            </div>
          </div>
        </section>

        {/* CTA Section */}
        <div className="bg-black rounded-lg p-6 text-center mb-6">
          <h3 className="text-4xl font-black text-white mb-4">READY TO CREATE?</h3>
          <p className="text-white font-bold text-lg mb-6 max-w-2xl mx-auto">
            Apply these professional techniques and transform your AI image generation workflow today.
          </p>
          <div className="flex flex-col sm:flex-row gap-3 justify-center">
            <button className="bg-brand-red text-white px-6 py-3 rounded-lg text-lg font-black hover:bg-brand-red/90 transition-colors">
              START CREATING NOW
            </button>
            <button className="border-2 border-white text-white px-6 py-3 rounded-lg text-lg font-black hover:bg-white hover:text-black transition-colors">
              VIEW AI TOOLS
            </button>
          </div>
        </div>
      </main>
    </div>
  );
}
