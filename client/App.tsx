import { BrowserRouter, Routes, Route } from "react-router-dom";
import Index from "./pages/Index";
import NotFound from "./pages/NotFound";
import Playbook from "./pages/Playbook";
import { Header } from "./components/Header";

function PlaceholderPage({ title }: { title: string }) {
  return (
    <div className="min-h-screen bg-brand-red">
      <Header />
      <main className="max-w-7xl mx-auto px-4 py-16">
        <div className="text-center">
          <h1 className="text-4xl md:text-6xl font-bold text-brand-cream mb-6 drop-shadow-lg">
            {title}
          </h1>
          <div className="bg-brand-black/30 backdrop-blur-sm rounded-xl p-8 max-w-md mx-auto">
            <p className="text-white/80 text-lg mb-4">
              This section is coming soon!
            </p>
            <p className="text-white/60 text-sm">
              Continue prompting to add content to this page.
            </p>
          </div>
        </div>
      </main>
    </div>
  );
}

export default function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Index />} />
        <Route path="/product-studio" element={<PlaceholderPage title="Product Studio" />} />
        <Route path="/lifestyle-studio" element={<PlaceholderPage title="Lifestyle Studio" />} />
        <Route path="/graphic-studio" element={<PlaceholderPage title="Graphic Studio" />} />
        <Route path="/playbook" element={<PlaceholderPage title="The Playbook" />} />
        <Route path="/templates" element={<PlaceholderPage title="Templates" />} />
        <Route path="*" element={<NotFound />} />
      </Routes>
    </BrowserRouter>
  );
}
