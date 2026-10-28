import type { ReactNode } from "react";
import { Navbar } from "@/components/layout/navbar";
import { HomeFooter } from "@/components/layout/home-footer";

export default function HomeLayout({ children }: { children: ReactNode }) {
  return (
    <div className="flex flex-col min-h-screen">
      <Navbar />
      <main className="flex-1 flex flex-col">{children}</main>
      <HomeFooter />
    </div>
  );
}
