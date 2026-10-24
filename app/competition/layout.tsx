import type { ReactNode } from "react";
import { Navbar } from "@/components/layout/navbar";
import { PlatformBackdrop } from "@/components/layout/platform-backdrop";
import { HomeFooter } from "@/components/layout/home-footer";

export default function CompetitionLayout({ children }: { children: ReactNode }) {
  return (
    <PlatformBackdrop variant="competition">
      <div
        className="flex min-h-screen flex-col bg-background/40 text-foreground transition-colors duration-300"
        style={{
          // @ts-ignore
          "--platform-primary": "#FF1493",
          "--platform-secondary": "#DFFF00",
          "--platform-accent": "#00F5FF",
          "--platform-gradient": "linear-gradient(135deg, #FF1493 0%, #DFFF00 55%, #00F5FF 100%)"
        }}
      >
        <Navbar />
        <main className="flex flex-1 flex-col">{children}</main>
        <HomeFooter />
      </div>
    </PlatformBackdrop>
  );
}
