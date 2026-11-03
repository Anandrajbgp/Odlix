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
  User,
  ChevronDown,
  type LucideIcon
} from "lucide-react";
import { useState, useEffect } from "react";
import { cn } from "@/lib/utils";
import { usePathname, useRouter } from "next/navigation";

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
    color: "text-[#6366f1]",
    navBg: "bg-black/95",
    navText: "text-white",
    border: "border-[#6366f1]/40"
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
    name: "Apps",
    logoTitle: "Apps",
    href: "/apps",
    icon: LayoutGrid,
    color: "text-[#2563eb]",
    navBg: "bg-black/95",
    navText: "text-white",
    border: "border-[#2563eb]/40"
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
  const router = useRouter();
  const [isOpen, setIsOpen] = useState(false);
  const pathname = usePathname();
  const [isScrolled, setIsScrolled] = useState(false);
  const [isDashboardDropdownOpen, setIsDashboardDropdownOpen] = useState(false);
  const [isLoggedIn, setIsLoggedIn] = useState(false);

  useEffect(() => {
    const user = typeof window !== "undefined" ? localStorage.getItem("odlix_user") : null;
    setIsLoggedIn(!!user);
  }, [pathname, isOpen]);

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
  const logoTitle = isHome ? "ODLIX ECOSYSTEM" : (currentPlatform?.logoTitle ?? "ODLIX ECOSYSTEM");
  const logoSubtitle = isHome ? "" : "by Odlix";
  const homeLogoSrc = "/logo-home.png";
  const LogoIcon = isHome ? Home : (currentPlatform?.icon ?? Home);

  const platformMenuConfig = currentPlatform?.href === "/elearning" ? {
    label: "Dashboard",
    items: [
      { name: "Profile", href: "/profile" },
      { name: "My Courses", href: "/elearning/dashboard/courses" },
      { name: "Plan", href: "/elearning/dashboard/plan" },
      { name: "Startup Video", href: "/elearning/dashboard/startup-video" },
      { name: "Social Media Handles", href: "/elearning/dashboard/social" },
      { name: "Affiliates", href: "/elearning/dashboard/affiliates" },
      { name: "Payment Section", href: "/elearning/dashboard/payment" },
      { name: "Training Section", href: "/elearning/dashboard/training" },
      { name: "Certificates", href: "/elearning/dashboard/certificates" },
      { name: "Assignments", href: "/elearning/dashboard/assignments" },
      { name: "Leaderboard", href: "/elearning/dashboard/leaderboard" },
    ]
  } : currentPlatform?.href === "/mart" ? {
    label: "Dashboard",
    items: [
      { name: "Overview", href: "/mart/dashboard" },
      { name: "My Orders", href: "/mart/dashboard/orders" },
      { name: "Payments & Wallet", href: "/mart/dashboard/wallet" },
      { name: "Profile & Address", href: "/mart/dashboard/address" },
      { name: "Wishlist & Prefs", href: "/mart/dashboard/wishlist" },
      { name: "Help & Support", href: "/mart/dashboard/support" },
    ]
  } : currentPlatform?.href === "/competition" ? {
    label: "Dashboard",
    items: [
      { name: "Profile", href: "/profile" },
      { name: "Mock Tests", href: "/competition/dashboard" },
      { name: "Payout", href: "/competition/dashboard" },
      { name: "Leaderboard", href: "/competition/dashboard" },
      { name: "Tools", href: "/competition/dashboard" },
      { name: "Certificates", href: "/competition/dashboard" },
    ]
  } : currentPlatform?.href === "/apps" ? {
    label: "Categories",
    items: [
      { name: "Productivity Apps", href: "/apps" },
      { name: "Developer Studio", href: "/apps" },
      { name: "Creator Kit", href: "/apps" },
      { name: "App Updates FAQ", href: "/apps" },
    ]
  } : currentPlatform?.href === "/useful-websites" ? {
    label: "Directories",
    items: [
      { name: "Tool Directory", href: "/useful-websites" },
      { name: "Developer Utilities", href: "/useful-websites" },
      { name: "Learning Resources", href: "/useful-websites" },
      { name: "Daily Productivity", href: "/useful-websites" },
    ]
  } : currentPlatform?.href === "/telegram-bots" ? {
    label: "Bot Menu",
    items: [
      { name: "Bot Directory", href: "/telegram-bots" },
      { name: "Trading Alerts Bot", href: "/telegram-bots" },
      { name: "Automation Bot", href: "/telegram-bots" },
      { name: "Bot FAQ", href: "/telegram-bots" },
    ]
  } : null;

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

          {/* Left: 3-Line Menu Button */}
          <button
            onClick={toggleMenu}
            className={cn(
              "relative z-[150] p-2.5 rounded-xl transition-all active:scale-90",
              navText === "text-white" ? "bg-white/10 text-white hover:bg-white/20" : "bg-muted text-foreground hover:bg-muted/80"
            )}
            aria-label="Toggle Menu"
          >
            {isOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
          </button>

          {/* Right: Logo Section */}
          <Link href="/" className="group relative z-[150] flex items-center space-x-3 transition-all active:scale-95">
            <div className="flex flex-col text-right">
              <div className={cn("text-sm font-black leading-none tracking-[0.14em] uppercase md:text-base", navText === "text-white" ? "text-white" : "text-slate-900 dark:text-white")}>
                {logoTitle}
              </div>
              {logoSubtitle ? (
                <span className={cn("mt-1 text-[10px] font-bold leading-none tracking-[0.24em] uppercase", iconColor)}>
                  {logoSubtitle}
                </span>
              ) : null}
            </div>
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
          </Link>

        </div>

        {/* Minimalist Left-Aligned Menu Drawer */}
        <AnimatePresence>
          {isOpen && (
            <>
              <div
                onClick={() => setIsOpen(false)}
                className="fixed inset-0 z-[155] bg-black/40"
              />
              <motion.div
                initial={{ opacity: 0, x: -30, scale: 0.98 }}
                animate={{ opacity: 1, x: 0, scale: 1 }}
                exit={{ opacity: 0, x: -30, scale: 0.98 }}
                transition={{ duration: 0.2, ease: "easeInOut" }}
                className="absolute top-full left-3 mt-3 w-72 max-w-[calc(100vw-2rem)] p-4 rounded-2xl border border-cyan-500/40 bg-slate-950 text-white shadow-2xl overflow-y-auto max-h-[75vh] z-[160]"
                style={{ WebkitOverflowScrolling: "touch", overscrollBehavior: "contain" }}
              >
              <div className="flex flex-col space-y-1.5">
                {/* 1. Home Link */}
                <Link
                  href="/"
                  onClick={() => setIsOpen(false)}
                  className="flex items-center space-x-3 px-3.5 py-2.5 rounded-xl hover:bg-white/10 transition-colors text-sm font-bold"
                >
                  <Home className="h-4 w-4 opacity-80" />
                  <span>Home</span>
                </Link>

                {/* 2. Platform Contextual Menu / Dashboard Dropdown */}
                {!isHome && platformMenuConfig && (
                  <div className="flex flex-col">
                    <button
                      onClick={() => setIsDashboardDropdownOpen(!isDashboardDropdownOpen)}
                      className="w-full flex items-center justify-between px-3.5 py-2.5 rounded-xl hover:bg-white/10 transition-colors text-sm font-bold"
                    >
                      <div className="flex items-center space-x-3">
                        <LayoutDashboard className="h-4 w-4 opacity-80" />
                        <span>{platformMenuConfig.label}</span>
                      </div>
                      <ChevronDown className={cn("h-3.5 w-3.5 transition-transform duration-300 opacity-60", isDashboardDropdownOpen && "rotate-180")} />
                    </button>

                    <AnimatePresence>
                      {isDashboardDropdownOpen && (
                        <motion.div
                          initial={{ opacity: 0, height: 0 }}
                          animate={{ opacity: 1, height: "auto" }}
                          exit={{ opacity: 0, height: 0 }}
                          className="flex flex-col space-y-1 mt-1 pl-7 border-l border-white/10 ml-3 py-1"
                        >
                          {platformMenuConfig.items.map((sub) => (
                            <Link
                              key={sub.name}
                              href={sub.href}
                              onClick={() => setIsOpen(false)}
                              className="px-3 py-1.5 rounded-lg text-xs font-medium text-slate-300 hover:text-white hover:bg-white/10 transition-colors"
                            >
                              {sub.name}
                            </Link>
                          ))}
                        </motion.div>
                      )}
                    </AnimatePresence>
                  </div>
                )}

                {/* 3. Ecosystem Platforms */}
                <div className="pt-2 pb-1 border-t border-white/10 mt-1">
                  <span className="text-[10px] font-bold uppercase tracking-widest px-3 opacity-60 block mb-1">
                    Platforms
                  </span>
                  {platforms.map((p) => (
                    <Link
                      key={p.name}
                      href={p.href}
                      onClick={() => setIsOpen(false)}
                      className={cn(
                        "flex items-center space-x-3 px-3.5 py-2 rounded-xl transition-colors text-sm font-medium",
                        pathname.startsWith(p.href) ? "bg-white/10 font-bold text-white" : "hover:bg-white/10 text-slate-300 hover:text-white"
                      )}
                    >
                      <p.icon className="h-4 w-4 opacity-80" />
                      <span>{p.name}</span>
                    </Link>
                  ))}
                </div>

                {/* 4. Profile & Auth */}
                <div className="pt-2 border-t border-white/10 flex flex-col space-y-1.5 mt-1">
                  {isLoggedIn ? (
                    <>
                      <Link
                        href="/profile"
                        onClick={() => setIsOpen(false)}
                        className="flex items-center space-x-3 px-3.5 py-2.5 rounded-xl hover:bg-white/10 transition-colors text-sm font-bold"
                      >
                        <User className="h-4 w-4 opacity-80" />
                        <span>Profile Settings</span>
                      </Link>
                      <button
                        onClick={() => {
                          setIsOpen(false);
                          localStorage.removeItem("odlix_user");
                          setIsLoggedIn(false);
                          router.push("/login");
                          router.refresh();
                        }}
                        className="w-full text-left px-3.5 py-2.5 rounded-xl hover:bg-red-500/10 text-red-400 transition-colors text-xs font-bold uppercase tracking-wider"
                      >
                        Logout
                      </button>
                    </>
                  ) : (
                    <>
                      <Link
                        href="/login"
                        onClick={() => setIsOpen(false)}
                        className="px-3.5 py-2.5 rounded-xl hover:bg-white/10 transition-colors text-xs font-bold uppercase tracking-wider text-center block border border-white/15"
                      >
                        Login
                      </Link>
                      <Link
                        href="/signup"
                        onClick={() => setIsOpen(false)}
                        className="px-3.5 py-2.5 rounded-xl bg-white text-black hover:bg-white/90 transition-colors text-xs font-black uppercase tracking-wider text-center block shadow-md"
                      >
                        Sign Up
                      </Link>
                    </>
                  )}
                </div>
              </div>
            </motion.div>
          )}
        </AnimatePresence>
      </nav>
    </>
  );
}
