import { GraduationCap, Newspaper, Images, Phone } from "lucide-react";

export default function Navbar() {
  return (
    <header className="sticky top-0 z-50 backdrop-blur supports-[backdrop-filter]:bg-white/70 bg-white/60 border-b border-black/5">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16">
          <a href="#home" className="flex items-center gap-2 font-semibold text-slate-800">
            <span className="inline-flex h-9 w-9 items-center justify-center rounded-xl bg-indigo-600 text-white shadow-sm">
              <GraduationCap size={20} />
            </span>
            <span className="text-lg">Kampuz</span>
          </a>

          <nav className="hidden md:flex items-center gap-8 text-sm text-slate-700">
            <a href="#berita" className="inline-flex items-center gap-2 hover:text-indigo-700 transition-colors">
              <Newspaper size={18} /> Berita
            </a>
            <a href="#galeri" className="inline-flex items-center gap-2 hover:text-indigo-700 transition-colors">
              <Images size={18} /> Galeri
            </a>
            <a href="#kontak" className="inline-flex items-center gap-2 hover:text-indigo-700 transition-colors">
              <Phone size={18} /> Kontak
            </a>
          </nav>

          <div className="flex items-center gap-3">
            <a
              href="#daftar"
              className="rounded-xl bg-indigo-600 px-4 py-2 text-white text-sm font-medium shadow-sm hover:bg-indigo-700 active:bg-indigo-800 transition-colors"
            >
              Daftar Sekarang
            </a>
          </div>
        </div>
      </div>
    </header>
  );
}
