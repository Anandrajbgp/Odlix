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
    <section className="relative overflow-hidden py-16 md:py-24 bg-transparent text-white">
      <div className="container relative z-10 mx-auto px-4 max-w-4xl">
        <div className="text-center mb-16">
          <div className="inline-flex items-center gap-2 rounded-full bg-[#f0abfc]/15 px-4 py-1.5 text-xs font-black uppercase tracking-widest text-[#f0abfc] border border-[#f0abfc]/40 backdrop-blur-md mb-3">
            <HelpCircle className="h-4 w-4 text-[#f0abfc]" />
            Help & Support
          </div>
          <h2 className="text-3xl sm:text-5xl md:text-6xl font-black tracking-tight text-white">
            Frequently Asked <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#d946ef] to-[#f0abfc]">Questions</span>
          </h2>
          <p className="text-foreground/60 text-sm md:text-base font-semibold mt-3">
            Everything you need to know about adding and using Telegram bots from Odlix.
          </p>
        </div>

        <div className="space-y-4">
          {telegramBotsFaqs.map((faq, index) => {
            const isOpen = openIndex === index;
            return (
              <div
                key={faq.question}
                className="rounded-2xl bg-transparent border border-border overflow-hidden shadow-lg transition-all hover:border-[#d946ef]/50"
              >
                <button
                  type="button"
                  onClick={() => toggleFAQ(index)}
                  className="w-full p-6 text-left flex items-center justify-between gap-4 focus:outline-none hover:bg-white/10 transition-colors"
                >
                  <span className="text-base sm:text-lg font-black text-white leading-snug">
                    {faq.question}
                  </span>
                  <div className={`shrink-0 p-1.5 rounded-full bg-white/10 border border-border text-[#d946ef] transition-transform duration-300 ${isOpen ? "rotate-180 bg-[#d946ef]/20" : ""}`}>
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
