"use client"

import { useState, useRef, useEffect } from "react"
import Link from "next/link"
import { ModeToggle } from "@/components/mode-toggle"
import { Menu, X, ArrowUpRight, User, LogIn, Sparkles, GraduationCap, Home, LayoutDashboard } from "lucide-react"
import { motion, AnimatePresence } from "framer-motion"

// Rest of the 5 ecosystem platforms with their unique colors & emojis
const otherPlatforms = [
  {
    name: "Agency Pro",
    href: "/agency",
    desc: "Digital Agency",
    accent: "#facc15", // Bright Yellow
    glyph: "🏢",
  },
  {
    name: "XamTest",
    href: "/test",
    desc: "Competition Exam Tests",
    accent: "#3b82f6", // Royal Blue
    glyph: "📝",
  },
  {
    name: "TradeX",
    href: "/trade",
    desc: "Broker Trading",
    accent: "#991b1b", // Dark Red / Maroon
    glyph: "📊",
  },
  {
    name: "AppSpace",
    href: "/store",
    desc: "Useful Apps & Websites",
    accent: "#a855f7", // Vibrant Purple
    glyph: "📱",
  },
  {
    name: "MartX",
    href: "/mart",
    desc: "Odlix Mart",
    accent: "#e11d48", // Deep Red / Gold
    glyph: "🛒",
  },
]

