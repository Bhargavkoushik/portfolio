import { useEffect, useState } from "react";
import { AnimatePresence, motion } from "framer-motion";

const ScrollUpButton = ({ showAfterId = "about" }) => {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const updateVisibility = () => {
      const triggerSection = document.getElementById(showAfterId);

      if (!triggerSection) {
        setIsVisible(window.scrollY > 420);
        return;
      }

      const triggerY = triggerSection.offsetTop - 100;
      setIsVisible(window.scrollY >= triggerY);
    };

    updateVisibility();
    window.addEventListener("scroll", updateVisibility, { passive: true });
    window.addEventListener("resize", updateVisibility);

    return () => {
      window.removeEventListener("scroll", updateVisibility);
      window.removeEventListener("resize", updateVisibility);
    };
  }, [showAfterId]);

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  return (
    <AnimatePresence>
      {isVisible ? (
        <motion.button
          type="button"
          onClick={scrollToTop}
          aria-label="Scroll to top"
          initial={{ opacity: 0, y: 14, scale: 0.92 }}
          animate={{ opacity: 1, y: 0, scale: 1 }}
          exit={{ opacity: 0, y: 14, scale: 0.92 }}
          transition={{ duration: 0.2 }}
          className="fixed bottom-6 right-6 z-40 rounded-full border border-cyan-200/50 bg-slate-900/70 px-4 py-3 text-cyan-100 shadow-[0_0_24px_rgba(34,211,238,0.25)] backdrop-blur-md transition hover:scale-105 hover:border-cyan-300 hover:bg-cyan-300/15"
        >
          ↑ Top
        </motion.button>
      ) : null}
    </AnimatePresence>
  );
};

export default ScrollUpButton;