import { Hero } from "@/components/sections/mart/hero";
import { Features } from "@/components/sections/mart/features";
import { FAQ } from "@/components/sections/mart/faq";

export default function MartPage() {
  return (
    <div className="bg-transparent min-h-screen transition-colors duration-300">
      <Hero />
      <Features />
      <FAQ />

      {/* Mart Footer */}
      <footer className="py-16 bg-transparent text-center text-[10px] opacity-40 text-slate-300 uppercase tracking-[0.5em] border-t border-slate-800 font-black">
         Global Supply Chain • Verified Vendors • Secure Transactions
      </footer>
    </div>
  );
}
