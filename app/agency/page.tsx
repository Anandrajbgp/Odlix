import { Hero } from "@/components/sections/agency/hero";
import { AgencyStats } from "@/components/sections/agency/stats";
import { Services } from "@/components/sections/agency/services";
import { Portfolio } from "@/components/sections/agency/portfolio";
import { Testimonials } from "@/components/sections/agency/testimonials";

export default function AgencyPage() {
  return (
    <div className="bg-background min-h-screen transition-colors duration-300">
      <Hero />
      <AgencyStats />
      <Services />
      <Portfolio />
      <Testimonials />
    </div>
  );
}
