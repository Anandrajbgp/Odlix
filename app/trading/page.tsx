import { Hero } from "@/components/sections/trading/hero";
import { Segments } from "@/components/sections/trading/segments";
import { Steps } from "@/components/sections/trading/steps";
import { FeaturesSecurity } from "@/components/sections/trading/features-security";
export default function TradingPage() {
  return (
    <div className="bg-background min-h-screen transition-colors duration-300">
      <Hero />
      <Segments />
      <Steps />
      <FeaturesSecurity />
    </div>
  );
}
