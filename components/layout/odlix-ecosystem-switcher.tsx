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
        className="w-10 h-10 rounded-xl flex items-center justify-center hover:bg-slate-100 dark:hover:bg-slate-800 transition-colors focus:outline-none focus:ring-2 focus:ring-[#0F172A]/20"
        title="Odlix Ecosystem Switcher"
        aria-label="Odlix Ecosystem Switcher"
      >
        <svg
          width="24"
          height="24"
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

      {/* Dropdown Floating Card (Width: 320px, Bg: #FFFFFF, Border Radius: 16px, Shadow) */}
      {isOpen && (
        <div className="absolute right-0 mt-3 w-[320px] bg-white dark:bg-slate-900 border border-slate-200 dark:border-slate-800 rounded-2xl shadow-[0_10px_25px_rgba(0,0,0,0.1)] p-4 z-50 animate-in fade-in zoom-in-95 duration-150">
          <div className="flex items-center justify-between pb-3 mb-3 border-b border-slate-100 dark:border-slate-800">
            <span className="text-xs font-bold uppercase tracking-wider text-slate-500 dark:text-slate-400">
              Odlix Ecosystem
            </span>
            <span className="text-[10px] font-semibold bg-blue-50 text-blue-600 dark:bg-blue-950/50 dark:text-blue-400 px-2 py-0.5 rounded-full">
              8 Platforms
            </span>
          </div>

          <div className="grid grid-cols-3 gap-3">
            {odlixPlatforms.map((platform) => {
              const IconComponent = platform.icon;
              const isActive = pathname?.startsWith(platform.href);

              return (
                <Link
                  key={platform.id}
                  href={platform.href}
                  onClick={() => setIsOpen(false)}
                  className={cn(
                    "group flex flex-col items-center justify-center p-2.5 rounded-xl transition-all relative text-center hover:scale-[1.03]",
                    isActive
                      ? "ring-2 ring-offset-1 bg-slate-50 dark:bg-slate-800/80"
                      : "hover:bg-slate-50 dark:hover:bg-slate-800/50"
                  )}
                  style={{
                    ...(isActive ? { "--tw-ring-color": platform.primaryColor } as React.CSSProperties : {})
                  }}
                >
                  {isActive && (
                    <span
                      className="absolute top-1.5 right-1.5 w-2 h-2 rounded-full shadow-sm"
                      style={{ backgroundColor: platform.primaryColor }}
                      title="Active Platform"
                    />
                  )}
                  <div
                    className="w-11 h-11 rounded-xl flex items-center justify-center mb-1.5 transition-transform group-hover:scale-110 shadow-sm"
                    style={{ backgroundColor: platform.lightTint }}
                  >
                    <IconComponent
                      className="w-5 h-5 transition-colors"
                      style={{ color: platform.primaryColor }}
                    />
                  </div>
                  <span className="text-[11px] font-semibold text-slate-700 dark:text-slate-200 line-clamp-1">
                    {platform.name.replace("Odlix ", "")}
                  </span>
                </Link>
              );
            })}
          </div>

          <div className="mt-3 pt-3 border-t border-slate-100 dark:border-slate-800 text-center">
            <Link
              href="/"
              onClick={() => setIsOpen(false)}
              className="text-xs font-semibold text-slate-600 dark:text-slate-400 hover:text-slate-900 dark:hover:text-white transition-colors"
            >
              ← Back to Odlix Hub
            </Link>
          </div>
        </div>
      )}
    </div>
  );
}
