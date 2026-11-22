import { Hero } from "@/components/sections/agency/hero";
import { AgencyStats } from "@/components/sections/agency/stats";
import { Services } from "@/components/sections/agency/services";
import { AgencyShowcase } from "@/components/sections/agency/showcase";

export default function AgencyPage() {
  return (
    <div className="bg-white text-[#0F172A] min-h-screen relative z-10">
      <Hero />
      <AgencyStats />
      <Services />
      <AgencyShowcase />
    </div>
  );
}
