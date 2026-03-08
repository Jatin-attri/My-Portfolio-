import { useState } from "react";
import { motion, AnimatePresence } from "motion/react";
import { ChevronDown, MapPin, Calendar } from "lucide-react";

export default function Experience({ data }: { data: any[] }) {
  const [expandedIndex, setExpandedIndex] = useState<number | null>(0);

  return (
    <section id="experience" className="scroll-mt-32">
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, margin: "-100px" }}
        className="space-y-8"
      >
        <div className="flex items-center gap-4">
          <h2 className="text-3xl font-bold text-white">Experience</h2>
          <div className="h-px flex-1 section-line" />
        </div>

        <div className="space-y-4">
          {data.map((job, index) => (
            <motion.div
              key={index}
              whileHover={{ x: 4 }}
              className={`rounded-2xl border transition-all duration-300 overflow-hidden hover:shadow-[0_18px_35px_-20px_rgba(34,211,238,0.45)] hover:border-cyan-300/35 ${
                expandedIndex === index
                  ? "glass-card border-slate-300/25"
                  : "bg-transparent border-slate-300/10 hover:bg-white/[0.03]"
              }`}
            >
              <button
                onClick={() =>
                  setExpandedIndex(expandedIndex === index ? null : index)
                }
                className="w-full text-left px-6 py-6 flex items-start justify-between gap-4"
              >
                <div>
                  <h3 className="text-xl font-semibold text-white">
                    {job.role}
                  </h3>
                  <div className="text-cyan-300 font-semibold mt-1">
                    {job.company}
                  </div>
                  <div className="flex flex-wrap items-center gap-4 mt-3 text-sm text-slate-500">
                    <span className="flex items-center gap-1.5">
                      <Calendar size={14} /> {job.dates}
                    </span>
                    <span className="flex items-center gap-1.5">
                      <MapPin size={14} /> {job.location}
                    </span>
                  </div>
                </div>
                <motion.div
                  animate={{ rotate: expandedIndex === index ? 180 : 0 }}
                  className="p-2 rounded-full bg-white/5 text-slate-300"
                >
                  <ChevronDown size={20} />
                </motion.div>
              </button>

              <AnimatePresence>
                {expandedIndex === index && (
                  <motion.div
                    initial={{ height: 0, opacity: 0 }}
                    animate={{ height: "auto", opacity: 1 }}
                    exit={{ height: 0, opacity: 0 }}
                    className="overflow-hidden"
                  >
                    <div className="px-6 pb-6 pt-2 space-y-3">
                      {job.bullets.map((bullet: string, i: number) => (
                        <div
                          key={i}
                          className="flex items-start gap-3 text-slate-300 text-sm leading-relaxed"
                        >
                          <div className="w-1.5 h-1.5 rounded-full bg-cyan-300/70 mt-2 shrink-0" />
                          <p>{bullet}</p>
                        </div>
                      ))}
                    </div>
                  </motion.div>
                )}
              </AnimatePresence>
            </motion.div>
          ))}
        </div>
      </motion.div>
    </section>
  );
}
