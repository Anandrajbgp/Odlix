import { Hero } from "@/components/sections/trading/hero";
import { AssetShowcase } from "@/components/sections/trading/assets";
import { Features } from "@/components/sections/trading/features";
import { WalletIntegration } from "@/components/sections/trading/wallet";
import { Mentorship } from "@/components/sections/trading/mentorship";
export default function TradingPage() {
  return (
    <div className="bg-[#0a0505] min-h-screen transition-colors duration-300">
      <Hero />
      <AssetShowcase />
      <Features />
      <WalletIntegration />
      <Mentorship />
    </div>
  );
}
