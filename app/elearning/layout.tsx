import type { ReactNode } from "react";
import { Navbar } from "@/components/layout/navbar";
import { PlatformBackdrop } from "@/components/layout/platform-backdrop";
import { HomeFooter } from "@/components/layout/home-footer";
import { BackgroundBubbles } from "@/components/layout/background-bubbles";

export default function ElearningLayout({ children }: { children: ReactNode }) {
  return (
    <PlatformBackdrop variant="elearning">
      <BackgroundBubbles />
      <div
        className="flex min-h-screen flex-col relative z-10"
        style={{
          "--platform-primary": "#1e3a8a",
          "--platform-secondary": "#0e8181",
          "--platform-accent": "#0e8181",
          "--platform-gradient": "linear-gradient(135deg, #1e3a8a 0%, #0e8181 55%, #312e81 100%)"
        } as React.CSSProperties}
      >
        <Navbar />
        <main className="flex flex-1 flex-col">{children}</main>
        <HomeFooter />
      </div>
    </PlatformBackdrop>
  );
}