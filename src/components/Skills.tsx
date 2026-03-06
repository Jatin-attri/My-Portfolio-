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
          <div className="h-px flex-1 bg-gradient-to-r from-white/10 to-transparent" />
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {data.map((group, index) => (
            <div key={index} className="space-y-4">
              <h3 className="text-lg font-medium text-slate-300">
                {group.category}
              </h3>
              <div className="flex flex-wrap gap-2">
                {group.items.map((skill: string, i: number) => (
                  <motion.div
                    key={i}
                    whileHover={{ scale: 1.05, y: -2 }}
                    className="px-4 py-2 rounded-full bg-white/5 border border-white/10 text-sm text-slate-200 hover:bg-indigo-500/20 hover:border-indigo-500/50 hover:text-white hover:shadow-[0_0_15px_rgba(99,102,241,0.3)] transition-all duration-300 cursor-default"
                  >
                    {skill}
                  </motion.div>
                ))}
              </div>
            </div>
          ))}
        </div>
      </motion.div>
    </section>
  );
}
