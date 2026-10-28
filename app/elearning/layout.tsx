import type { ReactNode } from "react";
import { Navbar } from "@/components/layout/navbar";
import { PlatformBackdrop } from "@/components/layout/platform-backdrop";
import { HomeFooter } from "@/components/layout/home-footer";

export default function ELearningLayout({ children }: { children: ReactNode }) {
  return (
    <PlatformBackdrop variant="elearning">
      <div
        className="flex min-h-screen flex-col"
        style={{
          // @ts-ignore
          "--platform-primary": "#4f46e5",
          "--platform-secondary": "#06b6d4",
          "--platform-accent": "#10b981",
          "--platform-gradient": "linear-gradient(135deg, #4f46e5 0%, #06b6d4 55%, #10b981 100%)"
        }}
      >
        <Navbar />
        <main className="flex flex-1 flex-col">{children}</main>
        <HomeFooter />
      </div>
    </PlatformBackdrop>
  );
}

