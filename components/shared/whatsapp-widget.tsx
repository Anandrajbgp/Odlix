"use client";

import { motion, AnimatePresence, useReducedMotion } from "framer-motion";
import { MessageCircle, X } from "lucide-react";
import { useState } from "react";

export function WhatsAppWidget() {
  const [isOpen, setIsOpen] = useState(false);
  const shouldReduceMotion = useReducedMotion();

  const whatsappNumber = "917372891228";
  const message = "Hi Odlix Team, I'd like to know more about your ecosystem.";

  return (
    <div className="relative z-[52]">
      <AnimatePresence>
        {isOpen && (
          <motion.div
            layout
            id="whatsapp-chat-panel"
            initial={shouldReduceMotion ? false : { opacity: 0, y: 12, scale: 0.98 }}
            animate={shouldReduceMotion ? undefined : { opacity: 1, y: 0, scale: 1 }}
            exit={shouldReduceMotion ? undefined : { opacity: 0, y: 12, scale: 0.98 }}
            className="mb-4 w-72 max-w-[calc(100vw-2rem)] bg-white rounded-2xl shadow-2xl border border-black/5 overflow-hidden"
          >
            <div className="bg-[#25D366] p-4 text-white">
              <h3 className="font-bold">Chat with Odlix</h3>
              <p className="text-xs opacity-90">Typically replies within minutes</p>
            </div>
            <div className="p-4 bg-zinc-50">
              <div className="bg-white p-3 rounded-lg shadow-sm text-sm text-zinc-600 mb-4">
                Hi there! 👋 How can we help you today?
              </div>
              <a
                href={`https://wa.me/${whatsappNumber}?text=${encodeURIComponent(message)}`}
                target="_blank"
                rel="noopener noreferrer"
                className="block w-full bg-[#25D366] text-white text-center py-3 rounded-xl font-bold text-sm hover:opacity-90 transition-opacity"
              >
                Start Chat
              </a>
            </div>
          </motion.div>
        )}
      </AnimatePresence>

      <button
        onClick={() => setIsOpen(!isOpen)}
        className="w-14 h-14 rounded-full bg-[#25D366] text-white flex items-center justify-center shadow-2xl hover:scale-105 transition-transform focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring"
        type="button"
        aria-expanded={isOpen}
        aria-controls="whatsapp-chat-panel"
        aria-label={isOpen ? "Close WhatsApp chat" : "Open WhatsApp chat"}
      >
        {isOpen ? <X /> : <MessageCircle />}
      </button>
    </div>
  );
}
