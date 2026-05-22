"use client"

import { useState, useEffect } from "react"
import { ArrowUp, MessageCircle, Bot, X } from "lucide-react"
import { motion, AnimatePresence } from "framer-motion"

export function FloatingActions() {
  const [showScrollTop, setShowScrollTop] = useState(false)
  const [isBotOpen, setIsBotOpen] = useState(false)

  // Scroll visibility check for Scroll To Top button
  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 400) {
        setShowScrollTop(true)
      } else {
        setShowScrollTop(false)
      }
    }
    window.addEventListener("scroll", handleScroll)
    return () => window.removeEventListener("scroll", handleScroll)
  }, [])

  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: "smooth",
    })
  }

  return (
    <div className="fixed bottom-6 right-6 z-50 flex flex-col items-center gap-3">
      
      {/* 🤖 AI BOT PANEL (Conditional Rendering with AnimatePresence) */}
      <AnimatePresence>
        {isBotOpen && (
          <motion.div
            initial={{ opacity: 0, scale: 0.8, y: 50 }}
            animate={{ opacity: 1, scale: 1, y: 0 }}
            exit={{ opacity: 0, scale: 0.8, y: 50 }}
            className="absolute bottom-20 right-0 w-80 h-96 bg-[#001f54] border border-white/10 rounded-2xl shadow-2xl overflow-hidden flex flex-col text-white"
          >
            {/* Header */}
            <div className="p-4 bg-[#001233] border-b border-white/10 flex justify-between items-center">
              <div className="flex items-center gap-2">
                <Bot className="h-5 w-5 text-purple-400" />
                <span className="font-bold text-sm tracking-wide">Odlix AI Assistant</span>
              </div>
              <button onClick={() => setIsBotOpen(false)} className="text-slate-400 hover:text-white transition-colors">
                <X className="h-4 w-4" />
              </button>
            </div>
            
            {/* Chat Sandbox Area Placeholder */}
            <div className="flex-1 p-4 overflow-y-auto text-xs space-y-3 font-medium text-slate-300">
              <div className="p-3 rounded-xl bg-white/5 max-w-[85%]">
                Hello Node User! 👋 Ask me anything about Odlix platforms, Affiliate system payouts, or active store catalogs.
              </div>
            </div>

            {/* Input Bar */}
            <div className="p-3 border-t border-white/10 bg-[#001233]/50 flex gap-2">
              <input 
                type="text" 
                placeholder="Type system query..." 
                className="w-full bg-white/5 border border-white/10 text-xs px-3 py-2 rounded-xl focus:outline-none focus:border-purple-500"
              />
              <button className="px-3 py-2 rounded-xl bg-purple-600 text-xs font-bold hover:bg-purple-500 transition-colors">
                Send
              </button>
            </div>
          </motion.div>
        )}
      </AnimatePresence>

      {/* 🔼 BUTTON 3: SCROLL TO TOP (Appears dynamically on scroll) */}
      <AnimatePresence>
        {showScrollTop && (
          <motion.button
            initial={{ opacity: 0, scale: 0.5 }}
            animate={{ opacity: 1, scale: 1 }}
            exit={{ opacity: 0, scale: 0.5 }}
            onClick={scrollToTop}
            className="p-3.5 bg-slate-900/80 hover:bg-slate-800 text-white border border-white/10 rounded-full shadow-lg backdrop-blur-md transition-all group"
            title="Scroll to Top"
          >
            <ArrowUp className="h-5 w-5 group-hover:-translate-y-1 transition-transform stroke-[2.5]" />
          </motion.button>
        )}
      </AnimatePresence>

      {/* 🤖 BUTTON 2: AI BOT TOGGLE */}
      <button
        onClick={() => setIsBotOpen(!isBotOpen)}
        className={`p-3.5 rounded-full shadow-lg transition-all text-white border ${
          isBotOpen 
            ? "bg-purple-600 border-purple-500 hover:bg-purple-500" 
            : "bg-indigo-950/90 border-indigo-800 hover:bg-indigo-900"
        }`}
        title="Odlix Assistant Engine"
      >
        <Bot className="h-5 w-5 stroke-[2.5]" />
      </button>

      {/* 💬 BUTTON 1: WHATSAPP DIRECT TOGGLE */}
      <a
        href="https://wa.me/917372891228?text=Hello%20Odlix%20Team!%20I%20need%20assistance%20regarding%20the%20platform%20ecosystem."
        target="_blank"
        rel="noopener noreferrer"
        className="p-3.5 bg-emerald-600 hover:bg-emerald-500 text-white rounded-full shadow-lg transition-all hover:scale-105 active:scale-95"
        title="Chat on WhatsApp"
      >
        <MessageCircle className="h-5 w-5 fill-current stroke-[1.5]" />
      </a>

    </div>
  )
}