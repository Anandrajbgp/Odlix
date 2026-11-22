"use client";

import Link from "next/link";
import Image from "next/image";
import { motion, AnimatePresence } from "framer-motion";
import {
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
import { useState, useEffect, useRef } from "react";
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
    color: "text-[#6366F1]",
    navBg: "bg-black/95",
    navText: "text-white",
    border: "border-[#6366F1]/40"
  },
  {
    name: "Mart",
    logoTitle: "Mart",
    href: "/mart",
    icon: ShoppingBag,
    color: "text-[#2563EB]",
    navBg: "bg-black/95",
    navText: "text-white",
    border: "border-[#2563EB]/40"
  },
  {
    name: "Mock Tests",
    logoTitle: "Mock Tests",
    href: "/competition",
    icon: GraduationCap,
    color: "text-[#0D9488]",
    navBg: "bg-black/95",
    navText: "text-white",
    border: "border-[#0D9488]/40"
  },
  {
    name: "Agency",
    logoTitle: "Agency",
    href: "/agency",
    icon: Briefcase,
    color: "text-[#D97706]",
    navBg: "bg-black/95",
    navText: "text-white",
    border: "border-[#D97706]/40"
  },
  {
    name: "Trading",
    logoTitle: "Trading",
    href: "/trading",
    icon: BarChart3,
    color: "text-[#10B981]",
    navBg: "bg-black/95",
    navText: "text-white",
    border: "border-[#10B981]/40"
  },
  {
    name: "Apps",
    logoTitle: "Apps",
    href: "/apps",
    icon: LayoutGrid,
    color: "text-[#F97316]",
    navBg: "bg-black/95",
    navText: "text-white",
    border: "border-[#F97316]/40"
  },
  {
    name: "Useful Websites",
    logoTitle: "Useful Websites",
    href: "/useful-websites",
    icon: Globe,
    color: "text-[#0284C7]",
    navBg: "bg-black/95",
    navText: "text-white",
    border: "border-[#0284C7]/40"
  },
  {
    name: "Telegram Bots",
    logoTitle: "Telegram Bots",
    href: "/telegram-bots",
    icon: Send,
    color: "text-[#0088CC]",
    navBg: "bg-black/95",
    navText: "text-white",
    border: "border-[#0088CC]/40"
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

  const menuContainerRef = useRef<HTMLDivElement>(null);
  const toggleBtnRef = useRef<HTMLButtonElement>(null);

  useEffect(() => {
    if (!isOpen) return;

    const handleClickOutside = (event: MouseEvent | TouchEvent) => {
      const target = event.target as Node;
      if (
        menuContainerRef.current &&
        !menuContainerRef.current.contains(target) &&
        toggleBtnRef.current &&
        !toggleBtnRef.current.contains(target)
      ) {
        setIsOpen(false);
      }
    };

    document.addEventListener("mousedown", handleClickOutside);
    document.addEventListener("touchstart", handleClickOutside);

    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
      document.removeEventListener("touchstart", handleClickOutside);
    };
  }, [isOpen]);

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
  const navBg = "bg-white/90 backdrop-blur-md";
  const navText = "text-[#0F172A]";
  const border = "border-[#E2E8F0]";
  const iconColor = "text-[#2563EB]";
  const isHome = isHomeRoute;
  const logoTitle = isHomeRoute ? "ODLIX ECOSYSTEM" : (currentPlatform?.logoTitle ?? "ODLIX ECOSYSTEM");
  const logoSubtitle = isHomeRoute ? "" : "by Odlix";
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

          {/* Left: Logo Section */}
          <div className="flex items-center space-x-2 sm:space-x-3 relative z-[150]">
            <Link href="/" className="group flex items-center space-x-2 sm:space-x-3 transition-all active:scale-95">
              <div className={cn("relative flex h-11 w-11 shrink-0 items-center justify-center overflow-hidden rounded-full border shadow-xl transition-transform group-hover:scale-110", (navText as string) === "text-white" ? "border-white/15 bg-white/10" : "border-border bg-background/80")}>
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
              <div className="flex flex-col text-left">
                <div className="text-sm sm:text-base md:text-lg font-black leading-none tracking-tight uppercase truncate max-w-[180px] sm:max-w-none text-[#0F172A]">
                  {logoTitle}
                </div>
                {logoSubtitle ? (
                  <span className={cn("mt-1 text-[9px] sm:text-[10px] font-bold leading-none tracking-wider sm:tracking-[0.24em] uppercase", iconColor)}>
                    {logoSubtitle}
                  </span>
                ) : null}
              </div>
            </Link>
          </div>

          {/* Right: 9-Dot Menu Button */}
          <button
            ref={toggleBtnRef}
            onClick={toggleMenu}
            className="relative z-[150] p-2.5 rounded-xl bg-[#F8FAFC] text-[#0F172A] hover:bg-[#E2E8F0] transition-all active:scale-90"
            aria-label="Toggle Menu"
          >
            {isOpen ? (
              <X className="h-6 w-6" />
            ) : (
              <svg
                width="24"
                height="24"
                viewBox="0 0 24 24"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
                className="h-6 w-6 text-current"
              >
                <circle cx="5" cy="5" r="2" fill="currentColor" />
                <circle cx="12" cy="5" r="2" fill="currentColor" />
                <circle cx="19" cy="5" r="2" fill="currentColor" />
                <circle cx="5" cy="12" r="2" fill="currentColor" />
                <circle cx="12" cy="12" r="2" fill="currentColor" />
                <circle cx="19" cy="12" r="2" fill="currentColor" />
                <circle cx="5" cy="19" r="2" fill="currentColor" />
                <circle cx="12" cy="19" r="2" fill="currentColor" />
                <circle cx="19" cy="19" r="2" fill="currentColor" />
              </svg>
            )}
          </button>

        </div>

        {/* Minimalist Right-Aligned Menu Drawer */}
        <AnimatePresence>
          {isOpen && (
            <>
              <div
                onClick={() => setIsOpen(false)}
                className="fixed inset-0 z-[155] bg-black/40"
              />
              <motion.div
                ref={menuContainerRef}
                initial={{ opacity: 0, x: 30, scale: 0.98 }}
                animate={{ opacity: 1, x: 0, scale: 1 }}
                exit={{ opacity: 0, x: 30, scale: 0.98 }}
                transition={{ duration: 0.2, ease: "easeInOut" }}
                className="absolute top-full right-3 mt-3 w-80 sm:w-84 max-w-[calc(100vw-2rem)] p-5 rounded-3xl border border-[#E2E8F0] bg-white text-[#0F172A] shadow-2xl backdrop-blur-none opacity-100 overflow-y-auto max-h-[80vh] z-[160]"
                style={{
                  backgroundColor: "#FFFFFF",
                  opacity: 1,
                  WebkitOverflowScrolling: "touch",
                  overscrollBehavior: "contain",
                }}
              >
              <div className="flex flex-col space-y-2 text-[#0F172A]">
                {/* 1. Home Link */}
                <Link
                  href="/"
                  onClick={() => setIsOpen(false)}
                  className="flex items-center space-x-3.5 px-4 py-3 rounded-2xl hover:bg-[#F8FAFC] transition-colors text-base font-extrabold text-[#0F172A]"
                >
                  <Home className="h-5 w-5 text-[#2563EB]" />
                  <span>Home</span>
                </Link>

                {/* 2. Platform Contextual Menu / Dashboard Dropdown */}
                {!isHome && platformMenuConfig && (
                  <div className="flex flex-col">
                    <button
                      onClick={() => {
                        if (platformMenuConfig.label === "Dashboard" && !isLoggedIn) {
                          setIsOpen(false);
                          router.push("/login");
                          return;
                        }
                        setIsDashboardDropdownOpen(!isDashboardDropdownOpen);
                      }}
                      className="w-full flex items-center justify-between px-4 py-3 rounded-2xl hover:bg-[#F8FAFC] transition-colors text-base font-extrabold text-[#0F172A]"
                    >
                      <div className="flex items-center space-x-3.5">
                        <LayoutDashboard className="h-5 w-5 text-[#2563EB]" />
                        <span>{platformMenuConfig.label}</span>
                      </div>
                      <ChevronDown className="h-4 w-4 transition-transform duration-300 opacity-80" />
                    </button>

                    <AnimatePresence>
                      {isDashboardDropdownOpen && (
                        <motion.div
                          initial={{ opacity: 0, height: 0 }}
                          animate={{ opacity: 1, height: "auto" }}
                          exit={{ opacity: 0, height: 0 }}
                          className="flex flex-col space-y-1.5 mt-1 pl-8 border-l-2 border-[#E2E8F0] ml-4 py-1"
                        >
                          {platformMenuConfig.items.map((sub) => (
                            <Link
                              key={sub.name}
                              href={sub.href}
                              onClick={() => setIsOpen(false)}
                              className="px-3.5 py-2 rounded-xl text-sm font-bold text-[#475569] hover:text-[#0F172A] hover:bg-[#F8FAFC] transition-colors"
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
                <div className="pt-3 pb-2 border-t border-[#E2E8F0] mt-2">
                  <span className="text-xs font-black uppercase tracking-wider px-4 block mb-2 text-[#0F172A]">
                    Platforms
                  </span>
                  {platforms.map((p) => (
                    <Link
                      key={p.name}
                      href={p.href}
                      onClick={() => setIsOpen(false)}
                      className={cn(
                        "flex items-center space-x-3.5 px-4 py-2.5 rounded-2xl transition-colors text-base font-bold",
                        pathname.startsWith(p.href)
                          ? "bg-[#EFF6FF] font-extrabold text-[#2563EB] shadow-sm"
                          : "hover:bg-[#F8FAFC] text-[#0F172A]"
                      )}
                    >
                      <p.icon className="h-5 w-5 text-[#2563EB] shrink-0" />
                      <span>{p.name}</span>
                    </Link>
                  ))}
                </div>

                {/* 4. Profile & Auth */}
                <div className="pt-3 border-t border-[#E2E8F0] flex flex-col space-y-2 mt-2">
                  {isLoggedIn ? (
                    <>
                      <Link
                        href="/profile"
                        onClick={() => setIsOpen(false)}
                        className="flex items-center space-x-3.5 px-4 py-3 rounded-2xl hover:bg-[#F8FAFC] transition-colors text-base font-extrabold text-[#0F172A]"
                      >
                        <User className="h-5 w-5 text-[#2563EB]" />
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
                        className="w-full text-left px-4 py-3 rounded-2xl hover:bg-[#F8FAFC] transition-colors text-sm font-extrabold uppercase tracking-wider text-red-600"
                      >
                        Logout
                      </button>
                    </>
                  ) : (
                    <>
                      <Link
                        href="/login"
                        onClick={() => setIsOpen(false)}
                        className="px-4 py-3 rounded-2xl border border-[#E2E8F0] text-[#0F172A] hover:bg-[#F8FAFC] transition-colors text-sm font-extrabold uppercase tracking-wider text-center block"
                      >
                        Login
                      </Link>
                      <Link
                        href="/signup"
                        onClick={() => setIsOpen(false)}
                        className="px-4 py-3 rounded-2xl bg-[#0F172A] text-white hover:bg-black transition-colors text-sm font-black uppercase tracking-wider text-center block shadow-md"
                      >
                        Sign Up
                      </Link>
                    </>
                  )}
                </div>
              </div>
            </motion.div>
          </>
        )}
        </AnimatePresence>
      </nav>
    </>
  );
}
