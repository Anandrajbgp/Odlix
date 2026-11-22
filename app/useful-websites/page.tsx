import { Hero } from "@/components/sections/useful-websites/hero";
import { Features } from "@/components/sections/useful-websites/features";
import { FAQ } from "@/components/sections/useful-websites/faq";
import { SectionDivider } from "@/components/shared/section-divider";

export default function UsefulWebsitesPage() {
  return (
    <div className="bg-white text-[#0F172A] min-h-screen relative z-10">
      <Hero />
      <SectionDivider />
      <Features />
      <SectionDivider />
      <FAQ />

      {/* Useful Websites Footer */}
      <footer className="py-12 bg-transparent text-center text-xs text-[#475569] uppercase tracking-widest border-t border-[#E2E8F0] font-bold">
        Verified Links • Safe Browsing • Daily Updated Directory
      </footer>
    </div>
  );
}
