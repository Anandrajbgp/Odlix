import type { ReactNode } from "react";
import { Navbar } from "@/components/layout/navbar";
import { PlatformBackdrop } from "@/components/layout/platform-backdrop";
import { HomeFooter } from "@/components/layout/home-footer";

export default function UsefulWebsitesLayout({ children }: { children: ReactNode }) {
  return (
    <PlatformBackdrop variant="useful-websites">
      <div
        className="flex min-h-screen flex-col bg-background/30 text-foreground transition-colors duration-300"
        style={{
          // @ts-ignore
          "--platform-primary": "#14b8a6",
          "--platform-secondary": "#06b6d4",
          "--platform-accent": "#eab308",
          "--platform-gradient": "linear-gradient(135deg, #14b8a6 0%, #06b6d4 55%, #eab308 100%)"
        }}
      >
        <Navbar />
        <main className="flex flex-1 flex-col">{children}</main>
        <HomeFooter />
      </div>
    </PlatformBackdrop>
  );
}