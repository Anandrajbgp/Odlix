import type { ReactNode } from "react";
import { Navbar } from "@/components/layout/navbar";
import { PlatformBackdrop } from "@/components/layout/platform-backdrop";
import { HomeFooter } from "@/components/layout/home-footer";
import { BackgroundBubbles } from "@/components/layout/background-bubbles";

export default function UsefulWebsitesLayout({ children }: { children: ReactNode }) {
  return (
    <PlatformBackdrop variant="useful-websites">
      <BackgroundBubbles />
      <div
        className="flex min-h-screen flex-col bg-transparent text-white transition-colors duration-300 relative z-10"
        style={{
          // @ts-expect-error
          "--platform-primary": "#a855f7",
          "--platform-secondary": "#9333ea",
          "--platform-accent": "#c084fc",
          "--platform-gradient": "linear-gradient(135deg, #a855f7 0%, #9333ea 55%, #c084fc 100%)"
        }}
      >
        <Navbar />
        <main className="flex flex-1 flex-col">{children}</main>
        <HomeFooter />
      </div>
    </PlatformBackdrop>
  );
}

