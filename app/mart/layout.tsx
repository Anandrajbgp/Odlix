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
          "--platform-primary": "#5E3A1C",
          "--platform-secondary": "#8B5A2B",
          "--platform-accent": "#C8A951",
          "--platform-gradient": "linear-gradient(135deg, #5E3A1C 0%, #8B5A2B 55%, #C8A951 100%)",
        }}
      >
        <Navbar />
        <main className="flex flex-1 flex-col">{children}</main>
        <HomeFooter />
      </div>
    </PlatformBackdrop>
  );
}
