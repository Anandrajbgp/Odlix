import type { ReactNode } from "react";
import { Navbar } from "@/components/layout/navbar";
import { HomeFooter } from "@/components/layout/home-footer";

export default function HomeLayout({ children }: { children: ReactNode }) {
  return (
    <div className="flex flex-col min-h-screen bg-slate-50 text-slate-900 selection:bg-slate-900 selection:text-white font-sans relative">
      <Navbar />
      <main className="flex-1 flex flex-col relative z-10">{children}</main>
      <HomeFooter />
    </div>
  );
}
