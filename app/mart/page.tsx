import { Hero } from "@/components/sections/mart/hero";
import { ProductShowcase } from "@/components/sections/mart/product-showcase";
import { Features } from "@/components/sections/mart/features";
import { Subscription } from "@/components/sections/mart/subscription";

export default function MartPage() {
  return (
    <div className="bg-background min-h-screen transition-colors duration-300">
      <Hero />
      <ProductShowcase />
      <Features />
      <Subscription />

      {/* Mart Footer */}
      <footer className="py-16 bg-background text-center text-[10px] opacity-20 text-foreground uppercase tracking-[0.5em] border-t border-border font-black">
         Global Supply Chain • Verified Vendors • Secure Transactions
      </footer>
    </div>
  );
}
