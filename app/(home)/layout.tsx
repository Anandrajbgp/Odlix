import type { ReactNode } from "react";
import { Navbar } from "@/components/layout/navbar";
import { HomeFooter } from "@/components/layout/home-footer";
import { PlatformBackdrop } from "@/components/layout/platform-backdrop";
import { BackgroundBubbles } from "@/components/layout/background-bubbles";

export default function HomeLayout({ children }: { children: ReactNode }) {
  return (
    <PlatformBackdrop variant="home">
      <BackgroundBubbles />
      <div
        className="flex flex-col min-h-screen bg-transparent text-white selection:bg-cyan-400 selection:text-slate-950 font-sans relative"
        style={{
          // @ts-expect-error
          "--platform-primary": "#00f2fe",
          "--platform-secondary": "#4facfe",
          "--platform-accent": "#38bdf8",
        }}
      >
        <Navbar />
        <main className="flex-1 flex flex-col relative z-10">{children}</main>
        <HomeFooter />
      </div>
    </PlatformBackdrop>
  );
}
