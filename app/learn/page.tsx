import Hero from "@/components/learn/hero";
import Stats from "@/components/learn/stats";
import Package from "@/components/learn/package";
import Testimonial from "@/components/learn/testimonial";
import Faq from "@/components/learn/faq";

export default function HomePage() {
  return (
    <>
      <Hero />
      <Stats />
      <Package />
      <Testimonial />
      <Faq />
    </>
  );
}