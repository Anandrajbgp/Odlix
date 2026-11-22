"use client";

import { useEffect, useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { ChevronUp } from "lucide-react";

export function ScrollToTop() {
  const [isVisible, setIsVisible] = useState(false);
  const [scrollProgress, setScrollProgress] = useState(0);

  useEffect(() => {
    const updateScrollState = () => {
      const scrollTop = window.pageYOffset;
      const scrollableHeight = document.documentElement.scrollHeight - window.innerHeight;
      const progress = scrollableHeight > 0 ? Math.min(100, Math.max(0, (scrollTop / scrollableHeight) * 100)) : 0;

      setScrollProgress(progress);
      setIsVisible(scrollTop > 300);
    };

    updateScrollState();
    window.addEventListener("scroll", updateScrollState, { passive: true });
    window.addEventListener("resize", updateScrollState);

    return () => {
      window.removeEventListener("scroll", updateScrollState);
      window.removeEventListener("resize", updateScrollState);
    };
  }, []);

  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: "smooth",
    });
  };

  const progressStyle = {
    background: `conic-gradient(#22d3ee ${scrollProgress * 3.6}deg, rgba(255,255,255,0.28) ${scrollProgress * 3.6}deg)`,
  };

  return (
    <AnimatePresence>
      {isVisible && (
        <motion.button
          layout
          initial={{ opacity: 0, scale: 0.8 }}
          animate={{ opacity: 1, scale: 1 }}
          exit={{ opacity: 0, scale: 0.8 }}
          onClick={scrollToTop}
          className="relative z-[53] h-14 w-14 rounded-full p-[3px] shadow-2xl transition-all focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring"
          style={progressStyle}
          aria-label={`Scroll to top (${Math.round(scrollProgress)}% scrolled)`}
          type="button"
        >
          <span className="flex h-full w-full items-center justify-center rounded-full border border-black/10 bg-white text-[#001f3f] hover:bg-white/90">
            <ChevronUp className="h-6 w-6" />
          </span>
        </motion.button>
      )}
    </AnimatePresence>
  );
}
