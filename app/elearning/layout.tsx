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
          "--platform-primary": "#32FF00",
          "--platform-secondary": "#DFFF00",
          "--platform-accent": "#00F5FF",
          "--platform-gradient": "linear-gradient(135deg, #32FF00 0%, #DFFF00 55%, #00F5FF 100%)"
        }}
      >
        <Navbar />
        <main className="flex flex-1 flex-col">{children}</main>
        <HomeFooter />
      </div>
    </PlatformBackdrop>
  );
}
