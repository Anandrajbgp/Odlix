"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { ChevronDown, HelpCircle } from "lucide-react";

type FAQItem = {
  question: string;
  answer: string;
};

const martFaqs: FAQItem[] = [
  {
    question: "How do I track my Odlix Mart order delivery?",
    answer:
      "Once your order is dispatched, you receive a real-time tracking link via SMS, WhatsApp, and your account dashboard to monitor shipping progress right up to your doorstep.",
  },
  {
    question: "What are the accepted payment methods on Odlix Mart?",
    answer:
      "We accept all major secure payment methods including UPI (Google Pay, PhonePe, Paytm), Credit/Debit Cards, Net Banking, and Cash on Delivery (COD) on eligible items.",
  },
  {
    question: "What is the return and replacement policy?",
    answer:
      "Odlix Mart offers an easy 7-day return and replacement window for eligible electronics, fashion, and lifestyle products with instant pickup support.",
  },
  {
    question: "Are all products on Odlix Mart 100% genuine and verified?",
    answer:
      "Yes! Every product listed on Odlix Mart undergoes stringent quality checks and comes directly from verified manufacturers and trusted authorized brand vendors.",
  },
  {
    question: "How can I contact customer support for order or refund inquiries?",
    answer:
      "Our Mart support desk is available 24/7 through the live support chat, direct WhatsApp assistance, or email at team.odlix@gmail.com.",
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
          <div className="inline-flex items-center gap-2 rounded-full bg-amber-500/15 px-4 py-1.5 text-xs font-black uppercase tracking-widest text-amber-300 border border-amber-500/40 backdrop-blur-md mb-3">
            <HelpCircle className="h-4 w-4 text-amber-300" />
            Mart Help & Support
          </div>
          <h2 className="text-3xl sm:text-5xl md:text-6xl font-black tracking-tight text-white">
            Frequently Asked <span className="text-transparent bg-clip-text bg-gradient-to-r from-amber-400 via-orange-300 to-yellow-300">Questions</span>
          </h2>
          <p className="text-slate-200 text-sm md:text-base font-semibold mt-3">
            Everything you need to know about shopping, delivery, and payments on Odlix Mart.
          </p>
        </div>

        <div className="space-y-4">
          {martFaqs.map((faq, index) => {
            const isOpen = openIndex === index;
            return (
              <div
                key={faq.question}
                className="rounded-2xl bg-slate-900/15 backdrop-blur-md border border-slate-700/60 overflow-hidden shadow-lg transition-all hover:border-slate-600"
              >
                <button
                  type="button"
                  onClick={() => toggleFAQ(index)}
                  className="w-full p-6 text-left flex items-center justify-between gap-4 focus:outline-none hover:bg-slate-900/30 transition-colors"
                >
                  <span className="text-base sm:text-lg font-black text-white leading-snug">
                    {faq.question}
                  </span>
                  <div className={`shrink-0 p-1.5 rounded-full bg-slate-900/50 backdrop-blur-md border border-slate-700/60 text-amber-300 transition-transform duration-300 ${isOpen ? "rotate-180 bg-amber-500/20" : ""}`}>
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
                      <div className="px-6 pb-6 pt-2 text-slate-200 font-semibold text-sm sm:text-base leading-relaxed border-t border-slate-800/60">
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
