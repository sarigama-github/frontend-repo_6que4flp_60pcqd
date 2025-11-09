import Spline from "@splinetool/react-spline";
import { motion } from "framer-motion";

export default function Hero() {
  return (
    <section id="home" className="relative min-h-[80vh] grid place-items-center overflow-hidden">
      <div className="absolute inset-0">
        {/* 3D scene background */}
        <Spline
          scene="https://prod.spline.design/DaE6yyY6qjMB-jX3/scene.splinecode"
          style={{ width: "100%", height: "100%" }}
        />
        <div className="pointer-events-none absolute inset-0 from-white/60 via-white/50 to-transparent bg-gradient-to-b" />
      </div>

      <div className="relative z-10 max-w-6xl mx-auto px-6 py-24 text-center">
        <motion.h1
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7 }}
          className="text-4xl md:text-6xl font-extrabold tracking-tight text-slate-900"
        >
          Kampus Modern untuk Generasi Masa Depan
        </motion.h1>
        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.9, delay: 0.1 }}
          className="mt-5 text-lg md:text-xl text-slate-700 max-w-3xl mx-auto"
        >
          Temukan program unggulan, fasilitas lengkap, dan komunitas kreatif yang siap
          menginspirasi perjalanan akademikmu.
        </motion.p>
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.9, delay: 0.2 }}
          className="mt-8 flex items-center justify-center gap-4"
        >
          <a
            href="#daftar"
            className="rounded-xl bg-indigo-600 px-6 py-3 text-white font-semibold shadow-sm hover:bg-indigo-700 active:bg-indigo-800 transition-colors"
          >
            Daftar Sekarang
          </a>
          <a
            href="#berita"
            className="rounded-xl border border-slate-300 px-6 py-3 text-slate-800 font-semibold hover:bg-white/60 transition-colors"
          >
            Lihat Berita
          </a>
        </motion.div>
      </div>
    </section>
  );
}
