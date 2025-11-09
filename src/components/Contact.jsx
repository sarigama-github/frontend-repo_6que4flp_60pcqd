import { Mail, Phone, MapPin } from "lucide-react";

export default function Contact() {
  return (
    <section id="kontak" className="py-20 bg-gradient-to-b from-indigo-50/40 to-white">
      <div className="max-w-7xl mx-auto px-6">
        <div className="grid lg:grid-cols-2 gap-10 items-start">
          <div>
            <h2 className="text-3xl md:text-4xl font-bold text-slate-900">
              Hubungi Kami
            </h2>
            <p className="text-slate-600 mt-2">
              Ada pertanyaan tentang program studi, pendaftaran, atau beasiswa? Tim kami siap membantu.
            </p>

            <div className="mt-6 space-y-4 text-slate-700">
              <p className="flex items-center gap-3"><Phone size={18} className="text-indigo-600" /> (021) 1234-5678</p>
              <p className="flex items-center gap-3"><Mail size={18} className="text-indigo-600" /> info@kampuz.ac.id</p>
              <p className="flex items-center gap-3"><MapPin size={18} className="text-indigo-600" /> Jl. Pendidikan No. 1, Jakarta</p>
            </div>
          </div>

          <form className="bg-white rounded-2xl border border-black/5 shadow-sm p-6 grid gap-4">
            <div>
              <label htmlFor="nama" className="block text-sm font-medium text-slate-700">Nama</label>
              <input id="nama" type="text" className="mt-1 w-full rounded-xl border border-slate-300 px-4 py-2.5 focus:outline-none focus:ring-2 focus:ring-indigo-500" placeholder="Nama lengkap" />
            </div>
            <div>
              <label htmlFor="email" className="block text-sm font-medium text-slate-700">Email</label>
              <input id="email" type="email" className="mt-1 w-full rounded-xl border border-slate-300 px-4 py-2.5 focus:outline-none focus:ring-2 focus:ring-indigo-500" placeholder="you@example.com" />
            </div>
            <div>
              <label htmlFor="pesan" className="block text-sm font-medium text-slate-700">Pesan</label>
              <textarea id="pesan" rows="4" className="mt-1 w-full rounded-xl border border-slate-300 px-4 py-2.5 focus:outline-none focus:ring-2 focus:ring-indigo-500" placeholder="Tulis pertanyaanmu di sini..." />
            </div>
            <button type="submit" className="rounded-xl bg-indigo-600 px-5 py-2.5 text-white font-semibold shadow-sm hover:bg-indigo-700 active:bg-indigo-800 transition-colors">Kirim</button>
          </form>
        </div>
      </div>
    </section>
  );
}
