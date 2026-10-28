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
          "--platform-primary": "#14b8a6",
          "--platform-secondary": "#06b6d4",
          "--platform-accent": "#eab308",
          "--platform-gradient": "linear-gradient(135deg, #14b8a6 0%, #06b6d4 55%, #eab308 100%)"
        } as React.CSSProperties}
      >
        <Navbar />
        <main className="flex-1">{children}</main>
      </div>
    </PlatformBackdrop>
  );
}