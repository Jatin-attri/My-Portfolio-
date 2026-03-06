import { motion } from "motion/react";
import { GraduationCap, Award } from "lucide-react";

export default function Education({
  education,
  certifications,
}: {
  education: any[];
  certifications: any[];
}) {
  return (
    <section id="education" className="scroll-mt-32">
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, margin: "-100px" }}
        className="space-y-12"
      >
        <div className="space-y-8">
          <div className="flex items-center gap-4">
            <h2 className="text-3xl font-bold text-white">Education</h2>
            <div className="h-px flex-1 bg-gradient-to-r from-white/10 to-transparent" />
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {education.map((edu, index) => (
              <motion.div
                key={index}
                whileHover={{ y: -5, scale: 1.02 }}
                className="p-6 rounded-2xl bg-white/[0.02] border border-white/5 hover:border-indigo-500/30 hover:shadow-[0_0_30px_rgba(99,102,241,0.15)] transition-all duration-300"
              >
                <div className="w-10 h-10 rounded-full bg-indigo-500/20 flex items-center justify-center text-indigo-400 mb-4">
                  <GraduationCap size={20} />
                </div>
                <h3 className="text-lg font-semibold text-white mb-1">
                  {edu.degree}
                </h3>
                <div className="text-slate-400 text-sm mb-3">
                  {edu.institution}
                </div>
                <div className="text-xs font-medium text-slate-500 uppercase tracking-wider">
                  {edu.dates}
                </div>
              </motion.div>
            ))}
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
                whileHover={{ scale: 1.05, y: -2 }}
                className="flex items-center gap-3 px-5 py-3 rounded-xl bg-white/5 border border-white/10 hover:border-indigo-500/30 hover:bg-indigo-500/10 hover:shadow-[0_0_20px_rgba(99,102,241,0.15)] transition-all duration-300"
              >
                <Award size={18} className="text-indigo-400" />
                <span className="text-sm font-medium text-slate-200">
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
