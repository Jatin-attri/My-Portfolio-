import { motion } from "motion/react";

export default function SplashScreen() {
  return (
    <motion.div
      className="fixed inset-0 z-50 flex flex-col items-center justify-center bg-[#020617]"
      exit={{ opacity: 0, y: -20, filter: "blur(10px)" }}
      transition={{ duration: 0.6, ease: [0.22, 1, 0.36, 1] }}
    >
      <div className="relative flex flex-col items-center">
        <motion.div
          initial={{ scale: 0.8, opacity: 0 }}
          animate={{ scale: 1, opacity: 1 }}
          transition={{ duration: 0.5, ease: "easeOut" }}
          className="text-5xl font-bold tracking-tighter text-white mb-8"
        >
          JA
        </motion.div>
        <div className="w-48 h-[2px] bg-slate-800 rounded-full overflow-hidden">
          <motion.div
            className="h-full bg-indigo-500"
            initial={{ width: "0%" }}
            animate={{ width: "100%" }}
            transition={{ duration: 1.2, ease: "easeInOut" }}
          />
        </div>
      </div>
    </motion.div>
  );
}
