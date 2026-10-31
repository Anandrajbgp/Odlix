"use client";

import Link from "next/link";
import Image from "next/image";
import { motion, AnimatePresence } from "framer-motion";
import {
  Menu,
  X,
  Home,
  BookOpen,
  Briefcase,
  GraduationCap,
  BarChart3,
  LayoutGrid,
  ShoppingBag,
  LayoutDashboard,
  Globe,
  Send,
  type LucideIcon
} from "lucide-react";
import { useState, useEffect } from "react";
import { cn } from "@/lib/utils";
import { usePathname } from "next/navigation";

type PlatformConfig = {
  name: string;
  logoTitle: string;
  href: string;
  icon: LucideIcon;
  color: string;
  navBg: string;
  navText: string;
  border: string;
};

const platforms: PlatformConfig[] = [
  {
    name: "E-Learning",
    logoTitle: "Elearning",
    href: "/elearning",
    icon: BookOpen,
    color: "text-[#4f46e5]",
    navBg: "bg-black/95",
    navText: "text-white",
    border: "border-[#4f46e5]/40"
  },
  {
    name: "Mart",
    logoTitle: "Mart",
    href: "/mart",
    icon: ShoppingBag,
    color: "text-[#ea580c]",
    navBg: "bg-black/95",
    navText: "text-white",
    border: "border-[#ea580c]/40"
  },
  {
    name: "Mock Tests",
    logoTitle: "Mock Tests",
    href: "/competition",
    icon: GraduationCap,
    color: "text-[#0ea5e9]",
    navBg: "bg-black/95",
    navText: "text-white",
    border: "border-[#0ea5e9]/40"
  },
  {
    name: "Agency",
    logoTitle: "Agency",
    href: "/agency",
    icon: Briefcase,
    color: "text-[#f59e0b]",
    navBg: "bg-black/95",
    navText: "text-white",
    border: "border-[#f59e0b]/40"
  },
  {
    name: "Trading",
    logoTitle: "Trading",
    href: "/trading",
    icon: BarChart3,
    color: "text-[#7CFC00]",
    navBg: "bg-black/95",
    navText: "text-white",
    border: "border-[#7CFC00]/40"
  },
  {
    name: "App Store",
    logoTitle: "App Store",
    href: "/apps",
    icon: LayoutGrid,
    color: "text-[#0ea5e9]",
    navBg: "bg-black/95",
    navText: "text-white",
    border: "border-[#64748b]/40"
  },
  {
    name: "Useful Websites",
    logoTitle: "Useful Websites",
    href: "/useful-websites",
    icon: Globe,
    color: "text-[#14b8a6]",
    navBg: "bg-black/95",
    navText: "text-white",
    border: "border-[#14b8a6]/40"
  },
  {
    name: "Telegram Bots",
    logoTitle: "Telegram Bots",
    href: "/telegram-bots",
    icon: Send,
    color: "text-[#24a1ee]",
    navBg: "bg-black/95",
    navText: "text-white",
    border: "border-[#24a1ee]/40"
  }
];

