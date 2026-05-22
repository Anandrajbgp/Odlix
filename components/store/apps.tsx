"use client";

import { motion } from "framer-motion";
import { Download, Sliders, Layout, ShieldCheck } from "lucide-react";

const bundles = [
  { title: "Odlix FocusTracker", cat: "Productivity", size: "14.2 MB", desc: "Automated screen time sync and core time block inhibitors.", icon: Sliders },
  { title: "VectorForge Engine", cat: "Design Utility", size: "48.9 MB", desc: "Real-time automated asset format transformation framework.", icon: Layout },
  { title: "Cryptovide Sync", cat: "Security Core", size: "8.1 MB", desc: "Localized clipboard metadata injection guard.", icon: ShieldCheck },
];

export default function StoreApps() {
  return (
    <section className="py-24 bg-black text-white px-4">
      <div className="max-w-7xl mx-auto">
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-16">
          <div>
            <span className="text-xs font-bold uppercase tracking-widest text-purple-400">Verified Catalog</span>
            <h2 className="text-3xl md:text-5xl font-black mt-2">Vetted Utility Repository</h2>
          </div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {bundles.map((app, idx) => (
            <motion.div
              key={idx}
              initial={{ opacity: 0, y: 15 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="p-6 rounded-2xl bg-indigo-950/10 border border-neutral-900 hover:border-purple-500/30 transition-all group flex flex-col justify-between"
            >
              <div>
                <div className="p-3 bg-purple-500/10 text-purple-400 w-fit rounded-xl mb-4 group-hover:bg-purple-500 group-hover:text-white transition">
                  <app.icon className="w-5 h-5" />
                </div>
                <span className="text-[10px] bg-neutral-900 border border-neutral-800 text-neutral-400 px-2 py-0.5 rounded-md font-mono">{app.cat}</span>
                <h3 className="text-base font-bold text-white mt-3">{app.title}</h3>
                <p className="text-xs text-neutral-500 mt-2 leading-relaxed">{app.desc}</p>
              </div>

              <div className="mt-6 pt-4 border-t border-neutral-900 flex items-center justify-between">
                <span className="text-[10px] font-mono text-neutral-500 uppercase">Size: {app.size}</span>
                <button className="flex items-center gap-1.5 text-xs font-bold text-purple-400 hover:text-purple-300">
                  Deploy <Download className="w-3.5 h-3.5" />
                </button>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}