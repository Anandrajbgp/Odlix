"use client";

import { useState } from "react";
import Link from "next/link";
import { motion, AnimatePresence } from "framer-motion";
import { ModeToggle } from "@/components/mode-toggle";
import { 
  Smartphone, Compass, Download, Menu, X, 
  Home, GraduationCap, ShoppingBag, Settings, 
  FileSpreadsheet, TrendingUp, LogIn, LogOut 
} from "lucide-react";

export function AppsNavbar() {
  const [isOpen, setIsOpen] = useState(false);

  // Exact 5 external platforms (excluding Apps/Store itself)
  const menuItems = {
    main: [
      { name: "Home", href: "/", icon: Home },
      { name: "Discover Center", href: "/apps/explore", icon: Compass },
      { name: "Downloads Dashboard", href: "/apps/dashboard", icon: Download },
    ],
    platforms: [
      { name: "Learn", href: "/learn", icon: GraduationCap, color: "text-cyan-400" },
      { name: "Agency", href: "/agency", icon: Settings, color: "text-yellow-400" },
      { name: "Mart", href: "/mart", icon: ShoppingBag, color: "text-amber-400" },
      { name: "Test", href: "/test", icon: FileSpreadsheet, color: "text-blue-400" },
      { name: "Trade", href: "/trade", icon: TrendingUp, color: "text-emerald-400" },
    ],
    account: [
      { name: "Profile Settings", href: "/settings", icon: Settings },
      { name: "Login", href: "/login", icon: LogIn },
      { name: "Logout", href: "/logout", icon: LogOut, className: "text-rose-400 hover:bg-rose-500/10" },
    ]
  };

  return (
    <>
      {/* Translucent Cyberpunk Violet Header Frame */}
      <nav className="border-b border-purple-950/40 dark:border-purple-950/60 bg-[#14052e]/60 sticky top-0 z-50 backdrop-blur-xl transition-all duration-300">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 h-16 flex justify-between items-center">
          
          {/* Neon Powered Purple App Logo Anchor */}
          <Link href="/apps" className="flex items-center space-x-2.5 group relative z-50">
            <div className="w-8 h-8 rounded-lg bg-gradient-to-br from-purple-500 to-fuchsia-600 p-[1px] flex items-center justify-center shadow-[0_0_15px_rgba(168,85,247,0.15)] dark:shadow-[0_0_15px_rgba(168,85,247,0.25)]">
              <div className="w-full h-full bg-black rounded-[7px] flex items-center justify-center">
                <Smartphone className="h-4 w-4 text-purple-400 group-hover:scale-105 transition-transform duration-300" />
              </div>
            </div>
            <span className="font-black text-sm text-white uppercase tracking-[0.15em] font-mono">
              Odlix <span className="text-purple-400 font-sans font-normal">Apps</span>
            </span>
          </Link>

          {/* Action Blocks & Dynamic Triggers */}
          <div className="flex items-center space-x-4 relative z-50">
            {/* Discover Link Integration */}
            <Link 
              href="/apps/explore" 
              className="hidden sm:flex items-center gap-1.5 text-sm font-semibold text-purple-300 hover:text-white transition-colors duration-200 px-3 py-2 rounded-xl hover:bg-white/[0.02]"
            >
              <Compass className="h-4 w-4 text-purple-400" /> Discover
            </Link>

            {/* Downloads Custom Node Badge */}
            <Link 
              href="/apps/dashboard" 
              className="hidden md:flex items-center gap-1.5 text-xs font-bold px-3 py-1.5 rounded-xl bg-purple-900/30 border border-purple-800/40 text-purple-300 hover:bg-purple-900/50 hover:text-white transition-all duration-200 tracking-wide font-mono"
            >
              <Download className="h-3.5 w-3.5 animate-bounce" /> DOWNLOADS
            </Link>

            {/* Theme Controller Core */}
            <ModeToggle />

            {/* Navigation Drawer Switcher Trigger */}
            <button
              onClick={() => setIsOpen(!isOpen)}
              className={`p-2.5 rounded-xl border transition-all duration-300 flex items-center justify-center ${
                isOpen 
                  ? "bg-purple-600 text-white border-transparent shadow-[0_0_20px_rgba(168,85,247,0.35)]" 
                  : "bg-white/[0.02] border-white/5 text-neutral-300 hover:text-purple-400 hover:border-purple-950/60"
              }`}
            >
              {isOpen ? <X className="h-4 w-4 stroke-[2.5]" /> : <Menu className="h-4 w-4" />}
            </button>
          </div>
        </div>
      </nav>

      {/* Slide-out Panel Overlay System */}
      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ opacity: 0 }} animate={{ opacity: 1 }} exit={{ opacity: 0 }}
            transition={{ duration: 0.2 }}
            className="fixed inset-0 bg-black/80 backdrop-blur-xl z-40 flex justify-end"
            onClick={() => setIsOpen(false)}
          >
            <motion.div
              initial={{ x: "100%", filter: "blur(4px)" }} animate={{ x: 0, filter: "blur(0px)" }} exit={{ x: "100%", filter: "blur(4px)" }}
              transition={{ type: "spring", damping: 30, stiffness: 300 }}
              className="w-full max-w-sm h-full bg-[#070212]/95 border-l border-purple-950/30 p-6 pt-24 flex flex-col justify-between overflow-y-auto"
              onClick={(e) => e.stopPropagation()}
            >
              <div className="space-y-8">
                {/* Apps Platform Segment */}
                <div>
                  <span className="text-[10px] font-bold text-neutral-600 tracking-widest font-mono uppercase block mb-3">// DISTRIBUTION MATRIX</span>
                  <div className="space-y-1">
                    {menuItems.main.map((item, idx) => (
                      <Link key={idx} href={item.href} onClick={() => setIsOpen(false)} className="group flex items-center gap-3 px-4 py-3 rounded-xl hover:bg-purple-950/20 text-neutral-300 hover:text-white transition-all duration-200">
                        <item.icon className="w-4 h-4 text-neutral-500 group-hover:text-purple-400 transition-colors" />
                        <span className="text-sm font-semibold">{item.name}</span>
                      </Link>
                    ))}
                  </div>
                </div>

                {/* Fixed Cross-Over Grid (Exactly 5 Sister Nodes) */}
                <div>
                  <span className="text-[10px] font-bold text-neutral-600 tracking-widest font-mono uppercase block mb-3">// INTERLINKED SUITES</span>
                  <div className="space-y-1">
                    {menuItems.platforms.map((item, idx) => (
                      <Link key={idx} href={item.href} onClick={() => setIsOpen(false)} className="group flex items-center justify-between px-4 py-3 rounded-xl hover:bg-white/[0.02] text-neutral-300 hover:text-white transition-all duration-200">
                        <div className="flex items-center gap-3">
                          <item.icon className={`w-4 h-4 ${item.color || "text-neutral-500"}`} />
                          <span className="text-sm font-semibold">{item.name}</span>
                        </div>
                        <span className="text-[9px] font-mono font-bold text-neutral-600 uppercase tracking-wider">Node 0{idx+1}</span>
                      </Link>
                    ))}
                  </div>
                </div>
              </div>

              {/* Secure Auth Shell Access Guard */}
              <div className="border-t border-white/[0.04] pt-6 mt-8">
                <span className="text-[10px] font-bold text-neutral-600 tracking-widest font-mono uppercase block mb-3">// SECURE KEY CONTROLLER</span>
                <div className="space-y-1">
                  {menuItems.account.map((item, idx) => (
                    <Link key={idx} href={item.href} onClick={() => setIsOpen(false)} className={`group flex items-center gap-3 px-4 py-3 rounded-xl hover:bg-white/[0.02] text-neutral-400 hover:text-white transition-all duration-200 ${item.className || ""}`}>
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