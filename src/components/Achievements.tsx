import { motion } from "motion/react";
import { Trophy, Award, Star, Zap } from "lucide-react";

export default function Achievements({ data }: { data: any[] }) {
  const icons = [Trophy, Award, Star, Zap];

  return (
    <section id="achievements" className="scroll-mt-32">
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, margin: "-100px" }}
        className="space-y-8"
      >
        <div className="flex items-center gap-4">
          <h2 className="text-3xl font-bold text-white">Achievements</h2>
          <div className="h-px flex-1 bg-gradient-to-r from-white/10 to-transparent" />
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
          {data.map((achievement, index) => {
            const Icon = icons[index % icons.length];
            return (
              <motion.div
                key={index}
                whileHover={{ y: -5, scale: 1.02 }}
                className="group relative p-6 rounded-2xl bg-gradient-to-b from-white/5 to-transparent border border-white/10 overflow-hidden hover:border-indigo-500/30 hover:shadow-[0_0_30px_rgba(99,102,241,0.15)] transition-all duration-300"
              >
                <div className="absolute top-0 right-0 p-6 opacity-10 group-hover:opacity-20 transition-opacity">
                  <Icon size={64} />
                </div>
                <div className="relative z-10">
                  <div className="w-12 h-12 rounded-full bg-indigo-500/20 flex items-center justify-center text-indigo-400 mb-4">
                    <Icon size={24} />
                  </div>
                  <h3 className="text-lg font-semibold text-white mb-2 leading-snug">
                    {achievement.title}
                  </h3>
                  <p className="text-sm text-slate-400 leading-relaxed">
                    {achievement.context}
                  </p>
                </div>
              </motion.div>
            );
          })}
        </div>
      </motion.div>
    </section>
  );
}
