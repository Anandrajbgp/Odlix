import type { ReactNode } from "react";
import { Navbar } from "@/components/layout/navbar";
import { PlatformBackdrop } from "@/components/layout/platform-backdrop";
import { HomeFooter } from "@/components/layout/home-footer";
import { BackgroundBubbles } from "@/components/layout/background-bubbles";

export default function TelegramBotsLayout({ children }: { children: ReactNode }) {
  return (
    <PlatformBackdrop variant="telegram-bots">
      <BackgroundBubbles />
      <div
        className="flex min-h-screen flex-col bg-transparent text-white transition-colors duration-300 relative z-10"
        style={{
          // @ts-expect-error
          "--platform-primary": "#d946ef",
          "--platform-secondary": "#be185d",
          "--platform-accent": "#f0abfc",
          "--platform-gradient": "linear-gradient(135deg, #d946ef 0%, #be185d 55%, #f0abfc 100%)"
        }}
      >
        <Navbar />
        <main className="flex flex-1 flex-col">{children}</main>
        <HomeFooter />
      </div>
    </PlatformBackdrop>
  );
}

