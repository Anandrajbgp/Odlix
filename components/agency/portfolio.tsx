"use client";

import { motion, useMotionTemplate, useMotionValue } from "framer-motion";
import { ArrowUpRight, ShieldCheck, Database, Cpu } from "lucide-react";

const works = [
  { client: "Nebula Core", scope: "Protocol Engineering", desc: "Decentralized architecture overhaul.", icon: Database, span: "md:col-span-3" },
  { client: "Zenith OS", scope: "Interface Design", desc: "Human-machine interaction layer.", icon: Cpu, span: "md:col-span-3" },
  { client: "Vault Security", scope: "Cyber Infrastructure", desc: "Hardened security stack implementation.", icon: ShieldCheck, span: "md:col-span-6" }
];

export default function CreativePortfolio() {
  return (
    <section className="py-24 bg-[#0A0A0A] text-white px-6 relative overflow-hidden">
      
      {/* Background Subtle Yellow Tint */}
      <div className="absolute top-0 right-0 w-[500px] h-[500px] bg-yellow-500/5 blur-[150px] rounded-full pointer-events-none" />

      <div className="max-w-7xl mx-auto">
        {/* Header */}
        <div className="mb-20">
          <motion.h2 
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            className="text-6xl md:text-8xl font-black italic tracking-tighter"
          >
            SYSTEM_LOGS<span className="text-yellow-500">.</span>
          </motion.h2>
        </div>

        {/* Bento Grid */}
        <div className="grid grid-cols-1 md:grid-cols-6 gap-6">
          {works.map((work, idx) => (
            <PortfolioCard key={idx} work={work} />
          ))}
        </div>
      </div>
    </section>
  );
}

function PortfolioCard({ work }: { work: any }) {
  const mouseX = useMotionValue(0);
  const mouseY = useMotionValue(0);
  const Icon = work.icon;

  return (
    <motion.div
      onMouseMove={(e) => {
        const { left, top } = e.currentTarget.getBoundingClientRect();
        mouseX.set(e.clientX - left);
        mouseY.set(e.clientY - top);
      }}
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      className={`relative group p-8 ${work.span} rounded-3xl border border-yellow-500/10 bg-[#0A0A0A] overflow-hidden hover:border-yellow-500/30 transition-all`}
    >
      {/* Subtle Hover Glow */}
      <motion.div
        className="absolute -inset-px rounded-3xl opacity-0 group-hover:opacity-100 transition duration-500"
        style={{
          background: useMotionTemplate`radial-gradient(400px circle at ${mouseX}px ${mouseY}px, rgba(234, 179, 8, 0.1), transparent 80%)`,
        }}
      />

      <div className="relative z-10 flex flex-col justify-between h-full">
        <div className="mb-16">
          {/* Icon Container with subtle yellow tint */}
          <div className="w-14 h-14 flex items-center justify-center rounded-2xl bg-yellow-500/5 border border-yellow-500/10 text-yellow-500 group-hover:bg-yellow-500 group-hover:text-black transition-all">
            <Icon className="w-7 h-7" />
          </div>
          <h3 className="text-3xl font-black mt-6 tracking-tight text-white">{work.client}</h3>
          <span className="text-[10px] font-mono text-yellow-600 tracking-[0.2em] uppercase">{work.scope}</span>
        </div>

        <div className="flex items-center justify-between border-t border-yellow-500/10 pt-6">
          <p className="text-neutral-400 text-sm max-w-[200px] leading-relaxed">{work.desc}</p>
          <div className="w-12 h-12 rounded-full border border-yellow-500/10 flex items-center justify-center text-yellow-500 group-hover:bg-yellow-500 group-hover:text-black transition-all">
            <ArrowUpRight className="w-6 h-6" />
          </div>
        </div>
      </div>
    </motion.div>
  );
}