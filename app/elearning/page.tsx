import { Hero } from "@/components/sections/elearning/hero";
import { Packages } from "@/components/sections/elearning/packages";
import { Features } from "@/components/sections/elearning/features";
import { Stats } from "@/components/sections/elearning/stats";
import { Wealth } from "@/components/sections/elearning/wealth";
import { SectionDivider } from "@/components/shared/section-divider";

export default function ELearningPage() {
  return (
    <div className="bg-transparent min-h-screen transition-colors duration-300">
      <Hero />
      <SectionDivider />
      <Packages />
      <SectionDivider />
      <Stats />
      <SectionDivider />
      <Features />
      <SectionDivider />
      <Wealth />
    </div>
  );
}
