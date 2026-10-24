import type { ReactNode } from "react";
import { Navbar } from "@/components/layout/navbar";
import { PlatformBackdrop } from "@/components/layout/platform-backdrop";

export default function UsefulWebsitesDashboardLayout({ children }: { children: ReactNode }) {
  return (
    <PlatformBackdrop variant="useful-websites">
      <div
        className="min-h-screen flex flex-col"
        style={{
          // @ts-ignore
          "--platform-primary": "#00F5FF",
          "--platform-secondary": "#DFFF00",
          "--platform-accent": "#32FF00",
          "--platform-gradient": "linear-gradient(135deg, #00F5FF 0%, #DFFF00 55%, #32FF00 100%)"
        } as React.CSSProperties}
      >
        <Navbar />
        <main className="flex-1">{children}</main>
      </div>
    </PlatformBackdrop>
  );
}