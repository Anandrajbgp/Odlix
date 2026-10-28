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
          "--platform-primary": "#7CFC00",
          "--platform-secondary": "#7CFC00",
          "--platform-accent": "#7CFC00",
          "--platform-gradient": "linear-gradient(135deg, #7CFC00 0%, #7CFC00 55%, #7CFC00 100%)"
        }}
      >
        <Navbar />
        <main className="flex flex-1 flex-col">{children}</main>
        <HomeFooter />
      </div>
    </PlatformBackdrop>
  );
}
