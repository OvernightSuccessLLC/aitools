import { Header } from "../components/Header";

export default function Playbook() {
  return (
    <div className="min-h-screen font-inter" style={{ backgroundColor: '#F0440F' }}>
      <Header />
      
      <main className="max-w-[1200px] mx-auto px-4 md:px-6 lg:px-8 py-16 space-y-16">
        
        {/* BASICS OF PROMPTING */}
        <section className="bg-black rounded-3xl p-1">
          <div className="p-6">
            <h1 className="font-bold text-white text-[28px] uppercase tracking-tight mb-6">
              BASICS OF PROMPTING
            </h1>
            
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-8">
              <div>
                <h2 className="font-medium text-[16px] uppercase mb-4" style={{ color: '#F0440F' }}>
                  BE SPECIFIC & CLEAR
                </h2>
                <p className="text-white text-[14px] mb-4" style={{ lineHeight: '1.6' }}>
                  Provide concrete details about the subject and scene. "A young woman in a red coat walking through a snowy forest" beats "a person in a city"
                </p>
                <p className="text-white text-[14px]" style={{ lineHeight: '1.6' }}>
                  Always include who/what, where, and distinctive features
                </p>
              </div>
              
              <div>
                <h2 className="font-medium text-[16px] uppercase mb-4" style={{ color: '#F0440F' }}>
                  MENTION STYLE/MOOD
                </h2>
                <p className="text-white text-[14px] mb-4" style={{ lineHeight: '1.6' }}>
                  Let the AI know if you want a photo, painting, 3D render, etc. For photorealistic: "photorealistic, 4K detail, ultra-realistic"
                </p>
                <p className="text-white text-[14px]" style={{ lineHeight: '1.6' }}>
                  "Shot in natural, casual style" or "Pixar animation style"
                </p>
              </div>
              
              <div>
                <h2 className="font-medium text-[16px] uppercase mb-4" style={{ color: '#F0440F' }}>
                  KEEP IT SIMPLE
                </h2>
                <p className="text-white text-[14px] mb-4" style={{ lineHeight: '1.6' }}>
                  Start with single sentences focusing on one scene. Complex prompts can confuse the model. Refine in steps.
                </p>
                <p className="text-white text-[14px]" style={{ lineHeight: '1.6' }}>
                  Generate first, then adjust iteratively
                </p>
              </div>
              
              <div>
                <h2 className="font-medium text-[16px] uppercase mb-4" style={{ color: '#F0440F' }}>
                  USE NATURAL LANGUAGE
                </h2>
                <p className="text-white text-[14px] mb-4" style={{ lineHeight: '1.6' }}>
                  Write as if describing to a person. "A clear photo of a golden retriever puppy playing in a green field at sunset."
                </p>
                <p className="text-white text-[14px]" style={{ lineHeight: '1.6' }}>
                  No code or special syntax needed
                </p>
              </div>
            </div>

            <div className="mb-8">
              <h2 className="font-medium text-[16px] uppercase mb-4" style={{ color: '#F0440F' }}>
                💡 PRO TIP
              </h2>
              <p className="text-white text-[14px] mb-4" style={{ lineHeight: '1.6' }}>
                <strong>Clarity is king.</strong> Describe one idea at a time, avoid ambiguity. Instead of "in front of a bank", say "standing on the steps in front of a large, stone bank building" to avoid confusion with other meanings.
              </p>
            </div>
            
            <h2 className="font-bold text-white text-[28px] uppercase mb-6">
              PROGRESSION EXAMPLES
            </h2>
            
            <div className="space-y-6">
              <div>
                <div className="bg-green-600 text-white px-3 py-1 rounded inline-block mb-2 font-bold text-sm">BEGINNER</div>
                <p className="text-white text-[14px] mb-2" style={{ lineHeight: '1.6' }}>
                  "Photo of a cat sitting on a windowsill."
                </p>
                <p className="text-white text-[14px] opacity-70" style={{ lineHeight: '1.6' }}>
                  Simple prompt specifying subject and basic setting.
                </p>
              </div>
              
              <div>
                <div className="bg-orange-600 text-white px-3 py-1 rounded inline-block mb-2 font-bold text-sm">ADVANCED</div>
                <p className="text-white text-[14px] mb-2" style={{ lineHeight: '1.6' }}>
                  "A tabby cat lounging on a sunny windowsill with soft morning light filtering through lace curtains, looking outside at birds."
                </p>
                <p className="text-white text-[14px] opacity-70" style={{ lineHeight: '1.6' }}>
                  Added specifics: cat type, time of day, lighting quality, implied action.
                </p>
              </div>
              
              <div>
                <div className="bg-red-600 text-white px-3 py-1 rounded inline-block mb-2 font-bold text-sm">EXPERT</div>
                <p className="text-white text-[14px] mb-2" style={{ lineHeight: '1.6' }}>
                  "Candid pet photography, close-up shot of a green-eyed tabby cat lounging on a sunlit Victorian bay window, rays of golden morning light patterning its fur through ornate lace curtains. Shot with shallow depth of field (85mm f/1.8)."
                </p>
                <p className="text-white text-[14px] opacity-70" style={{ lineHeight: '1.6' }}>
                  Includes camera specifics, composition, lighting mood, and style cues.
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* PROMPT STRUCTURE */}
        <section className="bg-black rounded-3xl p-1">
          <div className="p-6">
            <h1 className="font-bold text-white text-[28px] uppercase tracking-tight mb-6">
              PROMPT STRUCTURE FORMULA
            </h1>
            
            <div className="text-center mb-8 p-6 bg-gray-900 rounded-lg">
              <p className="text-white text-[18px] font-mono" style={{ lineHeight: '1.6' }}>
                [Subject] + [Pose] + [Setting] + [Lighting]<br />
                + [Camera Details] + [Style] + [Quality]
              </p>
            </div>
            
            <h2 className="font-bold text-white text-[28px] uppercase text-center mb-8">
              QUICK REFERENCE VARIABLES
            </h2>
            
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              <div>
                <h2 className="font-medium text-[16px] uppercase mb-4" style={{ color: '#F0440F' }}>
                  SUBJECT DESCRIPTION
                </h2>
                <p className="text-white text-[14px] mb-4" style={{ lineHeight: '1.6' }}>
                  Who or what is the focus. Be specific with colors, size, distinctive features.
                </p>
                <p className="text-white text-[14px]" style={{ lineHeight: '1.6' }}>
                  Example: "majestic white Siberian tiger with electric blue eyes"
                </p>
              </div>
              
              <div>
                <h2 className="font-medium text-[16px] uppercase mb-4" style={{ color: '#F0440F' }}>
                  ACTION/POSE
                </h2>
                <p className="text-white text-[14px] mb-4" style={{ lineHeight: '1.6' }}>
                  What the subject is doing or how positioned. Adds dynamism to the image.
                </p>
                <p className="text-white text-[14px]" style={{ lineHeight: '1.6' }}>
                  Example: "leaping across a ravine" or "sitting cross-legged reading"
                </p>
              </div>
              
              <div>
                <h2 className="font-medium text-[16px] uppercase mb-4" style={{ color: '#F0440F' }}>
                  ENVIRONMENT/SETTING
                </h2>
                <p className="text-white text-[14px] mb-4" style={{ lineHeight: '1.6' }}>
                  Surroundings or background providing context and mood.
                </p>
                <p className="text-white text-[14px]" style={{ lineHeight: '1.6' }}>
                  Example: "misty bamboo forest at dawn" or "studio backdrop"
                </p>
              </div>
              
              <div>
                <h2 className="font-medium text-[16px] uppercase mb-4" style={{ color: '#F0440F' }}>
                  LIGHTING
                </h2>
                <p className="text-white text-[14px] mb-4" style={{ lineHeight: '1.6' }}>
                  One of the most powerful mood setters. Quality and direction of light.
                </p>
                <ul className="text-white text-[14px] space-y-1 mb-4" style={{ lineHeight: '1.6' }}>
                  <li>• <strong>Soft diffused light</strong> - gentle, minimal shadows</li>
                  <li>• <strong>Golden hour sunlight</strong> - warm, dramatic shadows</li>
                  <li>• <strong>Neon glow</strong> - colored urban light</li>
                  <li>• <strong>Candlelight</strong> - dim, warm, flickering</li>
                </ul>
                <p className="text-white text-[14px]" style={{ lineHeight: '1.6' }}>
                  "dramatic side lighting creating long shadows"
                </p>
              </div>
              
              <div>
                <h2 className="font-medium text-[16px] uppercase mb-4" style={{ color: '#F0440F' }}>
                  CAMERA DETAILS
                </h2>
                <div className="mb-4">
                  <ul className="text-white text-[14px] space-y-1" style={{ lineHeight: '1.6' }}>
                    <li>• <strong>Close-up</strong> - focus on face/object details</li>
                    <li>• <strong>Medium shot</strong> - subject from waist up</li>
                    <li>• <strong>Wide shot</strong> - full scene/environment</li>
                    <li>• <strong>Panoramic</strong> - ultra-wide scene</li>
                  </ul>
                </div>
                <div className="mb-4">
                  <ul className="text-white text-[14px] space-y-1" style={{ lineHeight: '1.6' }}>
                    <li>• <strong>Eye-level</strong> - human perspective, natural</li>
                    <li>• <strong>Bird's-eye</strong> - top-down overview</li>
                    <li>• <strong>POV</strong> - subject's viewpoint</li>
                  </ul>
                </div>
                <p className="text-white text-[14px]" style={{ lineHeight: '1.6' }}>
                  "shot with 50mm lens at f/1.8 (shallow depth)"
                </p>
              </div>
              
              <div>
                <h2 className="font-medium text-[16px] uppercase mb-4" style={{ color: '#F0440F' }}>
                  STYLE/MOOD
                </h2>
                <p className="text-white text-[14px] mb-4" style={{ lineHeight: '1.6' }}>
                  Artistic style, genre, overall vibe.
                </p>
                <p className="text-white text-[14px]" style={{ lineHeight: '1.6' }}>
                  "in the style of Studio Ghibli" or "cinematic look"
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* LIFESTYLE EXAMPLES */}
        <section className="bg-black rounded-3xl p-1">
          <div className="p-6">
            <h1 className="font-bold text-white text-[28px] uppercase tracking-tight text-center mb-8">
              LIFESTYLE EXAMPLES
            </h1>
            
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-8">
              <div>
                <h2 className="font-medium text-[16px] uppercase mb-4" style={{ color: '#F0440F' }}>
                  EVERYDAY SCENARIOS
                </h2>
                <p className="text-white text-[14px] mb-4" style={{ lineHeight: '1.6' }}>
                  Focus on common activities: friends at cafe, family cooking, jogging in park.
                </p>
                <p className="text-white text-[14px]" style={{ lineHeight: '1.6' }}>
                  Goal: slice-of-life feel
                </p>
              </div>
              
              <div>
                <h2 className="font-medium text-[16px] uppercase mb-4" style={{ color: '#F0440F' }}>
                  NATURAL STYLING
                </h2>
                <p className="text-white text-[14px] mb-4" style={{ lineHeight: '1.6' }}>
                  Use "candid", "unposed", "in the moment" for authenticity.
                </p>
                <p className="text-white text-[14px]" style={{ lineHeight: '1.6' }}>
                  Poses should not feel stiff
                </p>
              </div>
              
              <div>
                <h2 className="font-medium text-[16px] uppercase mb-4" style={{ color: '#F0440F' }}>
                  ENVIRONMENTAL CONTEXT
                </h2>
                <p className="text-white text-[14px] mb-4" style={{ lineHeight: '1.6' }}>
                  Setting grounds the lifestyle. Add props and background details for realism.
                </p>
                <p className="text-white text-[14px]" style={{ lineHeight: '1.6' }}>
                  Coffee cup + laptop = remote work scene
                </p>
              </div>
            </div>

            <div className="mb-8">
              <h2 className="font-medium text-[16px] uppercase mb-4" style={{ color: '#F0440F' }}>
                📸 PHOTOREALISM TIP
              </h2>
              <p className="text-white text-[14px]" style={{ lineHeight: '1.6' }}>
                Mention camera/film style: "35mm film photograph", "DSLR photo", or "shot on Canon EOS 5D". 
                Include slight imperfections: "motion blur on moving hands" or "wind tousling hair" for authenticity.
              </p>
            </div>
            
            <div className="space-y-6">
              <div>
                <div className="bg-green-600 text-white px-3 py-1 rounded inline-block mb-2 font-bold text-sm">BEGINNER</div>
                <p className="text-white text-[14px] mb-2" style={{ lineHeight: '1.6' }}>
                  "Lifestyle photo of a woman drinking coffee at a kitchen table."
                </p>
                <p className="text-white text-[14px] opacity-70" style={{ lineHeight: '1.6' }}>
                  Simple but plausible scene. Generic but effective starting point.
                </p>
              </div>
              
              <div>
                <div className="bg-orange-600 text-white px-3 py-1 rounded inline-block mb-2 font-bold text-sm">ADVANCED</div>
                <p className="text-white text-[14px] mb-2" style={{ lineHeight: '1.6' }}>
                  "A young mother in a sunlit kitchen, laughing as she teaches her child to mix batter in a bowl. Morning light pours through the window onto rustic wooden countertops, creating a warm, cozy atmosphere. Shot in a natural, candid style."
                </p>
                <p className="text-white text-[14px] opacity-70" style={{ lineHeight: '1.6' }}>
                  Specifies subjects, action, environment details, lighting, and style.
                </p>
              </div>
              
              <div>
                <div className="bg-red-600 text-white px-3 py-1 rounded inline-block mb-2 font-bold text-sm">EXPERT</div>
                <p className="text-white text-[14px] mb-2" style={{ lineHeight: '1.6' }}>
                  "Candid outdoor lifestyle shot, golden-hour sun flare. A group of diverse friends in hiking gear reach the summit of a hill, cheering with exhilaration. Camera positioned low looking up at triumphant poses against vibrant sky, emphasizing achievement. Lens flare and long shadows add drama."
                </p>
                <p className="text-white text-[14px] opacity-70" style={{ lineHeight: '1.6' }}>
                  Specifies time, camera angle, composition, action, and emotional tone.
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* PRODUCT & STUDIO PHOTOGRAPHY */}
        <section className="bg-black rounded-3xl p-1">
          <div className="p-6">
            <h1 className="font-bold text-white text-[28px] uppercase tracking-tight mb-8">
              PRODUCT & STUDIO PHOTOGRAPHY
            </h1>
            
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-8">
              <div>
                <h2 className="font-medium text-[16px] uppercase mb-4" style={{ color: '#F0440F' }}>
                  ISOLATE THE PRODUCT
                </h2>
                <p className="text-white text-[14px] mb-4" style={{ lineHeight: '1.6' }}>
                  Clean background (white, solid color, gradient), good lighting, product centered.
                </p>
                <p className="text-white text-[14px]" style={{ lineHeight: '1.6' }}>
                  Example: "stainless steel wristwatch on plain white background"
                </p>
              </div>
              
              <div>
                <h2 className="font-medium text-[16px] uppercase mb-4" style={{ color: '#F0440F' }}>
                  LIGHTING & REFLECTIONS
                </h2>
                <p className="text-white text-[14px] mb-4" style={{ lineHeight: '1.6' }}>
                  Match lighting to material. Shiny objects need softbox lighting for reflections.
                </p>
                <p className="text-white text-[14px]" style={{ lineHeight: '1.6' }}>
                  "Softbox from above", "ring light front-fill", "dramatic rim lighting"
                </p>
              </div>
              
              <div>
                <h2 className="font-medium text-[16px] uppercase mb-4" style={{ color: '#F0440F' }}>
                  CAMERA & FOCUS
                </h2>
                <p className="text-white text-[14px] mb-4" style={{ lineHeight: '1.6' }}>
                  Sharp focus, high resolution for detail. Consider angles and perspectives.
                </p>
                <p className="text-white text-[14px]" style={{ lineHeight: '1.6' }}>
                  "Sharp focus, 8K detail", "top-down view", "45-degree angle"
                </p>
              </div>
              
              <div>
                <h2 className="font-medium text-[16px] uppercase mb-4" style={{ color: '#F0440F' }}>
                  STYLING & BRANDING
                </h2>
                <p className="text-white text-[14px] mb-4" style={{ lineHeight: '1.6' }}>
                  Incorporate brand aesthetics, colors, modern/minimalist styling.
                </p>
                <p className="text-white text-[14px]" style={{ lineHeight: '1.6' }}>
                  "Modern, minimalist way using black and gold accents"
                </p>
              </div>
            </div>

            <h2 className="font-bold text-white text-[28px] uppercase mb-6">
              PRODUCT EXAMPLES
            </h2>
            
            <div className="space-y-6">
              <div>
                <div className="bg-green-600 text-white px-3 py-1 rounded inline-block mb-2 font-bold text-sm">BEGINNER</div>
                <p className="text-white text-[14px]" style={{ lineHeight: '1.6' }}>
                  "Product photo of a pair of headphones on a white background."
                </p>
              </div>
              
              <div>
                <div className="bg-orange-600 text-white px-3 py-1 rounded inline-block mb-2 font-bold text-sm">ADVANCED</div>
                <p className="text-white text-[14px]" style={{ lineHeight: '1.6' }}>
                  "A sleek pair of wireless headphones displayed on a transparent stand against a gradient gray studio background. Soft rim lighting outlines their silhouette, and a subtle reflection is visible below. Shot with a 50mm lens at a slight angle to show earcup detail, in ultra-high resolution."
                </p>
              </div>
              
              <div>
                <div className="bg-red-600 text-white px-3 py-1 rounded inline-block mb-2 font-bold text-sm">EXPERT</div>
                <p className="text-white text-[14px]" style={{ lineHeight: '1.6' }}>
                  "Hero shot of a new smartphone levitating above a matte black pedestal, against a dimly lit studio with two-point lighting (cool blue fill light from the left, soft white key light from the right). The phone's screen displays a faint glow. Detailed reflections on edges highlight metallic frame. Background in deep shadow with bokeh of city lights."
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* CUSTOM GRAPHICS & DESIGN */}
        <section className="bg-black rounded-3xl p-1">
          <div className="p-6">
            <h1 className="font-bold text-white text-[28px] uppercase tracking-tight mb-8">
              CUSTOM GRAPHICS & DESIGN
            </h1>
            
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-8">
              <div>
                <h2 className="font-medium text-[16px] uppercase mb-4" style={{ color: '#F0440F' }}>
                  LOGOS & ICONS
                </h2>
                <ul className="text-white text-[14px] space-y-3" style={{ lineHeight: '1.6' }}>
                  <li><strong style={{ color: '#F0440F' }}>Keep Simple:</strong> "minimalist logo" or "bold emblem-style"</li>
                  <li><strong style={{ color: '#F0440F' }}>Define Elements:</strong> "lightning bolt with 'VoltCorp' below"</li>
                  <li><strong style={{ color: '#F0440F' }}>Specify Style:</strong> "modern flat design", "vintage retro"</li>
                  <li><strong style={{ color: '#F0440F' }}>Colors:</strong> "navy blue and white", hex codes</li>
                </ul>
              </div>
              
              <div>
                <h2 className="font-medium text-[16px] uppercase mb-4" style={{ color: '#F0440F' }}>
                  BANNERS & HEROES
                </h2>
                <ul className="text-white text-[14px] space-y-3" style={{ lineHeight: '1.6' }}>
                  <li><strong style={{ color: '#F0440F' }}>Composition:</strong> "space on right for tagline"</li>
                  <li><strong style={{ color: '#F0440F' }}>Aspect Ratio:</strong> "wide banner format", "16:9"</li>
                  <li><strong style={{ color: '#F0440F' }}>Content/Theme:</strong> describe what's shown and vibe</li>
                  <li><strong style={{ color: '#F0440F' }}>Style Choice:</strong> photographic vs graphic/illustrated</li>
                </ul>
              </div>
            </div>

            <h2 className="font-bold text-white text-[28px] uppercase mb-6">
              DESIGN EXAMPLES
            </h2>
            
            <div className="space-y-6">
              <div>
                <h3 className="font-medium text-[16px] uppercase mb-2" style={{ color: '#F0440F' }}>LOGO DESIGN:</h3>
                <p className="text-white text-[14px]" style={{ lineHeight: '1.6' }}>
                  "Logo design for a bakery called 'SweetBite', in a cute minimalist style. Features a simple icon of a cupcake outline next to the text 'SweetBite'. Use pastel pink and brown colors. The font should look handwritten or cursive, conveying a friendly vibe."
                </p>
              </div>
              
              <div>
                <h3 className="font-medium text-[16px] uppercase mb-2" style={{ color: '#F0440F' }}>WEBSITE BANNER:</h3>
                <p className="text-white text-[14px]" style={{ lineHeight: '1.6' }}>
                  "Website banner showing a new sports car in a showroom, at a 16:9 ratio. The scene is sleek and modern, with bright showroom lights reflecting off the car's hood. Empty space on the left with plain dark background for tagline text."
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* SCENE REGENERATION & EDITING */}
        <section className="bg-black rounded-3xl p-1">
          <div className="p-6">
            <h1 className="font-bold text-white text-[28px] uppercase tracking-tight mb-8">
              SCENE REGENERATION & EDITING
            </h1>
            
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-8">
              <div>
                <h2 className="font-medium text-[16px] uppercase mb-4" style={{ color: '#F0440F' }}>
                  IDENTIFY BY DESCRIPTION
                </h2>
                <p className="text-white text-[14px]" style={{ lineHeight: '1.6' }}>
                  Describe what you want changed: "add fog", "make it nighttime", "remove background objects"
                </p>
              </div>
              <div>
                <h2 className="font-medium text-[16px] uppercase mb-4" style={{ color: '#F0440F' }}>
                  BE SPATIALLY SPECIFIC
                </h2>
                <p className="text-white text-[14px]" style={{ lineHeight: '1.6' }}>
                  Use directions: "Place potted plant on table in left foreground"
                </p>
              </div>
              <div>
                <h2 className="font-medium text-[16px] uppercase mb-4" style={{ color: '#F0440F' }}>
                  MAINTAIN CONSISTENCY
                </h2>
                <p className="text-white text-[14px]" style={{ lineHeight: '1.6' }}>
                  Consider overall scene: "add brown leather sofa matching room's vintage style"
                </p>
              </div>
              <div>
                <h2 className="font-medium text-[16px] uppercase mb-4" style={{ color: '#F0440F' }}>
                  ONE CHANGE AT A TIME
                </h2>
                <p className="text-white text-[14px]" style={{ lineHeight: '1.6' }}>
                  For big edits, work stepwise. First "add dog", then "change to dusk lighting"
                </p>
              </div>
            </div>

            <div className="mb-8">
              <h2 className="font-medium text-[16px] uppercase mb-4" style={{ color: '#F0440F' }}>
                EXAMPLE OUTPUT:
              </h2>
              <p className="text-white text-[14px]" style={{ lineHeight: '1.6' }}>
                "A sleek vape pen is centered on a frosted glass pedestal in a minimalist studio, lit by soft ambient glow, captured top-down with a 50mm macro lens. Presented in editorial style. Colors: #000000 and #F5C044. --aspect 4:5"
              </p>
            </div>
            
            <div className="space-y-6">
              <div>
                <h3 className="font-medium text-[16px] uppercase mb-2" style={{ color: '#F0440F' }}>ADDING OBJECTS:</h3>
                <p className="text-white text-[14px]" style={{ lineHeight: '1.6' }}>
                  "Add a second sofa matching the existing one on the opposite side of the coffee table."
                </p>
              </div>
              
              <div>
                <h3 className="font-medium text-[16px] uppercase mb-2" style={{ color: '#F0440F' }}>CHANGING TIME/MOOD:</h3>
                <p className="text-white text-[14px]" style={{ lineHeight: '1.6' }}>
                  "Make it look like evening, with a sunset sky. Add string lights hanging between the trees to create a cozy atmosphere."
                </p>
              </div>
              
              <div>
                <h3 className="font-medium text-[16px] uppercase mb-2" style={{ color: '#F0440F' }}>BACKGROUND CHANGES:</h3>
                <p className="text-white text-[14px]" style={{ lineHeight: '1.6' }}>
                  "Place the sneaker onto a running track background instead of the studio background, and add motion blur to imply movement."
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* TIPS, BEST PRACTICES & WARNINGS */}
        <section className="bg-black rounded-3xl p-1">
          <div className="p-6">
            <h1 className="font-bold text-white text-[28px] uppercase tracking-tight mb-8">
              TIPS, BEST PRACTICES & WARNINGS
            </h1>
            
            <h2 className="font-bold text-white text-[20px] uppercase mb-4">ITERATE AND EVOLVE</h2>
            <p className="text-white text-[14px] mb-8" style={{ lineHeight: '1.6' }}>
              Great images may not come out on the first try. Use the Remix feature to refine. Treat each generation as a prototype – even professional artists make many sketches!
            </p>
            
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mb-8">
              <div>
                <h2 className="font-medium text-[16px] uppercase mb-4" style={{ color: '#F0440F' }}>
                  ASK FOR IMPROVEMENTS
                </h2>
                <p className="text-white text-[14px]" style={{ lineHeight: '1.6' }}>
                  "How can I make this prompt more detailed?"
                </p>
              </div>
              
              <div>
                <h2 className="font-medium text-[16px] uppercase mb-4" style={{ color: '#F0440F' }}>
                  REQUEST VARIATIONS
                </h2>
                <p className="text-white text-[14px]" style={{ lineHeight: '1.6' }}>
                  "Give me five variations of this idea"
                </p>
              </div>
              
              <div>
                <h2 className="font-medium text-[16px] uppercase mb-4" style={{ color: '#F0440F' }}>
                  USE CHAT CONTEXT
                </h2>
                <p className="text-white text-[14px]" style={{ lineHeight: '1.6' }}>
                  Describe conversationally, then ask for prompt
                </p>
              </div>
              
              <div>
                <h2 className="font-medium text-[16px] uppercase mb-4" style={{ color: '#F0440F' }}>
                  COMMUNITY LEARNING
                </h2>
                <p className="text-white text-[14px]" style={{ lineHeight: '1.6' }}>
                  Study prompts from galleries
                </p>
              </div>
              
              <div>
                <h2 className="font-medium text-[16px] uppercase mb-4" style={{ color: '#F0440F' }}>
                  AVOID AMBIGUITY
                </h2>
                <p className="text-white text-[14px]" style={{ lineHeight: '1.6' }}>
                  "black Jaguar car" not just "Jaguar"
                </p>
              </div>
              
              <div>
                <h2 className="font-medium text-[16px] uppercase mb-4" style={{ color: '#F0440F' }}>
                  TEST IN PARTS
                </h2>
                <p className="text-white text-[14px]" style={{ lineHeight: '1.6' }}>
                  Try "mid-century modern living room" alone first
                </p>
              </div>
              
              <div>
                <h2 className="font-medium text-[16px] uppercase mb-4" style={{ color: '#F0440F' }}>
                  USE STRUCTURE
                </h2>
                <p className="text-white text-[14px]" style={{ lineHeight: '1.6' }}>
                  "Scene: market. Subject: merchant. Action: arranging spices"
                </p>
              </div>
            </div>

            <div className="bg-green-900 p-6 rounded-lg">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                <div>
                  <h3 className="font-bold text-green-300 mb-4 uppercase text-[16px]">SOLUTIONS:</h3>
                  <ul className="text-white text-[14px] space-y-2" style={{ lineHeight: '1.6' }}>
                    <li>• Resolve conflicts by clarifying</li>
                    <li>• Break into one scene at a time</li>
                    <li>• Use simpler descriptions</li>
                    <li>• Use variations and re-run prompts</li>
                  </ul>
                </div>
                <div>
                  <h3 className="font-bold text-green-300 mb-4 uppercase text-[16px]">WHEN THINGS GO WRONG:</h3>
                  <ul className="text-white text-[14px] space-y-2" style={{ lineHeight: '1.6' }}>
                    <li>• Conflicting elements in prompt</li>
                    <li>• Prompt too long or story-like</li>
                    <li>• AI doesn't know obscure terms</li>
                    <li>• Objects look distorted</li>
                  </ul>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* CTA */}
        <div className="text-center">
          <button 
            className="bg-black rounded-lg font-bold px-8 py-4 text-[16px] transition-colors hover:bg-gray-900"
            style={{ color: '#F0440F' }}
          >
            START CREATING NOW
          </button>
        </div>
        
      </main>
    </div>
  );
}
