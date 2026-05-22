"use client"

import { useState, useRef, useEffect } from "react"
import Link from "next/link"
import { ModeToggle } from "@/components/mode-toggle"
import { Menu, X, ArrowUpRight, User, LogIn, Sparkles } from "lucide-react"
import { motion, AnimatePresence, useMotionValue, useSpring } from "framer-motion"

// Updated platforms list with your brand new branding colors & labels
const platforms = [
  {
    name: "EduHub",
    href: "/learn",
    desc: "E-Learning Platform",
    accent: "#00d2ff", // Cyan / Deep Blue hue
    glyph: "📘",
    index: "01",
  },
  {
    name: "Agency Pro",
    href: "/agency",
    desc: "Digital Agency",
    accent: "#facc15", // Bright Yellow
    glyph: "🏢",
    index: "02",
  },
  {
    name: "XamTest",
    href: "/test",
    desc: "Competition Exam Tests",
    accent: "#3b82f6", // Royal Blue / Light Blue Accent
    glyph: "📝",
    index: "03",
  },
  {
    name: "TradeX",
    href: "/trade",
    desc: "Broker Trading",
    accent: "#991b1b", // Dark Red / Maroon
    glyph: "📊",
    index: "04",
  },
  {
    name: "AppSpace",
    href: "/store",
    desc: "Useful Apps & Websites",
    accent: "#a855f7", // Vibrant Purple
    glyph: "📱",
    index: "05",
  },
  {
    name: "MartX",
    href: "/mart",
    desc: "Odlix Mart",
    accent: "#e11d48", // Deep Red with Gold/Yellow sub-tones
    glyph: "🛒",
    index: "06",
  },
]

// ── Magnetic button effect ────────────────────────────────────────
function MagneticButton({ 
  children, 
  className, 
  onClick, 
  style 
}: {
  children: React.ReactNode
  className?: string
  onClick?: () => void
  style?: React.CSSProperties // Added explicit type mapping for inline style objects
}) {
  const ref = useRef<HTMLButtonElement>(null)
  const x = useMotionValue(0)
  const y = useMotionValue(0)
  const sx = useSpring(x, { stiffness: 220, damping: 20 })
  const sy = useSpring(y, { stiffness: 220, damping: 20 })

  const onMove = (e: React.MouseEvent) => {
    if (!ref.current) return
    const r = ref.current.getBoundingClientRect()
    x.set((e.clientX - r.left - r.width / 2) * 0.22)
    y.set((e.clientY - r.top - r.height / 2) * 0.22)
  }
  const onLeave = () => { x.set(0); y.set(0) }

  return (
    <motion.button
      ref={ref}
      style={{ x: sx, y: sy, ...style }} // Merges magnetic springs with your layout styling objects
      onMouseMove={onMove}
      onMouseLeave={onLeave}
      onClick={onClick}
      className={className}
    >
      {children}
    </motion.button>
  )
}

