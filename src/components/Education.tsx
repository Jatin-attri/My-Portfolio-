import { motion } from "motion/react";
import { GraduationCap, Award, Sparkles } from "lucide-react";

export default function Education({
  education,
  certifications,
}: {
  education: any[];
  certifications: any[];
}) {
  const eduAccents = [
    "from-indigo-500/25 via-blue-500/10 to-transparent",
    "from-cyan-500/25 via-sky-500/10 to-transparent",
    "from-emerald-500/25 via-teal-500/10 to-transparent",
  ];

  return (
    <section id="education" className="scroll-mt-32 relative">
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, margin: "-100px" }}
        className="space-y-12 relative"
      >
        <motion.div
          aria-hidden
          animate={{ x: [0, 8, 0], y: [0, -8, 0] }}
          transition={{ duration: 8, repeat: Infinity, ease: "easeInOut" }}
          className="absolute -top-4 right-10 h-24 w-24 rounded-full bg-indigo-500/10 blur-2xl"
        />

        <div className="space-y-8">
          <div className="flex items-center gap-4">
            <h2 className="text-3xl font-bold text-white">Education</h2>
            <div className="h-px flex-1 bg-gradient-to-r from-white/10 to-transparent" />
            <div className="hidden md:inline-flex items-center gap-1.5 rounded-full border border-white/10 bg-white/[0.04] px-3 py-1 text-xs font-semibold text-slate-300">
              <Sparkles size={13} className="text-indigo-300" />
              Academic Journey
            </div>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {education.map((edu, index) => {
              const accent = eduAccents[index % eduAccents.length];
              return (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 28, scale: 0.98 }}
                whileInView={{ opacity: 1, y: 0, scale: 1 }}
                viewport={{ once: true, margin: "-80px" }}
                transition={{
                  delay: index * 0.09,
                  duration: 0.45,
                  ease: "easeOut",
                }}
                whileHover={{ y: -8, scale: 1.02 }}
                className="group relative p-6 rounded-2xl bg-gradient-to-b from-white/[0.045] to-white/[0.015] border border-white/10 hover:border-indigo-400/35 hover:shadow-[0_18px_40px_-20px_rgba(99,102,241,0.5)] transition-all duration-300 overflow-hidden"
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

                <motion.div
                  whileHover={{ rotate: -6, scale: 1.08 }}
                  className="relative z-10 w-11 h-11 rounded-xl bg-indigo-500/20 border border-indigo-400/25 flex items-center justify-center text-indigo-300 mb-4"
                >
                  <GraduationCap size={20} />
                </motion.div>
                <h3 className="relative z-10 text-lg font-semibold text-white mb-1 leading-snug">
                  {edu.degree}
                </h3>
                <div className="relative z-10 text-slate-300/90 text-sm mb-4 leading-relaxed">
                  {edu.institution}
                </div>
                <div className="relative z-10 inline-flex items-center rounded-full border border-white/10 bg-white/[0.04] px-3 py-1 text-[11px] font-semibold text-slate-300 uppercase tracking-wider">
                  {edu.dates}
                </div>
              </motion.div>
            );
            })}
          </div>
        </div>

        <div className="space-y-8">
          <div className="flex items-center gap-4">
            <h2 className="text-2xl font-bold text-white">Certifications</h2>
            <div className="h-px flex-1 bg-gradient-to-r from-white/10 to-transparent" />
          </div>

          <div className="flex flex-wrap gap-4">
            {certifications.map((cert, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20, scale: 0.98 }}
                whileInView={{ opacity: 1, y: 0, scale: 1 }}
                viewport={{ once: true, margin: "-80px" }}
                transition={{
                  delay: index * 0.04,
                  duration: 0.35,
                  ease: "easeOut",
                }}
                whileHover={{ scale: 1.03, y: -4 }}
                className="group relative flex items-center gap-3 px-5 py-3 rounded-xl bg-gradient-to-r from-white/[0.07] to-white/[0.03] border border-white/10 hover:border-indigo-400/35 hover:bg-indigo-500/10 hover:shadow-[0_0_22px_rgba(99,102,241,0.2)] transition-all duration-300 overflow-hidden"
              >
                <motion.div
                  aria-hidden
                  initial={{ x: "-130%" }}
                  whileHover={{ x: "160%" }}
                  transition={{ duration: 0.75, ease: "easeInOut" }}
                  className="absolute inset-y-0 w-14 -skew-x-12 bg-gradient-to-r from-transparent via-white/10 to-transparent"
                />
                <Award size={18} className="relative z-10 text-indigo-300" />
                <span className="relative z-10 text-sm font-medium text-slate-200">
                  {cert.name}
                </span>
              </motion.div>
            ))}
          </div>
        </div>
      </motion.div>
    </section>
  );
}
