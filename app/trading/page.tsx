import { Hero } from "@/components/sections/trading/hero";
import { Segments } from "@/components/sections/trading/segments";
import { Steps } from "@/components/sections/trading/steps";
import { FeaturesSecurity } from "@/components/sections/trading/features-security";
import { SectionDivider } from "@/components/shared/section-divider";

export default function TradingPage() {
  return (
    <div className="bg-white text-[#0F172A] min-h-screen relative z-10">
      <Hero />
      <SectionDivider />
      <Segments />
      <SectionDivider />
      <Steps />
      <SectionDivider />
      <FeaturesSecurity />
    </div>
  );
}
