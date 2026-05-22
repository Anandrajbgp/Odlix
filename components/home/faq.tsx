"use client"

import { useState } from "react"
import { motion, AnimatePresence } from "framer-motion"
import { ChevronDown } from "lucide-react"

const faqs = [
  { 
    q: "What exactly is the Odlix Ecosystem?", 
    a: "Odlix is a centralized multi-vertical cloud digital infrastructure that seamlessly integrates education, agency software, high-frequency asset trading, micro-apps, and global e-commerce under one authenticated master account node." 
  },
  { 
    q: "How does the Affiliate Engine payout system work?", 
    a: "Depending on your active platform tier (Beginner, Pro, Expert), direct affiliate allocations trigger up to 58% payout structures with instant payouts directly routed to your ledger wallet balance." 
  },
  { 
    q: "Are the trading accounts secured?", 
    a: "Yes. Broker Pro runs on institutional-grade zero-friction ledger protocols reinforced by multi-factor hardware security authentication and real-time risk evaluation frameworks." 
  }
]

export function FAQ() {
  const [openFaq, setOpenFaq] = useState<number | null>(null)

  return (
    <section className="w-full bg-[#030308] px-4 sm:px-6 lg:px-8 m-0 py-20 relative z-20 overflow-hidden">
      
      {/* Soft Ambient Core Light Burst */}
      <div 
        className="absolute bottom-0 right-1/4 w-[500px] h-[250px] pointer-events-none opacity-20"
        style={{
          background: "radial-gradient(circle, rgba(139,92,246,0.04) 0%, transparent 100%)"
        }}
      />

      {/* Segment Header */}
      <div className="max-w-4xl mx-auto text-center mb-14 relative z-10">
        <h2 
          className="text-2xl sm:text-3xl font-black tracking-tight font-mono mb-2"
          style={{
            background: "linear-gradient(180deg, #ffffff 30%, rgba(255,255,255,0.6) 100%)",
            WebkitBackgroundClip: "text",
            WebkitTextFillColor: "transparent",
            backgroundClip: "text",
          }}
        >
          System FAQs
        </h2>
        <p 
          className="text-[11px] sm:text-xs font-bold uppercase tracking-[0.2em]"
          style={{ color: "rgba(255,255,255,0.3)" }}
        >
          Everything you need to know about the system network loops.
        </p>
      </div>

      {/* FAQ Architecture Accordion Loop */}
      <div className="max-w-3xl mx-auto space-y-3.5 relative z-10">
        {faqs.map((faq, i) => {
          const isOpen = openFaq === i
          return (
            <div 
              key={i} 
              className="group rounded-xl overflow-hidden transition-all duration-500 relative"
              style={{
                background: isOpen ? "rgba(255,255,255,0.015)" : "rgba(255,255,255,0.005)",
                border: "1px solid rgba(255, 255, 255, 0.03)",
                backdropFilter: "blur(24px)",
                boxShadow: isOpen ? "inset 0 1px 0 0 rgba(255, 255, 255, 0.03), 0 10px 30px -10px rgba(0,0,0,0.5)" : "none"
              }}
            >
              {/* Active Cybernetic Left Margin Indicator Beam */}
              <div 
                className="absolute left-0 top-0 bottom-0 w-[2px] transition-transform duration-500 origin-top scale-y-0"
                style={{
                  background: "linear-gradient(to bottom, #a78bfa, #22d3ee)",
                  transform: isOpen ? "scaleY(1)" : "scaleY(0)"
                }}
              />

              <button
                onClick={() => setOpenFaq(isOpen ? null : i)}
                className="w-full p-5 sm:px-6 text-left flex justify-between items-center text-xs sm:text-sm font-bold tracking-wide transition-colors duration-300 relative z-10 focus:outline-none"
                style={{
                  color: isOpen ? "#ffffff" : "rgba(255,255,255,0.7)"
                }}
              >
                <span className="pr-4 group-hover:text-white transition-colors duration-300">{faq.q}</span>
                <span 
                  className="flex-shrink-0 w-6 h-6 rounded-md flex items-center justify-center border transition-all duration-300"
                  style={{
                    backgroundColor: isOpen ? "rgba(167,139,250,0.1)" : "rgba(255,255,255,0.02)",
                    borderColor: isOpen ? "rgba(167,139,250,0.25)" : "rgba(255,255,255,0.05)"
                  }}
                >
                  <ChevronDown 
                    className="h-3 w-3 transition-transform duration-500" 
                    style={{ 
                      color: isOpen ? "#a78bfa" : "rgba(255,255,255,0.3)",
                      transform: isOpen ? "rotate(180deg)" : "rotate(0deg)"
                    }}
                  />
                </span>
              </button>
              
              <AnimatePresence initial={false}>
                {isOpen && (
                  <motion.div
                    initial={{ height: 0, opacity: 0 }}
                    animate={{ 
                      height: "auto", 
                      opacity: 1,
                      transition: { height: { duration: 0.35, ease: [0.16, 1, 0.3, 1] }, opacity: { duration: 0.25, delay: 0.05 } }
                    }}
                    exit={{ 
                      height: 0, 
                      opacity: 0,
                      transition: { height: { duration: 0.3, ease: [0.16, 1, 0.3, 1] }, opacity: { duration: 0.15 } }
                    }}
                  >
                    <div 
                      className="px-5 pb-5 sm:px-6 sm:pb-6 text-xs leading-relaxed font-light border-t"
                      style={{ 
                        color: "rgba(255,255,255,0.42)",
                        borderColor: "rgba(255,255,255,0.02)"
                      }}
                    >
                      <div className="pt-4">
                        {faq.a}
                      </div>
                    </div>
                  </motion.div>
                )}
              </AnimatePresence>
            </div>
          )
        })}
      </div>
    </section>
  )
}