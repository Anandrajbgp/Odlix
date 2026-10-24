import { Hero } from "@/components/sections/home/hero";
import { About } from "@/components/sections/home/about";
import { Features } from "@/components/sections/home/features";
import { Testimonials } from "@/components/sections/home/testimonials";

export default function HomePage() {
  return (
    <div className="bg-background min-h-screen transition-colors duration-300">
      <Hero />
      <About />
      <Features />
      <Testimonials />
    </div>
  );
}
