"use client"

import { motion } from "framer-motion"

export function BackgroundGlow() {
  return (
    <div className="fixed inset-0 -z-50 overflow-hidden bg-[#020205] pointer-events-none select-none">
      
      {/* 💧 Liquid Bubble 1: Top Left - Cyber Cyan Drop */}
      <motion.div
        animate={{
          x: [0, 50, -30, 0],
          y: [0, -40, 60, 0],
          scale: [1, 1.15, 0.95, 1],
          borderRadius: [
            "42% 58% 70% 30% / 45% 45% 55% 55%",
            "70% 30% 52% 48% / 60% 40% 60% 40%",
            "45% 55% 40% 60% / 40% 65% 35% 65%",
            "42% 58% 70% 30% / 45% 45% 55% 55%"
          ]
        }}
        transition={{
          duration: 12,
          repeat: Infinity,
          ease: "easeInOut"
        }}
        className="absolute top-[-10%] left-[-10%] w-[550px] h-[550px] bg-gradient-to-tr from-cyan-500/45 via-blue-600/20 to-transparent blur-[80px]"
      />

      {/* 💧 Liquid Bubble 2: Center Right - Premium Royal Purple Drop */}
      <motion.div
        animate={{
          x: [0, -70, 40, 0],
          y: [0, 60, -50, 0],
          scale: [1, 1.1, 0.9, 1],
          borderRadius: [
            "50% 50% 30% 70% / 50% 60% 40% 50%",
            "30% 70% 70% 30% / 50% 30% 70% 50%",
            "60% 40% 48% 52% / 40% 60% 40% 60%",
            "50% 50% 30% 70% / 50% 60% 40% 50%"
          ]
        }}
        transition={{
          duration: 16,
          repeat: Infinity,
          ease: "easeInOut",
          delay: 1
        }}
        className="absolute top-[15%] right-[-10%] w-[600px] h-[600px] bg-gradient-to-br from-purple-600/40 via-indigo-800/15 to-transparent blur-[90px]"
      />

      {/* 💧 Liquid Bubble 3: Bottom Left - Deep Nebula Pink Drop */}
      <motion.div
        animate={{
          x: [0, 60, -40, 0],
          y: [0, -50, 50, 0],
          scale: [1, 0.95, 1.1, 1],
          borderRadius: [
            "60% 40% 60% 40% / 40% 50% 50% 60%",
            "40% 60% 40% 60% / 50% 60% 40% 50%",
            "50% 50% 70% 30% / 60% 40% 60% 40%",
            "60% 40% 60% 40% / 40% 50% 50% 60%"
          ]
        }}
        transition={{
          duration: 14,
          repeat: Infinity,
          ease: "easeInOut",
          delay: 2
        }}
        className="absolute bottom-[10%] left-[-8%] w-[500px] h-[500px] bg-gradient-to-bl from-pink-500/35 via-purple-900/10 to-transparent blur-[85px]"
      />

      {/* 💧 Liquid Bubble 4: Bottom Right - Electric Indigo Drop */}
      <motion.div
        animate={{
          x: [0, -40, 50, 0],
          y: [0, 40, -60, 0],
          scale: [1, 1.05, 0.95, 1],
          borderRadius: [
            "45% 55% 45% 55% / 55% 45% 55% 45%",
            "55% 45% 65% 35% / 45% 55% 35% 65%",
            "40% 60% 50% 50% / 65% 35% 60% 40%",
            "45% 55% 45% 55% / 55% 45% 55% 45%"
          ]
        }}
        transition={{
          duration: 18,
          repeat: Infinity,
          ease: "easeInOut",
          delay: 3
        }}
        className="absolute bottom-[-10%] right-[5%] w-[480px] h-[480px] bg-gradient-to-tr from-indigo-500/35 via-cyan-500/10 to-transparent blur-[80px]"
      />

      {/* 🌌 Digital Grid Overlay for Premium Tech Look */}
      <div 
        className="absolute inset-0 opacity-[0.03]" 
        style={{
          backgroundImage: `radial-gradient(circle at 1px 1px, white 1px, transparent 0)`,
          backgroundSize: '32px 32px'
        }}
      />
    </div>
  )
}