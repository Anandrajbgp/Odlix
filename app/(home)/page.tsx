import { PromoSlider } from "@/components/home/promo-slider"
import { Hero } from "@/components/home/hero"
import { AnimatedStats } from "@/components/home/animated-stats"
import { Testimonials } from "@/components/home/testimonials"
import { FAQ } from "@/components/home/faq"

export default function GlobalHomepage() {
  return (
    <div className="bg-[#020205] text-slate-100 min-h-screen overflow-x-hidden space-y-28 pb-20">
    
      {/* 2. Main Onboarding Hero Area */}
      <Hero />

{/* 1. Top Bar Promo Dynamic Slider */}
      <PromoSlider />

      {/* 3. Live System Counter Analytics */}
      <AnimatedStats />

      {/* 5. Social Verification & Trust Grid */}
      <Testimonials />

      {/* 6. Structural FAQ Matrices */}
      <FAQ />
    </div>
  )
}