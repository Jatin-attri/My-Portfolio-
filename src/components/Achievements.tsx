import { motion } from "motion/react";
import { Trophy, Award, Star, Zap } from "lucide-react";

export default function Achievements({ data }: { data: any[] }) {
  const icons = [Trophy, Award, Star, Zap];
  const cardAccent = [
    "from-cyan-500/30 via-sky-500/15 to-transparent",
    "from-emerald-500/30 via-teal-500/15 to-transparent",
    "from-blue-500/30 via-cyan-500/15 to-transparent",
    "from-amber-500/30 via-orange-500/15 to-transparent",
  ];

  return (
    <section id="achievements" className="scroll-mt-32 relative">
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, margin: "-100px" }}
        className="space-y-8 relative"
      >
        <motion.div
          aria-hidden
          animate={{ y: [0, -10, 0], x: [0, 6, 0] }}
          transition={{ duration: 7, repeat: Infinity, ease: "easeInOut" }}
          className="absolute -top-8 left-10 h-20 w-20 rounded-full bg-cyan-500/10 blur-2xl"
        />
        <motion.div
          aria-hidden
          animate={{ y: [0, 12, 0], x: [0, -8, 0] }}
          transition={{ duration: 8, repeat: Infinity, ease: "easeInOut" }}
          className="absolute top-12 right-6 h-24 w-24 rounded-full bg-cyan-500/10 blur-2xl"
        />

        <div className="flex items-center gap-4">
          <h2 className="text-3xl font-bold text-white">Achievements</h2>
          <div className="h-px flex-1 section-line" />
          <motion.div
            whileHover={{ scale: 1.06 }}
            className="hidden md:inline-flex items-center rounded-full border border-cyan-300/35 bg-cyan-400/10 px-3 py-1 text-xs font-semibold tracking-wide text-cyan-200"
          >
            {data.length} Highlights
          </motion.div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
          {data.map((achievement, index) => {
            const Icon = icons[index % icons.length];
            return (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 30, scale: 0.97 }}
                whileInView={{ opacity: 1, y: 0, scale: 1 }}
                viewport={{ once: true, margin: "-80px" }}
                transition={{
                  delay: index * 0.08,
                  duration: 0.45,
                  ease: "easeOut",
                }}
                whileHover={{ y: -8, scale: 1.02 }}
                className="group relative p-6 rounded-2xl glass-card overflow-hidden hover:border-cyan-300/35 hover:shadow-[0_20px_35px_-18px_rgba(34,211,238,0.4)] transition-all duration-300"
              >
                <div
                  className={`absolute -top-10 -right-8 h-28 w-28 rounded-full bg-gradient-to-br ${cardAccent[index % cardAccent.length]} blur-2xl opacity-60 group-hover:opacity-90 transition-opacity duration-500`}
                />
                <div className="absolute top-0 right-0 p-6 opacity-10 group-hover:opacity-20 transition-opacity">
                  <Icon size={64} />
                </div>
                <motion.div
                  aria-hidden
                  initial={{ x: "-120%" }}
                  whileHover={{ x: "140%" }}
                  transition={{ duration: 0.75, ease: "easeInOut" }}
                  className="absolute inset-y-0 w-16 -skew-x-12 bg-gradient-to-r from-transparent via-white/10 to-transparent"
                />
                <div className="relative z-10">
                  <motion.div
                    whileHover={{ rotate: 8, scale: 1.06 }}
                    className="w-12 h-12 rounded-full bg-cyan-400/15 border border-cyan-300/20 flex items-center justify-center text-cyan-200 mb-4"
                  >
                    <Icon size={24} />
                  </motion.div>
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
