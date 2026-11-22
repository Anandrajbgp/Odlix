import type { Metadata } from "next";
import type { ReactNode } from "react";
import { Navbar } from "@/components/layout/navbar";
import { HomeFooter } from "@/components/layout/home-footer";

export const metadata: Metadata = {
  title: "Agency Solutions",
  description: "Enterprise software development, custom web applications, and digital growth services with Odlix Agency.",
};

export default function AgencyLayout({ children }: { children: ReactNode }) {
  return (
    <div className="flex flex-col min-h-screen bg-slate-50 text-slate-900 selection:bg-slate-900 selection:text-white font-sans relative">
      <Navbar />
      <main className="flex-1 flex flex-col relative z-10">{children}</main>
      <HomeFooter />
    </div>
  );
}
