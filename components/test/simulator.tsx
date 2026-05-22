"use client";

import { motion } from "framer-motion";
import { Timer, BarChart4, Cpu, WifiOff } from "lucide-react";

const metrics = [
  { title: "Realistic Simulation", desc: "Matches exact time parameters and programmatic negative marking curves.", icon: Timer },
  { title: "Granular Analytics", desc: "Tracks percentile paths, speed indicators, and localized topic maps.", icon: BarChart4 },
  { title: "AI Improvement Plan", desc: "Automated test generator shifting focus dynamically based on failure tracking.", icon: Cpu },
  { title: "Offline Testing Nodes", desc: "Download parameters locally. Solve and upload vectors when online.", icon: WifiOff },
];

export default function TestSimulator() {
  return (
    <section className="py-20 bg-white border-t border-slate-100 text-slate-900 px-4">
      <div className="max-w-7xl mx-auto">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          <div>
            <span className="text-xs font-bold uppercase tracking-widest text-blue-600">Adaptive Infrastructure</span>
            <h2 className="text-2xl md:text-4xl font-extrabold text-slate-950 mt-2">Engineered Simulation Environment</h2>
            <p className="text-slate-600 text-sm mt-4 leading-relaxed">
              Skip static layout sets. Odlix Test Core dynamically builds real-time evaluations tracking deep micro-accuracies across core competitive frameworks.
            </p>
          </div>
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
            {metrics.map((m, idx) => (
              <div key={idx} className="p-5 rounded-xl bg-slate-50 border border-slate-100 flex flex-col gap-3">
                <m.icon className="w-5 h-5 text-blue-600" />
                <h4 className="text-sm font-bold text-slate-950">{m.title}</h4>
                <p className="text-xs text-slate-500 leading-relaxed">{m.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}