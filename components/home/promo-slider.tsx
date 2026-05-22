"use client"

import { useState, useEffect, useRef } from "react"
import Link from "next/link"
import { motion, AnimatePresence } from "framer-motion"
import { ArrowUpRight } from "lucide-react"

const slides = [
  {
    title: "Learn Hub & Premium Skills",
    subtitle: "Live mentorship with direct affiliate pipelines and curated career tracks.",
    badge: "01",
    label: "E-Learning",
    accent: "#22d3ee", // Cyan match with EduHub
    accentDim: "rgba(34,211,238,0.06)",
    accentBorder: "rgba(34,211,238,0.18)",
    href: "/learn",
    glyph: "📘",
  },
  {
    title: "Agency & Enterprise Growth",
    subtitle: "Automated digital consulting and workflow pipelines at enterprise scale.",
    badge: "02",
    label: "Digital Agency",
    accent: "#facc15", // Bright Yellow match with Agency Pro
    accentDim: "rgba(250,204,21,0.05)",
    accentBorder: "rgba(250,204,21,0.18)",
    href: "/agency",
    glyph: "🏢",
  },
  {
    title: "Competition Exam Test Terminals",
    subtitle: "Real-time mock environments, continuous evaluation, and adaptive practice maps.",
    badge: "03",
    label: "Exam Tests",
    accent: "#60a5fa", // Royal Blue Accent match with XamTest
    accentDim: "rgba(96,165,250,0.06)",
    accentBorder: "rgba(96,165,250,0.2)",
    href: "/test", // Matched with Navbar /test
    glyph: "📝",
  },
  {
    title: "High-Frequency Broker Trading",
    subtitle: "Trade equities, options and commodities on an institutional-grade ledger.",
    badge: "04",
    label: "Broker Trade",
    accent: "#fb7185", // Dark Red / Maroon match with TradeX
    accentDim: "rgba(251,113,133,0.08)",
    accentBorder: "rgba(251,113,133,0.22)",
    href: "/trade",
    glyph: "📊",
  },
  {
    title: "Next-Gen App Store & Utilities",
    subtitle: "Full-scale cloud tools and micro-utilities, no native install required.",
    badge: "05",
    label: "App Store",
    accent: "#c084fc", // Vibrant Purple match with AppSpace
    accentDim: "rgba(192,132,252,0.06)",
    accentBorder: "rgba(192,132,252,0.18)",
    href: "/store",
    glyph: "📱",
  },
  {
    title: "Odlix Mart Global Commerce",
    subtitle: "Decentralized trade nodes, premium consumer goods, and rapid checkout mechanics.",
    badge: "06",
    label: "Odlix Mart",
    accent: "#fb923c", // Gold/Orange blend match with MartX
    accentDim: "rgba(251,146,60,0.06)",
    accentBorder: "rgba(251,146,60,0.25)",
    href: "/mart",
    glyph: "🛒",
  },
]

const INTERVAL = 5000

