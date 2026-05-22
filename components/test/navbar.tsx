"use client";

import { useState } from "react";
import Link from "next/link";
import { motion, AnimatePresence } from "framer-motion";
import { ModeToggle } from "@/components/mode-toggle";
import { 
  Award, Clock, ClipboardList, Menu, X, 
  Home, LayoutDashboard, GraduationCap, ShoppingBag, 
  Store, TrendingUp, Settings, LogIn, LogOut 
} from "lucide-react";

export function TestingNavbar() {
  const [isOpen, setIsOpen] = useState(false);

  // Structural mapping supporting your architecture matrix
  const menuItems = {
    main: [
      { name: "Home", href: "/", icon: Home },
      { name: "Test History", href: "/tests/history", icon: ClipboardList },
    ],
    platforms: [
      { name: "Learn", href: "/learn", icon: GraduationCap, color: "text-cyan-400" },
      { name: "Agency", href: "/agency", icon: Settings, color: "text-yellow-400" },
      { name: "Mart", href: "/mart", icon: ShoppingBag, color: "text-emerald-400" },
      { name: "Store", href: "/store", icon: Store, color: "text-amber-400" },
      { name: "Trade", href: "/trade", icon: TrendingUp, color: "text-blue-400" },
    ],
    account: [
      { name: "Profile Settings", href: "/settings", icon: Settings },
      { name: "Login", href: "/login", icon: LogIn },
      { name: "Logout", href: "/logout", icon: LogOut, className: "text-rose-400 hover:bg-rose-500/10" },
    ]
  };

  return (
    <>
      {/* Premium Glassmorphism Container with Adaptive Borders */}
      <nav className="border-b border-slate-200/40 dark:border-white/[0.04] bg-white/60 dark:bg-[#0b1329]/60 sticky top-0 z-50 backdrop-blur-xl transition-all duration-300">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 h-16 flex justify-between items-center">
          
          {/* Logo Block with Blue Radial Glow */}
          <Link href="/tests" className="flex items-center space-x-2.5 group relative z-50">
            <div className="w-8 h-8 rounded-lg bg-gradient-to-br from-blue-500 to-indigo-600 p-[1px] flex items-center justify-center shadow-[0_0_15px_rgba(59,130,246,0.15)] dark:shadow-[0_0_15px_rgba(59,130,246,0.2)]">
              <div className="w-full h-full bg-white dark:bg-black rounded-[7px] flex items-center justify-center">
                <Award className="h-4 w-4 text-blue-600 dark:text-blue-400 group-hover:translate-y-[-1px] transition-transform duration-300" />
              </div>
            </div>
            <span className="font-black text-sm text-slate-900 dark:text-white uppercase tracking-[0.15em] font-mono">
              Odlix <span className="text-blue-600 dark:text-blue-400 font-sans font-normal">TestHub</span>
            </span>
          </Link>

          {/* Controls & Nav Nodes */}
          <div className="flex items-center space-x-4 relative z-50">
            {/* Live Engine Status Anchor */}
            <span className="hidden md:flex items-center gap-1.5 text-slate-500 dark:text-neutral-400 text-[11px] font-mono font-bold bg-slate-100 dark:bg-white/[0.02] border border-slate-200 dark:border-white/5 px-2.5 py-1.5 rounded-xl">
              <Clock className="h-3.5 w-3.5 text-amber-500 dark:text-amber-400 animate-pulse" /> 
              MOCK ENGINE LIVE
            </span>

            {/* Analytics Routing Component */}
            <Link 
              href="/tests/history" 
              className="hidden sm:flex items-center gap-2 text-sm font-semibold text-slate-600 dark:text-neutral-300 hover:text-blue-600 dark:hover:text-blue-400 transition-colors duration-200 px-3 py-2 rounded-xl hover:bg-slate-50 dark:hover:bg-white/[0.02]"
            >
              <ClipboardList className="h-4 w-4" /> 
              Analytics
            </Link>

            {/* Custom Theme Switcher Integration */}
            <ModeToggle />

            {/* Premium Flyout Trigger Button */}
            <button
              onClick={() => setIsOpen(!isOpen)}
              className={`p-2.5 rounded-xl border transition-all duration-300 flex items-center justify-center ${
                isOpen 
                  ? "bg-blue-600 text-white border-transparent shadow-[0_0_20px_rgba(59,130,246,0.3)]" 
                  : "bg-slate-50 dark:bg-white/[0.02] border-slate-200 dark:border-white/5 text-slate-700 dark:text-neutral-300 hover:text-slate-900 dark:hover:text-white hover:border-slate-300 dark:hover:border-white/20"
              }`}
            >
              {isOpen ? <X className="h-4 w-4 stroke-[2.5]" /> : <Menu className="h-4 w-4" />}
            </button>
          </div>
        </div>
      </nav>

      {/* Cyberpunk Structural Drawer Menu */}
      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ opacity: 0 }} animate={{ opacity: 1 }} exit={{ opacity: 0 }}
            transition={{ duration: 0.2 }}
            className="fixed inset-0 bg-black/40 dark:bg-black/80 backdrop-blur-xl z-40 flex justify-end"
            onClick={() => setIsOpen(false)}
          >
            <motion.div
              initial={{ x: "100%", filter: "blur(4px)" }} animate={{ x: 0, filter: "blur(0px)" }} exit={{ x: "100%", filter: "blur(4px)" }}
              transition={{ type: "spring", damping: 30, stiffness: 300 }}
              className="w-full max-w-sm h-full bg-white/95 dark:bg-[#030712]/90 border-l border-slate-200 dark:border-white/[0.04] p-6 pt-24 flex flex-col justify-between overflow-y-auto"
              onClick={(e) => e.stopPropagation()}
            >
              <div className="space-y-8">
                {/* Core Test Hub Context */}
                <div>
                  <span className="text-[10px] font-bold text-slate-400 dark:text-neutral-600 tracking-widest font-mono uppercase block mb-3">// ASSESSMENT ENGINE</span>
                  <div className="space-y-1">
                    {menuItems.main.map((item, idx) => (
                      <Link key={idx} href={item.href} onClick={() => setIsOpen(false)} className="group flex items-center gap-3 px-4 py-3 rounded-xl hover:bg-slate-50 dark:hover:bg-white/[0.02] text-slate-700 dark:text-neutral-300 hover:text-slate-900 dark:hover:text-white transition-all duration-200">
                        <item.icon className="w-4 h-4 text-slate-400 dark:text-neutral-500 group-hover:text-blue-500 transition-colors" />
                        <span className="text-sm font-semibold">{item.name}</span>
                      </Link>
                    ))}
                  </div>
                </div>

                {/* Micro-Frontend Ecosystem Routing Nodes */}
                <div>
                  <span className="text-[10px] font-bold text-slate-400 dark:text-neutral-600 tracking-widest font-mono uppercase block mb-3">// PLATFORMS CONNECTIONS</span>
                  <div className="space-y-1">
                    {menuItems.platforms.map((item, idx) => (
                      <Link key={idx} href={item.href} onClick={() => setIsOpen(false)} className="group flex items-center justify-between px-4 py-3 rounded-xl hover:bg-slate-50 dark:hover:bg-white/[0.02] text-slate-700 dark:text-neutral-300 hover:text-slate-900 dark:hover:text-white transition-all duration-200">
                        <div className="flex items-center gap-3">
                          <item.icon className={`w-4 h-4 ${item.color || "text-slate-400"}`} />
                          <span className="text-sm font-semibold">{item.name}</span>
                        </div>
                        <span className="text-[9px] font-mono font-bold text-slate-400 dark:text-neutral-600 uppercase tracking-wider">Node 0{idx+1}</span>
                      </Link>
                    ))}
                  </div>
                </div>
              </div>

              {/* Gateway Access Shell */}
              <div className="border-t border-slate-200 dark:border-white/[0.04] pt-6 mt-8">
                <span className="text-[10px] font-bold text-slate-400 dark:text-neutral-600 tracking-widest font-mono uppercase block mb-3">// GATEWAY ACCESS</span>
                <div className="space-y-1">
                  {menuItems.account.map((item, idx) => (
                    <Link key={idx} href={item.href} onClick={() => setIsOpen(false)} className={`group flex items-center gap-3 px-4 py-3 rounded-xl hover:bg-slate-50 dark:hover:bg-white/[0.02] text-slate-500 dark:text-neutral-400 hover:text-slate-900 dark:hover:text-white transition-all duration-200 ${item.className || ""}`}>
                      <item.icon className="w-4 h-4 opacity-60 group-hover:opacity-100" />
                      <span className="text-sm font-semibold">{item.name}</span>
                    </Link>
                  ))}
                </div>
              </div>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
}