import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "motion/react";
import { Menu, X } from "lucide-react";

export default function Navigation() {
  const [scrolled, setScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [activeHash, setActiveHash] = useState("#experience");

  const navLinks = [
    { name: "Experience", href: "#experience" },
    { name: "Achievements", href: "#achievements" },
    { name: "Projects", href: "#projects" },
    { name: "Skills", href: "#skills" },
  ];

  useEffect(() => {
    const getActiveSection = () => {
      const offsetY = window.scrollY + 140;
      let current = navLinks[0].href;

      for (const link of navLinks) {
        const section = document.querySelector(link.href) as HTMLElement | null;
        if (section && offsetY >= section.offsetTop) {
          current = link.href;
        }
      }

      return current;
    };

    const handleScroll = () => {
      setScrolled(window.scrollY > 50);
      setActiveHash(getActiveSection());
    };

    handleScroll();
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const handleNavClick = (href: string, closeMobile = false) => {
    const section = document.querySelector(href) as HTMLElement | null;
    setActiveHash(href);

    if (closeMobile) {
      setMobileMenuOpen(false);
    }

    if (!section) return;

    const top = section.getBoundingClientRect().top + window.scrollY - 105;
    window.scrollTo({ top, behavior: "smooth" });
  };

  return (
    <motion.header
      animate={{
        backgroundColor: scrolled ? "rgba(2, 6, 23, 0.78)" : "rgba(2, 6, 23, 0)",
        backdropFilter: scrolled ? "blur(12px)" : "blur(0px)",
      }}
      transition={{ duration: 0.35, ease: "easeOut" }}
      className={`fixed top-0 left-0 right-0 z-40 border-b ${
        scrolled ? "border-white/10 py-4" : "border-transparent py-6"
      } transition-[padding,border-color] duration-300`}
    >
      <div className="max-w-6xl mx-auto px-6 md:px-12 flex items-center justify-between">
        <motion.a
          href="#"
          whileHover={{ scale: 1.04, y: -1 }}
          transition={{ type: "spring", stiffness: 300, damping: 20 }}
          className="relative text-xl font-bold tracking-tighter text-white hover:text-indigo-300 transition-colors"
        >
          <span className="absolute -inset-2 rounded-lg bg-indigo-500/10 blur-md opacity-0 hover:opacity-100 transition-opacity duration-300" />
          JA.
        </motion.a>

        <nav className="hidden md:flex items-center gap-2 rounded-full border border-white/10 bg-white/[0.03] px-2 py-1.5">
          {navLinks.map((link) => (
            <motion.a
              key={link.name}
              href={link.href}
              onClick={(e) => {
                e.preventDefault();
                handleNavClick(link.href);
              }}
              whileHover={{ y: -1 }}
              className={`relative px-4 py-2 rounded-full text-sm font-medium transition-colors ${
                activeHash === link.href ? "text-white" : "text-slate-400 hover:text-white"
              }`}
            >
              {activeHash === link.href && (
                <motion.span
                  layoutId="activeNavPill"
                  transition={{ type: "spring", stiffness: 380, damping: 30 }}
                  className="absolute inset-0 rounded-full border border-indigo-400/30 bg-indigo-500/20 shadow-[0_0_18px_rgba(99,102,241,0.22)]"
                />
              )}
              <span className="relative z-10">{link.name}</span>
            </motion.a>
          ))}
          <motion.a
            href="#contact"
            onClick={(e) => {
              e.preventDefault();
              const contact = document.querySelector("#contact") as HTMLElement | null;
              if (!contact) return;
              const top = contact.getBoundingClientRect().top + window.scrollY - 105;
              window.scrollTo({ top, behavior: "smooth" });
            }}
            whileHover={{ scale: 1.04, y: -1 }}
            whileTap={{ scale: 0.95 }}
            className="ml-2 px-4 py-2 text-sm font-medium text-white bg-gradient-to-r from-indigo-500/70 to-cyan-500/60 hover:from-indigo-500 hover:to-cyan-500 rounded-full transition-all border border-indigo-300/25 shadow-[0_0_20px_rgba(56,189,248,0.18)]"
          >
            Contact
          </motion.a>
        </nav>

        <button
          className="md:hidden text-slate-300"
          onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
        >
          {mobileMenuOpen ? <X /> : <Menu />}
        </button>
      </div>

      <AnimatePresence>
        {mobileMenuOpen && (
          <motion.div
            initial={{ opacity: 0, y: -16, scale: 0.98 }}
            animate={{ opacity: 1, y: 0, scale: 1 }}
            exit={{ opacity: 0, y: -14, scale: 0.98 }}
            transition={{ duration: 0.24, ease: "easeOut" }}
            className="absolute top-full left-0 right-0 bg-[#020617]/95 backdrop-blur-xl border-b border-white/10 py-4 px-6 md:hidden flex flex-col gap-2"
          >
            {navLinks.map((link, index) => (
              <motion.a
                key={link.name}
                href={link.href}
                onClick={(e) => {
                  e.preventDefault();
                  handleNavClick(link.href, true);
                }}
                initial={{ opacity: 0, x: -12 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ delay: index * 0.04, duration: 0.2 }}
                className={`px-3 py-2.5 rounded-lg text-base font-medium transition-colors ${
                  activeHash === link.href
                    ? "text-white bg-indigo-500/20 border border-indigo-400/25"
                    : "text-slate-300 hover:text-white hover:bg-white/5"
                }`}
              >
                {link.name}
              </motion.a>
            ))}
            <motion.a
              href="#contact"
              onClick={(e) => {
                e.preventDefault();
                setMobileMenuOpen(false);
                const contact = document.querySelector("#contact") as HTMLElement | null;
                if (!contact) return;
                const top = contact.getBoundingClientRect().top + window.scrollY - 105;
                window.scrollTo({ top, behavior: "smooth" });
              }}
              initial={{ opacity: 0, x: -12 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ delay: navLinks.length * 0.04, duration: 0.2 }}
              className="mt-1 px-3 py-2.5 rounded-lg text-base font-medium text-white bg-gradient-to-r from-indigo-500/70 to-cyan-500/60 border border-indigo-300/25"
            >
              Contact
            </motion.a>
          </motion.div>
        )}
      </AnimatePresence>
    </motion.header>
  );
}
