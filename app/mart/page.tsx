import { Hero } from "@/components/sections/mart/hero";
import { Features } from "@/components/sections/mart/features";
import { FAQ } from "@/components/sections/mart/faq";
import { SectionDivider } from "@/components/shared/section-divider";

export default function MartPage() {
  return (
    <div className="bg-transparent min-h-screen transition-colors duration-300">
      <Hero />
      <SectionDivider />
      <Features />
      <SectionDivider />
      <FAQ />

      {/* Mart Footer */}
      <footer className="py-12 bg-transparent text-center text-xs text-[#475569] uppercase tracking-widest border-t border-[#E2E8F0] font-bold">
        Global Supply Chain • Verified Vendors • Secure Transactions
      </footer>
    </div>
  );
}
