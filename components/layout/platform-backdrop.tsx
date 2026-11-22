import type { ReactNode } from "react";
import { cn } from "@/lib/utils";

type PlatformVariant = "home" | "elearning" | "agency" | "competition" | "trading" | "apps" | "mart" | "useful-websites" | "telegram-bots";

type PlatformBackdropProps = {
  variant: PlatformVariant;
  children: ReactNode;
};

const variantStyles: Record<
  PlatformVariant,
  { surface: string; glowA: string; glowB: string; grid: string; primary: string; hover: string; tint: string }
> = {
  home: {
    surface: "bg-white text-slate-900",
    glowA: "from-blue-200/30 via-indigo-100/20 to-transparent",
    glowB: "from-slate-100/30 via-blue-100/15 to-transparent",
    grid: "[background-image:radial-gradient(rgba(15,23,42,0.06)_1px,transparent_1px)]",
    primary: "#2563EB",
    hover: "#1D4ED8",
    tint: "#EFF6FF"
  },
  agency: {
    surface: "bg-white text-slate-900",
    glowA: "from-blue-200/30 via-indigo-100/20 to-transparent",
    glowB: "from-slate-100/30 via-blue-100/15 to-transparent",
    grid: "[background-image:radial-gradient(rgba(15,23,42,0.06)_1px,transparent_1px)]",
    primary: "#18181B",
    hover: "#27272A",
    tint: "#FEF3C7"
  },
  elearning: {
    surface: "bg-white text-slate-900",
    glowA: "from-blue-200/30 via-indigo-100/20 to-transparent",
    glowB: "from-slate-100/30 via-blue-100/15 to-transparent",
    grid: "[background-image:radial-gradient(rgba(15,23,42,0.06)_1px,transparent_1px)]",
    primary: "#6366F1",
    hover: "#4F46E5",
    tint: "#EEF2FF"
  },
  mart: {
    surface: "bg-white text-slate-900",
    glowA: "from-blue-200/30 via-indigo-100/20 to-transparent",
    glowB: "from-slate-100/30 via-blue-100/15 to-transparent",
    grid: "[background-image:radial-gradient(rgba(15,23,42,0.06)_1px,transparent_1px)]",
    primary: "#2563EB",
    hover: "#1D4ED8",
    tint: "#EFF6FF"
  },
  competition: {
    surface: "bg-white text-slate-900",
    glowA: "from-blue-200/30 via-indigo-100/20 to-transparent",
    glowB: "from-slate-100/30 via-blue-100/15 to-transparent",
    grid: "[background-image:radial-gradient(rgba(15,23,42,0.06)_1px,transparent_1px)]",
    primary: "#0D9488",
    hover: "#0F766E",
    tint: "#F0FDFA"
  },
  trading: {
    surface: "bg-white text-slate-900",
    glowA: "from-blue-200/30 via-indigo-100/20 to-transparent",
    glowB: "from-slate-100/30 via-blue-100/15 to-transparent",
    grid: "[background-image:radial-gradient(rgba(15,23,42,0.06)_1px,transparent_1px)]",
    primary: "#10B981",
    hover: "#059669",
    tint: "#ECFDF5"
  },
  apps: {
    surface: "bg-white text-slate-900",
    glowA: "from-blue-200/30 via-indigo-100/20 to-transparent",
    glowB: "from-slate-100/30 via-blue-100/15 to-transparent",
    grid: "[background-image:radial-gradient(rgba(15,23,42,0.06)_1px,transparent_1px)]",
    primary: "#F97316",
    hover: "#EA580C",
    tint: "#FFF7ED"
  },
  "useful-websites": {
    surface: "bg-white text-slate-900",
    glowA: "from-blue-200/30 via-indigo-100/20 to-transparent",
    glowB: "from-slate-100/30 via-blue-100/15 to-transparent",
    grid: "[background-image:radial-gradient(rgba(15,23,42,0.06)_1px,transparent_1px)]",
    primary: "#0284C7",
    hover: "#0369A1",
    tint: "#F0F9FF"
  },
  "telegram-bots": {
    surface: "bg-white text-slate-900",
    glowA: "from-blue-200/30 via-indigo-100/20 to-transparent",
    glowB: "from-slate-100/30 via-blue-100/15 to-transparent",
    grid: "[background-image:radial-gradient(rgba(15,23,42,0.06)_1px,transparent_1px)]",
    primary: "#0088CC",
    hover: "#006699",
    tint: "#E0F2FE"
  }
};

export function PlatformBackdrop({ variant, children }: PlatformBackdropProps) {
  const style = variantStyles[variant] || variantStyles.home;

  return (
    <div
      className={cn("relative isolate min-h-screen overflow-hidden", style.surface)}
      style={{
        "--platform-primary": style.primary,
        "--platform-hover": style.hover,
        "--platform-tint": style.tint
      } as React.CSSProperties}
    >
      <div className={cn("pointer-events-none absolute inset-0 opacity-70 [background-size:28px_28px]", style.grid)} />
      <div className={cn("platform-orb platform-orb-left bg-gradient-to-br", style.glowA)} />
      <div className={cn("platform-orb platform-orb-right bg-gradient-to-br", style.glowB)} />
      <div className="relative z-20 flex min-h-screen flex-col text-[#0F172A]">{children}</div>
    </div>
  );
}
