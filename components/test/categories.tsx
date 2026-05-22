"use client";

import { motion } from "framer-motion";
import { Landmark, GraduationCap, Briefcase, Train } from "lucide-react";

const streams = [
  { name: "Banking Terminal", items: "SBI PO, IBPS, RBI Grade B", icon: Landmark },
  { name: "Civil Services (UPSC)", items: "IAS, IPS, State PSC Matrices", icon: GraduationCap },
  { name: "SSC & Technical Staff", items: "CGL, CHSL, CPO Track", icon: Briefcase },
  { name: "Railway Architectures", items: "RRB NTPC, Group D Infrastructure", icon: Train },
];

export default function TestCategories() {
  return (
    <section className="py-24 bg-slate-50 text-slate-900 px-4">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-16">
          <span className="text-xs font-bold uppercase tracking-widest text-blue-600 font-mono">Parameters Mapped</span>
          <h2 className="text-3xl md:text-5xl font-black mt-2 text-slate-950">National Simulator Targets</h2>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {streams.map((stream, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, y: 15 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="p-6 rounded-2xl bg-white border border-slate-200 shadow-sm hover:shadow-md hover:border-blue-500 transition-all duration-300"
            >
              <div className="p-3 bg-blue-50 text-blue-600 w-fit rounded-xl mb-4">
                <stream.icon className="w-5 h-5" />
              </div>
              <h3 className="text-base font-bold text-slate-950">{stream.name}</h3>
              <p className="text-xs text-slate-500 mt-2 leading-relaxed">{stream.items}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}