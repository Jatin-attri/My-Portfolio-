import { motion } from "motion/react";
import { ArrowDown, Download, Mail, MapPin } from "lucide-react";

export default function Hero({ data, extra }: { data: any; extra: string[] }) {
  return (
    <section
      className="min-h-[90vh] flex flex-col justify-center pt-20"
      id="hero"
    >
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6, delay: 0.2 }}
        className="space-y-6"
      >
        <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-indigo-500/10 border border-indigo-500/20 text-indigo-300 text-sm font-medium">
          <span className="w-2 h-2 rounded-full bg-indigo-400 animate-pulse" />
          Available for opportunities
        </div>

        <h1 className="text-5xl md:text-7xl font-bold tracking-tight text-transparent bg-clip-text bg-gradient-to-r from-white via-indigo-200 to-indigo-400 leading-tight pb-2">
          {data.name}
        </h1>

        <h2 className="text-xl md:text-2xl text-slate-400 max-w-3xl leading-relaxed">
          {data.title}
        </h2>

        <p className="text-lg text-slate-500 max-w-2xl leading-relaxed">
          {data.summary}
        </p>

        <div className="flex flex-col sm:flex-row gap-4 pt-4">
          <motion.a
            href="#experience"
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            className="inline-flex items-center justify-center gap-2 px-6 py-3 bg-white text-slate-900 font-medium rounded-full hover:bg-slate-200 transition-colors shadow-[0_0_20px_rgba(255,255,255,0.3)] hover:shadow-[0_0_30px_rgba(255,255,255,0.5)]"
          >
            View Experience
            <ArrowDown size={18} />
          </motion.a>
          <motion.a
            href="/Jatin_resume.pdf"
            download="Jatin_resume.pdf"
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            className="inline-flex items-center justify-center gap-2 px-6 py-3 bg-white/5 text-white font-medium rounded-full border border-white/10 hover:bg-white/10 transition-colors hover:border-white/30"
          >
            Download Resume
            <Download size={18} />
          </motion.a>
        </div>

        <div className="flex flex-wrap items-center gap-6 pt-8 text-sm text-slate-500">
          <div className="flex items-center gap-2">
            <MapPin size={16} />
            {data.location}
          </div>
          <div className="flex items-center gap-2">
            <Mail size={16} />
            {data.email}
          </div>
          {data.links.map((link: any) => (
            <a
              key={link.name}
              href={link.url}
              target="_blank"
              rel="noreferrer"
              className="hover:text-indigo-400 transition-colors"
            >
              {link.name}
            </a>
          ))}
        </div>

        <div className="pt-12 grid grid-cols-1 md:grid-cols-2 gap-4 max-w-4xl">
          {extra.map((item, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.4 + i * 0.1 }}
              whileHover={{ scale: 1.02, backgroundColor: "rgba(255,255,255,0.08)" }}
              className="p-4 rounded-2xl bg-white/5 border border-white/5 text-sm text-slate-400 transition-colors"
            >
              {item}
            </motion.div>
          ))}
        </div>
      </motion.div>
    </section>
  );
}