export function Navbar() {
  const [isOpen, setIsOpen] = useState(false);
  const pathname = usePathname();
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => setIsScrolled(window.scrollY > 10);
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const toggleMenu = () => setIsOpen(!isOpen);

  useEffect(() => {
    setIsOpen(false);
  }, [pathname]);

  useEffect(() => {
    if (typeof document === "undefined") {
      return;
    }

    const previousOverflow = document.body.style.overflow;
    document.body.style.overflow = isOpen ? "hidden" : previousOverflow || "auto";

    return () => {
      document.body.style.overflow = previousOverflow;
    };
  }, [isOpen]);

  const currentPlatform = platforms.find(p => pathname.startsWith(p.href));

  const isHomeRoute = pathname === "/" || ["/about", "/terms", "/privacy"].includes(pathname);
  const navBg = isHomeRoute ? "bg-[#050b14]/90 backdrop-blur-2xl" : (currentPlatform?.navBg || "bg-[#18180a]/95");
  const navText = isHomeRoute ? "text-white" : (currentPlatform?.navText || "text-white");
  const border = isHomeRoute ? "border-cyan-500/30" : (currentPlatform?.border || "border-[#4f46e5]/45");
  const iconColor = isHomeRoute ? "text-cyan-400" : (currentPlatform?.color || "text-[#4f46e5]");
  const isHome = pathname === "/";
  const mobilePanelSurface = "bg-slate-950/95 text-white";
  const logoTitle = isHome ? "ODLIX ECOSYSTEM" : (currentPlatform?.logoTitle ?? "ODLIX ECOSYSTEM");
  const logoSubtitle = isHome ? "" : "by Odlix";
  const homeLogoSrc = "/logo-home.png";
  const LogoIcon = isHome ? Home : (currentPlatform?.icon ?? Home);

  // Check if current platform is one of the 3 with a dashboard (E-Learning, Mart, Mock Tests)
  const hasDashboard = !isHome && currentPlatform?.href && ["/elearning", "/mart", "/competition"].includes(currentPlatform.href);

  return (
    <>
      <nav className={cn(
        "fixed top-3 left-3 right-3 z-[120] rounded-2xl border backdrop-blur-2xl transition-all duration-500",
        navBg,
        border,
        isScrolled || isOpen ? "py-3 shadow-xl" : "py-5 shadow-sm",
        navText
      )}>
        <div className="container mx-auto px-4 flex items-center justify-between">

          {/* Logo Section */}
          <Link href="/" className="group relative z-[150] flex items-center space-x-3 transition-all active:scale-95">
            <div className={cn("relative flex h-11 w-11 shrink-0 items-center justify-center overflow-hidden rounded-full border shadow-xl transition-transform group-hover:scale-110", navText === "text-white" ? "border-white/15 bg-white/10" : "border-border bg-background/80")}>
              {isHome ? (
                <Image
                  src={homeLogoSrc}
                  alt="Odlix logo"
                  fill
                  sizes="44px"
                  priority
                  className="scale-[1.2] object-contain"
                />
              ) : (
                <LogoIcon className={cn("h-5 w-5", iconColor)} />
              )}
            </div>
            <div className="flex flex-col">
              <div className={cn("text-sm font-black leading-none tracking-[0.14em] uppercase md:text-base", navText === "text-white" ? "text-white" : "text-slate-900 dark:text-white")}>
                {logoTitle}
              </div>
              {logoSubtitle ? (
                <span className={cn("mt-1 text-[10px] font-bold leading-none tracking-[0.24em] uppercase", iconColor, navText === "text-white" ? "opacity-75" : "opacity-100")}>
                  {logoSubtitle}
                </span>
              ) : null}
            </div>
          </Link>

          {/* Desktop Right */}
          <div className="hidden md:flex items-center space-x-4 relative z-[150]">
             {/* 1. Home Link */}
             <Link
               href="/"
               className={cn(
                 "p-2 rounded-xl transition-all active:scale-90",
                 isHome ? "bg-white/10 text-cyan-400" : "opacity-70 hover:opacity-100 hover:bg-white/5 text-white"
               )}
               title="Home"
             >
               <Home className="h-5 w-5" />
             </Link>

             {/* 2. Dashboard (Only for E-Learning, Mart, Mock Tests) */}
             {hasDashboard && (
               <Link
                 href={`${currentPlatform?.href}/dashboard`}
                 className={cn(
                   "inline-flex items-center gap-2 rounded-xl border px-3 py-2 text-[11px] font-black uppercase tracking-[0.18em] transition-all active:scale-95",
                   navText === "text-white"
                     ? "border-white/20 bg-white/10 text-white hover:bg-white/15"
                     : "border-border bg-muted text-foreground hover:bg-muted/80"
                 )}
               >
                 <LayoutDashboard className={cn("h-4 w-4", iconColor)} />
                 Dashboard
               </Link>
             )}

             {/* 3. 8 Platforms */}
             <div className={cn("flex items-center space-x-1 border-l border-r px-3", navText === "text-white" ? "border-white/10" : "border-border")}>
                {platforms.map(p => (
                  <Link
                    key={p.name}
                    href={p.href}
                    className={cn(
                      "p-2 rounded-xl transition-all active:scale-90",
                      pathname.startsWith(p.href) ? "bg-white/10 " + p.color : "opacity-40 hover:opacity-100 hover:bg-white/5"
                    )}
                    title={p.name}
                  >
                    <p.icon className="h-4 w-4" />
                  </Link>
                ))}
             </div>

             {/* 4. Login & Sign Up */}
             <Link href="/login" className={cn("text-xs font-black uppercase tracking-widest opacity-80 hover:opacity-100 active:scale-95 transition-all ml-2", navText === "text-white" ? "text-white" : "text-foreground")}>Login</Link>
             <Link href="/signup" className={cn("px-5 py-2.5 rounded-2xl font-black text-xs uppercase tracking-widest shadow-xl hover:scale-105 active:scale-95 transition-all", navText === "text-white" ? "bg-white text-black" : "bg-primary text-primary-foreground")}>Sign Up</Link>
          </div>

          {/* Mobile Menu Button */}
          <button
            onClick={toggleMenu}
            className="md:hidden relative z-[150] p-2 rounded-xl transition-all active:scale-90 hover:bg-white/10"
            aria-label="Toggle Menu"
          >
            {isOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
          </button>
        </div>

        {/* Mobile Navigation Panel */}
        <AnimatePresence>
          {isOpen && (
            <motion.div
              initial={{ opacity: 0, y: -20, scale: 0.95 }}
              animate={{ opacity: 1, y: 0, scale: 1 }}
              exit={{ opacity: 0, y: -20, scale: 0.95 }}
              transition={{ duration: 0.2, ease: "easeInOut" }}
              className={cn(
                "md:hidden absolute top-full right-0 mt-3 w-80 max-w-[calc(100vw-2rem)] p-5 rounded-3xl border shadow-2xl backdrop-blur-3xl overflow-y-auto max-h-[75vh]",
                navBg,
                border,
                navText
              )}
            >
              <div className="flex flex-col space-y-3">
                {/* 1. Home Link */}
                <Link
                  href="/"
                  onClick={() => setIsOpen(false)}
                  className={cn(
                    "flex items-center space-x-3.5 p-3 rounded-2xl border transition-all active:scale-95",
                    navText === "text-white"
                      ? "border-white/15 bg-white/5 hover:bg-white/10 text-white"
                      : "border-border bg-muted/60 hover:bg-muted text-foreground"
                  )}
                >
                  <div className={cn("p-2 rounded-xl border", navText === "text-white" ? "border-white/15 bg-black/40" : "border-border bg-background", iconColor)}>
                    <Home className="h-5 w-5" />
                  </div>
                  <span className="text-sm font-black tracking-wide">Home</span>
                </Link>

                {/* 2. Dashboard (Only for E-Learning, Mart, Mock Tests) */}
                {hasDashboard && (
                  <Link
                    href={`${currentPlatform?.href}/dashboard`}
                    onClick={() => setIsOpen(false)}
                    className={cn(
                      "flex items-center space-x-3.5 p-3 rounded-2xl border transition-all active:scale-95 shadow-md",
                      navText === "text-white"
                        ? "border-cyan-500/40 bg-cyan-500/20 text-white"
                        : "border-primary/40 bg-primary/10 text-foreground"
                    )}
                  >
                    <div className={cn("p-2 rounded-xl border", navText === "text-white" ? "border-white/15 bg-black/40" : "border-border bg-background", iconColor)}>
                      <LayoutDashboard className="h-5 w-5" />
                    </div>
                    <span className="text-sm font-black tracking-wide">Dashboard</span>
                  </Link>
                )}

                {/* 3. 8 Platforms Line-wise */}
                <div className="flex flex-col space-y-2 pt-1">
                  <span className={cn("text-[10px] font-black uppercase tracking-[0.2em] px-1 mb-1", iconColor)}>
                    Ecosystem Platforms
                  </span>
                  {platforms.map((p) => (
                    <Link
                      key={p.name}
                      href={p.href}
                      onClick={() => setIsOpen(false)}
                      className={cn(
                        "flex items-center space-x-3.5 p-3 rounded-2xl border transition-all active:scale-95",
                        pathname.startsWith(p.href)
                          ? (navText === "text-white" ? "border-cyan-400 bg-cyan-500/20 text-white" : "border-primary bg-primary/20 text-foreground")
                          : (navText === "text-white" ? "border-white/15 bg-white/5 hover:bg-white/10 text-slate-200" : "border-border bg-muted/60 hover:bg-muted text-foreground")
                      )}
                    >
                      <div className={cn("p-2 rounded-xl border", navText === "text-white" ? "border-white/15 bg-black/40" : "border-border bg-background", p.color)}>
                        <p.icon className="h-5 w-5" />
                      </div>
                      <span className="text-sm font-black tracking-wide">{p.name}</span>
                    </Link>
                  ))}
                </div>

                {/* 4. Login & Sign Up */}
                <div className={cn("pt-4 border-t flex flex-col space-y-3", navText === "text-white" ? "border-white/10" : "border-border")}>
                  <Link
                    href="/login"
                    onClick={() => setIsOpen(false)}
                    className={cn(
                      "w-full py-3 text-center text-xs font-black uppercase tracking-widest rounded-2xl border transition-all active:scale-95",
                      navText === "text-white"
                        ? "border-white/25 text-white hover:bg-white/10"
                        : "border-border text-foreground hover:bg-muted"
                    )}
                  >
                    Login
                  </Link>
                  <Link
                    href="/signup"
                    onClick={() => setIsOpen(false)}
                    className={cn(
                      "w-full py-3 text-center text-xs font-black uppercase tracking-widest rounded-2xl shadow-xl transition-all active:scale-95",
                      navText === "text-white"
                        ? "bg-white text-black hover:bg-white/90"
                        : "bg-primary text-primary-foreground hover:bg-primary/90"
                    )}
                  >
                    Sign Up
                  </Link>
                </div>
              </div>
            </motion.div>
          )}
        </AnimatePresence>
      </nav>
    </>
  );
}
