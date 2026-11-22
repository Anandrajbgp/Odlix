import { Hero } from "@/components/sections/apps/hero";
import { Features } from "@/components/sections/apps/features";
import { FAQ } from "@/components/sections/apps/faq";

export default function AppsPage() {
  return (
    <div className="bg-white text-[#0F172A] min-h-screen relative z-10">
      <Hero />
      <Features />
      <FAQ />

      {/* App Store Footer */}
      <footer className="py-12 bg-transparent text-center text-xs text-[#475569] uppercase tracking-widest border-t border-[#E2E8F0] font-bold">
        Global App Distribution • Verified Developers • Secure Downloads
      </footer>
    </div>
  );
}
