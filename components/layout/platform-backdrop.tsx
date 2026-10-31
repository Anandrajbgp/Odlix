import type { ReactNode } from "react";
import { cn } from "@/lib/utils";

type PlatformVariant = "home" | "elearning" | "agency" | "competition" | "trading" | "apps" | "mart" | "useful-websites" | "telegram-bots";

type PlatformBackdropProps = {
  variant: PlatformVariant;
  children: ReactNode;
};

const variantStyles: Record<PlatformVariant, { surface: string; glowA: string; glowB: string; grid: string }> = {
  home: {
    surface: "bg-[#030712] bg-[radial-gradient(ellipse_80%_80%_at_20%_-20%,rgba(99,102,241,0.3),transparent),radial-gradient(ellipse_80%_80%_at_80%_20%,rgba(245,158,11,0.25),transparent),radial-gradient(ellipse_80%_80%_at_10%_60%,rgba(16,185,129,0.25),transparent),radial-gradient(ellipse_80%_80%_at_90%_90%,rgba(234,88,12,0.28),transparent)] bg-gradient-to-b from-[#050b14] via-[#09111f] to-[#030712]",
    glowA: "from-[#6366f1]/40 via-[#0ea5e9]/30 to-[#f59e0b]/25",
    glowB: "from-[#10b981]/35 via-[#ea580c]/30 to-[#3b82f6]/25",
    grid: "[background-image:radial-gradient(rgba(56,189,248,0.2)_1px,transparent_1px)]"
  },
  elearning: {
    surface: "bg-[#050b14] bg-[radial-gradient(ellipse_80%_80%_at_30%_-20%,rgba(30,58,138,0.4),transparent),radial-gradient(ellipse_80%_80%_at_70%_80%,rgba(14,129,129,0.3),transparent)] bg-gradient-to-b from-[#050b14] via-[#091528] to-[#030712]",
    glowA: "from-[#1e3a8a]/50 to-[#0e8181]/35",
    glowB: "from-[#312e81]/40 to-[#1e3a8a]/30",
    grid: "[background-image:linear-gradient(to_right,rgba(56,189,248,0.12)_1px,transparent_1px),linear-gradient(to_bottom,rgba(56,189,248,0.12)_1px,transparent_1px)]"
  },
  agency: {
    surface: "bg-[#050b14] bg-[radial-gradient(ellipse_80%_80%_at_30%_-20%,rgba(245,158,11,0.35),transparent),radial-gradient(ellipse_80%_80%_at_70%_80%,rgba(99,102,241,0.3),transparent)] bg-gradient-to-b from-[#050b14] via-[#111122] to-[#030712]",
    glowA: "from-[#f59e0b]/45 to-[#6366f1]/30",
    glowB: "from-[#fbbf24]/35 to-[#4f46e5]/25",
    grid: "[background-image:radial-gradient(rgba(245,158,11,0.18)_1px,transparent_1px)]"
  },
  competition: {
    surface: "bg-[#020817] bg-[radial-gradient(ellipse_80%_80%_at_20%_-20%,rgba(14,165,233,0.35),transparent),radial-gradient(ellipse_80%_80%_at_80%_20%,rgba(13,148,136,0.3),transparent),radial-gradient(ellipse_80%_80%_at_50%_80%,rgba(56,189,248,0.3),transparent)] bg-gradient-to-b from-[#031d36] via-[#042d54] to-[#020817]",
    glowA: "from-[#0ea5e9]/50 via-[#38bdf8]/40 to-[#0d9488]/30",
    glowB: "from-[#38bdf8]/45 via-[#0ea5e9]/35 to-[#f59e0b]/25",
    grid: "[background-image:radial-gradient(rgba(56,189,248,0.2)_1px,transparent_1px)]"
  },
  trading: {
    surface: "bg-[#050b14] bg-[radial-gradient(ellipse_80%_80%_at_30%_-20%,rgba(124,252,0,0.25),transparent),radial-gradient(ellipse_80%_80%_at_70%_80%,rgba(16,185,129,0.3),transparent)] bg-gradient-to-b from-[#050b14] via-[#0a1f1c] to-[#030712]",
    glowA: "from-[#7CFC00]/35 to-[#10b981]/30",
    glowB: "from-[#065f46]/40 to-[#7CFC00]/20",
    grid: "[background-image:linear-gradient(to_right,rgba(124,252,0,0.12)_1px,transparent_1px),linear-gradient(to_bottom,rgba(124,252,0,0.12)_1px,transparent_1px)]"
  },
  apps: {
    surface: "bg-[#050b14] bg-[radial-gradient(ellipse_80%_80%_at_30%_-20%,rgba(239,68,68,0.35),transparent),radial-gradient(ellipse_80%_80%_at_70%_80%,rgba(59,130,246,0.3),transparent)] bg-gradient-to-b from-[#050b14] via-[#1a0f14] to-[#030712]",
    glowA: "from-[#ef4444]/40 to-[#3b82f6]/30",
    glowB: "from-[#f87171]/35 to-[#dc2626]/25",
    grid: "[background-image:linear-gradient(135deg,rgba(239,68,68,0.15)_0%,transparent_60%)]"
  },
  mart: {
    surface: "bg-[#050b14] bg-[radial-gradient(ellipse_80%_80%_at_30%_-20%,rgba(234,88,12,0.35),transparent),radial-gradient(ellipse_80%_80%_at_70%_80%,rgba(249,115,22,0.3),transparent)] bg-gradient-to-b from-[#050b14] via-[#1f1008] to-[#030712]",
    glowA: "from-[#ea580c]/45 to-[#f97316]/35",
    glowB: "from-[#fb923c]/35 to-[#ea580c]/25",
    grid: "[background-image:linear-gradient(135deg,rgba(234,88,12,0.15)_0%,transparent_40%),linear-gradient(315deg,rgba(251,146,60,0.15)_0%,transparent_40%)]"
  },
  "useful-websites": {
    surface: "bg-[#050b14] bg-[radial-gradient(ellipse_80%_80%_at_30%_-20%,rgba(168,85,247,0.35),transparent),radial-gradient(ellipse_80%_80%_at_70%_80%,rgba(20,184,166,0.3),transparent)] bg-gradient-to-b from-[#050b14] via-[#180f24] to-[#030712]",
    glowA: "from-[#a855f7]/45 to-[#14b8a6]/35",
    glowB: "from-[#c084fc]/35 to-[#9333ea]/25",
    grid: "[background-image:linear-gradient(135deg,rgba(168,85,247,0.15)_0%,transparent_60%)]"
  },
  "telegram-bots": {
    surface: "bg-[#050b14] bg-[radial-gradient(ellipse_80%_80%_at_30%_-20%,rgba(36,161,238,0.35),transparent),radial-gradient(ellipse_80%_80%_at_70%_80%,rgba(56,189,248,0.3),transparent)] bg-gradient-to-b from-[#050b14] via-[#091828] to-[#030712]",
    glowA: "from-[#24a1ee]/45 to-[#38bdf8]/35",
    glowB: "from-[#38bdf8]/35 to-[#0284c7]/25",
    grid: "[background-image:linear-gradient(135deg,rgba(36,161,238,0.15)_0%,transparent_60%)]"
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
