import type { ReactNode } from "react";
import { Navbar } from "@/components/layout/navbar";
import { PlatformBackdrop } from "@/components/layout/platform-backdrop";
import { HomeFooter } from "@/components/layout/home-footer";
import { BackgroundBubbles } from "@/components/layout/background-bubbles";

export default function CompetitionLayout({ children }: { children: ReactNode }) {
  return (
    <PlatformBackdrop variant="competition">
      <BackgroundBubbles />
      <div
        className="flex min-h-screen flex-col bg-transparent text-white transition-colors duration-300 relative z-10"
        style={{
          // @ts-expect-error
          "--platform-primary": "#0ea5e9",
          "--platform-secondary": "#0d9488",
          "--platform-accent": "#f59e0b",
          "--platform-gradient": "linear-gradient(135deg, #0ea5e9 0%, #0d9488 55%, #f59e0b 100%)"
        }}
      >
        <Navbar />
        <main className="flex flex-1 flex-col">{children}</main>
        <HomeFooter />
      </div>
    </PlatformBackdrop>
  );
}
