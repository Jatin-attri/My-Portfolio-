import { useState } from "react";
import { motion } from "motion/react";
import { ArrowDown, Download, Mail, MapPin } from "lucide-react";

export default function Hero({ data, extra }: { data: any; extra: string[] }) {
  const nameWords = String(data.name || "").split(" ");
  const [imageError, setImageError] = useState(false);

  return (
    <section
      className="min-h-[90vh] flex flex-col justify-center pt-20"
      id="hero"
    >
      <div className="grid items-center gap-12 lg:grid-cols-[1fr_auto]">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.2 }}
          className="space-y-6"
        >
          <div className="space-y-4">
            <div className="inline-flex w-fit items-center gap-2 px-3.5 py-1.5 rounded-full bg-cyan-400/10 border border-cyan-300/25 text-cyan-200 text-sm font-semibold">
              <span className="w-2 h-2 rounded-full bg-cyan-300 animate-pulse" />
              Available for opportunities
            </div>

            <motion.h1
              initial="hidden"
              animate="show"
              whileHover="hover"
              className="relative block w-fit overflow-hidden text-5xl md:text-7xl font-extrabold tracking-tight text-transparent bg-clip-text bg-gradient-to-r from-white via-sky-100 to-cyan-300 leading-tight pb-2"
            >
              <motion.span
                aria-hidden
                className="pointer-events-none absolute inset-y-0 -left-10 w-16 -skew-x-12 bg-gradient-to-r from-transparent via-white/25 to-transparent"
                variants={{
                  hidden: { opacity: 0, x: "-120%" },
                  show: { opacity: 0, x: "-120%" },
                  hover: {
                    opacity: [0, 1, 0],
                    x: "200%",
                    transition: { duration: 0.9, ease: "easeInOut" },
                  },
                }}
              />

              {nameWords.map((word: string, wordIndex: number) => (
                <span
                  key={`${word}-${wordIndex}`}
                  className={`inline-block ${
                    wordIndex < nameWords.length - 1 ? "mr-[0.35em]" : ""
                  }`}
                >
                  {word.split("").map((char: string, charIndex: number) => (
                    <motion.span
                      key={`${char}-${charIndex}`}
                      variants={{
                        hidden: { opacity: 0, y: 40, rotateX: -65 },
                        show: {
                          opacity: 1,
                          y: 0,
                          rotateX: 0,
                          transition: {
                            delay: 0.28 + (wordIndex * 0.12 + charIndex * 0.03),
                            duration: 0.5,
                            ease: "easeOut",
                          },
                        },
                        hover: {
                          y: [0, -3, 0],
                          transition: { duration: 0.35, ease: "easeInOut" },
                        },
                      }}
                      className="inline-block"
                    >
                      {char}
                    </motion.span>
                  ))}
                </span>
              ))}
            </motion.h1>
          </div>

          <h2 className="text-xl md:text-2xl text-slate-300 max-w-3xl leading-relaxed">
            {data.title}
          </h2>

          <p className="text-lg text-slate-400 max-w-2xl leading-relaxed">
            {data.summary}
          </p>

          <div className="flex flex-col sm:flex-row gap-4 pt-4">
            <motion.a
              href="#experience"
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              className="inline-flex items-center justify-center gap-2 px-6 py-3 bg-gradient-to-r from-cyan-400 to-sky-400 text-slate-950 font-semibold rounded-full shadow-[0_0_25px_rgba(56,189,248,0.35)] hover:shadow-[0_0_32px_rgba(34,211,238,0.45)] transition-all"
            >
              View Experience
              <ArrowDown size={18} />
            </motion.a>
            <motion.a
              href="/Jatin_resume.pdf"
              download="Jatin_resume.pdf"
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              className="inline-flex items-center justify-center gap-2 px-6 py-3 bg-white/[0.04] text-white font-semibold rounded-full border border-slate-300/20 hover:bg-white/[0.08] transition-colors hover:border-cyan-300/35"
            >
              Download Resume
              <Download size={18} />
            </motion.a>
          </div>

          <div className="flex flex-wrap items-center gap-6 pt-8 text-sm text-slate-400">
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
                className="hover:text-cyan-300 transition-colors"
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
                className="glass-card p-4 rounded-2xl text-sm text-slate-300 transition-colors"
              >
                {item}
              </motion.div>
            ))}
          </div>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, scale: 0.9, x: 20 }}
          animate={{ opacity: 1, scale: 1, x: 0 }}
          transition={{ duration: 0.7, delay: 0.35 }}
          className="relative mx-auto"
        >
          <div className="relative h-64 w-64 sm:h-72 sm:w-72">
            <motion.span
              aria-hidden
              className="absolute inset-[-14px] rounded-full border border-cyan-300/35"
              animate={{ rotate: 360 }}
              transition={{ repeat: Infinity, duration: 18, ease: "linear" }}
            />
            <motion.span
              aria-hidden
              className="absolute inset-[-24px] rounded-full border border-sky-300/20 border-dashed"
              animate={{ rotate: -360 }}
              transition={{ repeat: Infinity, duration: 24, ease: "linear" }}
            />
            <motion.div
              whileHover={{ scale: 1.03 }}
              transition={{ duration: 0.3, ease: "easeInOut" }}
              className="absolute inset-0 rounded-full p-[6px] bg-gradient-to-br from-cyan-300 via-sky-300 to-blue-400 shadow-[0_0_40px_rgba(56,189,248,0.35)]"
            >
              <div className="h-full w-full overflow-hidden rounded-full border border-white/30 bg-slate-900">
                {imageError ? (
                  <div className="h-full w-full flex items-center justify-center text-sm font-semibold text-cyan-200">
                    Add /public/profile.jpg
                  </div>
                ) : (
                  <img
                    src="/profile.jpg"
                    alt={`${data.name} profile`}
                    className="h-full w-full object-cover"
                    onError={() => setImageError(true)}
                  />
                )}
              </div>
            </motion.div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
