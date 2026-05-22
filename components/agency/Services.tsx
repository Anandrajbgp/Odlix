"use client";

import { Code2, Cpu, Video, Palette, BarChart3 } from "lucide-react";

const matrix = [
  { title: "Website Development", sub: "Websites that Sell", info: "High-concurrency, fast framework architectures.", asset: Code2 },
  { title: "App Development", sub: "Apps that Scale", info: "Native performance across iOS and Android ecosystems.", asset: Cpu },
  { title: "Video Production", sub: "Stories that Convert", info: "Cinematic marketing and high-retention editing assets.", asset: Video },
  { title: "Graphic Design", sub: "Designs that Inspire", info: "Apple-tier presentation layouts and UI designs.", asset: Palette },
  { title: "Digital Marketing", sub: "Campaigns that Work", info: "Algorithmic targeting architectures generating high-ROI scales.", asset: BarChart3 }
];

export function AgencyServices() {
  return (
    <section className="py-24 px-4 bg-[#0A0A0A] relative">
      <div className="max-w-6xl mx-auto space-y-16">
        
        <div className="text-left max-w-xl">
          <span className="text-[11px] font-bold text-yellow-600 tracking-[0.25em] uppercase block mb-3">// Core Expertise</span>
          <h2 className="text-3xl md:text-5xl font-black text-white tracking-tight">Services For Digital Domination.</h2>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5">
          {matrix.map((element, i) => {
            const ComponentIcon = element.asset;
            return (
              <div 
                key={i} 
                className="group p-6 rounded-2xl border border-yellow-500/10 bg-[#111111] hover:border-yellow-500/30 transition-all duration-300 flex flex-col justify-between space-y-8"
              >
                <div className="space-y-4">
                  <div className="w-11 h-11 rounded-xl bg-yellow-500/5 border border-yellow-500/10 flex items-center justify-center text-yellow-500 group-hover:bg-yellow-500 group-hover:text-black transition-all">
                    <ComponentIcon className="w-5 h-5" />
                  </div>
                  <div>
                    <h3 className="text-xl font-bold text-white tracking-tight">{element.title}</h3>
                    <p className="text-xs text-yellow-600 font-semibold tracking-wider uppercase mt-0.5">{element.sub}</p>
                  </div>
                </div>
                <p className="text-neutral-400 text-xs leading-relaxed font-normal">{element.info}</p>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}