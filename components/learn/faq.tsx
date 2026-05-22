"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { ChevronDown, Sparkles, BookOpen, Users, Trophy } from "lucide-react";

// Creative E-learning & Student-focused FAQs
const faqs = [
  {
    icon: Sparkles,
    q: "How does the AI-personalized learning path adapt to my pace?",
    a: "Our core intelligence engine constantly analyzes your interaction, quiz scores, and retention metrics. If you struggle with a specific module, the system instantly injects foundational, visual-heavy lessons to bridge your knowledge gaps before moving forward."
  },
  {
    icon: Users,
    q: "Are the doubt-clearing sessions live or AI-generated?",
    a: "Both. You get 24/7 access to our AI Teaching Assistant for instant resolutions, plus scheduled live mentorship matrix sessions every weekend where industry veterans break down complex student queries in real-time."
  },
  {
    icon: BookOpen,
    q: "Do I lose access to the curriculum after graduation?",
    a: "Never. Unlocking a mastery track grants you lifetime access to the core syllabus, including all future curriculum updates, framework patches, and new case studies added to your specific tier."
  },
  {
    icon: Trophy,
    q: "How does the peer-to-peer gamified ranking work?",
    a: "As you complete modules, crack assignments, and help peers in the community nodes, you earn XP. High-ranking students unlock premium hidden modules, exclusive internship opportunities, and one-on-one portfolio reviews."
  }
];

export default function Faq() {
  const [openIndex, setOpenIndex] = useState<number | null>(null);

  return (
    <section className="relative py-24 bg-black overflow-hidden px-4 font-sans">
      {/* Advanced Background Glow Effect */}
      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[800px] h-[400px] bg-purple-600/20 blur-[120px] rounded-full pointer-events-none" />

      <div className="relative max-w-3xl mx-auto z-10">
        <div className="text-center mb-16 space-y-4">
          <motion.div
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-purple-500/10 border border-purple-500/20 text-purple-400 text-sm font-semibold tracking-wide"
          >
            <Sparkles className="w-4 h-4" />
            <span>Student Success Hub</span>
          </motion.div>
          <h2 className="text-4xl md:text-5xl font-extrabold text-transparent bg-clip-text bg-gradient-to-r from-white via-neutral-200 to-neutral-500 mb-4 tracking-tight">
            Ecosystem FAQs
          </h2>
          <p className="text-neutral-400 text-lg">
            Everything you need to know about your accelerated learning journey.
          </p>
        </div>

        <div className="space-y-4">
          {faqs.map((faq, i) => {
            const isOpen = openIndex === i;
            const Icon = faq.icon;
            
            return (
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.1 }}
                key={i}
                className={`border backdrop-blur-xl rounded-2xl overflow-hidden transition-all duration-300 ${
                  isOpen
                    ? "bg-white/[0.06] border-purple-500/50 shadow-[0_0_30px_-10px_rgba(168,85,247,0.25)]"
                    : "bg-white/[0.02] border-white/10 hover:bg-white/[0.04] hover:border-white/20"
                }`}
              >
                <button
                  className="w-full p-5 md:p-6 text-left flex items-center justify-between text-white font-semibold group"
                  onClick={() => setOpenIndex(isOpen ? null : i)}
                >
                  <div className="flex items-center gap-4">
                    <div
                      className={`p-2.5 rounded-xl transition-colors duration-300 ${
                        isOpen
                          ? "bg-purple-500/20 text-purple-400"
                          : "bg-neutral-800/50 text-neutral-400 group-hover:text-neutral-200"
                      }`}
                    >
                      <Icon className="w-5 h-5 md:w-6 md:h-6" />
                    </div>
                    <span
                      className={`text-base md:text-lg transition-colors duration-300 ${
                        isOpen ? "text-purple-100" : "text-neutral-300 group-hover:text-white"
                      }`}
                    >
                      {faq.q}
                    </span>
                  </div>
                  <div
                    className={`ml-4 p-2 rounded-full transition-all duration-300 flex-shrink-0 ${
                      isOpen ? "bg-purple-500/20" : "bg-neutral-800/50 group-hover:bg-neutral-700/50"
                    }`}
                  >
                    <ChevronDown
                      className={`w-5 h-5 transition-transform duration-500 ${
                        isOpen ? "rotate-180 text-purple-400" : "text-neutral-400"
                      }`}
                    />
                  </div>
                </button>

                <AnimatePresence initial={false}>
                  {isOpen && (
                    <motion.div
                      initial={{ height: 0, opacity: 0 }}
                      animate={{ height: "auto", opacity: 1 }}
                      exit={{ height: 0, opacity: 0 }}
                      transition={{ duration: 0.3, ease: "easeInOut" }}
                    >
                      <div className="px-5 md:px-6 pb-6 pt-2 ml-14 md:ml-16 text-sm md:text-base text-neutral-400 leading-relaxed">
                        {faq.a}
                      </div>
                    </motion.div>
                  )}
                </AnimatePresence>
              </motion.div>
            );
          })}
        </div>
      </div>
    </section>
  );
}