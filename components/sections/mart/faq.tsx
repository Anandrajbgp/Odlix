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
    <section className="relative overflow-hidden py-16 md:py-20 bg-transparent text-[#0F172A]">
      <div className="container relative z-10 mx-auto px-4 max-w-4xl">
        <div className="text-center mb-12">
          <div className="inline-flex items-center gap-2 rounded-full bg-[#EFF6FF] px-4 py-1.5 text-xs font-bold uppercase tracking-widest text-[#2563EB] border border-[#2563EB]/30 shadow-sm mb-3">
            <HelpCircle className="h-4 w-4 text-[#2563EB]" />
            Mart Help & Support
          </div>
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-extrabold tracking-tight text-[#0F172A]">
            Frequently Asked <span className="text-[#2563EB]">Questions</span>
          </h2>
          <p className="text-[#475569] text-sm md:text-base font-semibold mt-2">
            Everything you need to know about shopping, delivery, and payments on Odlix Mart.
          </p>
        </div>

        <div className="space-y-4">
          {martFaqs.map((faq, index) => {
            const isOpen = openIndex === index;

            return (
              <div
                key={faq.question}
                className="rounded-2xl border border-[#E2E8F0] bg-[#F8FAFC] overflow-hidden shadow-sm transition-all"
              >
                <button
                  type="button"
                  onClick={() => toggleFAQ(index)}
                  className="w-full text-left p-5 md:p-6 flex items-center justify-between gap-4 font-bold text-base md:text-lg text-[#0F172A] hover:text-[#2563EB] transition-colors"
                >
                  <span>{faq.question}</span>
                  <ChevronDown
                    className={`h-5 w-5 shrink-0 text-[#2563EB] transition-transform duration-300 ${
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
                      className="px-5 pb-6 md:px-6 text-sm font-semibold text-[#475569] leading-relaxed border-t border-[#E2E8F0] pt-4"
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
