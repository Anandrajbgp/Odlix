"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { ChevronDown, HelpCircle } from "lucide-react";

type FAQItem = {
  question: string;
  answer: string;
};

const telegramBotsFaqs: FAQItem[] = [
  {
    question: "How do I add a bot to my Telegram group?",
    answer:
      "Click the Add to Telegram button on any bot card, then select your group or channel to add the bot.",
  },
  {
    question: "Are the bots safe to use?",
    answer:
      "Yes! Every bot listed undergoes security scanning and manual review before being published on our directory.",
  },
  {
    question: "Can I submit my own Telegram bot?",
    answer:
      "Yes! Developers can submit their bots through our submission form. All bots are reviewed before listing.",
  },
  {
    question: "Do bots work in private chats?",
    answer:
      "Yes! Most bots work in both private chats and groups, depending on their configured permissions.",
  },
  {
    question: "How can I contact support for bot issues?",
    answer:
      "Our Telegram Bot support desk is available 24/7 via team.odlix@gmail.com or through our WhatsApp support.",
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
          <div className="inline-flex items-center gap-2 rounded-full bg-[#E0F2FE] px-3.5 py-1 text-xs font-bold uppercase tracking-wider text-[#0088CC] border border-[#0088CC]/30 shadow-sm mb-2">
            <HelpCircle className="h-3.5 w-3.5 text-[#0088CC]" />
            Help & Support
          </div>
          <h2 className="text-2xl sm:text-4xl md:text-5xl font-extrabold tracking-tight text-[#0F172A]">
            Frequently Asked <span className="text-[#0088CC]">Questions</span>
          </h2>
          <p className="text-[#475569] text-xs sm:text-sm font-semibold mt-1">
            Everything you need to know about adding and using Telegram bots from Odlix.
          </p>
        </div>

        <div className="space-y-3">
          {telegramBotsFaqs.map((faq, index) => {
            const isOpen = openIndex === index;

            return (
              <div
                key={faq.question}
                className="rounded-2xl border border-[#E2E8F0] bg-[#F8FAFC] overflow-hidden shadow-sm transition-all"
              >
                <button
                  type="button"
                  onClick={() => toggleFAQ(index)}
                  className="w-full text-left p-4 md:p-5 flex items-center justify-between gap-4 font-bold text-sm md:text-base text-[#0F172A] hover:text-[#0088CC] transition-colors"
                >
                  <span>{faq.question}</span>
                  <ChevronDown
                    className={`h-4 w-4 shrink-0 text-[#0088CC] transition-transform duration-300 ${
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
