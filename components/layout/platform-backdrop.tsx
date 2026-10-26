import type { ReactNode } from "react";
import { cn } from "@/lib/utils";

type PlatformVariant = "elearning" | "agency" | "competition" | "trading" | "apps" | "mart" | "useful-websites" | "telegram-bots";

type PlatformBackdropProps = {
  variant: PlatformVariant;
  children: ReactNode;
};

const variantStyles: Record<PlatformVariant, { surface: string; glowA: string; glowB: string; grid: string }> = {
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
    surface: "bg-gradient-to-b from-[#0ea5e9]/10 via-background to-background dark:from-[#0ea5e9]/20",
    glowA: "from-[#0ea5e9]/35 to-[#0d9488]/10",
    glowB: "from-[#f59e0b]/20 to-[#0ea5e9]/8",
    grid: "[background-image:linear-gradient(120deg,rgba(37,99,235,0.10)_0%,transparent_60%)]"
  },
  trading: {
    surface: "bg-gradient-to-b from-[#1f2937]/10 via-background to-background dark:from-[#1f2937]/20",
    glowA: "from-[#1f2937]/30 to-[#10b981]/8",
    glowB: "from-[#ef4444]/25 to-[#10b981]/8",
    grid: "[background-image:linear-gradient(to_right,rgba(31,41,55,0.10)_1px,transparent_1px),linear-gradient(to_bottom,rgba(31,41,55,0.10)_1px,transparent_1px)]"
  },
  apps: {
    surface: "bg-gradient-to-br from-[#64748b]/10 via-background to-background dark:from-[#64748b]/20",
    glowA: "from-[#64748b]/30 to-[#0ea5e9]/8",
    glowB: "from-[#0ea5e9]/25 to-[#64748b]/8",
    grid: "[background-image:radial-gradient(rgba(100,116,139,0.12)_1px,transparent_1px)]"
  },
  mart: {
    surface: "bg-gradient-to-br from-[#ea580c]/8 via-background to-background dark:from-[#ea580c]/15",
    glowA: "from-[#ea580c]/30 to-[#f97316]/10",
    glowB: "from-[#fb923c]/20 to-[#ea580c]/10",
    grid: "[background-image:linear-gradient(135deg,rgba(234,88,12,0.10)_0%,transparent_40%),linear-gradient(315deg,rgba(251,146,60,0.10)_0%,transparent_40%)]"
  },
  "useful-websites": {
    surface: "bg-gradient-to-br from-[#14b8a6]/10 via-background to-background dark:from-[#14b8a6]/20",
    glowA: "from-[#14b8a6]/32 to-[#06b6d4]/10",
    glowB: "from-[#eab308]/25 to-[#06b6d4]/8",
    grid: "[background-image:radial-gradient(rgba(20,184,166,0.14)_1px,transparent_1px)]"
  },
  "telegram-bots": {
    surface: "bg-gradient-to-br from-[#24a1ee]/10 via-background to-background dark:from-[#24a1ee]/20",
    glowA: "from-[#24a1ee]/32 to-[#06b6d4]/10",
    glowB: "from-[#0ea5e9]/25 to-[#06b6d4]/8",
    grid: "[background-image:linear-gradient(135deg,rgba(36,161,238,0.10)_0%,transparent_60%)]"
  }
};

export function PlatformBackdrop({ variant, children }: PlatformBackdropProps) {
  const style = variantStyles[variant];

  return (
    <div className={cn("relative isolate min-h-screen overflow-hidden", style.surface)}>
      <div className={cn("pointer-events-none absolute inset-0 opacity-70 [background-size:28px_28px]", style.grid)} />
      <div className={cn("platform-orb platform-orb-left bg-gradient-to-br", style.glowA)} />
      <div className={cn("platform-orb platform-orb-right bg-gradient-to-br", style.glowB)} />
      <div className="relative z-10 flex min-h-screen flex-col">{children}</div>
    </div>
  );
}
