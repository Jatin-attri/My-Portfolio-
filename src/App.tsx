import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "motion/react";
import AnimatedBackground from "./components/AnimatedBackground";
import SplashScreen from "./components/SplashScreen";
import Hero from "./components/Hero";
import Experience from "./components/Experience";
import Achievements from "./components/Achievements";
import Projects from "./components/Projects";
import Skills from "./components/Skills";
import Education from "./components/Education";
import Contact from "./components/Contact";
import Navigation from "./components/Navigation";
import resumeData from "./data/resume.json";

export default function App() {
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const timer = setTimeout(() => {
      setLoading(false);
    }, 1800);
    return () => clearTimeout(timer);
  }, []);

  return (
    <div className="min-h-screen text-slate-100 font-sans">
      <AnimatedBackground />
      <div
        aria-hidden
        className="pointer-events-none fixed inset-0 z-0 opacity-[0.16] [background-image:radial-gradient(circle_at_1px_1px,rgba(148,163,184,0.45)_1px,transparent_0)] [background-size:22px_22px]"
      />

      <AnimatePresence mode="wait">
        {loading ? (
          <SplashScreen key="splash" />
        ) : (
          <motion.div
            key="main"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.8 }}
            className="relative z-10"
          >
            <Navigation />
            <main className="max-w-6xl mx-auto px-6 md:px-12 pb-24 space-y-32">
              <Hero data={resumeData.basics} extra={resumeData.extra} />
              <Experience data={resumeData.experience} />
              <Achievements data={resumeData.achievements} />
              <Projects data={resumeData.projects} />
              <Skills data={resumeData.skills} />
              <Education
                education={resumeData.education}
                certifications={resumeData.certifications}
              />
              <Contact data={resumeData.basics} />
            </main>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
}
