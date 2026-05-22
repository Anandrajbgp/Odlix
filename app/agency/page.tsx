import { AgencyHero } from "@/components/agency/Hero"; // <-- Yahan 'Hero' ki jagah 'AgencyHero' kiya
import { AgencyStats } from "@/components/agency/Stats";
import { AgencyServices } from "@/components/agency/Services";

export const metadata = {
  title: "Oblivent Agency | Architectural Digital Solutions",
  description: "We design, build & scale businesses with high-performance digital architectures.",
};

export default function AgencyLandingPage() {
  return (
    <>
      {/* Component usage ko bhi update kiya */}
      <AgencyHero /> 
      <AgencyStats />
      <AgencyServices />
    </>
  );
}