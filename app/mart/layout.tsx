import type { ReactNode } from "react";
import { Navbar } from "@/components/layout/navbar";
import { PlatformBackdrop } from "@/components/layout/platform-backdrop";
import { HomeFooter } from "@/components/layout/home-footer";

export default function MartLayout({ children }: { children: ReactNode }) {
  return (
    <PlatformBackdrop variant="mart">
      <div
        className="flex min-h-screen flex-col bg-background/30 text-foreground transition-colors duration-300"
        style={{
          // @ts-ignore
          "--platform-primary": "#dc2626",
          "--platform-secondary": "#f97316",
          "--platform-accent": "#facc15",
          "--platform-gradient": "linear-gradient(135deg, #dc2626 0%, #f97316 55%, #facc15 100%)"
        }}
      >
        <Navbar />
        <main className="flex flex-1 flex-col">{children}</main>
        <HomeFooter />
      </div>
    </PlatformBackdrop>
  );
}
