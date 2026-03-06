import { motion } from "motion/react";
import { ExternalLink, Code2 } from "lucide-react";

export default function Projects({ data }: { data: any[] }) {
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
          <div className="h-px flex-1 bg-gradient-to-r from-white/10 to-transparent" />
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
          {data.map((project, index) => (
            <motion.div
              key={index}
              whileHover={{ y: -5, scale: 1.02 }}
              className="flex flex-col p-6 rounded-2xl bg-white/[0.02] border border-white/5 hover:border-indigo-500/30 hover:shadow-[0_0_30px_rgba(99,102,241,0.15)] transition-all duration-300"
            >
              <div className="flex items-center justify-between mb-4">
                <div className="p-2.5 rounded-xl bg-white/5 text-slate-300">
                  <Code2 size={20} />
                </div>
                {project.links && project.links.length > 0 && (
                  <a
                    href={project.links[0].url}
                    target="_blank"
                    rel="noreferrer"
                    className="text-slate-500 hover:text-white transition-colors"
                  >
                    <ExternalLink size={20} />
                  </a>
                )}
              </div>

              <h3 className="text-xl font-semibold text-white mb-3">
                {project.title}
              </h3>

              <div className="space-y-2 mb-6 flex-1">
                {project.bullets.map((bullet: string, i: number) => (
                  <p key={i} className="text-sm text-slate-400 leading-relaxed">
                    {bullet}
                  </p>
                ))}
              </div>

              <div className="flex flex-wrap gap-2 mt-auto">
                {project.stack.map((tech: string, i: number) => (
                  <motion.span
                    key={i}
                    whileHover={{ scale: 1.1, y: -2 }}
                    className="px-2.5 py-1 text-xs font-medium rounded-md bg-white/5 text-slate-300 border border-white/5 hover:bg-indigo-500/20 hover:border-indigo-500/50 hover:text-white hover:shadow-[0_0_10px_rgba(99,102,241,0.3)] transition-all duration-300 cursor-default"
                  >
                    {tech}
                  </motion.span>
                ))}
              </div>
            </motion.div>
          ))}
        </div>
      </motion.div>
    </section>
  );
}
