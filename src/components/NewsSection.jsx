import { useEffect, useState } from "react";
import { CalendarDays, Clock } from "lucide-react";

const mockNews = [
  {
    id: 1,
    title: "Penerimaan Mahasiswa Baru 2025 Resmi Dibuka",
    summary:
      "Segera daftarkan dirimu pada gelombang pertama untuk mendapatkan beasiswa hingga 100%.",
    date: "2025-01-12",
    time: "09:00",
    image:
      "https://images.unsplash.com/photo-1503676260728-1c00da094a0b?q=80&w=1600&auto=format&fit=crop",
  },
  {
    id: 2,
    title: "Inovasi Riset: Tim Kampus Menang Kompetisi Nasional",
    summary:
      "Tim robotik kampus meraih juara 1 pada ajang nasional berkat inovasi AI ramah lingkungan.",
    date: "2025-02-03",
    time: "14:30",
    image:
      "https://images.unsplash.com/photo-1555255707-c07966088b7b?q=80&w=1600&auto=format&fit=crop",
  },
  {
    id: 3,
    title: "Kolaborasi Internasional dengan 10 Universitas Dunia",
    summary:
      "Program pertukaran pelajar dibuka untuk semua fakultas mulai semester depan.",
    date: "2025-02-20",
    time: "10:15",
    image:
      "https://images.unsplash.com/photo-1523580846011-d3a5bc25702b?q=80&w=1600&auto=format&fit=crop",
  },
];

export default function NewsSection() {
  const [news, setNews] = useState([]);

  useEffect(() => {
    // In real app, fetch from backend. For now using mock data.
    setNews(mockNews);
  }, []);

  return (
    <section id="berita" className="py-20 bg-gradient-to-b from-white to-indigo-50/40">
      <div className="max-w-7xl mx-auto px-6">
        <div className="flex items-end justify-between gap-4 mb-10">
          <div>
            <h2 className="text-3xl md:text-4xl font-bold text-slate-900">
              Berita Terbaru
            </h2>
            <p className="text-slate-600 mt-2">
              Update kegiatan kampus, prestasi mahasiswa, dan pengumuman penting.
            </p>
          </div>
          <a
            href="#"
            className="text-indigo-600 font-medium hover:text-indigo-700"
            aria-label="Lihat semua berita"
          >
            Lihat semua
          </a>
        </div>

        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {news.map((item) => (
            <article
              key={item.id}
              className="group rounded-2xl overflow-hidden bg-white border border-black/5 shadow-sm hover:shadow-md transition-shadow"
            >
              <div className="aspect-[16/10] overflow-hidden">
                <img
                  src={item.image}
                  alt={item.title}
                  className="h-full w-full object-cover group-hover:scale-105 transition-transform duration-500"
                  loading="lazy"
                />
              </div>
              <div className="p-5">
                <h3 className="text-lg font-semibold text-slate-900 line-clamp-2">
                  {item.title}
                </h3>
                <p className="mt-2 text-slate-600 line-clamp-3">{item.summary}</p>
                <div className="mt-4 flex items-center gap-4 text-xs text-slate-500">
                  <span className="inline-flex items-center gap-1">
                    <CalendarDays size={14} /> {item.date}
                  </span>
                  <span className="inline-flex items-center gap-1">
                    <Clock size={14} /> {item.time}
                  </span>
                </div>
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}
