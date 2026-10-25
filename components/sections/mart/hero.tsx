"use client";

import Link from "next/link";
import { motion } from "framer-motion";
import { Search, MapPin, ShoppingCart, ShieldCheck, Truck, Sparkles } from "lucide-react";

export function Hero() {
  return (
    <section className="relative overflow-hidden border-b border-border bg-background pb-12 pt-8">
      <div className="absolute left-0 top-0 h-full w-full bg-[radial-gradient(circle_at_20%_0%,rgba(255,255,255,0.08),transparent_55%)]" />
      <div className="container relative z-10 mx-auto px-4">
        <div className="mb-6 rounded-2xl border border-[#f59e0b]/30 bg-gradient-to-r from-[#f59e0b]/20 via-[#dc2626]/10 to-[#dc2626]/20 px-5 py-3 text-center text-[10px] font-black uppercase tracking-[0.2em] text-foreground">
          Mega Sale Live • Free Delivery above ₹999 • Secure Checkout
        </div>

        <div className="grid grid-cols-1 gap-6 rounded-[2rem] border border-border bg-card p-5 shadow-2xl lg:grid-cols-[1.3fr_1fr] lg:p-7">
          <div>
            <div className="mb-5 flex flex-wrap items-center gap-3">
              <span className="inline-flex items-center gap-2 rounded-full border border-[#f59e0b]/35 bg-[#f59e0b]/10 px-3 py-1 text-[10px] font-black uppercase tracking-[0.16em] text-[#f59e0b]">
                <Sparkles className="h-3.5 w-3.5" />
                Ecommerce Premium Experience
              </span>
              <span className="inline-flex items-center gap-2 rounded-full border border-border bg-background px-3 py-1 text-[10px] font-black uppercase tracking-[0.16em] text-foreground/60">
                <MapPin className="h-3.5 w-3.5" />
                Delivering to India
              </span>
            </div>

            <motion.h1
              initial={{ opacity: 0, y: 14 }}
              animate={{ opacity: 1, y: 0 }}
              className="mb-4 text-4xl font-black leading-[0.9] tracking-tighter text-foreground md:text-6xl"
            >
              Odlix Mart <span className="bg-gradient-to-r from-[#f59e0b] via-[#dc2626] to-white bg-clip-text text-transparent">Super Store</span>
            </motion.h1>
            <p className="mb-6 max-w-2xl text-sm font-medium leading-relaxed text-foreground/70 md:text-base">
              Electronics, creator tools, lifestyle essentials, and brand merchandise — discover products with verified quality, fast delivery, and secure payments.
            </p>

            <div className="mb-5 flex items-center rounded-2xl border border-border bg-background p-2 shadow-sm">
              <div className="flex flex-1 items-center px-3">
                <Search className="mr-3 h-5 w-5 text-foreground/35" />
                <input
                  type="text"
                  placeholder="Search products, brands, categories..."
                  className="w-full bg-transparent py-3 text-sm font-bold tracking-tight text-foreground focus:outline-none"
                />
              </div>
              <button className="rounded-xl bg-zinc-950 px-5 py-3 text-[10px] font-black uppercase tracking-[0.16em] text-white transition-all hover:bg-[#dc2626] hover:text-zinc-950 active:scale-95 dark:bg-white dark:text-zinc-950">
                Search
              </button>
            </div>

            <div className="flex flex-wrap gap-3">
              <Link href="#top-deals" className="rounded-xl bg-foreground px-5 py-3 text-[10px] font-black uppercase tracking-[0.16em] text-background transition-all hover:opacity-90 active:scale-95">
                Shop Top Deals
              </Link>
              <Link href="#new-arrivals" className="rounded-xl border border-border px-5 py-3 text-[10px] font-black uppercase tracking-[0.16em] text-foreground/80 transition-all hover:bg-muted active:scale-95">
                Explore New Arrivals
              </Link>
            </div>
          </div>

          <div className="rounded-2xl border border-border bg-background p-5 shadow-inner">
            <h3 className="mb-4 text-xs font-black uppercase tracking-[0.2em] text-foreground/40">Why Buy from Odlix Mart</h3>
            <div className="space-y-3">
              {[
                { icon: <ShieldCheck className="h-4 w-4" />, text: "100% verified sellers and products" },
                { icon: <Truck className="h-4 w-4" />, text: "Fast shipping with live order tracking" },
                { icon: <ShoppingCart className="h-4 w-4" />, text: "Secure checkout and easy returns" },
              ].map((item) => (
                <div key={item.text} className="flex items-start gap-3 rounded-xl border border-border bg-card px-4 py-3">
                  <span className="mt-0.5 text-[#f59e0b]">{item.icon}</span>
                  <span className="text-sm font-semibold text-foreground/80">{item.text}</span>
                </div>
              ))}
            </div>

            <div className="mt-5 rounded-xl border border-[#dc2626]/35 bg-[#dc2626]/10 px-4 py-3 text-[10px] font-black uppercase tracking-[0.16em] text-[#dc2626]">
              Limited Offer: Extra 10% off on prepaid orders
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