export function PromoSlider() {
  const [current, setCurrent] = useState(0)
  const [progress, setProgress] = useState(0)
  const timerRef = useRef<ReturnType<typeof setInterval> | null>(null)
  const progressRef = useRef<ReturnType<typeof setInterval> | null>(null)

  const slide = slides[current]

  const startCycle = (idx: number) => {
    if (timerRef.current) clearInterval(timerRef.current)
    if (progressRef.current) clearInterval(progressRef.current)
    setProgress(0)

    let elapsed = 0
    progressRef.current = setInterval(() => {
      elapsed += 40
      setProgress(Math.min((elapsed / INTERVAL) * 100, 100))
    }, 40)

    timerRef.current = setInterval(() => {
      setCurrent((prev) => {
        const next = (prev + 1) % slides.length
        startCycle(next)
        return next
      })
    }, INTERVAL)
  }

  useEffect(() => {
    startCycle(0)
    return () => {
      if (timerRef.current) clearInterval(timerRef.current)
      if (progressRef.current) clearInterval(progressRef.current)
    }
  }, [])

  const goTo = (i: number) => {
    setCurrent(i)
    startCycle(i)
  }

  return (
    <section
      className="relative w-full overflow-hidden py-14 sm:py-16 flex flex-col justify-between gap-12 m-0"
      style={{
        background: "radial-gradient(120% 120% at 50% 0%, rgba(6,6,15,0.93) 0%, rgba(3,3,8,0.97) 100%)",
        borderBottom: "1px solid rgba(255,255,255,0.04)",
        backdropFilter: "blur(24px)",
      }}
    >
      {/* Premium ambient backdrop aura */}
      <AnimatePresence mode="wait">
        <motion.div
          key={current + "-glow"}
          initial={{ opacity: 0, scale: 0.9 }}
          animate={{ opacity: 1, scale: 1 }}
          exit={{ opacity: 0, scale: 1.05 }}
          transition={{ duration: 0.8, ease: "easeOut" }}
          className="absolute inset-0 pointer-events-none"
          style={{
            background: `radial-gradient(circle 500px at 15% 50%, ${slide.accent}08, transparent 100%)`,
          }}
        />
      </AnimatePresence>

      {/* Cyber Grid Lines Overlay */}
      <div 
        className="absolute inset-0 opacity-[0.12] pointer-events-none mix-blend-overlay"
        style={{
          backgroundImage: "linear-gradient(rgba(255,255,255,0.05) 1px, transparent 1px), linear-gradient(90deg, rgba(255,255,255,0.05) 1px, transparent 1px)",
          backgroundSize: "40px 40px"
        }}
      />

      {/* Dynamic Upper Accent Laser Ray */}
      <div
        className="absolute top-0 left-0 right-0 h-[2px] pointer-events-none transition-all duration-700"
        style={{
          background: `linear-gradient(90deg, transparent 0%, ${slide.accent} 25%, ${slide.accent}60 50%, transparent 100%)`,
          boxShadow: `0 1px 12px ${slide.accent}80`,
        }}
      />

      {/* Main Container */}
      <div className="relative z-10 w-full max-w-7xl mx-auto px-6 sm:px-8 flex flex-col md:flex-row md:items-center justify-between gap-8">
        
        {/* Left Side: Badge + Cinematic Typography Layout */}
        <div className="flex items-start sm:items-center gap-5 sm:gap-6 min-w-0 flex-1">
          
          {/* Geometry Badge */}
          <AnimatePresence mode="wait">
            <motion.div
              key={current + "-badge"}
              initial={{ opacity: 0, rotate: -10, scale: 0.85 }}
              animate={{ opacity: 1, rotate: 0, scale: 1 }}
              exit={{ opacity: 0, rotate: 10, scale: 0.85 }}
              transition={{ duration: 0.4, ease: [0.16, 1, 0.3, 1] }}
              className="flex-shrink-0 flex flex-col items-center gap-1.5"
            >
              <div
                className="w-14 h-14 rounded-2xl flex items-center justify-center text-2xl transition-all duration-500 relative group"
                style={{
                  background: `linear-gradient(135deg, ${slide.accentDim}, transparent)`,
                  border: `1px solid ${slide.accentBorder}`,
                  boxShadow: `0 8px 32px ${slide.accent}08, inset 0 0 12px ${slide.accent}10`,
                }}
              >
                <span className="relative z-10 select-none">{slide.glyph}</span>
                <div className="absolute inset-0 rounded-2xl opacity-0 group-hover:opacity-100 transition-opacity duration-300" style={{ background: `radial-gradient(circle, ${slide.accent}15 0%, transparent 70%)` }} />
              </div>
              <span
                className="font-mono text-[9px] font-bold tracking-[0.2em] transition-colors duration-500"
                style={{ color: slide.accent + "99" }}
              >
                SYS.{slide.badge}
              </span>
            </motion.div>
          </AnimatePresence>

          {/* Vertical sleek neon partition */}
          <div
            className="hidden sm:block h-14 w-px flex-shrink-0 transition-colors duration-500"
            style={{ background: `linear-gradient(to bottom, transparent, ${slide.accent}25, transparent)` }}
          />

          {/* Text Section */}
          <div className="min-w-0 flex-1">
            <AnimatePresence mode="wait">
              <motion.div
                key={current + "-text"}
                initial={{ opacity: 0, y: 12 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: -12 }}
                transition={{ duration: 0.4, ease: [0.16, 1, 0.3, 1] }}
              >
                <div className="flex flex-wrap items-center gap-3 mb-2">
                  <span
                    className="text-[10px] font-bold tracking-[0.18em] uppercase px-2.5 py-0.5 rounded-md transition-colors duration-500 border"
                    style={{ 
                      color: slide.accent, 
                      backgroundColor: slide.accentDim,
                      borderColor: slide.accentBorder 
                    }}
                  >
                    {slide.label}
                  </span>
                </div>
                <h4
                  className="text-xl sm:text-2xl font-black tracking-tight text-white mb-1.5"
                  style={{
                    fontFamily: "'DM Sans', sans-serif",
                  }}
                >
                  {slide.title}
                </h4>
                <p
                  className="text-sm max-w-2xl font-light leading-relaxed"
                  style={{ color: "rgba(255,255,255,0.42)" }}
                >
                  {slide.subtitle}
                </p>
              </motion.div>
            </AnimatePresence>
          </div>
        </div>

        {/* Right Side: CTA Button — "Visit Now" with Synchronized Links */}
        <div className="flex items-center flex-shrink-0 self-end md:self-center">
          <AnimatePresence mode="wait">
            <motion.div
              key={current + "-cta"}
              initial={{ opacity: 0, scale: 0.95 }}
              animate={{ opacity: 1, scale: 1 }}
              exit={{ opacity: 0, scale: 0.95 }}
              transition={{ duration: 0.3 }}
            >
              <Link
                href={slide.href}
                className="group flex items-center gap-2 text-xs font-bold px-6 py-3.5 rounded-xl transition-all duration-500 border"
                style={{
                  color: "#ffffff",
                  background: `linear-gradient(135deg, ${slide.accent}15, ${slide.accent}02)`,
                  borderColor: slide.accentBorder,
                  letterSpacing: "0.05em",
                  textTransform: "uppercase",
                }}
                onMouseEnter={(e) => {
                  e.currentTarget.style.boxShadow = `0 0 30px ${slide.accent}20`
                  e.currentTarget.style.borderColor = slide.accent
                  e.currentTarget.style.transform = "translateY(-2px)"
                }}
                onMouseLeave={(e) => {
                  e.currentTarget.style.boxShadow = "none"
                  e.currentTarget.style.borderColor = slide.accentBorder
                  e.currentTarget.style.transform = "none"
                }}
              >
                Visit Now
                <ArrowUpRight
                  className="h-4 w-4 text-white transition-transform duration-300 group-hover:translate-x-1 group-hover:-translate-y-1"
                />
              </Link>
            </motion.div>
          </AnimatePresence>
        </div>
      </div>

      {/* Bottom Micro Dashboard Layout (Inline progress pipeline) */}
      <div className="relative z-10 w-full max-w-7xl mx-auto px-6 sm:px-8 hidden lg:block">
        <div className="grid grid-cols-6 gap-5 pt-4 border-t border-white/[0.03]">
          {slides.map((s, i) => {
            const isActive = i === current
            return (
              <button
                key={i}
                onClick={() => goTo(i)}
                className="group flex flex-col text-left relative pb-2 transition-all duration-300 focus:outline-none"
              >
                <span 
                  className="text-[10px] font-bold uppercase tracking-wider mb-1 transition-colors duration-300"
                  style={{ color: isActive ? s.accent : "rgba(255,255,255,0.22)" }}
                >
                  {s.label}
                </span>
                
                {/* Horizontal Progress bar for each block */}
                <div className="w-full h-[2px] bg-white/[0.04] rounded-full overflow-hidden relative mt-1">
                  {isActive && (
                    <div 
                      className="absolute top-0 left-0 bottom-0 origin-left"
                      style={{
                        background: s.accent,
                        width: `${progress}%`,
                        boxShadow: `0 0 8px ${s.accent}`,
                        transition: "width 0.04s linear"
                      }}
                    />
                  )}
                  {!isActive && (
                    <div className="absolute inset-0 bg-white/5 opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                  )}
                </div>
              </button>
            )
          })}
        </div>
      </div>

      {/* Bottom razor layout line */}
      <div
        className="absolute bottom-0 left-0 right-0 h-px pointer-events-none"
        style={{ background: "linear-gradient(90deg, transparent, rgba(255,255,255,0.02), transparent)" }}
      />
    </section>
  )
}