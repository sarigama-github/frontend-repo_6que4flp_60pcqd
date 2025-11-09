import Navbar from "./components/Navbar";
import Hero from "./components/Hero";
import NewsSection from "./components/NewsSection";
import Gallery from "./components/Gallery";
import Contact from "./components/Contact";

function Footer() {
  return (
    <footer className="py-10 text-center text-sm text-slate-500">
      © {new Date().getFullYear()} Kampuz — Semua hak cipta dilindungi.
    </footer>
  );
}

export default function App() {
  return (
    <div className="min-h-screen bg-white text-slate-900">
      <Navbar />
      <main>
        <Hero />
        <NewsSection />
        <Gallery />
        <Contact />
      </main>
      <Footer />
    </div>
  );
}
