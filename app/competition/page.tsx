import { Hero } from "@/components/sections/competition/hero";
import { Stats } from "@/components/sections/competition/stats";
import { Features } from "@/components/sections/competition/features";
import { AiGuidance } from "@/components/sections/competition/ai-guidance";
import { Pricing } from "@/components/sections/competition/pricing";
import { SuccessStories } from "@/components/sections/competition/success-stories";

export default function CompetitionPage() {
  return (
    <div className="bg-background min-h-screen transition-colors duration-300">
      <Hero />
      <Stats />
      <Features />
      <AiGuidance />
      <Pricing />
      <SuccessStories />
    </div>
  );
}
