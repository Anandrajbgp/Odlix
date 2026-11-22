import { Hero } from "@/components/sections/trading/hero";
import { Segments } from "@/components/sections/trading/segments";
import { Steps } from "@/components/sections/trading/steps";
import { FeaturesSecurity } from "@/components/sections/trading/features-security";

export default function TradingPage() {
  return (
    <div className="bg-white text-[#0F172A] min-h-screen relative z-10">
      <Hero />
      <Segments />
      <Steps />
      <FeaturesSecurity />
    </div>
  );
}
