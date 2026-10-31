import { Hero } from "@/components/sections/useful-websites/hero";
import { Features } from "@/components/sections/useful-websites/features";
import { FAQ } from "@/components/sections/useful-websites/faq";

export default function UsefulWebsitesPage() {
  return (
    <div className="bg-transparent min-h-screen transition-colors duration-300">
      <Hero />
      <Features />
      <FAQ />

      {/* Useful Websites Footer */}
      <footer className="py-16 bg-transparent text-center text-[10px] opacity-40 text-[#a855f7] uppercase tracking-[0.5em] border-t border-[#a855f7]/30 font-black backdrop-blur-sm">
        Verified Links • Safe Browsing • Daily Updated Directory
      </footer>
    </div>
  );
}
