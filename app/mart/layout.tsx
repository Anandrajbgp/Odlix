import type { ReactNode } from "react";
import { Navbar } from "@/components/layout/navbar";
import { PlatformBackdrop } from "@/components/layout/platform-backdrop";
import { HomeFooter } from "@/components/layout/home-footer";
import { BackgroundBubbles } from "@/components/layout/background-bubbles";

export default function MartLayout({ children }: { children: ReactNode }) {
  return (
    <PlatformBackdrop variant="mart">
      <BackgroundBubbles />
      <div
        className="flex min-h-screen flex-col bg-transparent text-white transition-colors duration-300 relative z-10"
        style={{
          // @ts-expect-error
          "--platform-primary": "#2874f0",
          "--platform-secondary": "#ea580c",
          "--platform-accent": "#ff9f00",
          "--platform-gradient": "linear-gradient(135deg, #2874f0 0%, #1e5bc6 55%, #042d76 100%)",
        }}
      >
        <Navbar />
        <main className="flex flex-1 flex-col">{children}</main>
        <HomeFooter />
      </div>
    </PlatformBackdrop>
  );
}