export function ELearningNavbar() {
  const [isMenuOpen, setIsMenuOpen] = useState(false)
  const menuRef = useRef<HTMLDivElement>(null)

  // Close menu on outside click
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
      <nav className="fixed top-0 left-0 right-0 z-50 select-none border-b border-cyan-500/10 bg-[#020813] text-white">
        <div className="w-full mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 h-14 flex items-center justify-between">
          
          {/* Left Side: Logo Branch Updated to ODLIX LEARN */}
          <Link href="/learn" className="group flex items-center gap-2">
            <GraduationCap className="h-5 w-5 text-cyan-400 group-hover:rotate-12 transition-transform duration-300" />
            <span
              className="relative font-black text-base transition-all duration-300 tracking-wider bg-gradient-to-r from-white to-cyan-400 bg-clip-text text-transparent"
              style={{ fontFamily: "'Playfair Display', Georgia, serif" }}
            >
              ODLIX LEARN
            </span>
          </Link>

          {/* Right Side: Control Actions Cluster */}
          <div className="flex items-center gap-2" ref={menuRef}>
            <ModeToggle />

            {/* 3-Line Premium Toggle Button */}
            <button
              onClick={() => setIsMenuOpen(!isMenuOpen)}
              className="relative flex items-center justify-center w-8 h-8 rounded-lg transition-all duration-200 focus:outline-none border"
              style={{
                borderColor: isMenuOpen ? "rgba(34,211,238,0.3)" : "rgba(255,255,255,0.04)",
                background: isMenuOpen ? "rgba(34,211,238,0.1)" : "rgba(255,255,255,0.02)"
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
                    <X className="h-4 w-4 text-cyan-400" />
                  </motion.div>
                ) : (
                  <motion.div
                    key="menu"
                    initial={{ rotate: 45, opacity: 0, scale: 0.8 }}
                    animate={{ rotate: 0, opacity: 1, scale: 1 }}
                    exit={{ rotate: -45, opacity: 0, scale: 0.8 }}
                    transition={{ duration: 0.12 }}
                  >
                    <Menu className="h-4 w-4 text-slate-300" />
                  </motion.div>
                )}
              </AnimatePresence>
            </button>

            {/* Mega Menu Dropdown Panel - Solid Premium Background */}
            <AnimatePresence>
              {isMenuOpen && (
                <motion.div
                  initial={{ opacity: 0, y: 6, scale: 0.98 }}
                  animate={{ opacity: 1, y: 0, scale: 1 }}
                  exit={{ opacity: 0, y: 4, scale: 0.98 }}
                  transition={{ duration: 0.18, ease: [0.16, 1, 0.3, 1] }}
                  className="absolute top-full right-4 mt-2 w-[320px] sm:w-[390px] rounded-xl overflow-hidden z-50"
                  style={{
                    background: "#040409", // Pure solid non-transparent elite background
                    border: "1px solid rgba(255,255,255,0.06)",
                    boxShadow: "0 30px 60px -12px rgba(0,0,0,0.95), inset 0 1px 0 0 rgba(255,255,255,0.04)",
                  }}
                >
                  <div className="relative p-2.5">
                    
                    {/* SECTION 1: Home & Dashboard (Top Core Nodes) */}
                    <div className="flex flex-col gap-1 mb-2">
                      <div className="text-[9px] font-bold tracking-[0.15em] text-white/30 uppercase px-1.5 py-0.5">
                        Navigation Nodes
                      </div>
                      
                      {/* Home Link */}
                      <Link
                        href="/"
                        onClick={() => setIsMenuOpen(false)}
                        className="group flex items-center justify-between p-2 rounded-md border border-transparent hover:border-cyan-500/20 hover:bg-cyan-500/5 transition-all duration-150"
                      >
                        <div className="flex items-center gap-2.5">
                          <div className="w-6 h-6 rounded bg-slate-800 flex items-center justify-center text-xs text-slate-400 group-hover:text-cyan-400 group-hover:bg-cyan-500/10 transition-colors">
                            <Home className="h-3.5 w-3.5" />
                          </div>
                          <span className="text-xs font-bold text-white/80 group-hover:text-cyan-400 transition-colors">Home Portal</span>
                        </div>
                        <span className="text-[9px] font-medium text-white/20 group-hover:text-white/40 transition-colors hidden sm:block">Main Hub</span>
                      </Link>

                      {/* Dashboard Link */}
                      <Link
                        href="/learn/dashboard"
                        onClick={() => setIsMenuOpen(false)}
                        className="group flex items-center justify-between p-2 rounded-md border border-transparent hover:border-cyan-500/20 hover:bg-cyan-500/5 transition-all duration-150"
                      >
                        <div className="flex items-center gap-2.5">
                          <div className="w-6 h-6 rounded bg-slate-800 flex items-center justify-center text-xs text-slate-400 group-hover:text-cyan-400 group-hover:bg-cyan-500/10 transition-colors">
                            <LayoutDashboard className="h-3.5 w-3.5" />
                          </div>
                          <span className="text-xs font-bold text-white/80 group-hover:text-cyan-400 transition-colors">E-Learning Dashboard</span>
                        </div>
                        <span className="text-[9px] font-medium text-white/20 group-hover:text-white/40 transition-colors hidden sm:block">Analytics</span>
                      </Link>
                    </div>

                    {/* Separator */}
                    <div className="h-[1px] bg-gradient-to-r from-transparent via-white/5 to-transparent my-1.5" />

                    {/* SECTION 2: The Rest 5 Platforms (Parallel Rows & Compact) */}
                    <div className="flex flex-col gap-1 mb-2">
                      <div className="text-[9px] font-bold tracking-[0.15em] text-white/30 uppercase px-1.5 py-0.5">
                        Connected Universes
                      </div>

                      {otherPlatforms.map((p) => {
                        return (
                          <Link
                            key={p.name}
                            href={p.href}
                            onClick={() => setIsMenuOpen(false)}
                            className="group flex items-center gap-3 p-1.5 rounded-lg border border-transparent transition-all duration-150"
                            style={{
                              background: "rgba(255,255,255,0.005)",
                            }}
                            onMouseEnter={(e) => {
                              e.currentTarget.style.borderColor = "rgba(255,255,255,0.06)"
                              e.currentTarget.style.backgroundColor = "rgba(255,255,255,0.02)"
                            }}
                            onMouseLeave={(e) => {
                              e.currentTarget.style.borderColor = "transparent"
                              e.currentTarget.style.backgroundColor = "rgba(255,255,255,0.005)"
                            }}
                          >
                            {/* Glyph Mini Icon Box */}
                            <div className="w-6 h-6 rounded flex items-center justify-center text-xs bg-white/5 border border-white/5 transition-colors">
                              {p.glyph}
                            </div>

                            {/* Parallel Row Hierarchy */}
                            <div className="flex flex-1 items-center justify-between min-w-0 pr-2">
                              <div className="min-w-0">
                                <div className="font-semibold text-xs flex items-center gap-0.5 text-white/80 group-hover:text-white transition-colors">
                                  <span className="truncate group-hover:text-[12.5px] transition-all" style={{ color: p.accent }}>{p.name}</span>
                                  <ArrowUpRight className="h-2.5 w-2.5 opacity-0 group-hover:opacity-60 transition-all transform group-hover:translate-x-0.5" />
                                </div>
                              </div>
                              <p className="text-[9px] font-medium tracking-wide truncate text-white/20 group-hover:text-white/40 text-right hidden sm:block max-w-[145px]">
                                {p.desc}
                              </p>
                            </div>
                          </Link>
                        )
                      })}
                    </div>

                    {/* Separator */}
                    <div className="h-[1px] bg-gradient-to-r from-transparent via-white/5 to-transparent my-1.5" />

                    {/* SECTION 3: Bottom Profile Settings & Access CTA */}
                    <div className="flex flex-col gap-0.5">
                      <Link
                        href="/profile"
                        onClick={() => setIsMenuOpen(false)}
                        className="flex items-center gap-2 px-2 py-1.5 rounded-lg group border border-transparent hover:border-white/5 hover:bg-white/5 transition-all duration-150"
                      >
                        <div className="w-5 h-5 rounded flex items-center justify-center bg-white/5 text-slate-400 group-hover:text-white transition-colors">
                          <User className="h-3 w-3" />
                        </div>
                        <span className="text-[11px] font-bold text-white/60 group-hover:text-white transition-colors">Profile Node Settings</span>
                        <ArrowUpRight className="h-2.5 w-2.5 ml-auto opacity-0 group-hover:opacity-30 transition-opacity" />
                      </Link>

                      {/* Login / Signup Grid */}
                      <div className="grid grid-cols-2 gap-1.5 mt-1.5">
                        <button
                          className="flex items-center justify-center gap-1 py-1.5 rounded-lg text-[11px] font-bold transition-all duration-150 border border-white/5 bg-white/[0.01] text-white/50 hover:bg-white/5 hover:text-white hover:border-white/10"
                        >
                          <LogIn className="h-3 w-3" />
                          Core Access
                        </button>

                        <button
                          className="flex items-center justify-center gap-1 py-1.5 rounded-lg text-[11px] font-black text-white relative overflow-hidden transition-all duration-150 hover:opacity-95"
                          style={{
                            background: "linear-gradient(135deg, #0284c7 0%, #0369a1 100%)",
                            boxShadow: "0 4px 12px -5px rgba(2,132,199,0.5)",
                          }}
                        >
                          <Sparkles className="h-3 w-3 text-cyan-200" />
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
      </nav>
      {/* Spacer layout offset to adjust standard position hierarchy below navbar fixed overlay */}
      <div className="h-14" />
    </>
  )
}