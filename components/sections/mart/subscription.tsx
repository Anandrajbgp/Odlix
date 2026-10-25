"use client";

import { motion } from "framer-motion";
import { Crown, Gift, Truck } from "lucide-react";

export function Subscription() {
  return (
    <section className="border-t border-border bg-background py-20">
      <div className="container mx-auto px-4">
        <div className="relative overflow-hidden rounded-[2rem] border border-[#f59e0b]/35 bg-gradient-to-r from-[#111a0a] via-[#0a1a1f] to-[#1a1108] p-8 text-white shadow-2xl md:p-10">
          <div className="absolute -right-10 -top-10 h-40 w-40 rounded-full bg-[#f59e0b]/20 blur-3xl" />
          <div className="absolute -bottom-10 -left-10 h-40 w-40 rounded-full bg-[#dc2626]/20 blur-3xl" />

          <div className="relative z-10 grid grid-cols-1 gap-8 lg:grid-cols-[1.2fr_1fr] lg:items-center">
            <div>
              <motion.h2
                whileInView={{ opacity: [0, 1], y: [10, 0] }}
                className="mb-3 text-4xl font-black tracking-tighter md:text-6xl"
              >
                Mart Plus
              </motion.h2>
              <p className="mb-6 max-w-2xl text-sm font-medium text-white/80 md:text-base">
                Join Mart Plus for premium shopping benefits: free delivery, early deal access, and member-only pricing across top categories.
              </p>

              <div className="mb-7 grid grid-cols-1 gap-3 sm:grid-cols-3">
                <div className="rounded-xl border border-white/15 bg-white/10 px-3 py-3 text-center text-xs font-black uppercase tracking-[0.14em]">
                  <Truck className="mx-auto mb-2 h-4 w-4 text-[#f59e0b]" />
                  Free Delivery
                </div>
                <div className="rounded-xl border border-white/15 bg-white/10 px-3 py-3 text-center text-xs font-black uppercase tracking-[0.14em]">
                  <Gift className="mx-auto mb-2 h-4 w-4 text-[#dc2626]" />
                  Early Deals
                </div>
                <div className="rounded-xl border border-white/15 bg-white/10 px-3 py-3 text-center text-xs font-black uppercase tracking-[0.14em]">
                  <Crown className="mx-auto mb-2 h-4 w-4 text-[#f59e0b]" />
                  VIP Pricing
                </div>
              </div>

              <button className="rounded-xl bg-white px-7 py-3 text-xs font-black uppercase tracking-[0.16em] text-zinc-950 transition-all hover:bg-[#f59e0b] active:scale-95">
                Join for ₹99/month
              </button>
            </div>

            <div className="rounded-2xl border border-white/15 bg-white/10 p-6">
              <div className="mb-3 text-[10px] font-black uppercase tracking-[0.2em] text-white/60">Member Savings Snapshot</div>
              <div className="space-y-3 text-sm">
                <div className="flex items-center justify-between rounded-lg bg-black/20 px-3 py-2">
                  <span className="text-white/80">Delivery Fee Saved</span>
                  <span className="font-black text-[#f59e0b]">₹299</span>
                </div>
                <div className="flex items-center justify-between rounded-lg bg-black/20 px-3 py-2">
                  <span className="text-white/80">Extra Discount Unlocked</span>
                  <span className="font-black text-[#dc2626]">₹420</span>
                </div>
                <div className="flex items-center justify-between rounded-lg bg-black/20 px-3 py-2">
                  <span className="text-white/80">Net Monthly Benefit</span>
                  <span className="font-black text-[#f59e0b]">₹719</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
