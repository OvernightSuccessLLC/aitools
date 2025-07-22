import { Header } from "../components/Header";

export default function Playbook() {
  return (
    <div className="min-h-screen font-inter" style={{ backgroundColor: '#F0440F' }}>
      <Header />

      <main className="max-w-[1200px] mx-auto px-4 md:px-6 lg:px-8 py-16">
        
        {/* Section 1: Basics of Prompting */}
        <section className="bg-black rounded-3xl p-1 mb-16">
          <div className="p-6">
            <h2 className="font-bold text-white text-[28px] uppercase tracking-tight leading-tight mb-6">
              BASICS OF PROMPTING
            </h2>
            
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              <div>
                <h3 className="font-medium uppercase text-[16px] mb-4" style={{ color: '#F0440F' }}>
                  BE SPECIFIC & CLEAR
                </h3>
                <p className="text-white text-[14px] leading-relaxed mb-4" style={{ lineHeight: '1.6' }}>
                  Provide concrete details about the subject and scene. "A young woman in a red coat walking through a snowy forest" beats "a person in a city"
                </p>
                <p className="text-white text-[14px] leading-relaxed" style={{ lineHeight: '1.6' }}>
                  Always include who/what, where, and distinctive features
                </p>
              </div>
              
              <div>
                <h3 className="font-medium uppercase text-[16px] mb-4" style={{ color: '#F0440F' }}>
                  MENTION STYLE/MOOD
                </h3>
                <p className="text-white text-[14px] leading-relaxed mb-4" style={{ lineHeight: '1.6' }}>
                  Let the AI know if you want a photo, painting, 3D render, etc. For photorealistic: "photorealistic, 4K detail, ultra-realistic"
                </p>
                <p className="text-white text-[14px] leading-relaxed" style={{ lineHeight: '1.6' }}>
                  "Shot in natural, casual style" or "Pixar animation style"
                </p>
              </div>
              
              <div>
                <h3 className="font-medium uppercase text-[16px] mb-4" style={{ color: '#F0440F' }}>
                  USE NATURAL LANGUAGE
                </h3>
                <p className="text-white text-[14px] leading-relaxed mb-4" style={{ lineHeight: '1.6' }}>
                  Write as if describing to a person. "A clear photo of a golden retriever puppy playing in a green field at sunset."
                </p>
                <p className="text-white text-[14px] leading-relaxed" style={{ lineHeight: '1.6' }}>
                  No code or special syntax needed
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* Section 2: Prompt Structure Formula */}
        <section className="bg-black rounded-3xl p-1 mb-16">
          <div className="p-6">
            <h2 className="font-bold text-white text-[28px] uppercase tracking-tight leading-tight mb-6">
              PROMPT STRUCTURE FORMULA
            </h2>
            
            <div className="text-center mb-8">
              <p className="text-white text-[18px] leading-relaxed" style={{ lineHeight: '1.6' }}>
                [Subject] + [Pose] + [Setting] + [Lighting] + [Camera Details] + [Style] + [Quality]
              </p>
            </div>
            
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              <div>
                <h3 className="font-medium uppercase text-[16px] mb-4" style={{ color: '#F0440F' }}>
                  SUBJECT DESCRIPTION
                </h3>
                <p className="text-white text-[14px] leading-relaxed mb-4" style={{ lineHeight: '1.6' }}>
                  Who or what is the focus. Be specific with colors, size, distinctive features.
                </p>
                <p className="text-white text-[14px] leading-relaxed" style={{ lineHeight: '1.6' }}>
                  Example: "majestic white Siberian tiger with electric blue eyes"
                </p>
              </div>
              
              <div>
                <h3 className="font-medium uppercase text-[16px] mb-4" style={{ color: '#F0440F' }}>
                  ACTION/POSE
                </h3>
                <p className="text-white text-[14px] leading-relaxed mb-4" style={{ lineHeight: '1.6' }}>
                  What the subject is doing or how positioned. Adds dynamism to the image.
                </p>
                <p className="text-white text-[14px] leading-relaxed" style={{ lineHeight: '1.6' }}>
                  Example: "leaping across a ravine" or "sitting cross-legged reading"
                </p>
              </div>
              
              <div>
                <h3 className="font-medium uppercase text-[16px] mb-4" style={{ color: '#F0440F' }}>
                  ENVIRONMENT/SETTING
                </h3>
                <p className="text-white text-[14px] leading-relaxed mb-4" style={{ lineHeight: '1.6' }}>
                  Surroundings or background providing context and mood.
                </p>
                <p className="text-white text-[14px] leading-relaxed" style={{ lineHeight: '1.6' }}>
                  Example: "misty bamboo forest at dawn" or "studio backdrop"
                </p>
              </div>
              
              <div>
                <h3 className="font-medium uppercase text-[16px] mb-4" style={{ color: '#F0440F' }}>
                  LIGHTING
                </h3>
                <p className="text-white text-[14px] leading-relaxed mb-4" style={{ lineHeight: '1.6' }}>
                  One of the most powerful mood setters. Quality and direction of light.
                </p>
                <ul className="text-white text-[14px] leading-relaxed space-y-2" style={{ lineHeight: '1.6' }}>
                  <li>• Soft diffused light</li>
                  <li>• Golden hour sunlight</li>
                  <li>• Neon glow</li>
                  <li>• Candlelight</li>
                </ul>
              </div>
              
              <div>
                <h3 className="font-medium uppercase text-[16px] mb-4" style={{ color: '#F0440F' }}>
                  CAMERA DETAILS
                </h3>
                <p className="text-white text-[14px] leading-relaxed mb-4" style={{ lineHeight: '1.6' }}>
                  Perspective, lens effects, composition terms.
                </p>
                <ul className="text-white text-[14px] leading-relaxed space-y-2" style={{ lineHeight: '1.6' }}>
                  <li>• Close-up shots</li>
                  <li>• Medium shots</li>
                  <li>• Wide shots</li>
                  <li>• Eye-level perspective</li>
                </ul>
              </div>
              
              <div>
                <h3 className="font-medium uppercase text-[16px] mb-4" style={{ color: '#F0440F' }}>
                  STYLE/MOOD
                </h3>
                <p className="text-white text-[14px] leading-relaxed mb-4" style={{ lineHeight: '1.6' }}>
                  Artistic style, genre, overall vibe.
                </p>
                <p className="text-white text-[14px] leading-relaxed" style={{ lineHeight: '1.6' }}>
                  "in the style of Studio Ghibli" or "cinematic look"
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* Section 3: Progression Examples */}
        <section className="bg-black rounded-3xl p-1 mb-16">
          <div className="p-6">
            <h2 className="font-bold text-white text-[28px] uppercase tracking-tight leading-tight mb-6">
              PROGRESSION EXAMPLES
            </h2>
            
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              <div>
                <h3 className="font-medium uppercase text-[16px] mb-4" style={{ color: '#F0440F' }}>
                  BEGINNER
                </h3>
                <p className="text-white text-[14px] leading-relaxed mb-4" style={{ lineHeight: '1.6' }}>
                  "Photo of a cat sitting on a windowsill."
                </p>
                <p className="text-white text-[14px] leading-relaxed opacity-70" style={{ lineHeight: '1.6' }}>
                  Simple prompt specifying subject and basic setting.
                </p>
              </div>
              
              <div>
                <h3 className="font-medium uppercase text-[16px] mb-4" style={{ color: '#F0440F' }}>
                  ADVANCED
                </h3>
                <p className="text-white text-[14px] leading-relaxed mb-4" style={{ lineHeight: '1.6' }}>
                  "A tabby cat lounging on a sunny windowsill with soft morning light filtering through lace curtains, looking outside at birds."
                </p>
                <p className="text-white text-[14px] leading-relaxed opacity-70" style={{ lineHeight: '1.6' }}>
                  Added specifics: cat type, time of day, lighting quality, implied action.
                </p>
              </div>
            </div>
            
            <div className="mt-8">
              <h3 className="font-medium uppercase text-[16px] mb-4" style={{ color: '#F0440F', fontFamily: 'Inter, sans-serif' }}>
                EXPERT
              </h3>
              <p className="text-white text-[14px] leading-relaxed mb-4" style={{ fontFamily: 'Inter, sans-serif', lineHeight: '1.6' }}>
                "Candid pet photography, close-up shot of a green-eyed tabby cat lounging on a sunlit Victorian bay window, rays of golden morning light patterning its fur through ornate lace curtains. Shot with shallow depth of field (85mm f/1.8)."
              </p>
              <p className="text-white text-[14px] leading-relaxed opacity-70" style={{ fontFamily: 'Inter, sans-serif', lineHeight: '1.6' }}>
                Includes camera specifics, composition, lighting mood, and style cues.
              </p>
            </div>
          </div>
        </section>

        {/* Section 4: Lifestyle Photography */}
        <section className="bg-black rounded-3xl p-1 mb-16">
          <div className="p-6">
            <h2 className="font-bold text-white text-[28px] uppercase tracking-tight leading-tight mb-6">
              LIFESTYLE PHOTOGRAPHY
            </h2>
            
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              <div>
                <h3 className="font-medium uppercase text-[16px] mb-4" style={{ color: '#F0440F' }}>
                  EVERYDAY SCENARIOS
                </h3>
                <p className="text-white text-[14px] leading-relaxed" style={{ lineHeight: '1.6' }}>
                  Focus on common activities: friends at cafe, family cooking, jogging in park. Goal: slice-of-life feel.
                </p>
              </div>
              
              <div>
                <h3 className="font-medium uppercase text-[16px] mb-4" style={{ color: '#F0440F' }}>
                  NATURAL STYLING
                </h3>
                <p className="text-white text-[14px] leading-relaxed" style={{ lineHeight: '1.6' }}>
                  Use "candid", "unposed", "in the moment" for authenticity. Poses should not feel stiff.
                </p>
              </div>
              
              <div>
                <h3 className="font-medium uppercase text-[16px] mb-4" style={{ color: '#F0440F' }}>
                  ENVIRONMENTAL CONTEXT
                </h3>
                <p className="text-white text-[14px] leading-relaxed" style={{ lineHeight: '1.6' }}>
                  Setting grounds the lifestyle. Add props and background details for realism.
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* Section 5: Product Photography */}
        <section className="bg-black rounded-3xl p-1 mb-16">
          <div className="p-6">
            <h2 className="font-bold text-white text-[28px] uppercase tracking-tight leading-tight mb-6">
              PRODUCT & STUDIO PHOTOGRAPHY
            </h2>
            
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              <div>
                <h3 className="font-medium uppercase text-[16px] mb-4" style={{ color: '#F0440F' }}>
                  ISOLATE THE PRODUCT
                </h3>
                <p className="text-white text-[14px] leading-relaxed" style={{ lineHeight: '1.6' }}>
                  Clean background (white, solid color, gradient), good lighting, product centered.
                </p>
              </div>
              
              <div>
                <h3 className="font-medium uppercase text-[16px] mb-4" style={{ color: '#F0440F' }}>
                  LIGHTING & REFLECTIONS
                </h3>
                <p className="text-white text-[14px] leading-relaxed" style={{ lineHeight: '1.6' }}>
                  Match lighting to material. Shiny objects need softbox lighting for reflections.
                </p>
              </div>
              
              <div>
                <h3 className="font-medium uppercase text-[16px] mb-4" style={{ color: '#F0440F' }}>
                  CAMERA & FOCUS
                </h3>
                <p className="text-white text-[14px] leading-relaxed" style={{ lineHeight: '1.6' }}>
                  Sharp focus, high resolution for detail. Consider angles and perspectives.
                </p>
              </div>
              
              <div>
                <h3 className="font-medium uppercase text-[16px] mb-4" style={{ color: '#F0440F' }}>
                  STYLING & BRANDING
                </h3>
                <p className="text-white text-[14px] leading-relaxed" style={{ lineHeight: '1.6' }}>
                  Incorporate brand aesthetics, colors, modern/minimalist styling.
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* Section 6: Graphics & Design */}
        <section className="bg-black rounded-3xl p-1 mb-16">
          <div className="p-6">
            <h2 className="font-bold text-white text-[28px] uppercase tracking-tight leading-tight mb-6">
              CUSTOM GRAPHICS & DESIGN
            </h2>
            
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              <div>
                <h3 className="font-medium uppercase text-[16px] mb-4" style={{ color: '#F0440F' }}>
                  LOGOS & ICONS
                </h3>
                <ul className="text-white text-[14px] leading-relaxed space-y-3" style={{ lineHeight: '1.6' }}>
                  <li>Keep Simple: "minimalist logo" or "bold emblem-style"</li>
                  <li>Define Elements: "lightning bolt with 'VoltCorp' below"</li>
                  <li>Specify Style: "modern flat design", "vintage retro"</li>
                  <li>Colors: "navy blue and white", hex codes</li>
                </ul>
              </div>
              
              <div>
                <h3 className="font-medium uppercase text-[16px] mb-4" style={{ color: '#F0440F' }}>
                  BANNERS & HEROES
                </h3>
                <ul className="text-white text-[14px] leading-relaxed space-y-3" style={{ lineHeight: '1.6' }}>
                  <li>Composition: "space on right for tagline"</li>
                  <li>Aspect Ratio: "wide banner format", "16:9"</li>
                  <li>Content/Theme: describe what's shown and vibe</li>
                  <li>Style Choice: photographic vs graphic/illustrated</li>
                </ul>
              </div>
            </div>
          </div>
        </section>

        {/* Section 7: Tips & Best Practices */}
        <section className="bg-black rounded-3xl p-1 mb-16">
          <div className="p-6">
            <h2 className="font-bold text-white text-[28px] uppercase tracking-tight leading-tight mb-6">
              TIPS & BEST PRACTICES
            </h2>
            
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              <div>
                <h3 className="font-medium uppercase text-[16px] mb-4" style={{ color: '#F0440F' }}>
                  BE SPECIFIC
                </h3>
                <p className="text-white text-[14px] leading-relaxed" style={{ lineHeight: '1.6' }}>
                  "Red ball on wooden table" not "nice pretty red ball on brown table"
                </p>
              </div>
              
              <div>
                <h3 className="font-medium uppercase text-[16px] mb-4" style={{ color: '#F0440F' }}>
                  AVOID AMBIGUITY
                </h3>
                <p className="text-white text-[14px] leading-relaxed" style={{ lineHeight: '1.6' }}>
                  "Black Jaguar car" not just "Jaguar"
                </p>
              </div>
              
              <div>
                <h3 className="font-medium uppercase text-[16px] mb-4" style={{ color: '#F0440F' }}>
                  TEST IN PARTS
                </h3>
                <p className="text-white text-[14px] leading-relaxed" style={{ lineHeight: '1.6' }}>
                  Try "mid-century modern living room" alone first
                </p>
              </div>
              
              <div>
                <h3 className="font-medium uppercase text-[16px] mb-4" style={{ color: '#F0440F' }}>
                  USE STRUCTURE
                </h3>
                <p className="text-white text-[14px] leading-relaxed" style={{ lineHeight: '1.6' }}>
                  "Scene: market. Subject: merchant. Action: arranging spices"
                </p>
              </div>
              
              <div>
                <h3 className="font-medium uppercase text-[16px] mb-4" style={{ color: '#F0440F' }}>
                  ITERATE & EVOLVE
                </h3>
                <p className="text-white text-[14px] leading-relaxed" style={{ lineHeight: '1.6' }}>
                  Great images may not come out on the first try. Use the Remix feature to refine.
                </p>
              </div>
              
              <div>
                <h3 className="font-medium uppercase text-[16px] mb-4" style={{ color: '#F0440F' }}>
                  ASK FOR HELP
                </h3>
                <p className="text-white text-[14px] leading-relaxed" style={{ lineHeight: '1.6' }}>
                  "How can I make this prompt more detailed?" or "Give me five variations"
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* CTA Section */}
        <div className="text-center">
          <button 
            className="bg-black text-bold rounded-lg font-bold px-8 py-4 text-[16px] transition-colors hover:bg-gray-900"
style={{
              color: '#F0440F'
            }}
          >
            START CREATING NOW
          </button>
        </div>
        
      </main>
    </div>
  );
}
