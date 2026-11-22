import { Hero } from "@/components/sections/agency/hero";
import { AgencyStats } from "@/components/sections/agency/stats";
import { Services } from "@/components/sections/agency/services";
import { AgencyShowcase } from "@/components/sections/agency/showcase";
import { Testimonials } from "@/components/sections/agency/testimonials";
import { SectionDivider } from "@/components/shared/section-divider";

export default function AgencyPage() {
  return (
    <div className="bg-white text-[#0F172A] min-h-screen relative z-10">
      <Hero />
      <SectionDivider />
      <AgencyStats />
      <SectionDivider />
      <Services />
      <SectionDivider />
      <AgencyShowcase />
      <SectionDivider />
      <Testimonials />
    </div>
  );
}
