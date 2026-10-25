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
          "--platform-primary": "#1e3a8a",
          "--platform-secondary": "#f97316",
          "--platform-accent": "#fb7185",
          "--platform-gradient": "linear-gradient(135deg, #1e3a8a 0%, #f97316 55%, #fb7185 100%)",
        }}
      >
        <Navbar />

        <main className="flex flex-1 flex-col">{children}</main>
        <HomeFooter />
      </div>
    </PlatformBackdrop>
  );
}
