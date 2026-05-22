import MartHero from "@/components/mart/hero";
import MartCategories from "@/components/mart/categories";
import MartProducts from "@/components/mart/products";
import MartOffers from "@/components/mart/offers";
import MartSupport from "@/components/mart/support";

export default function MartLandingPage() {
  return (
    <div className="bg-black text-white selection:bg-red-600/30 min-h-screen">
      <MartHero />
      <MartCategories />
      <MartProducts />
      <MartOffers />
      <MartSupport />
    </div>
  );
}