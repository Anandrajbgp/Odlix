import type { ReactNode } from "react";
import { Navbar } from "@/components/layout/navbar";
import { PlatformBackdrop } from "@/components/layout/platform-backdrop";
import { HomeFooter } from "@/components/layout/home-footer";

export default function TelegramBotsLayout({ children }: { children: ReactNode }) {
  return (
    <PlatformBackdrop variant="telegram-bots">
      <div
        className="flex min-h-screen flex-col bg-background/30 text-foreground transition-colors duration-300"
        style={{
          // @ts-ignore
          "--platform-primary": "#24a1ee",
          "--platform-secondary": "#06b6d4",
          "--platform-accent": "#2563eb",
          "--platform-gradient": "linear-gradient(135deg, #24a1ee 0%, #06b6d4 55%, #2563eb 100%)"
        }}
      >
        <Navbar />
        <main className="flex flex-1 flex-col">{children}</main>
        <HomeFooter />
      </div>
    </PlatformBackdrop>
  );
}