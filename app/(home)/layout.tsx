import type { ReactNode } from "react";
import { Navbar } from "@/components/layout/navbar";
import { HomeFooter } from "@/components/layout/home-footer";

export default function HomeLayout({ children }: { children: ReactNode }) {
  return (
    <div className="flex flex-col min-h-screen bg-[#050b14] text-white selection:bg-cyan-400 selection:text-slate-950 font-sans">
      <Navbar />
      <main className="flex-1 flex flex-col">{children}</main>
      <HomeFooter />
    </div>
  );
}
