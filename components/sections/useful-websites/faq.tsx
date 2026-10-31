"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { ChevronDown, HelpCircle } from "lucide-react";

type FAQItem = {
  question: string;
  answer: string;
};

const usefulSitesFaqs: FAQItem[] = [
  {
    question: "How do I add a website to my favorites?",
    answer:
      "Click the bookmark icon on any website card, and it will be saved to your favorites list for quick access.",
  },
  {
    question: "Can I submit my own website to the directory?",
    answer:
      "Yes! Use the Submit Site button to suggest your website. All submissions are reviewed before publication.",
  },
  {
    question: "Are the websites safe to visit?",
    answer:
      "Yes! Every website listed undergoes manual verification for safety, SSL, and content quality before being added.",
  },
  {
    question: "Do these websites work on mobile?",
    answer:
      "Absolutely! All listed websites are mobile-responsive and work seamlessly on phones and tablets.",
  },
  {
    question: "How can I report a broken or unsafe link?",
    answer:
      "Use the Report link on any website card, or email us at team.odlix@gmail.com with the details.",
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
          <div className="inline-flex items-center gap-2 rounded-full bg-[#c084fc]/15 px-4 py-1.5 text-xs font-black uppercase tracking-widest text-[#c084fc] border border-[#c084fc]/40 backdrop-blur-md mb-3">
            <HelpCircle className="h-4 w-4 text-[#c084fc]" />
            Help & Support
          </div>
          <h2 className="text-3xl sm:text-5xl md:text-6xl font-black tracking-tight text-white">
            Frequently Asked <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#a855f7] to-[#c084fc]">Questions</span>
          </h2>
          <p className="text-foreground/60 text-sm md:text-base font-semibold mt-3">
            Everything you need to know about using the Odlix Useful Websites directory.
          </p>
        </div>

        <div className="space-y-4">
          {usefulSitesFaqs.map((faq, index) => {
            const isOpen = openIndex === index;
            return (
              <div
                key={faq.question}
                className="rounded-2xl bg-transparent border border-border overflow-hidden shadow-lg transition-all hover:border-[#a855f7]/50"
              >
                <button
                  type="button"
                  onClick={() => toggleFAQ(index)}
                  className="w-full p-6 text-left flex items-center justify-between gap-4 focus:outline-none hover:bg-white/10 transition-colors"
                >
                  <span className="text-base sm:text-lg font-black text-white leading-snug">
                    {faq.question}
                  </span>
                  <div className={`shrink-0 p-1.5 rounded-full bg-white/10 border border-border text-[#a855f7] transition-transform duration-300 ${isOpen ? "rotate-180 bg-[#a855f7]/20" : ""}`}>
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
