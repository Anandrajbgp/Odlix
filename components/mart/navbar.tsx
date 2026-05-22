"use client";

import { useState } from "react";
import Link from "next/link";
import { motion, AnimatePresence } from "framer-motion";
import { ModeToggle } from "@/components/mode-toggle";
import { 
  ShoppingBag, ShoppingCart, Menu, X, 
  Home, LayoutDashboard, GraduationCap, Store, 
  FileSpreadsheet, TrendingUp, Settings, LogIn, LogOut 
} from "lucide-react";

export function MartNavbar() {
  const [isOpen, setIsOpen] = useState(false);

  // Ecosystem matrix mappings
  const menuItems = {
    main: [
      { name: "Home", href: "/", icon: Home },
      { name: "Marketplace Dashboard", href: "/dashboard", icon: LayoutDashboard },
    ],
    platforms: [
      { name: "Learn", href: "/learn", icon: GraduationCap, color: "text-cyan-400" },
      { name: "Agency", href: "/agency", icon: Settings, color: "text-yellow-400" },
      { name: "Store", href: "/store", icon: Store, color: "text-purple-400" },
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
      {/* Deep Wine / Obsidian Translucent Top Bar */}
      <nav className="border-b border-amber-950/40 dark:border-amber-950/60 bg-[#1c0505]/60 sticky top-0 z-50 backdrop-blur-xl transition-all duration-300">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 h-16 flex justify-between items-center">
          
          {/* Logo Component with Golden-Amber Radial Burst */}
          <Link href="/mart" className="flex items-center space-x-2.5 group relative z-50">
            <div className="w-8 h-8 rounded-lg bg-gradient-to-br from-amber-500 to-yellow-600 p-[1px] flex items-center justify-center shadow-[0_0_15px_rgba(245,158,11,0.2)]">
              <div className="w-full h-full bg-black rounded-[7px] flex items-center justify-center">
                <ShoppingBag className="h-4 w-4 text-amber-500 group-hover:scale-110 transition-transform duration-300" />
              </div>
            </div>
            <span className="font-black text-sm text-white uppercase tracking-[0.15em] font-mono">
              Odlix <span className="text-amber-500 font-sans font-normal">Mart</span>
            </span>
          </Link>

          {/* Action Hub */}
          <div className="flex items-center space-x-3.5 relative z-50">
            
            {/* High-fidelity Shopping Cart Badge Module */}
            <div className="relative p-2.5 rounded-xl border border-amber-950/60 bg-amber-950/20 text-amber-400 cursor-pointer hover:bg-amber-950/40 transition-colors duration-200">
              <ShoppingCart className="h-4 w-4" />
              <span className="absolute -top-1 -right-1 h-4 w-4 rounded-full bg-amber-500 text-[9px] font-black text-black flex items-center justify-center shadow-[0_0_10px_rgba(245,158,11,0.4)]">
                0
              </span>
            </div>

            {/* Custom Theme Controller */}
            <ModeToggle />

            {/* Micro-Drawer State Switcher */}
            <button
              onClick={() => setIsOpen(!isOpen)}
              className={`p-2.5 rounded-xl border transition-all duration-300 flex items-center justify-center ${
                isOpen 
                  ? "bg-amber-500 text-black border-transparent shadow-[0_0_20px_rgba(245,158,11,0.3)]" 
                  : "bg-white/[0.02] border-white/5 text-neutral-300 hover:text-amber-400 hover:border-amber-950/60"
              }`}
            >
              {isOpen ? <X className="h-4 w-4 stroke-[2.5]" /> : <Menu className="h-4 w-4" />}
            </button>
          </div>
        </div>
      </nav>

      {/* Slide-out Frame Container */}
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
              className="w-full max-w-sm h-full bg-[#080202]/95 border-l border-amber-950/30 p-6 pt-24 flex flex-col justify-between overflow-y-auto"
              onClick={(e) => e.stopPropagation()}
            >
              <div className="space-y-8">
                {/* Marketplace Segment */}
                <div>
                  <span className="text-[10px] font-bold text-neutral-600 tracking-widest font-mono uppercase block mb-3">// LOGISTICS & DISTRIBUTION</span>
                  <div className="space-y-1">
                    {menuItems.main.map((item, idx) => (
                      <Link key={idx} href={item.href} onClick={() => setIsOpen(false)} className="group flex items-center gap-3 px-4 py-3 rounded-xl hover:bg-amber-950/10 text-neutral-300 hover:text-white transition-all duration-200">
                        <item.icon className="w-4 h-4 text-neutral-500 group-hover:text-amber-500 transition-colors" />
                        <span className="text-sm font-semibold">{item.name}</span>
                      </Link>
                    ))}
                  </div>
                </div>

                {/* Shared Cluster Routing Nodes */}
                <div>
                  <span className="text-[10px] font-bold text-neutral-600 tracking-widest font-mono uppercase block mb-3">// CLUSTER GATEWAYS</span>
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

              {/* Secure Auth/Settings Gate */}
              <div className="border-t border-white/[0.04] pt-6 mt-8">
                <span className="text-[10px] font-bold text-neutral-600 tracking-widest font-mono uppercase block mb-3">// USER IDENT CONTROLLER</span>
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