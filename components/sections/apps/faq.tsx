"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { ChevronDown, HelpCircle } from "lucide-react";

type FAQItem = {
  question: string;
  answer: string;
};

const appFaqs: FAQItem[] = [
  {
    question: "How do I download apps from Odlix App Store?",
    answer:
      "Simply search for the app you need, click the Install button, and the app will download and install automatically on your device.",
  },
  {
    question: "Are the apps on Odlix App Store safe to install?",
    answer:
      "Yes! Every app listed on Odlix App Store undergoes strict security scanning and malware checks before being published.",
  },
  {
    question: "How do I update my installed apps?",
    answer:
      "You'll receive notifications in your dashboard when updates are available. Click Update to install the latest version.",
  },
  {
    question: "Can I submit my own app to Odlix App Store?",
    answer:
      "Yes! Developers can submit their apps through the Creator Studio. All submissions are reviewed before publication.",
  },
  {
    question: "How can I contact support for app-related issues?",
    answer:
      "Our App Store support desk is available 24/7 through live chat, WhatsApp, or email at team.odlix@gmail.com.",
  },
];

export function FAQ() {
  const [openIndex, setOpenIndex] = useState<number | null>(0);

  const toggleFAQ = (index: number) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  return (
    <section className="relative overflow-hidden py-16 md:py-24 bg-transparent text-white">
      <div className="container relative z-10 mx-auto px-4 max-w-4xl">
        <div className="text-center mb-16">
          <div className="inline-flex items-center gap-2 rounded-full bg-[var(--platform-accent)]/15 px-4 py-1.5 text-xs font-black uppercase tracking-widest text-[var(--platform-accent)] border border-[var(--platform-accent)]/40 backdrop-blur-md mb-3">
            <HelpCircle className="h-4 w-4 text-[var(--platform-accent)]" />
            App Store Help & Support
          </div>
          <h2 className="text-3xl sm:text-5xl md:text-6xl font-black tracking-tight text-white">
            Frequently Asked <span className="text-transparent bg-clip-text bg-gradient-to-r from-[var(--platform-primary)] to-[var(--platform-accent)]">Questions</span>
          </h2>
          <p className="text-foreground/60 text-sm md:text-base font-semibold mt-3">
            Everything you need to know about downloading, installing, and managing apps on Odlix App Store.
          </p>
        </div>

        <div className="space-y-4">
          {appFaqs.map((faq, index) => {
            const isOpen = openIndex === index;
            return (
              <div
                key={faq.question}
                className="rounded-2xl bg-transparent border border-border overflow-hidden shadow-lg transition-all hover:border-[var(--platform-accent)]/50"
              >
                <button
                  type="button"
                  onClick={() => toggleFAQ(index)}
                  className="w-full p-6 text-left flex items-center justify-between gap-4 focus:outline-none hover:bg-white/10 transition-colors"
                >
                  <span className="text-base sm:text-lg font-black text-white leading-snug">
                    {faq.question}
                  </span>
                  <div className={`shrink-0 p-1.5 rounded-full bg-white/10 border border-border text-[var(--platform-accent)] transition-transform duration-300 ${isOpen ? "rotate-180 bg-[var(--platform-accent)]/20" : ""}`}>
                    <ChevronDown className="h-5 w-5" />
                  </div>
                </button>

                <AnimatePresence initial={false}>
                  {isOpen && (
                    <motion.div
                      initial={{ height: 0, opacity: 0 }}
                      animate={{ height: "auto", opacity: 1 }}
                      exit={{ height: 0, opacity: 0 }}
                      transition={{ duration: 0.3 }}
                    >
                      <div className="px-6 pb-6 pt-2 text-foreground/60 font-semibold text-sm sm:text-base leading-relaxed border-t border-border/60">
                        {faq.answer}
                      </div>
                    </motion.div>
                  )}
                </AnimatePresence>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}