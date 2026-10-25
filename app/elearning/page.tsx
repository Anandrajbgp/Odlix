import { Hero } from "@/components/sections/elearning/hero";
import { Packages } from "@/components/sections/elearning/packages";
import { Features } from "@/components/sections/elearning/features";
import { Stats } from "@/components/sections/elearning/stats";
import { Affiliate } from "@/components/sections/elearning/affiliate";

export default function ELearningPage() {
  return (
    <div className="bg-background min-h-screen transition-colors duration-300">
      <Hero />
      <Packages />
      <Stats />
      <Features />
      <Affiliate />
    </div>
  );
}

