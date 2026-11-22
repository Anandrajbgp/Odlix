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
    <section className="relative overflow-hidden py-8 md:py-12 bg-transparent text-[#0F172A]">
      <div className="container relative z-10 mx-auto px-4 max-w-4xl">
        <div className="text-center mb-8">
          <div className="inline-flex items-center gap-2 rounded-full bg-[#FFF7ED] px-3.5 py-1 text-xs font-bold uppercase tracking-wider text-[#F97316] border border-[#F97316]/30 shadow-sm mb-2">
            <HelpCircle className="h-3.5 w-3.5 text-[#F97316]" />
            App Store Help & Support
          </div>
          <h2 className="text-2xl sm:text-4xl md:text-5xl font-extrabold tracking-tight text-[#0F172A]">
            Frequently Asked <span className="text-[#F97316]">Questions</span>
          </h2>
          <p className="text-[#475569] text-xs sm:text-sm font-semibold mt-1">
            Everything you need to know about downloading, installing, and managing apps.
          </p>
        </div>

        <div className="space-y-3">
          {appFaqs.map((faq, index) => {
            const isOpen = openIndex === index;

            return (
              <div
                key={faq.question}
                className="rounded-2xl border border-[#E2E8F0] bg-[#F8FAFC] overflow-hidden shadow-sm transition-all"
              >
                <button
                  type="button"
                  onClick={() => toggleFAQ(index)}
                  className="w-full text-left p-4 md:p-5 flex items-center justify-between gap-4 font-bold text-sm md:text-base text-[#0F172A] hover:text-[#F97316] transition-colors"
                >
                  <span>{faq.question}</span>
                  <ChevronDown
                    className={`h-4 w-4 shrink-0 text-[#F97316] transition-transform duration-300 ${
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