// ── Platform Card (Parallel Layout & Compact Size) ──────
function PlatformCard({ p, onClick }: { p: typeof platforms[0]; onClick: () => void }) {
  const [hovered, setHovered] = useState(false)
  return (
    <Link
      href={p.href}
      onClick={onClick}
      onMouseEnter={() => setHovered(true)}
      onMouseLeave={() => setHovered(false)}
      className="relative group flex items-center gap-3 p-2 rounded-lg overflow-hidden transition-all duration-150"
      style={{
        border: `1px solid ${hovered ? "rgba(255,255,255,0.07)" : "rgba(255,255,255,0.02)"}`,
        background: hovered ? "rgba(255,255,255,0.025)" : "rgba(255,255,255,0.005)",
        boxShadow: hovered ? "inset 0 1px 0 0 rgba(255,255,255,0.04)" : "none"
      }}
    >
      {/* Background Soft Ray Hue On Hover */}
      <div 
        className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-200 pointer-events-none"
        style={{
          background: `radial-gradient(circle 100px at 8% 50%, ${p.accent}12, transparent 100%)`
        }}
      />

      {/* Index Badge (Slightly smaller & clean) */}
      <span
        className="absolute top-2.5 right-2.5 font-mono text-[8px] font-bold tracking-wider opacity-40 group-hover:opacity-100 transition-opacity"
        style={{ color: hovered ? p.accent : "rgba(255,255,255,0.2)" }}
      >
        {p.index}
      </span>

      {/* Emoji/Icon Box - Made slightly smaller (w-7 h-7) */}
      <div
        className="w-7 h-7 rounded-md flex items-center justify-center text-xs flex-shrink-0 transition-all duration-150"
        style={{
          background: hovered ? `${p.accent}15` : "rgba(255,255,255,0.01)",
          border: `1px solid ${hovered ? `${p.accent}30` : "rgba(255,255,255,0.03)"}`,
        }}
      >
        {p.glyph}
      </div>

      {/* Parallel Row Hierarchy (Compact & Clean text) */}
      <div className="flex flex-1 items-center justify-between min-w-0 pr-6">
        <div className="min-w-0">
          <div
            className="font-semibold text-xs flex items-center gap-0.5 transition-colors duration-150"
            style={{ color: hovered ? p.accent : "rgba(255,255,255,0.85)" }}
          >
            <span className="truncate">{p.name}</span>
            <ArrowUpRight
              className="h-2.5 w-2.5 transition-all duration-150 ease-out flex-shrink-0"
              style={{
                opacity: hovered ? 0.7 : 0,
                transform: hovered ? "translate(0,0) scale(1)" : "translate(-1px,1px) scale(0.8)",
              }}
            />
          </div>
        </div>
        
        {/* Right-aligned description text for parallel uniformity */}
        <p
          className="text-[9px] font-medium tracking-wide truncate transition-colors duration-150 max-w-[150px] text-right hidden sm:block"
          style={{ color: hovered ? "rgba(255,255,255,0.45)" : "rgba(255,255,255,0.2)" }}
        >
          {p.desc}
        </p>
      </div>
    </Link>
  )
}

