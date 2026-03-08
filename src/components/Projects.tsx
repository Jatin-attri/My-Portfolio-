import { motion } from "motion/react";
import { ExternalLink, Code2, Sparkles } from "lucide-react";

export default function Projects({ data }: { data: any[] }) {
  const accents = [
    "from-cyan-500/25 via-sky-500/10 to-transparent",
    "from-emerald-500/25 via-teal-500/10 to-transparent",
    "from-blue-500/25 via-cyan-500/10 to-transparent",
    "from-amber-500/25 via-orange-500/10 to-transparent",
  ];

  return (
    <section id="projects" className="scroll-mt-32">
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, margin: "-100px" }}
        className="space-y-8"
      >
        <div className="flex items-center gap-4">
          <h2 className="text-3xl font-bold text-white">Projects</h2>
          <div className="h-px flex-1 section-line" />
          <div className="hidden md:inline-flex items-center gap-1.5 rounded-full border border-cyan-300/30 bg-cyan-400/10 px-3 py-1 text-xs font-semibold text-cyan-200">
            <Sparkles size={13} className="text-cyan-300" />
            Featured Work
          </div>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
          {data.map((project, index) => {
            const accent = accents[index % accents.length];
            return (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 28, scale: 0.98 }}
              whileInView={{ opacity: 1, y: 0, scale: 1 }}
              viewport={{ once: true, margin: "-80px" }}
              transition={{
                delay: index * 0.08,
                duration: 0.45,
                ease: "easeOut",
              }}
              whileHover={{ y: -9, scale: 1.02 }}
              className="group relative flex flex-col p-6 rounded-2xl glass-card hover:border-cyan-300/35 hover:shadow-[0_18px_40px_-20px_rgba(34,211,238,0.42)] transition-all duration-300 overflow-hidden"
            >
              <div
                className={`absolute -top-12 -right-8 h-28 w-28 rounded-full bg-gradient-to-br ${accent} blur-2xl opacity-75 group-hover:opacity-100 transition-opacity duration-500`}
              />
              <motion.div
                aria-hidden
                initial={{ x: "-120%" }}
                whileHover={{ x: "140%" }}
                transition={{ duration: 0.8, ease: "easeInOut" }}
                className="absolute inset-y-0 w-20 -skew-x-12 bg-gradient-to-r from-transparent via-white/10 to-transparent"
              />

              <div className="flex items-center justify-between mb-4">
                <motion.div
                  whileHover={{ rotate: -6, scale: 1.08 }}
                  className="p-2.5 rounded-xl bg-cyan-500/15 border border-cyan-300/30 text-cyan-200"
                >
                  <Code2 size={20} />
                </motion.div>
                {project.links && project.links.length > 0 && (
                  <a
                    href={project.links[0].url}
                    target="_blank"
                    rel="noreferrer"
                    className="relative z-10 inline-flex items-center gap-1.5 text-xs font-semibold px-3 py-1.5 rounded-lg border border-white/10 bg-white/[0.04] text-slate-300 hover:text-white hover:border-cyan-300/40 hover:bg-cyan-500/10 transition-all"
                  >
                    Live
                    <ExternalLink size={20} />
                  </a>
                )}
              </div>

              <h3 className="relative z-10 text-xl font-semibold text-white mb-3 leading-tight">
                {project.title}
              </h3>

              <div className="relative z-10 space-y-2 mb-6 flex-1">
                {project.bullets.map((bullet: string, i: number) => (
                  <div key={i} className="flex items-start gap-2.5">
                    <span className="mt-2 h-1.5 w-1.5 rounded-full bg-cyan-300/75 shrink-0" />
                    <p className="text-sm text-slate-300/90 leading-relaxed">
                      {bullet}
                    </p>
                  </div>
                ))}
              </div>

              <div className="relative z-10 flex flex-wrap gap-2 mt-auto">
                {project.stack.map((tech: string, i: number) => (
                  <motion.span
                    key={i}
                    whileHover={{ scale: 1.06, y: -2 }}
                    className="px-2.5 py-1 text-xs font-semibold rounded-md bg-white/5 text-slate-200 border border-white/10 hover:bg-cyan-500/20 hover:border-cyan-300/50 hover:text-white hover:shadow-[0_0_12px_rgba(34,211,238,0.35)] transition-all duration-300 cursor-default"
                  >
                    {tech}
                  </motion.span>
                ))}
              </div>
            </motion.div>
          );
          })}
        </div>
      </motion.div>
    </section>
  );
}
