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
          "--platform-primary": "#64748b",
          "--platform-secondary": "#2563eb",
          "--platform-accent": "#0ea5e9",
          "--platform-gradient": "linear-gradient(135deg, #64748b 0%, #2563eb 55%, #0ea5e9 100%)"
        }}
      >
        <Navbar />
        <main className="flex flex-1 flex-col">{children}</main>
        <HomeFooter />
      </div>
    </PlatformBackdrop>
  );
}
