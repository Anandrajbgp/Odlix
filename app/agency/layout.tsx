import type { Metadata } from "next";
import type { ReactNode } from "react";
import { Navbar } from "@/components/layout/navbar";
import { PlatformBackdrop } from "@/components/layout/platform-backdrop";
import { HomeFooter } from "@/components/layout/home-footer";
import { BackgroundBubbles } from "@/components/layout/background-bubbles";

export const metadata: Metadata = {
  title: "Agency Solutions",
  description: "Enterprise software development, custom web applications, and digital growth services with Odlix Agency.",
};

export default function AgencyLayout({ children }: { children: ReactNode }) {
  return (
    <PlatformBackdrop variant="agency">
      <BackgroundBubbles />
      <div
        className="flex min-h-screen flex-col relative z-10"
        style={{
          "--platform-primary": "#111827",
          "--platform-secondary": "#6366f1",
          "--platform-accent": "#4f46e5",
          "--platform-gradient": "linear-gradient(135deg, #0f172a 0%, #1e1b4b 60%, #050b14 100%)"
        } as React.CSSProperties}
      >
        <Navbar />
        <main className="flex flex-1 flex-col">{children}</main>
        <HomeFooter />
      </div>
    </PlatformBackdrop>
  );
}
