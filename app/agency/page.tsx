import { Hero } from "@/components/sections/agency/hero";
import { AgencyStats } from "@/components/sections/agency/stats";
import { Services } from "@/components/sections/agency/services";
import { AgencyShowcase } from "@/components/sections/agency/showcase";

export default function AgencyPage() {
  return (
    <div className="bg-background min-h-screen transition-colors duration-300">
      <Hero />
      <AgencyStats />
      <Services />
      <AgencyShowcase />
    </div>
  );
}
