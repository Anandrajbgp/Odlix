"use client";

import React, { useState, useRef, useEffect } from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import {
  ShoppingBag,
  BookOpen,
  Briefcase,
  GraduationCap,
  BarChart3,
  LayoutGrid,
  Globe,
  Send,
  type LucideIcon
} from "lucide-react";
import { cn } from "@/lib/utils";

export type PlatformInfo = {
  id: string;
  name: string;
  href: string;
  icon: LucideIcon;
  primaryColor: string;
  hoverColor: string;
  lightTint: string;
};

export const odlixPlatforms: PlatformInfo[] = [
  {
    id: "mart",
    name: "Odlix Mart",
    href: "/mart",
    icon: ShoppingBag,
    primaryColor: "#2563EB",
    hoverColor: "#1D4ED8",
    lightTint: "#EFF6FF",
  },
  {
    id: "elearning",
    name: "Odlix eLearning",
    href: "/elearning",
    icon: BookOpen,
    primaryColor: "#6366F1",
    hoverColor: "#4F46E5",
    lightTint: "#EEF2FF",
  },
  {
    id: "agency",
    name: "Odlix Agency",
    href: "/agency",
    icon: Briefcase,
    primaryColor: "#18181B",
    hoverColor: "#27272A",
    lightTint: "#FEF3C7",
  },
  {
    id: "test",
    name: "Odlix Test",
    href: "/competition",
    icon: GraduationCap,
    primaryColor: "#0D9488",
    hoverColor: "#0F766E",
    lightTint: "#F0FDFA",
  },
  {
    id: "trading",
    name: "Odlix Trading",
    href: "/trading",
    icon: BarChart3,
    primaryColor: "#10B981",
    hoverColor: "#059669",
    lightTint: "#ECFDF5",
  },
  {
    id: "apps",
    name: "Odlix App Store",
    href: "/apps",
    icon: LayoutGrid,
    primaryColor: "#F97316",
    hoverColor: "#EA580C",
    lightTint: "#FFF7ED",
  },
  {
    id: "websites",
    name: "Useful Website",
    href: "/useful-websites",
    icon: Globe,
    primaryColor: "#0284C7",
    hoverColor: "#0369A1",
    lightTint: "#F0F9FF",
  },
  {
    id: "telegram",
    name: "Telegram Bot",
    href: "/telegram-bots",
    icon: Send,
    primaryColor: "#0088CC",
    hoverColor: "#006699",
    lightTint: "#E0F2FE",
  },
];

export function OdlixEcosystemSwitcher() {
  const [isOpen, setIsOpen] = useState(false);
  const dropdownRef = useRef<HTMLDivElement>(null);
  const pathname = usePathname();

  useEffect(() => {
    function handleClickOutside(event: MouseEvent) {
      if (dropdownRef.current && !dropdownRef.current.contains(event.target as Node)) {
        setIsOpen(false);
      }
    }
    document.addEventListener("mousedown", handleClickOutside);
    return () => document.removeEventListener("mousedown", handleClickOutside);
  }, []);

  return (
    <div className="relative" ref={dropdownRef}>
      {/* 9-Dots App Launcher Button */}
      <button
        onClick={() => setIsOpen(!isOpen)}
        className="w-11 h-11 rounded-xl flex items-center justify-center hover:bg-slate-100 dark:hover:bg-slate-800 transition-colors focus:outline-none focus:ring-2 focus:ring-[#0F172A]/20 cursor-pointer"
        title="Odlix Ecosystem Switcher"
        aria-label="Odlix Ecosystem Switcher"
      >
        <svg
          width="26"
          height="26"
          viewBox="0 0 24 24"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
          className="text-[#0F172A] dark:text-white transition-colors"
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
      </button>

      {/* Dropdown Floating Card (Width: 410px, Large Bold Text & Icons) */}
      {isOpen && (
        <div className="absolute right-0 mt-3 w-[340px] sm:w-[410px] bg-white dark:bg-slate-900 border border-slate-200 dark:border-slate-800 rounded-3xl shadow-[0_16px_40px_rgba(0,0,0,0.15)] p-5 sm:p-6 z-50 animate-in fade-in zoom-in-95 duration-150">
          <div className="flex items-center justify-between pb-4 mb-4 border-b border-slate-100 dark:border-slate-800">
            <span className="text-sm sm:text-base font-black uppercase tracking-wider text-[#0F172A] dark:text-white">
              Odlix Ecosystem
            </span>
            <span className="text-xs font-black bg-blue-100 text-blue-800 dark:bg-blue-950/80 dark:text-blue-300 px-3 py-1 rounded-full shadow-sm">
              8 Platforms
            </span>
          </div>

          <div className="grid grid-cols-3 gap-3.5 sm:gap-4">
            {odlixPlatforms.map((platform) => {
              const IconComponent = platform.icon;
              const isActive = pathname?.startsWith(platform.href);

              return (
                <Link
                  key={platform.id}
                  href={platform.href}
                  onClick={() => setIsOpen(false)}
                  className={cn(
                    "group flex flex-col items-center justify-center p-3 sm:p-3.5 rounded-2xl transition-all relative text-center hover:scale-[1.05]",
                    isActive
                      ? "ring-2 ring-offset-2 bg-slate-50 dark:bg-slate-800/80 shadow-md"
                      : "hover:bg-slate-50 dark:hover:bg-slate-800/50"
                  )}
                  style={{
                    ...(isActive ? { "--tw-ring-color": platform.primaryColor } as React.CSSProperties : {})
                  }}
                >
                  {isActive && (
                    <span
                      className="absolute top-2 right-2 w-3 h-3 rounded-full shadow-sm"
                      style={{ backgroundColor: platform.primaryColor }}
                      title="Active Platform"
                    />
                  )}
                  <div
                    className="w-13 h-13 sm:w-14 sm:h-14 rounded-2xl flex items-center justify-center mb-2.5 transition-transform group-hover:scale-110 shadow-sm"
                    style={{ backgroundColor: platform.lightTint }}
                  >
                    <IconComponent
                      className="w-6 h-6 sm:w-7 sm:h-7 transition-colors"
                      style={{ color: platform.primaryColor }}
                    />
                  </div>
                  <span className="text-xs sm:text-sm font-extrabold text-[#0F172A] dark:text-white leading-tight text-center">
                    {platform.name.replace("Odlix ", "")}
                  </span>
                </Link>
              );
            })}
          </div>

          <div className="mt-5 pt-4 border-t border-slate-100 dark:border-slate-800 text-center">
            <Link
              href="/"
              onClick={() => setIsOpen(false)}
              className="text-xs sm:text-sm font-extrabold text-slate-800 dark:text-slate-200 hover:text-blue-600 dark:hover:text-blue-400 transition-colors"
            >
              ← Back to Odlix Hub
            </Link>
          </div>
        </div>
      )}
    </div>
  );
}
