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
          "--platform-primary": "#f59e0b",
          "--platform-secondary": "#f97316",
          "--platform-accent": "#f59e0b",
          "--platform-gradient": "linear-gradient(135deg, #f59e0b 0%, #f97316 55%, #fbbf24 100%)",
        }}
      >
        <Navbar />

        <main className="flex flex-1 flex-col">{children}</main>
        <HomeFooter />
      </div>
    </PlatformBackdrop>
  );
}
