"use client";

import { motion } from "framer-motion";
import { Crown, Gift, Truck } from "lucide-react";

export function Subscription() {
  return (
    <section className="relative overflow-hidden bg-transparent py-16 md:py-20 text-[#0F172A]">
      <div className="container relative z-10 mx-auto px-4 max-w-7xl">
        <div className="relative overflow-hidden rounded-3xl border border-[#2563EB]/30 bg-gradient-to-br from-[#EFF6FF] via-white to-[#EFF6FF] p-8 md:p-12 shadow-sm">
          <div className="relative z-10 grid grid-cols-1 gap-8 lg:grid-cols-[1.2fr_1fr] lg:items-center">
            <div>
              <motion.h2
                whileInView={{ opacity: [0, 1], y: [10, 0] }}
                className="mb-3 text-3xl font-extrabold tracking-tight md:text-5xl text-[#0F172A]"
              >
                Mart <span className="text-[#2563EB]">Plus</span>
              </motion.h2>
              <p className="mb-6 max-w-2xl text-sm font-semibold text-[#475569] md:text-base leading-relaxed">
                Join Mart Plus for premium shopping benefits: free delivery, early deal access, and member-only pricing across top categories.
              </p>

              <div className="mb-7 grid grid-cols-1 gap-3 sm:grid-cols-3">
                <div className="rounded-xl border border-[#E2E8F0] bg-white px-3 py-3 text-center text-xs font-bold uppercase tracking-wider text-[#0F172A] shadow-sm">
                  <Truck className="mx-auto mb-2 h-4 w-4 text-[#2563EB]" />
                  Free Delivery
                </div>
                <div className="rounded-xl border border-[#E2E8F0] bg-white px-3 py-3 text-center text-xs font-bold uppercase tracking-wider text-[#0F172A] shadow-sm">
                  <Gift className="mx-auto mb-2 h-4 w-4 text-[#2563EB]" />
                  Early Deals
                </div>
                <div className="rounded-xl border border-[#E2E8F0] bg-white px-3 py-3 text-center text-xs font-bold uppercase tracking-wider text-[#0F172A] shadow-sm">
                  <Crown className="mx-auto mb-2 h-4 w-4 text-[#2563EB]" />
                  VIP Pricing
                </div>
              </div>

              <button className="btn-pill-primary bg-[#2563EB] hover:bg-[#1D4ED8] text-white shadow-md active:scale-95 transition-all text-xs font-bold uppercase tracking-wider">
                Join for ₹99/month
              </button>
            </div>

            <div className="rounded-2xl border border-[#E2E8F0] bg-white p-6 shadow-sm">
              <div className="mb-3 text-xs font-extrabold uppercase tracking-wider text-[#2563EB]">Member Savings Snapshot</div>
              <div className="space-y-3 text-sm font-semibold">
                <div className="flex items-center justify-between rounded-lg bg-[#F8FAFC] px-3 py-2.5 border border-[#E2E8F0]">
                  <span className="text-[#475569]">Delivery Fee Saved</span>
                  <span className="font-extrabold text-[#2563EB]">₹299</span>
                </div>
                <div className="flex items-center justify-between rounded-lg bg-[#F8FAFC] px-3 py-2.5 border border-[#E2E8F0]">
                  <span className="text-[#475569]">Extra Discount Unlocked</span>
                  <span className="font-extrabold text-[#2563EB]">₹420</span>
                </div>
                <div className="flex items-center justify-between rounded-lg bg-[#F8FAFC] px-3 py-2.5 border border-[#E2E8F0]">
                  <span className="text-[#475569]">Net Monthly Benefit</span>
                  <span className="font-extrabold text-emerald-600">₹719</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
