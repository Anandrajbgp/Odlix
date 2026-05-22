"use client";

import { motion } from "framer-motion";
import { Eye, CloudLightning, TrendingUp } from "lucide-react";

export default function StoreCreator() {
  return (
    <section className="py-20 bg-neutral-950 border-t border-neutral-900 text-white px-4">
      <div className="max-w-5xl mx-auto rounded-3xl bg-gradient-to-r from-purple-950/20 via-black to-neutral-950 border border-purple-900/30 p-8">
        <div className="mb-6">
          <span className="px-2.5 py-0.5 text-[10px] font-bold bg-purple-500/10 border border-purple-500/20 text-purple-400 rounded-md uppercase tracking-wider">Creator Node</span>
          <h3 className="text-xl font-bold mt-2">Publish Matrix Hub</h3>
          <p className="text-xs text-neutral-500 mt-1">Track item parameters, active downloads, and affiliate payouts.</p>
        </div>
        <div className="grid grid-cols-1 sm:grid-cols-3 gap-4 pt-4">
          <div className="p-4 bg-black/40 rounded-xl border border-neutral-900">
            <span className="text-xs text-neutral-500 block">System Downloads</span>
            <span className="text-2xl font-black mt-1 block">14,249</span>
          </div>
          <div className="p-4 bg-black/40 rounded-xl border border-neutral-900">
            <span className="text-xs text-neutral-500 block">Gross Royalty Share</span>
            <span className="text-2xl font-black text-purple-400 mt-1 block">₹84,120.00</span>
          </div>
          <div className="p-4 bg-black/40 rounded-xl border border-neutral-900">
            <span className="text-xs text-neutral-500 block">Active Referrals</span>
            <span className="text-2xl font-black text-emerald-400 mt-1 block">+12.4%</span>
          </div>
        </div>
      </div>
    </section>
  );
}