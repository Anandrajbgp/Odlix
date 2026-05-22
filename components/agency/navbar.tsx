"use client";

import { useState } from "react";
import Link from "next/link";
import { motion, AnimatePresence } from "framer-motion";
import { 
  Terminal, Sun, Moon, Menu, X, 
  Home, LayoutDashboard, GraduationCap, 
  ShoppingBag, Store, FileSpreadsheet, 
  TrendingUp, Settings, LogIn, LogOut 
} from "lucide-react";

export function AgencyNavbar() {
  const [isOpen, setIsOpen] = useState(false);
  const [isDarkMode, setIsDarkMode] = useState(true);

  // Saare navigation links categorized framework ke andar
  const menuItems = {
    main: [
      { name: "Home", href: "/", icon: Home },
      { name: "Dashboard", href: "/dashboard", icon: LayoutDashboard },
    ],
    platforms: [
      { name: "Learn", href: "/learn", icon: GraduationCap, color: "text-cyan-400" },
      { name: "Mart", href: "/mart", icon: ShoppingBag, color: "text-emerald-400" },
      { name: "Store", href: "/store", icon: Store, color: "text-amber-400" },
      { name: "Test", href: "/test", icon: FileSpreadsheet, color: "text-purple-400" },
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
      {/* Main Navbar Bar */}
      <nav className="border-b border-white/[0.04] bg-black/60 sticky top-0 z-50 backdrop-blur-xl transition-all duration-300">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 h-16 flex justify-between items-center">
          
          {/* Logo Section */}
          <Link href="/agency" className="flex items-center space-x-2.5 group relative z-50">
            <div className="w-8 h-8 rounded-lg bg-gradient-to-br from-yellow-400 to-amber-500 p-[1px] flex items-center justify-center shadow-[0_0_15px_rgba(234,179,8,0.2)]">
              <div className="w-full h-full bg-black rounded-[7px] flex items-center justify-center">
                <Terminal className="h-4 w-4 text-yellow-400 group-hover:rotate-12 transition-transform duration-300" />
              </div>
            </div>
            <span className="font-black text-sm text-white uppercase tracking-[0.15em] font-mono">
              Odlix <span className="text-yellow-400 font-sans font-normal">Agency</span>
            </span>
          </Link>

          {/* Right Side Control Panel */}
          <div className="flex items-center space-x-3 relative z-50">
            
            {/* Dark / Light Toggle Button */}
            <button 
              onClick={() => setIsDarkMode(!isDarkMode)}
              className="p-2.5 rounded-xl bg-white/[0.02] border border-white/5 text-neutral-400 hover:text-white hover:bg-white/[0.05] transition-all duration-300 shadow-inner"
              aria-label="Toggle Theme"
            >
              {isDarkMode ? <Sun className="h-4 w-4 text-amber-400" /> : <Moon className="h-4 w-4" />}
            </button>

            {/* Premium 3-Line Hamburger Trigger */}
            <button
              onClick={() => setIsOpen(!isOpen)}
              className={`p-2.5 rounded-xl border transition-all duration-300 flex items-center justify-center ${
                isOpen 
                  ? "bg-yellow-400 text-black border-transparent shadow-[0_0_20px_rgba(234,179,8,0.3)]" 
                  : "bg-white/[0.02] border-white/5 text-neutral-300 hover:text-white hover:border-white/20"
              }`}
            >
              {isOpen ? <X className="h-4 w-4 stroke-[2.5]" /> : <Menu className="h-4 w-4" />}
            </button>

          </div>
        </div>
      </nav>

      {/* Advanced Full Screen Flyout Menu Architecture */}
      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.2 }}
            className="fixed inset-0 bg-black/80 backdrop-blur-xl z-40 flex justify-end"
            onClick={() => setIsOpen(false)}
          >
            <motion.div
              initial={{ x: "100%", filter: "blur(4px)" }}
              animate={{ x: 0, filter: "blur(0px)" }}
              exit={{ x: "100%", filter: "blur(4px)" }}
              transition={{ type: "spring", damping: 30, stiffness: 300 }}
              className="w-full max-w-sm h-full bg-[#050508]/90 border-l border-white/[0.04] p-6 pt-24 flex flex-col justify-between overflow-y-auto shadow-[-30px_0_60px_rgba(0,0,0,0.8)]"
              onClick={(e) => e.stopPropagation()}
            >
              
              <div className="space-y-8">
                {/* Section 1: Core Navigation */}
                <div>
                  <span className="text-[10px] font-bold text-neutral-600 tracking-widest font-mono uppercase block mb-3">// CORE SYSTEM</span>
                  <div className="space-y-1">
                    {menuItems.main.map((item, idx) => (
                      <Link key={idx} href={item.href} onClick={() => setIsOpen(false)} className="group flex items-center gap-3 px-4 py-3 rounded-xl hover:bg-white/[0.02] text-neutral-300 hover:text-white transition-all duration-200">
                        <item.icon className="w-4 h-4 text-neutral-500 group-hover:text-yellow-400 transition-colors" />
                        <span className="text-sm font-semibold">{item.name}</span>
                      </Link>
                    ))}
                  </div>
                </div>

                {/* Section 2: Ecosystem Connected Platforms */}
                <div>
                  <span className="text-[10px] font-bold text-neutral-600 tracking-widest font-mono uppercase block mb-3">// PLATFORMS CONNECTIONS</span>
                  <div className="space-y-1">
                    {menuItems.platforms.map((item, idx) => (
                      <Link key={idx} href={item.href} onClick={() => setIsOpen(false)} className="group flex items-center justify-between px-4 py-3 rounded-xl hover:bg-white/[0.02] text-neutral-300 hover:text-white transition-all duration-200">
                        <div className="flex items-center gap-3">
                          <item.icon className={`w-4 h-4 ${item.color || "text-neutral-500"}`} />
                          <span className="text-sm font-semibold">{item.name}</span>
                        </div>
                        <span className="text-[9px] font-mono font-bold text-neutral-600 group-hover:text-neutral-400 transition-colors uppercase tracking-wider">0{idx+1} Node</span>
                      </Link>
                    ))}
                  </div>
                </div>
              </div>

              {/* Section 3: Identity & Account Controls */}
              <div className="border-t border-white/[0.04] pt-6 mt-8">
                <span className="text-[10px] font-bold text-neutral-600 tracking-widest font-mono uppercase block mb-3">// GATEWAY ACCESS</span>
                <div className="space-y-1">
                  {menuItems.account.map((item, idx) => (
                    <Link key={idx} href={item.href} onClick={() => setIsOpen(false)} className={`group flex items-center gap-3 px-4 py-3 rounded-xl hover:bg-white/[0.02] text-neutral-400 hover:text-white transition-all duration-200 ${item.className || ""}`}>
                      <item.icon className="w-4 h-4 opacity-60 group-hover:opacity-100 transition-opacity" />
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