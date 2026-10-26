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
    navBg: "bg-[#0b0f19]/95",
    navText: "text-white",
    border: "border-[#4f46e5]/40"
  },
  {
    name: "Agency",
    logoTitle: "Agency",
    href: "/agency",
    icon: Briefcase,
    color: "text-[#f59e0b]",
    navBg: "bg-[#f8fafc]/95 dark:bg-slate-900/95",
    navText: "text-slate-900 dark:text-white",
    border: "border-[#f59e0b]/40"
  },
  {
    name: "Mock Tests",
    logoTitle: "Mock Tests",
    href: "/competition",
    icon: GraduationCap,
    color: "text-[#0ea5e9]",
    navBg: "bg-[#f0f4f8]/95 dark:bg-slate-900/95",
    navText: "text-slate-900 dark:text-white",
    border: "border-[#0ea5e9]/40"
  },
  {
    name: "Trading",
    logoTitle: "Trading",
    href: "/trading",
    icon: BarChart3,
    color: "text-[#10b981]",
    navBg: "bg-[#0a0a0a]/95",
    navText: "text-white",
    border: "border-[#10b981]/40"
  },
  {
    name: "App Store",
    logoTitle: "App Store",
    href: "/apps",
    icon: LayoutGrid,
    color: "text-[#0ea5e9]",
    navBg: "bg-[#f1f5f9]/95 dark:bg-slate-900/95",
    navText: "text-slate-900 dark:text-white",
    border: "border-[#64748b]/40"
  },
  {
    name: "Useful Websites",
    logoTitle: "Useful Websites",
    href: "/useful-websites",
    icon: Globe,
    color: "text-[#14b8a6]",
    navBg: "bg-[#fafafa]/95 dark:bg-slate-900/95",
    navText: "text-slate-900 dark:text-white",
    border: "border-[#14b8a6]/40"
  },
  {
    name: "Telegram Bots",
    logoTitle: "Telegram Bots",
    href: "/telegram-bots",
    icon: Send,
    color: "text-[#24a1ee]",
    navBg: "bg-[#17212b]/95",
    navText: "text-white",
    border: "border-[#24a1ee]/40"
  },
  {
    name: "Mart",
    logoTitle: "Mart",
    href: "/mart",
    icon: ShoppingBag,
    color: "text-[#ea580c]",
    navBg: "bg-white/95 dark:bg-slate-900/95",
    navText: "text-slate-900 dark:text-white",
    border: "border-[#ea580c]/40"
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

  const navBg = currentPlatform?.navBg || "bg-[#18180a]/95";
  const navText = currentPlatform?.navText || "text-white";
  const border = currentPlatform?.border || "border-[#4f46e5]/45";
  const iconColor = currentPlatform?.color || "text-[#4f46e5]";
  const isHome = pathname === "/";
  const mobilePanelSurface = navText === "text-white"
    ? "bg-slate-950/95"
    : "bg-background/95";
  const logoTitle = isHome ? "ODLIX ECOSYSTEM" : (currentPlatform?.logoTitle ?? "ODLIX ECOSYSTEM");
  const logoSubtitle = isHome ? "" : "by Odlix";
  const homeLogoSrc = "/logo-home.png";
  const LogoIcon = isHome ? Home : (currentPlatform?.icon ?? Home);


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
          <div className="hidden md:flex items-center space-x-6 relative z-[150]">
             <div className={cn("flex items-center space-x-1 mr-4 border-r pr-6", navText === "text-white" ? "border-white/10" : "border-border")}>
                {platforms.map(p => (
                  <Link
                    key={p.name}
                    href={p.href}
                    className={cn(
                      "p-2.5 rounded-xl transition-all active:scale-90",
                      pathname.startsWith(p.href) ? "bg-white/10 " + p.color : "opacity-40 hover:opacity-100 hover:bg-white/5"
                    )}
                  >
                    <p.icon className="h-5 w-5" />
                  </Link>
                ))}
             </div>
             {!isHome && currentPlatform?.href ? (
               <Link
                 href={`${currentPlatform.href}/dashboard`}
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
             ) : null}
             <Link href="/login" className={cn("text-xs font-black uppercase tracking-widest opacity-80 hover:opacity-100 active:scale-95 transition-all focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring rounded-md", navText === "text-white" ? "text-white" : "text-foreground")}>Login</Link>
             <Link href="/signup" className={cn("px-7 py-3 rounded-2xl font-black text-xs uppercase tracking-widest shadow-xl hover:scale-105 active:scale-95 transition-all focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring", navText === "text-white" ? "bg-white text-slate-950" : "bg-slate-900 text-white dark:bg-white dark:text-slate-950")}>Get Started</Link>
          </div>

          {/* Mobile Right */}
          <div className="flex md:hidden items-center space-x-3 relative z-[150]">
             <button
               onClick={toggleMenu}
               className="p-3 rounded-2xl bg-white/10 active:scale-90 transition-all border border-white/10 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring"
               aria-label={isOpen ? "Close navigation menu" : "Open navigation menu"}
               aria-expanded={isOpen}
               aria-controls="mobile-platform-menu"
               type="button"
             >
               {isOpen ? <X className="w-6 h-6 text-primary" /> : <Menu className="w-6 h-6" />}
             </button>
          </div>
        </div>
      </nav>

      {/* Mobile Side Menu */}
      <AnimatePresence>
        {isOpen && (
          <>
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              className="fixed inset-0 z-[109] bg-black/40 md:hidden"
              onClick={toggleMenu}
            />
              <motion.aside
               id="mobile-platform-menu"
               initial={{ x: "100%" }}
               animate={{ x: 0 }}
               exit={{ x: "100%" }}
               transition={{ type: "tween", duration: 0.25 }}
               className={cn(
                 "fixed top-[76px] right-0 bottom-0 z-[110] w-[88vw] max-w-[360px] overflow-y-auto border-l p-5 shadow-2xl backdrop-blur-xl md:hidden",
                 mobilePanelSurface,
                 border,
                 navText
               )}
             >
              <div className="space-y-3">
                <Link href="/" className={cn("flex items-center gap-3 rounded-xl border px-4 py-3 text-base font-semibold transition-colors", navText === "text-white" ? "border-white/15 bg-white/5 hover:bg-white/12" : "border-border bg-muted/50 hover:bg-muted") }>
                  <Home className={cn("h-5 w-5", iconColor)} />
                  <span>Home</span>
                </Link>

                {!isHome && currentPlatform?.href && (
                  <Link href={`${currentPlatform.href}/dashboard`} className={cn("flex items-center gap-3 rounded-xl border px-4 py-3 text-base font-semibold transition-colors", navText === "text-white" ? "border-white/15 bg-white/5 hover:bg-white/12" : "border-border bg-muted/50 hover:bg-muted") }>
                    <LayoutDashboard className={cn("h-5 w-5", iconColor)} />
                    <span>Dashboard</span>
                  </Link>
                )}

                <div className="pt-2 pb-1 text-xs font-bold uppercase tracking-[0.2em] opacity-60">Platforms</div>
                {platforms.map((p) => (
                  <Link
                    key={p.name}
                    href={p.href}
                    className={cn(
                      "flex items-center gap-3 rounded-xl border px-4 py-3 text-base font-semibold transition-colors",
                      pathname.startsWith(p.href)
                        ? (navText === "text-white" ? "border-white/20 bg-white/12" : "border-border bg-muted")
                        : (navText === "text-white" ? "border-white/10 bg-white/5 hover:bg-white/10" : "border-border bg-muted/50 hover:bg-muted")
                    )}
                  >
                    <span className={cn("shrink-0", p.color)}><p.icon className="h-5 w-5" /></span>
                    <span>{p.name}</span>
                  </Link>
                ))}

                <div className="pt-2">
                  <Link href="/login" className={cn("block rounded-xl border px-4 py-3 text-center text-sm font-semibold transition-colors", navText === "text-white" ? "border-white/15 hover:bg-white/10" : "border-border hover:bg-muted")}>Log In</Link>
                </div>
              </div>
            </motion.aside>
          </>
        )}
      </AnimatePresence>

      {/* Spacer */}
      <div className="h-[92px] md:h-[104px] pointer-events-none" />
    </>
  );
}
