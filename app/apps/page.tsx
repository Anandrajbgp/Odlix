import { Hero } from "@/components/sections/apps/hero";
import { Features } from "@/components/sections/apps/features";
import { FAQ } from "@/components/sections/apps/faq";

export default function AppsPage() {
  return (
    <div className="bg-transparent min-h-screen transition-colors duration-300">
      <Hero />
      <Features />
      <FAQ />

      {/* App Store Footer */}
      <footer className="py-16 bg-transparent text-center text-[10px] opacity-40 text-red-300 uppercase tracking-[0.5em] border-t border-red-500/30 font-black backdrop-blur-sm">
        Global App Distribution • Verified Developers • Secure Downloads
      </footer>
    </div>
  );
}
