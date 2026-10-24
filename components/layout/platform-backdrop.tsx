import type { ReactNode } from "react";
import { cn } from "@/lib/utils";

type PlatformVariant = "elearning" | "agency" | "competition" | "trading" | "apps" | "mart" | "useful-websites" | "telegram-bots";

type PlatformBackdropProps = {
  variant: PlatformVariant;
  children: ReactNode;
};

const variantStyles: Record<PlatformVariant, { surface: string; glowA: string; glowB: string; grid: string }> = {
  elearning: {
    surface: "bg-gradient-to-b from-[#32FF00]/10 via-background to-background dark:from-[#32FF00]/20",
    glowA: "from-[#32FF00]/35 to-[#DFFF00]/10",
    glowB: "from-[#00F5FF]/30 to-[#DFFF00]/10",
    grid: "[background-image:linear-gradient(to_right,rgba(50,255,0,0.10)_1px,transparent_1px),linear-gradient(to_bottom,rgba(50,255,0,0.10)_1px,transparent_1px)]"
  },
  agency: {
    surface: "bg-gradient-to-br from-[#00F5FF]/10 via-background to-background dark:from-[#00F5FF]/20",
    glowA: "from-[#00F5FF]/32 to-[#DFFF00]/10",
    glowB: "from-[#32FF00]/25 to-[#DFFF00]/8",
    grid: "[background-image:radial-gradient(rgba(0,245,255,0.14)_1px,transparent_1px)]"
  },
  competition: {
    surface: "bg-gradient-to-b from-[#FF1493]/10 via-background to-background dark:from-[#FF1493]/20",
    glowA: "from-[#FF1493]/35 to-[#DFFF00]/10",
    glowB: "from-[#00F5FF]/20 to-[#FF1493]/8",
    grid: "[background-image:linear-gradient(120deg,rgba(255,20,147,0.10)_0%,transparent_60%)]"
  },
  trading: {
    surface: "bg-gradient-to-b from-[#FF5F1F]/10 via-background to-background dark:from-[#FF5F1F]/20",
    glowA: "from-[#FF5F1F]/30 to-[#DFFF00]/8",
    glowB: "from-[#FF1E1E]/25 to-[#FF5F1F]/8",
    grid: "[background-image:linear-gradient(to_right,rgba(255,95,31,0.10)_1px,transparent_1px),linear-gradient(to_bottom,rgba(255,95,31,0.10)_1px,transparent_1px)]"
  },
  apps: {
    surface: "bg-gradient-to-br from-[#FF1E1E]/10 via-background to-background dark:from-[#FF1E1E]/20",
    glowA: "from-[#FF1E1E]/30 to-[#DFFF00]/8",
    glowB: "from-[#FF5F1F]/25 to-[#FF1E1E]/8",
    grid: "[background-image:radial-gradient(rgba(255,30,30,0.12)_1px,transparent_1px)]"
  },
  mart: {
    surface: "bg-gradient-to-br from-white/8 via-background to-background dark:from-white/15",
    glowA: "from-white/30 to-[#DFFF00]/10",
    glowB: "from-[#32FF00]/20 to-white/10",
    grid: "[background-image:linear-gradient(135deg,rgba(255,255,255,0.10)_0%,transparent_40%),linear-gradient(315deg,rgba(223,255,0,0.10)_0%,transparent_40%)]"
  },
  "useful-websites": {
    surface: "bg-gradient-to-br from-[#00F5FF]/10 via-background to-background dark:from-[#00F5FF]/20",
    glowA: "from-[#00F5FF]/32 to-[#DFFF00]/10",
    glowB: "from-[#32FF00]/25 to-[#DFFF00]/8",
    grid: "[background-image:radial-gradient(rgba(0,245,255,0.14)_1px,transparent_1px)]"
  },
  "telegram-bots": {
    surface: "bg-gradient-to-br from-[#0088CC]/10 via-background to-background dark:from-[#0088CC]/20",
    glowA: "from-[#0088CC]/32 to-[#DFFF00]/10",
    glowB: "from-[#32FF00]/25 to-[#DFFF00]/8",
    grid: "[background-image:linear-gradient(135deg,rgba(0,136,204,0.10)_0%,transparent_60%)]"
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
