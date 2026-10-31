"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { ChevronDown, HelpCircle } from "lucide-react";

type FAQItem = {
  question: string;
  answer: string;
};

const faqs: FAQItem[] = [
  {
    question: "Is one Odlix ID really enough for all platforms?",
    answer:
      "Yes! Odlix uses Single Sign-On (SSO) security. Once you create your Odlix account, you can access E-Learning, Trading, Agency, Mart, Mock Tests, App Store, Useful Websites, and Telegram Bots immediately without creating separate accounts.",
  },
  {
    question: "How is my personal data and account security protected?",
    answer:
      "We employ bank-grade 256-bit SSL data encryption, strict access controls, and zero third-party data selling policies compliant with modern data protection standards to safeguard your profile credentials and activity logs.",
  },
  {
    question: "Are my payments and financial transactions secure?",
    answer:
      "All purchases and subscriptions are processed through Cashfree & Instant UPI payment gateway. Transactions are PCI-DSS compliant with 256-bit encryption, instant digital invoices, and 0% hidden fees.",
  },
  {
    question: "How are courses, freelancers, and vendors verified on Odlix?",
    answer:
      "Every course creator, agency freelancer, and marketplace vendor undergoes rigorous skill evaluations, portfolio validations, and identity checks before being allowed to deliver services, ensuring 100% verified quality standards.",
  },
  {
    question: "How can I contact customer support if I face an issue?",
    answer:
      "Our dedicated customer support team provides a 24/7 grievance SLA response. You can reach us instantly via the live support widget on the website, direct WhatsApp assistance, or account dashboard ticketing.",
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
          <div className="inline-flex items-center gap-2 rounded-full bg-cyan-500/15 px-4 py-1.5 text-xs font-black uppercase tracking-widest text-cyan-300 border border-cyan-500/40 backdrop-blur-md mb-3">
            <HelpCircle className="h-4 w-4 text-cyan-300" />
            Got Questions?
          </div>
          <h2 className="text-3xl sm:text-5xl md:text-6xl font-black tracking-tight text-white">
            Frequently Asked <span className="text-transparent bg-clip-text bg-gradient-to-r from-cyan-300 via-teal-200 to-emerald-300">Questions</span>
          </h2>
          <p className="text-slate-200 text-sm md:text-base font-semibold mt-3">
            Everything you need to know about the Odlix ecosystem, security, and support.
          </p>
        </div>

        <div className="space-y-4">
          {faqs.map((faq, index) => {
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
                  <div className={`shrink-0 p-1.5 rounded-full bg-slate-900/50 backdrop-blur-md border border-slate-700/60 text-cyan-300 transition-transform duration-300 ${isOpen ? "rotate-180 bg-cyan-500/20" : ""}`}>
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
