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
    <section className="relative overflow-hidden py-10 md:py-16 bg-transparent border-t border-white/40">
      <div className="container relative z-10 mx-auto px-4 max-w-4xl">
        <div className="text-center mb-10">
          <div className="inline-flex items-center gap-2 rounded-full bg-[#00a3da] px-4 py-1.5 text-xs font-black uppercase tracking-widest text-[#0f1d26] mb-3">
            <HelpCircle className="h-4 w-4 text-[#0f1d26]" />
            Got Questions?
          </div>
          <h2 className="text-2xl sm:text-3xl md:text-4xl font-black tracking-tight text-[#0f1d26]">
            Frequently Asked <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#00a3da] to-[#00f5c4]">Questions</span>
          </h2>
          <p className="text-[#0f1d26]/80 text-sm md:text-base font-semibold mt-2">
            Everything you need to know about the Odlix ecosystem, security, and support.
          </p>
        </div>

        <div className="space-y-3">
          {faqs.map((faq, index) => {
            const isOpen = openIndex === index;
            return (
              <div
                key={faq.question}
                className="rounded-xl bg-white/20 backdrop-blur-sm border border-white/30 overflow-hidden shadow-sm transition-all duration-300"
              >
                <button
                  type="button"
                  onClick={() => toggleFAQ(index)}
                  className="w-full p-4 text-left flex items-center justify-between gap-3 focus:outline-none hover:bg-white/30 transition-colors"
                >
                  <span className="text-sm sm:text-base font-black text-[#0f1d26] leading-snug">
                    {faq.question}
                  </span>
                  <div className={`shrink-0 p-1 rounded-full bg-white/30 backdrop-blur-md border border-white/30 text-[#0f1d26] transition-transform duration-300 ${isOpen ? "rotate-180" : ""}`}>
                    <ChevronDown className="h-4 w-4 text-[#0f1d26]" />
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
                      <div className="px-4 pb-4 pt-2 text-[#0f1d26]/80 font-semibold text-xs sm:text-sm leading-relaxed border-t border-white/30">
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
