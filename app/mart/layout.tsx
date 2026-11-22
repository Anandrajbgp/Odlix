import type { Metadata } from "next";
import type { ReactNode } from "react";
import { Navbar } from "@/components/layout/navbar";
import { PlatformBackdrop } from "@/components/layout/platform-backdrop";
import { HomeFooter } from "@/components/layout/home-footer";
import { BackgroundBubbles } from "@/components/layout/background-bubbles";

export const metadata: Metadata = {
  title: "Mart Store",
  description: "Shop premium tech gadgets, creator kits, apparel, and smart lifestyle gear with Odlix Mart.",
};

export default function MartLayout({ children }: { children: ReactNode }) {
  return (
    <PlatformBackdrop variant="mart">
      <BackgroundBubbles />
      <div className="flex min-h-screen flex-col relative z-10 text-[#0F172A]">
        <Navbar />
        <main className="flex flex-1 flex-col">{children}</main>
        <HomeFooter />
      </div>
    </PlatformBackdrop>
  );
}