// ── Main Navbar Component ─────────────────────────────────────────
export function Navbar() {
  const [isMenuOpen, setIsMenuOpen] = useState(false)
  const [scrolled, setScrolled] = useState(false)
  const menuRef = useRef<HTMLDivElement>(null)
  const [isAuthOpen, setIsAuthOpen] = useState(false)
  const [authView, setAuthView] = useState<"login" | "signup">("login")

  const triggerAuth = (view: "login" | "signup") => {
    setAuthView(view)
    setIsAuthOpen(true)
    setIsMenuOpen(false)
  }

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 12)
    window.addEventListener("scroll", onScroll)
    return () => window.removeEventListener("scroll", onScroll)
  }, [])

  useEffect(() => {
    const handler = (e: MouseEvent) => {
      if (menuRef.current && !menuRef.current.contains(e.target as Node)) {
        setIsMenuOpen(false)
      }
    }
    document.addEventListener("mousedown", handler)
    return () => document.removeEventListener("mousedown", handler)
  }, [])

  return (
    <>
      <motion.nav
        initial={{ y: -10, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ duration: 0.5, ease: [0.16, 1, 0.3, 1] }}
        className="fixed top-0 left-0 right-0 z-50 select-none bg-transparent"
      >
        <div 
          className="w-full mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 transition-all duration-400"
          style={{
            borderBottom: scrolled ? "1px solid rgba(255,255,255,0.03)" : "1px solid transparent",
            backgroundColor: scrolled ? "#030308" : "rgba(3,3,8,0.4)",
            backdropFilter: scrolled ? "none" : "blur(24px)",
          }}
        >
          <div className="flex items-center justify-between h-14"> {/* Reduced height slightly for global navbar compactness */}

            {/* Logo Branch */}
            <Link href="/" className="group flex items-center gap-2">
              <span
                className="relative font-black text-base transition-all duration-300"
                style={{
                  fontFamily: "'Playfair Display', Georgia, serif",
                  background: "linear-gradient(180deg, #fff 20%, rgba(255,255,255,0.65) 100%)",
                  WebkitBackgroundClip: "text",
                  WebkitTextFillColor: "transparent",
                  backgroundClip: "text",
                  letterSpacing: "0.22em",
                }}
              >
                ODLIX
              </span>
              <motion.div
                animate={{ rotate: 360 }}
                transition={{ duration: 16, repeat: Infinity, ease: "linear" }}
                className="flex items-center"
              >
                <Sparkles className="h-3 w-3 text-violet-400/50 group-hover:text-violet-300 transition-colors duration-300" />
              </motion.div>
            </Link>

            {/* Controls Cluster */}
            <div className="flex items-center gap-2" ref={menuRef}>
              <ModeToggle />

              <MagneticButton
                onClick={() => setIsMenuOpen(!isMenuOpen)}
                className="relative flex items-center justify-center w-8 h-8 rounded-lg transition-all duration-200 focus:outline-none"
                style={{
                  border: isMenuOpen ? "1px solid rgba(167,139,250,0.25)" : "1px solid rgba(255,255,255,0.04)",
                  background: isMenuOpen ? "rgba(139,92,246,0.1)" : "rgba(255,255,255,0.02)"
                }}
              >
                <AnimatePresence mode="wait">
                  {isMenuOpen ? (
                    <motion.div
                      key="x"
                      initial={{ rotate: -45, opacity: 0, scale: 0.8 }}
                      animate={{ rotate: 0, opacity: 1, scale: 1 }}
                      exit={{ rotate: 45, opacity: 0, scale: 0.8 }}
                      transition={{ duration: 0.12 }}
                    >
                      <X className="h-3.5 w-3.5 text-violet-300" />
                    </motion.div>
                  ) : (
                    <motion.div
                      key="menu"
                      initial={{ rotate: 45, opacity: 0, scale: 0.8 }}
                      animate={{ rotate: 0, opacity: 1, scale: 1 }}
                      exit={{ rotate: -45, opacity: 0, scale: 0.8 }}
                      transition={{ duration: 0.12 }}
                    >
                      <Menu className="h-3.5 w-3.5 text-slate-400" />
                    </motion.div>
                  )}
                </AnimatePresence>
              </MagneticButton>

              {/* Mega Dropdown Panel - Solid Premium Upgrades & Dynamic Width */}
              <AnimatePresence>
                {isMenuOpen && (
                  <motion.div
                    initial={{ opacity: 0, y: 6, scale: 0.98 }}
                    animate={{ opacity: 1, y: 0, scale: 1 }}
                    exit={{ opacity: 0, y: 4, scale: 0.98 }}
                    transition={{ duration: 0.18, ease: [0.16, 1, 0.3, 1] }}
                    className="absolute top-full right-4 mt-1.5 w-[330px] sm:w-[410px] rounded-xl overflow-hidden z-50"
                    style={{
                      background: "#040409", // Solid non-transparent luxury background
                      border: "1px solid rgba(255,255,255,0.05)",
                      boxShadow: "0 30px 60px -12px rgba(0,0,0,0.95), inset 0 1px 0 0 rgba(255,255,255,0.04)",
                    }}
                  >
                    {/* Inner Fluid Lighting Aura */}
                    <div
                      className="absolute -top-12 -right-12 w-44 h-44 rounded-full pointer-events-none opacity-25 filter blur-2xl"
                      style={{ background: "radial-gradient(circle, rgba(139,92,246,0.15) 0%, transparent 70%)" }}
                    />

                    <div className="relative z-10 p-2.5">
                      {/* Badge Counter Info Header */}
                      <div className="flex items-center gap-1.5 px-1.5 py-0.5 mb-1.5">
                        <span className="w-1 h-1 rounded-full bg-violet-400 animate-pulse" />
                        <span className="text-[9px] font-bold tracking-[0.18em] text-white/30 uppercase font-mono">
                          Ecosystem Suite
                        </span>
                        <div
                          className="ml-auto text-[8px] font-mono font-bold px-1.5 py-0.5 rounded"
                          style={{
                            background: "rgba(255,255,255,0.02)",
                            color: "rgba(255,255,255,0.4)",
                            border: "1px solid rgba(255,255,255,0.04)",
                          }}
                        >
                          6 ACTIVE
                        </div>
                      </div>

                      {/* Parallel 1-Column Layout Grid (Compact size optimized) */}
                      <div className="grid grid-cols-1 gap-1">
                        {platforms.map((p) => (
                          <PlatformCard key={p.name} p={p} onClick={() => setIsMenuOpen(false)} />
                        ))}
                      </div>

                      {/* Separator */}
                      <div
                        className="my-2"
                        style={{ height: "1px", background: "linear-gradient(90deg, transparent, rgba(255,255,255,0.04), transparent)" }}
                      />

                      {/* Account Profiles Section */}
                      <div className="flex flex-col gap-0.5">
                        <Link
                          href="/profile"
                          onClick={() => setIsMenuOpen(false)}
                          className="flex items-center gap-2 px-2 py-1.5 rounded-lg group transition-all duration-150"
                          style={{
                            border: "1px solid transparent",
                          }}
                          onMouseEnter={(e) => {
                            e.currentTarget.style.borderColor = "rgba(255,255,255,0.04)"
                            e.currentTarget.style.backgroundColor = "rgba(255,255,255,0.01)"
                          }}
                          onMouseLeave={(e) => {
                            e.currentTarget.style.borderColor = "transparent"
                            e.currentTarget.style.backgroundColor = "transparent"
                          }}
                        >
                          <div
                            className="w-6 h-6 rounded-md flex items-center justify-center flex-shrink-0"
                            style={{ background: "rgba(255,255,255,0.01)", border: "1px solid rgba(255,255,255,0.04)" }}
                          >
                            <User className="h-3 w-3 text-slate-400 group-hover:text-white transition-colors" />
                          </div>
                          <div>
                            <div className="text-[11px] font-bold text-white/60 group-hover:text-white transition-colors">Profile Node Settings</div>
                          </div>
                          <ArrowUpRight className="h-3 w-3 ml-auto opacity-0 group-hover:opacity-30 transition-opacity" style={{ color: "#fff" }} />
                        </Link>

                        {/* Action CTA Buttons */}
                        <div className="grid grid-cols-2 gap-1.5 mt-0.5">
                          <button
                            onClick={() => triggerAuth("login")}
                            className="flex items-center justify-center gap-1 py-2 rounded-lg text-[11px] font-bold transition-all duration-150"
                            style={{
                              border: "1px solid rgba(255,255,255,0.04)",
                              background: "rgba(255,255,255,0.01)",
                              color: "rgba(255,255,255,0.5)",
                            }}
                            onMouseEnter={(e) => {
                              e.currentTarget.style.background = "rgba(255,255,255,0.03)"
                              e.currentTarget.style.color = "#fff"
                              e.currentTarget.style.borderColor = "rgba(255,255,255,0.08)"
                            }}
                            onMouseLeave={(e) => {
                              e.currentTarget.style.background = "rgba(255,255,255,0.01)"
                              e.currentTarget.style.color = "rgba(255,255,255,0.5)"
                              e.currentTarget.style.borderColor = "rgba(255,255,255,0.04)"
                            }}
                          >
                            <LogIn className="h-3 w-3" />
                            Core Access
                          </button>

                          <button
                            onClick={() => triggerAuth("signup")}
                            className="flex items-center justify-center gap-1 py-2 rounded-lg text-[11px] font-black text-white relative overflow-hidden"
                            style={{
                              background: "linear-gradient(135deg, #6d28d9 0%, #be185d 100%)",
                              boxShadow: "0 4px 15px -6px rgba(109,40,217,0.4)",
                              transition: "all 0.15s ease"
                            }}
                            onMouseEnter={(e) => {
                              e.currentTarget.style.boxShadow = "0 6px 18px -5px rgba(109,40,217,0.5)"
                              e.currentTarget.style.opacity = "0.95"
                            }}
                            onMouseLeave={(e) => {
                              e.currentTarget.style.boxShadow = "0 4px 15px -6px rgba(109,40,217,0.4)"
                              e.currentTarget.style.opacity = "1"
                            }}
                          >
                            <Sparkles className="h-3 w-3 text-violet-200" />
                            Initialize
                          </button>
                        </div>
                      </div>
                    </div>
                  </motion.div>
                )}
              </AnimatePresence>
            </div>
          </div>
        </div>
      </motion.nav>

    
    </>
  )
}