import type { ReactNode } from "react";
import { Navbar } from "@/components/layout/navbar";
import { PlatformBackdrop } from "@/components/layout/platform-backdrop";
import { HomeFooter } from "@/components/layout/home-footer";

export default function AgencyLayout({ children }: { children: ReactNode }) {
  return (
    <PlatformBackdrop variant="agency">
      <div
        className="flex min-h-screen flex-col bg-background/35 text-foreground transition-colors duration-300"
        style={{
          // @ts-ignore
          "--platform-primary": "#00F5FF",
          "--platform-secondary": "#DFFF00",
          "--platform-accent": "#32FF00",
          "--platform-gradient": "linear-gradient(135deg, #00F5FF 0%, #DFFF00 55%, #32FF00 100%)",
        }}
      >
        <Navbar />

        <main className="flex flex-1 flex-col">{children}</main>
        <HomeFooter />
      </div>
    </PlatformBackdrop>
  );
}
