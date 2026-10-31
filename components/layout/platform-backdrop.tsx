import type { ReactNode } from "react";
import { cn } from "@/lib/utils";

type PlatformVariant = "home" | "elearning" | "agency" | "competition" | "trading" | "apps" | "mart" | "useful-websites" | "telegram-bots";

type PlatformBackdropProps = {
  variant: PlatformVariant;
  children: ReactNode;
};

const variantStyles: Record<PlatformVariant, { surface: string; glowA: string; glowB: string; grid: string }> = {
  home: {
    surface: "bg-[#030712] bg-[radial-gradient(ellipse_80%_80%_at_20%_-20%,rgba(99,102,241,0.25),transparent),radial-gradient(ellipse_80%_80%_at_80%_20%,rgba(245,158,11,0.20),transparent),radial-gradient(ellipse_80%_80%_at_10%_60%,rgba(16,185,129,0.20),transparent),radial-gradient(ellipse_80%_80%_at_90%_90%,rgba(234,88,12,0.22),transparent)] bg-gradient-to-b from-[#050b14] via-[#0a1120] to-[#030712]",
    glowA: "from-[#6366f1]/35 via-[#0ea5e9]/25 to-[#f59e0b]/20",
    glowB: "from-[#10b981]/30 via-[#ea580c]/25 to-[#3b82f6]/20",
    grid: "[background-image:radial-gradient(rgba(56,189,248,0.15)_1px,transparent_1px)]"
  },
  elearning: {
    surface: "bg-gradient-to-b from-[#1e3a8a]/10 via-background to-background dark:from-[#1e3a8a]/20",
    glowA: "from-[#1e3a8a]/35 to-[#312e81]/10",
    glowB: "from-[#312e81]/30 to-[#1e3a8a]/8",
    grid: "[background-image:linear-gradient(to_right,rgba(30,58,138,0.10)_1px,transparent_1px),linear-gradient(to_bottom,rgba(30,58,138,0.10)_1px,transparent_1px)]"
  },
  agency: {
    surface: "bg-gradient-to-br from-[#f59e0b]/10 via-background to-background dark:from-[#f59e0b]/20",
    glowA: "from-[#f59e0b]/32 to-[#f59e0b]/10",
    glowB: "from-[#fbbf24]/25 to-[#f59e0b]/8",
    grid: "[background-image:radial-gradient(rgba(245,158,11,0.14)_1px,transparent_1px)]"
  },
  competition: {
    surface: "bg-[#020817] bg-[radial-gradient(ellipse_80%_80%_at_20%_-20%,rgba(14,165,233,0.30),transparent),radial-gradient(ellipse_80%_80%_at_80%_20%,rgba(13,148,136,0.25),transparent),radial-gradient(ellipse_80%_80%_at_50%_80%,rgba(56,189,248,0.25),transparent)] bg-gradient-to-b from-[#031d36] via-[#042d54] to-[#020817]",
    glowA: "from-[#0ea5e9]/45 via-[#38bdf8]/35 to-[#0d9488]/25",
    glowB: "from-[#38bdf8]/40 via-[#0ea5e9]/30 to-[#f59e0b]/20",
    grid: "[background-image:radial-gradient(rgba(56,189,248,0.18)_1px,transparent_1px)]"
  },
  trading: {
    surface: "bg-gradient-to-b from-[#1f2937]/10 via-background to-background dark:from-[#1f2937]/20",
    glowA: "from-[#1f2937]/30 to-[#10b981]/8",
    glowB: "from-[#ef4444]/25 to-[#10b981]/8",
    grid: "[background-image:linear-gradient(to_right,rgba(31,41,55,0.10)_1px,transparent_1px),linear-gradient(to_bottom,rgba(31,41,55,0.10)_1px,transparent_1px)]"
  },
  apps: {
    surface: "bg-gradient-to-br from-[#ef4444]/10 via-background to-background dark:from-[#ef4444]/20",
    glowA: "from-[#ef4444]/30 to-[#dc2626]/8",
    glowB: "from-[#f87171]/25 to-[#ef4444]/8",
    grid: "[background-image:linear-gradient(135deg,rgba(239,68,68,0.10)_0%,transparent_60%)]"
  },
  mart: {
    surface: "bg-gradient-to-br from-[#ea580c]/8 via-background to-background dark:from-[#ea580c]/15",
    glowA: "from-[#ea580c]/30 to-[#f97316]/10",
    glowB: "from-[#fb923c]/20 to-[#ea580c]/10",
    grid: "[background-image:linear-gradient(135deg,rgba(234,88,12,0.10)_0%,transparent_40%),linear-gradient(315deg,rgba(251,146,60,0.10)_0%,transparent_40%)]"
  },
  "useful-websites": {
    surface: "bg-gradient-to-br from-[#a855f7]/10 via-background to-background dark:from-[#a855f7]/20",
    glowA: "from-[#a855f7]/30 to-[#9333ea]/8",
    glowB: "from-[#c084fc]/25 to-[#a855f7]/8",
    grid: "[background-image:linear-gradient(135deg,rgba(168,85,247,0.10)_0%,transparent_60%)]"
  },
  "telegram-bots": {
    surface: "bg-gradient-to-br from-[#d946ef]/10 via-background to-background dark:from-[#d946ef]/20",
    glowA: "from-[#d946ef]/30 to-[#be185d]/8",
    glowB: "from-[#f0abfc]/25 to-[#d946ef]/8",
    grid: "[background-image:linear-gradient(135deg,rgba(217,70,239,0.10)_0%,transparent_60%)]"
  }
};

export function PlatformBackdrop({ variant, children }: PlatformBackdropProps) {
  const style = variantStyles[variant];

  return (
    <div className={cn("relative isolate min-h-screen overflow-hidden", style.surface)}>
      <div className={cn("pointer-events-none absolute inset-0 opacity-70 [background-size:28px_28px]", style.grid)} />
      <div className={cn("platform-orb platform-orb-left bg-gradient-to-br", style.glowA)} />
      <div className={cn("platform-orb platform-orb-right bg-gradient-to-br", style.glowB)} />
      {variant === "home" && (
        <>
          <div className="platform-orb platform-orb-center bg-gradient-to-tr from-[#ea580c]/25 via-[#10b981]/20 to-[#f59e0b]/25" />
          <div className="platform-orb platform-orb-bottom-left bg-gradient-to-br from-[#14b8a6]/25 via-[#24a1ee]/20 to-[#6366f1]/25" />
        </>
      )}
      <div className="relative z-20 flex min-h-screen flex-col">{children}</div>
    </div>
  );
}


