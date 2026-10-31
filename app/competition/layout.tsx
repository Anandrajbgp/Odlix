import type { Metadata } from "next";
import type { ReactNode } from "react";
import { Navbar } from "@/components/layout/navbar";
import { PlatformBackdrop } from "@/components/layout/platform-backdrop";
import { HomeFooter } from "@/components/layout/home-footer";
import { BackgroundBubbles } from "@/components/layout/background-bubbles";

export const metadata: Metadata = {
  title: "Competition & Mock Tests",
  description: "Competitive exam preparation, AI-guided mock tests, and comprehensive practice sets with Odlix Competition.",
};

export default function CompetitionLayout({ children }: { children: ReactNode }) {
  return (
    <PlatformBackdrop variant="competition">
      <BackgroundBubbles />
      <div
        className="flex min-h-screen flex-col relative z-10"
        style={{
          "--platform-primary": "#0f172a",
          "--platform-secondary": "#38bdf8",
          "--platform-accent": "#0ea5e9",
          "--platform-gradient": "linear-gradient(135deg, #020617 0%, #0f172a 55%, #042f2e 100%)"
        } as React.CSSProperties}
      >
        <Navbar />
        <main className="flex flex-1 flex-col">{children}</main>
        <HomeFooter />
      </div>
    </PlatformBackdrop>
  );
}
