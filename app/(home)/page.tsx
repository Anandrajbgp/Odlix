import { Hero } from "@/components/sections/home/hero";
import { HowItWorks } from "@/components/sections/home/how-it-works";
import { About } from "@/components/sections/home/about";
import { Features } from "@/components/sections/home/features";
import { Testimonials } from "@/components/sections/home/testimonials";
import { FAQ } from "@/components/sections/home/faq";

export default function HomePage() {
  return (
    <div className="bg-transparent min-h-screen transition-colors duration-300">
      <Hero />
      <HowItWorks />
      <About />
      <Features />
      <Testimonials />
      <FAQ />
    </div>
  );
}
