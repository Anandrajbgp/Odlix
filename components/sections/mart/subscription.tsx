"use client";

import { motion } from "framer-motion";
import { Crown, Gift, Truck } from "lucide-react";

export function Subscription() {
  return (
    <section className="relative overflow-hidden border-t border-slate-700/60 bg-transparent py-20 text-white">
      <div className="absolute -right-20 top-0 h-72 w-72 rounded-full bg-[#ea580c]/12 blur-3xl" />
      <div className="absolute -left-20 bottom-0 h-72 w-72 rounded-full bg-[#fb923c]/10 blur-3xl" />
      <div className="container relative z-10 mx-auto px-4 max-w-7xl">
        <div className="relative overflow-hidden rounded-[2.2rem] border border-slate-700/80 bg-slate-950/85 backdrop-blur-2xl p-8 text-white shadow-2xl md:p-12">
          <div className="absolute -right-10 -top-10 h-40 w-40 rounded-full bg-[#f97316]/20 blur-3xl" />
          <div className="absolute -bottom-10 -left-10 h-40 w-40 rounded-full bg-[#ea580c]/20 blur-3xl" />

          <div className="relative z-10 grid grid-cols-1 gap-8 lg:grid-cols-[1.2fr_1fr] lg:items-center">
            <div>
              <motion.h2
                whileInView={{ opacity: [0, 1], y: [10, 0] }}
                className="mb-3 text-4xl font-black tracking-tighter md:text-6xl text-white"
              >
                Mart Plus
              </motion.h2>
              <p className="mb-6 max-w-2xl text-sm font-semibold text-slate-200 md:text-base leading-relaxed">
                Join Mart Plus for premium shopping benefits: free delivery, early deal access, and member-only pricing across top categories.
              </p>

              <div className="mb-7 grid grid-cols-1 gap-3 sm:grid-cols-3">
                <div className="rounded-xl border border-slate-700 bg-slate-900/60 px-3 py-3 text-center text-xs font-black uppercase tracking-[0.14em] text-white">
                  <Truck className="mx-auto mb-2 h-4 w-4 text-amber-400" />
                  Free Delivery
                </div>
                <div className="rounded-xl border border-slate-700 bg-slate-900/60 px-3 py-3 text-center text-xs font-black uppercase tracking-[0.14em] text-white">
                  <Gift className="mx-auto mb-2 h-4 w-4 text-orange-400" />
                  Early Deals
                </div>
                <div className="rounded-xl border border-slate-700 bg-slate-900/60 px-3 py-3 text-center text-xs font-black uppercase tracking-[0.14em] text-white">
                  <Crown className="mx-auto mb-2 h-4 w-4 text-yellow-400" />
                  VIP Pricing
                </div>
              </div>

              <button className="rounded-xl bg-white px-7 py-3 text-xs font-black uppercase tracking-[0.16em] text-slate-950 transition-all hover:bg-amber-400 active:scale-95 shadow-lg">
                Join for ₹99/month
              </button>
            </div>

            <div className="rounded-2xl border border-slate-700 bg-slate-900/60 p-6 backdrop-blur-md">
              <div className="mb-3 text-[10px] font-black uppercase tracking-[0.2em] text-cyan-300">Member Savings Snapshot</div>
              <div className="space-y-3 text-sm font-semibold">
                <div className="flex items-center justify-between rounded-lg bg-slate-950/60 px-3 py-2.5 border border-slate-800">
                  <span className="text-slate-200">Delivery Fee Saved</span>
                  <span className="font-black text-amber-400">₹299</span>
                </div>
                <div className="flex items-center justify-between rounded-lg bg-slate-950/60 px-3 py-2.5 border border-slate-800">
                  <span className="text-slate-200">Extra Discount Unlocked</span>
                  <span className="font-black text-orange-400">₹420</span>
                </div>
                <div className="flex items-center justify-between rounded-lg bg-slate-950/60 px-3 py-2.5 border border-slate-800">
                  <span className="text-slate-200">Net Monthly Benefit</span>
                  <span className="font-black text-yellow-400">₹719</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
