import type { ReactNode } from "react";
import { Navbar } from "@/components/layout/navbar";
import { PlatformBackdrop } from "@/components/layout/platform-backdrop";
import { HomeFooter } from "@/components/layout/home-footer";
import { BackgroundBubbles } from "@/components/layout/background-bubbles";

export default function TradingLayout({ children }: { children: ReactNode }) {
  return (
    <PlatformBackdrop variant="trading">
      <BackgroundBubbles />
      <div
        className="flex min-h-screen flex-col bg-transparent text-white transition-colors duration-300 relative z-10"
        style={{
          // @ts-expect-error
          "--platform-primary": "#7CFC00",
          "--platform-secondary": "#10b981",
          "--platform-accent": "#7CFC00",
          "--platform-gradient": "linear-gradient(135deg, #7CFC00 0%, #10b981 55%, #7CFC00 100%)"
        }}
      >
        <Navbar />
        <main className="flex flex-1 flex-col">{children}</main>
        <HomeFooter />
      </div>
    </PlatformBackdrop>
  );
}
