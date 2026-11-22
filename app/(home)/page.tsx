import { Hero } from "@/components/sections/home/hero";
import { HowItWorks } from "@/components/sections/home/how-it-works";
import { About } from "@/components/sections/home/about";
import { Features } from "@/components/sections/home/features";
import { Testimonials } from "@/components/sections/home/testimonials";
import { FAQ } from "@/components/sections/home/faq";
import { SectionDivider } from "@/components/shared/section-divider";

export default function HomePage() {
  return (
    <div className="bg-white min-h-screen transition-colors duration-300 relative z-10">
      <Hero />
      <SectionDivider />
      <HowItWorks />
      <SectionDivider />
      <About />
      <SectionDivider />
      <Features />
      <SectionDivider />
      <Testimonials />
      <SectionDivider />
      <FAQ />
    </div>
  );
}
