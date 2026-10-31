import type { Metadata } from "next";
import type { ReactNode } from "react";
import { Navbar } from "@/components/layout/navbar";
import { PlatformBackdrop } from "@/components/layout/platform-backdrop";
import { HomeFooter } from "@/components/layout/home-footer";
import { BackgroundBubbles } from "@/components/layout/background-bubbles";

export const metadata: Metadata = {
  title: "Trading Hub",
  description: "Professional portfolio management, real-time analytics, and advanced market intelligence with Odlix Trading.",
};

export default function TradingLayout({ children }: { children: ReactNode }) {
  return (
    <PlatformBackdrop variant="trading">
      <BackgroundBubbles />
      <div
        className="flex min-h-screen flex-col relative z-10"
        style={{
          "--platform-primary": "#0a1f1c",
          "--platform-secondary": "#7CFC00",
          "--platform-accent": "#7CFC00",
          "--platform-gradient": "linear-gradient(135deg, #0a1f1c 0%, #112d19 55%, #050b14 100%)"
        } as React.CSSProperties}
      >
        <Navbar />
        <main className="flex flex-1 flex-col">{children}</main>
        <HomeFooter />
      </div>
    </PlatformBackdrop>
  );
}
