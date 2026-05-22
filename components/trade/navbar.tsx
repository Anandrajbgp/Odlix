"use client";

import { useState } from "react";
import Link from "next/link";
import { motion, AnimatePresence } from "framer-motion";
import { ModeToggle } from "@/components/mode-toggle";
import { 
  TrendingUp, Activity, Wallet, Menu, X, 
  Home, GraduationCap, ShoppingBag, Smartphone, 
  FileSpreadsheet, Settings, LogIn, LogOut 
} from "lucide-react";

export function TradingNavbar() {
  const [isOpen, setIsOpen] = useState(false);

  // Filtered Matrix: Explicitly mapping the 5 sibling nodes excluding Trade itself
  const menuItems = {
    main: [
      { name: "Home", href: "/", icon: Home },
      { name: "Market Live Ticker", href: "/trading/markets", icon: Activity },
    ],
    platforms: [
      { name: "Learn", href: "/learn", icon: GraduationCap, color: "text-cyan-400" },
      { name: "Agency", href: "/agency", icon: Settings, color: "text-yellow-400" },
      { name: "Mart", href: "/mart", icon: ShoppingBag, color: "text-amber-400" },
      { name: "Apps", href: "/apps", icon: Smartphone, color: "text-purple-400" },
      { name: "Test", href: "/test", icon: FileSpreadsheet, color: "text-blue-400" },
    ],
    account: [
      { name: "Profile Settings", href: "/settings", icon: Settings },
      { name: "Login", href: "/login", icon: LogIn },
      { name: "Logout", href: "/logout", icon: LogOut, className: "text-rose-400 hover:bg-rose-500/10" },
    ]
  };

  return (
    <>
      {/* Deep Crimson Wine Translucent Top Nav Frame */}
      <nav className="border-b border-rose-950/40 dark:border-rose-950/60 bg-[#1f0707]/60 sticky top-0 z-50 backdrop-blur-xl transition-all duration-300">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 h-16 flex justify-between items-center">
          
          {/* Brand Engine Group */}
          <div className="flex items-center space-x-8">
            {/* Cyberpunk Rose Broker Logo */}
            <Link href="/trading" className="flex items-center space-x-2.5 group relative z-50">
              <div className="w-8 h-8 rounded-lg bg-gradient-to-br from-rose-500 to-red-600 p-[1px] flex items-center justify-center shadow-[0_0_15px_rgba(244,63,94,0.15)] dark:shadow-[0_0_15px_rgba(244,63,94,0.25)]">
                <div className="w-full h-full bg-black rounded-[7px] flex items-center justify-center">
                  <TrendingUp className="h-4 w-4 text-rose-500 group-hover:scale-110 transition-transform duration-300" />
                </div>
              </div>
              <span className="font-black text-sm text-white uppercase tracking-[0.15em] font-mono">
                Odlix <span className="text-rose-500 font-sans font-normal">Broker</span>
              </span>
            </Link>

            {/* High-frequency Live Ticker Feed */}
            <div className="hidden lg:flex items-center space-x-4 text-[11px] font-mono font-bold text-rose-400/80 bg-rose-950/20 px-3 py-1.5 rounded-lg border border-rose-950/30">
              <span className="flex items-center gap-1.5">
                <Activity className="h-3 w-3 text-emerald-500 animate-pulse" /> 
                NIFTY: <span className="text-white">23,450</span> 
                <span className="text-emerald-400">(+0.4%)</span>
              </span>
            </div>
          </div>

          {/* Secure Web3 / Web2 Controller Actions */}
          <div className="flex items-center space-x-3.5 relative z-50">
            
            {/* Wallet Integration Status Module */}
            <div className="flex items-center gap-2 px-3 py-2 rounded-xl bg-rose-950/30 border border-rose-900/40 text-xs font-mono font-bold text-rose-300 shadow-[inset_0_1px_1px_rgba(255,255,255,0.02)]">
              <Wallet className="h-3.5 w-3.5 text-rose-400" />
              <span className="hidden sm:inline">Wallet Linked</span>
              <span className="w-1.5 h-1.5 rounded-full bg-emerald-500 shadow-[0_0_8px_rgba(16,185,129,0.6)]" />
            </div>

            {/* Global Identity Mode Toggle */}
            <ModeToggle />

            {/* High-performance Navigation Trigger */}
            <button
              onClick={() => setIsOpen(!isOpen)}
              className={`p-2.5 rounded-xl border transition-all duration-300 flex items-center justify-center ${
                isOpen 
                  ? "bg-rose-600 text-white border-transparent shadow-[0_0_20px_rgba(244,63,94,0.35)]" 
                  : "bg-white/[0.02] border-white/5 text-neutral-300 hover:text-rose-400 hover:border-rose-950/60"
              }`}
            >
              {isOpen ? <X className="h-4 w-4 stroke-[2.5]" /> : <Menu className="h-4 w-4" />}
            </button>
          </div>
        </div>
      </nav>

      {/* Cyberpunk Navigation Drawer Shell */}
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
              className="w-full max-w-sm h-full bg-[#0d0303]/95 border-l border-rose-950/30 p-6 pt-24 flex flex-col justify-between overflow-y-auto"
              onClick={(e) => e.stopPropagation()}
            >
              <div className="space-y-8">
                {/* Internal Trading Routing Blocks */}
                <div>
                  <span className="text-[10px] font-bold text-neutral-600 tracking-widest font-mono uppercase block mb-3">// TRANSACTION TERMINAL</span>
                  <div className="space-y-1">
                    {menuItems.main.map((item, idx) => (
                      <Link key={idx} href={item.href} onClick={() => setIsOpen(false)} className="group flex items-center gap-3 px-4 py-3 rounded-xl hover:bg-rose-950/20 text-neutral-300 hover:text-white transition-all duration-200">
                        <item.icon className="w-4 h-4 text-neutral-500 group-hover:text-rose-500 transition-colors" />
                        <span className="text-sm font-semibold">{item.name}</span>
                      </Link>
                    ))}
                  </div>
                </div>

                {/* Ecosystem Sister Nodes Grid */}
                <div>
                  <span className="text-[10px] font-bold text-neutral-600 tracking-widest font-mono uppercase block mb-3">// BACKBONE CLUSTERS</span>
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

              {/* Secure Profile / Engine Control */}
              <div className="border-t border-white/[0.04] pt-6 mt-8">
                <span className="text-[10px] font-bold text-neutral-600 tracking-widest font-mono uppercase block mb-3">// BROKER IDENT MATRIX</span>
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