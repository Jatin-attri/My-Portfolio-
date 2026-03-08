import { motion } from "motion/react";

export default function Skills({ data }: { data: any[] }) {
  return (
    <section id="skills" className="scroll-mt-32">
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, margin: "-100px" }}
        className="space-y-8"
      >
        <div className="flex items-center gap-4">
          <h2 className="text-3xl font-bold text-white">Skills</h2>
          <div className="h-px flex-1 section-line" />
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {data.map((group, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 22 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-100px" }}
              transition={{ delay: index * 0.07, duration: 0.35 }}
              className="space-y-4 p-5 rounded-2xl glass-card"
            >
              <h3 className="text-lg font-semibold text-cyan-200">
                {group.category}
              </h3>
              <div className="flex flex-wrap gap-2">
                {group.items.map((skill: string, i: number) => (
                  <motion.div
                    key={i}
                    whileHover={{ scale: 1.05, y: -2 }}
                    className="px-4 py-2 rounded-full bg-slate-900/50 border border-slate-300/20 text-sm text-slate-100 hover:bg-cyan-500/18 hover:border-cyan-300/45 hover:text-white hover:shadow-[0_0_15px_rgba(34,211,238,0.28)] transition-all duration-300 cursor-default"
                  >
                    {skill}
                  </motion.div>
                ))}
              </div>
            </motion.div>
          ))}
        </div>
      </motion.div>
    </section>
  );
}
