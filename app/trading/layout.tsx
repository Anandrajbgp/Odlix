import type { ReactNode } from "react";
import { Navbar } from "@/components/layout/navbar";
import { PlatformBackdrop } from "@/components/layout/platform-backdrop";
import { HomeFooter } from "@/components/layout/home-footer";

export default function TradingLayout({ children }: { children: ReactNode }) {
  return (
    <PlatformBackdrop variant="trading">
      <div
        className="flex min-h-screen flex-col bg-background/30 text-foreground transition-colors duration-300"
        style={{
          // @ts-ignore
          "--platform-primary": "#1f2937",
          "--platform-secondary": "#10b981",
          "--platform-accent": "#ef4444",
          "--platform-gradient": "linear-gradient(135deg, #1f2937 0%, #10b981 55%, #ef4444 100%)"
        }}
      >
        <Navbar />
        <main className="flex flex-1 flex-col">{children}</main>
        <HomeFooter />
      </div>
    </PlatformBackdrop>
  );
}
