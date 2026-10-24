import type { ReactNode } from "react";
import { Navbar } from "@/components/layout/navbar";
import { PlatformBackdrop } from "@/components/layout/platform-backdrop";
import { HomeFooter } from "@/components/layout/home-footer";

export default function AppsLayout({ children }: { children: ReactNode }) {
  return (
    <PlatformBackdrop variant="apps">
      <div
        className="flex min-h-screen flex-col bg-background/30 text-foreground transition-colors duration-300"
        style={{
          // @ts-ignore
          "--platform-primary": "#FF1E1E",
          "--platform-secondary": "#FF5F1F",
          "--platform-accent": "#DFFF00",
          "--platform-gradient": "linear-gradient(135deg, #FF1E1E 0%, #FF5F1F 55%, #DFFF00 100%)"
        }}
      >
        <Navbar />
        <main className="flex flex-1 flex-col">{children}</main>
        <HomeFooter />
      </div>
    </PlatformBackdrop>
  );
}
