"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { ChevronDown, HelpCircle } from "lucide-react";

type FAQItem = {
  question: string;
  answer: string;
};

const websiteFaqs: FAQItem[] = [
  {
    question: "How are websites curated on Odlix Useful Websites?",
    answer:
      "Our team manually reviews and verifies every website for utility, design quality, safety, and lack of intrusive spam before listing it.",
  },
  {
    question: "Are the links safe and free from malware?",
    answer:
      "Yes! Every destination link is checked for HTTPS security and safe browsing standards.",
  },
  {
    question: "Can I suggest a useful website to be added?",
    answer:
      "Absolutely! You can submit site suggestions through our contact form or by emailing team.odlix@gmail.com.",
  },
  {
    question: "Is Odlix Useful Websites free to use?",
    answer:
      "Yes! The directory is 100% free for all users.",
  },
];

export function FAQ() {
  const [openIndex, setOpenIndex] = useState<number | null>(0);

  const toggleFAQ = (index: number) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  return (
    <section className="relative overflow-hidden py-8 md:py-12 bg-transparent text-[#0F172A]">
      <div className="container relative z-10 mx-auto px-4 max-w-4xl">
        <div className="text-center mb-8">
          <div className="inline-flex items-center gap-2 rounded-full bg-[#F0F9FF] px-3.5 py-1 text-xs font-bold uppercase tracking-wider text-[#0284C7] border border-[#0284C7]/30 shadow-sm mb-2">
            <HelpCircle className="h-3.5 w-3.5 text-[#0284C7]" />
            Directory Help & Support
          </div>
          <h2 className="text-2xl sm:text-4xl md:text-5xl font-extrabold tracking-tight text-[#0F172A]">
            Frequently Asked <span className="text-[#0284C7]">Questions</span>
          </h2>
          <p className="text-[#475569] text-xs sm:text-sm font-semibold mt-1">
            Everything you need to know about navigating and using Odlix Useful Websites.
          </p>
        </div>

        <div className="space-y-3">
          {websiteFaqs.map((faq, index) => {
            const isOpen = openIndex === index;

            return (
              <div
                key={faq.question}
                className="rounded-2xl border border-[#E2E8F0] bg-[#F8FAFC] overflow-hidden shadow-sm transition-all"
              >
                <button
                  type="button"
                  onClick={() => toggleFAQ(index)}
                  className="w-full text-left p-4 md:p-5 flex items-center justify-between gap-4 font-bold text-sm md:text-base text-[#0F172A] hover:text-[#0284C7] transition-colors"
                >
                  <span>{faq.question}</span>
                  <ChevronDown
                    className={`h-4 w-4 shrink-0 text-[#0284C7] transition-transform duration-300 ${
                      isOpen ? "rotate-180" : ""
                    }`}
                  />
                </button>

                <AnimatePresence>
                  {isOpen && (
                    <motion.div
                      initial={{ opacity: 0, height: 0 }}
                      animate={{ opacity: 1, height: "auto" }}
                      exit={{ opacity: 0, height: 0 }}
                      transition={{ duration: 0.3 }}
                      className="px-4 pb-5 md:px-5 text-xs sm:text-sm font-semibold text-[#475569] leading-relaxed border-t border-[#E2E8F0] pt-3"
                    >
                      <p>{faq.answer}</p>
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
