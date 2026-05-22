"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Check, ShieldCheck, Zap, Award, Flame, ArrowUpRight, BookOpen, Stars, Lock } from "lucide-react";

const TIER_DATA = [
  {
    name: "Beginner Package",
    tagline: "Ignite Your Raw Potential",
    price: "999",
    focus: "Launch Phase",
    income: "₹8k–10k/mo target",
    icon: Zap,
    glowColor: "rgba(59, 130, 246, 0.15)",
    borderColor: "group-hover:border-blue-500/40",
    skills: ["Spoken English & Fluency", "Basic Graphic Design", "Video Editing Essentials", "Affiliate Marketing Loops", "Rich Mindset & Time Mastery", "Content Creation Blueprint", "Advanced Communication", "Digital Finance Infrastructure"],
    features: ["Starter Community Access", "Skill Benchmark Assessments", "Official Achievement Badges", "First-Gen Earning Toolkit"]
  },
  {
    name: "Pro Package",
    tagline: "Absolute Professionalism",
    price: "2,499",
    focus: "Conquer Phase",
    income: "₹25k–30k/mo target",
    icon: Flame,
    glowColor: "rgba(6, 182, 212, 0.2)",
    borderColor: "group-hover:border-cyan-500/50",
    popular: true,
    skills: ["Everything in Beginner +", "Advanced High-End Graphics", "YouTube Algorithm Mastery", "Social Media Dominance", "Elite Public Speaking", "High-Conversion Copywriting", "Global Freelancing Strategy", "Stock Market Foundations", "Options & Futures Traps"],
    features: ["Verified Skill Certifications", "Mentorship Milestone Rewards", "Priority Circle Infrastructure", "Live Production Projects"]
  },
  {
    name: "Expert Package",
    tagline: "The Ultimate Kingdom Matrix",
    price: "4,999",
    focus: "Empire Phase",
    income: "₹80k–1L+/mo target",
    icon: Award,
    glowColor: "rgba(147, 51, 234, 0.15)",
    borderColor: "group-hover:border-purple-500/40",
    skills: ["Everything in Pro +", "Fiscal Literacy & Asset Allocation", "NFTs & Digital Real Estate", "Commodities Operations", "Web3, Crypto & Blockchain", "VFX & Motion Mechanics", "Monopolized Personal Branding", "AI Tooling & Industrial Analytics", "Automated E-commerce Systems"],
    features: ["Exclusive Project Marketplace", "Private Boardroom Workshops", "Expert Status Recognition Nodes", "1-on-1 Strategic Growth Audits", "The Ultimate Scaling Blueprint"]
  }
];

export default function Package() {
  const [activeTab, setActiveTab] = useState<"skills" | "features">("skills");

  return (
    <section className="py-24 bg-[#010204] relative px-4 overflow-hidden font-sans">
      {/* Premium Cinematic Lighting Backdrop */}
      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[1000px] h-[400px] bg-gradient-to-b from-cyan-500/[0.04] to-purple-500/[0.01] blur-[180px] rounded-full pointer-events-none" />
      
      <div className="max-w-7xl mx-auto relative z-10">
        
        {/* Section Header */}
        <div className="text-center mb-20">
          <motion.h2 
            initial={{ opacity: 0, y: 15 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-4xl md:text-6xl font-black mb-4 bg-gradient-to-b from-white via-neutral-200 to-neutral-500 bg-clip-text text-transparent tracking-tight"
          >
            Select Your Mastery Track
          </motion.h2>
          <p className="text-neutral-400 text-sm md:text-base max-w-xl mx-auto leading-relaxed">
            Break your limits, arm yourself with elite weaponry, and deploy your true skill mechanics to conquer the digital economy.
          </p>

          {/* Dynamic Interactive Capsule Segment Controller */}
          <div className="inline-flex p-1.5 rounded-xl bg-neutral-900/40 border border-white/5 backdrop-blur-md mt-10 relative z-20 shadow-inner">
            <button
              onClick={() => setActiveTab("skills")}
              className={`relative flex items-center gap-2 px-5 py-2.5 rounded-lg text-xs font-bold uppercase tracking-wider transition-colors duration-300 z-10 ${
                activeTab === "skills" ? "text-cyan-400" : "text-neutral-500 hover:text-neutral-300"
              }`}
            >
              {activeTab === "skills" && (
                <motion.div 
                  layoutId="activeGlowTab"
                  className="absolute inset-0 bg-white/[0.04] border border-white/10 rounded-lg shadow-[0_0_15px_rgba(255,255,255,0.02)]"
                  transition={{ type: "spring", stiffness: 380, damping: 30 }}
                />
              )}
              <BookOpen className="w-3.5 h-3.5" /> Syllabus Matrix
            </button>
            <button
              onClick={() => setActiveTab("features")}
              className={`relative flex items-center gap-2 px-5 py-2.5 rounded-lg text-xs font-bold uppercase tracking-wider transition-colors duration-300 z-10 ${
                activeTab === "features" ? "text-cyan-400" : "text-neutral-500 hover:text-neutral-300"
              }`}
            >
              {activeTab === "features" && (
                <motion.div 
                  layoutId="activeGlowTab"
                  className="absolute inset-0 bg-white/[0.04] border border-white/10 rounded-lg shadow-[0_0_15px_rgba(255,255,255,0.02)]"
                  transition={{ type: "spring", stiffness: 380, damping: 30 }}
                />
              )}
              <Stars className="w-3.5 h-3.5" /> System Access
            </button>
          </div>
        </div>

        {/* Core Architecture Matrix Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 items-stretch">
          {TIER_DATA.map((pkg, i) => {
            const IconComponent = pkg.icon;

            return (
              <motion.div
                key={i}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                whileHover={{ y: -6, transition: { duration: 0.2 } }}
                transition={{ duration: 0.6, ease: [0.16, 1, 0.3, 1], delay: i * 0.08 }}
                style={{
                  ['--hover-glow' as any]: pkg.glowColor
                }}
                className={`relative bg-neutral-950/40 backdrop-blur-xl border flex flex-col justify-between p-6 sm:p-8 rounded-3xl group transition-all duration-300 ${
                  pkg.popular 
                    ? "border-cyan-500/30 shadow-[0_30px_80px_-15px_rgba(6,182,212,0.15)] lg:-translate-y-2" 
                    : "border-white/[0.03] hover:border-neutral-700/50"
                } ${pkg.borderColor}`}
              >
                {/* Visual Glow Layer behind active elements */}
                <div className="absolute inset-0 rounded-3xl bg-[var(--hover-glow)] opacity-0 group-hover:opacity-100 blur-xl transition-opacity duration-500 pointer-events-none" />

                <div>
                  {/* Neon Top Micro Line */}
                  <div className="absolute top-0 left-8 right-8 h-[1px] bg-gradient-to-r from-transparent via-white/10 to-transparent group-hover:via-cyan-400 transition-all duration-700" />

                  {pkg.popular && (
                    <span className="absolute -top-3.5 left-8 px-4 py-1 text-[9px] font-black uppercase tracking-[0.2em] bg-gradient-to-r from-cyan-400 to-blue-500 text-black rounded-full shadow-lg shadow-cyan-500/20">
                      Recommended Track
                    </span>
                  )}

                  {/* Package Identity */}
                  <div className="flex items-center gap-4 mb-8 mt-2 relative z-10">
                    <div className="w-12 h-12 rounded-2xl bg-gradient-to-br from-white/[0.08] to-white/[0.01] border border-white/10 flex items-center justify-center text-white shadow-inner group-hover:scale-105 transition-transform duration-300">
                      <IconComponent className="w-5 h-5 text-cyan-400 group-hover:animate-pulse" />
                    </div>
                    <div>
                      <h3 className="text-lg font-black text-white tracking-tight">{pkg.name}</h3>
                      <p className="text-[10px] font-bold text-neutral-500 tracking-widest font-mono uppercase mt-0.5">// {pkg.tagline}</p>
                    </div>
                  </div>

                  {/* Pricing Matrix Bracket */}
                  <div className="mb-6 flex items-center justify-between border-b border-white/[0.04] pb-5 relative z-10">
                    <div className="flex items-baseline text-white font-mono">
                      <span className="text-lg font-bold text-neutral-500 mr-1">₹</span>
                      <span className="text-4xl font-black bg-gradient-to-b from-white to-neutral-400 bg-clip-text text-transparent tracking-tighter">{pkg.price}</span>
                    </div>
                    <div className="text-right">
                      <div className="text-[10px] font-black text-cyan-400 bg-cyan-500/10 border border-cyan-500/20 px-2.5 py-0.5 rounded-md font-mono uppercase tracking-wide">
                        {pkg.focus}
                      </div>
                      <p className="text-[10px] font-medium text-neutral-500 font-mono mt-1">{pkg.income}</p>
                    </div>
                  </div>

                  {/* Seamless Content Node Swapper */}
                  <div className="min-h-[240px] mb-8 relative z-10">
                    <AnimatePresence mode="wait">
                      {activeTab === "skills" ? (
                        <motion.div
                          key="skills"
                          initial={{ opacity: 0, y: 5 }}
                          animate={{ opacity: 1, y: 0 }}
                          exit={{ opacity: 0, y: -5 }}
                          transition={{ duration: 0.2 }}
                        >
                          <ul className="space-y-3 text-xs text-neutral-400">
                            {pkg.skills.map((skill, index) => (
                              <li key={index} className="flex items-start gap-2.5 group/item">
                                <Check className="w-3.5 h-3.5 text-cyan-500/40 shrink-0 mt-0.5 group-hover/item:text-cyan-400 transition-colors" />
                                <span className="truncate-2-lines group-hover/item:text-neutral-200 transition-colors">{skill}</span>
                              </li>
                            ))}
                          </ul>
                        </motion.div>
                      ) : (
                        <motion.div
                          key="features"
                          initial={{ opacity: 0, y: 5 }}
                          animate={{ opacity: 1, y: 0 }}
                          exit={{ opacity: 0, y: -5 }}
                          transition={{ duration: 0.2 }}
                        >
                          <ul className="space-y-3 text-xs text-neutral-400">
                            {pkg.features.map((feat, index) => (
                              <li key={index} className="flex items-center gap-2.5 group/item">
                                <ShieldCheck className="w-4 h-4 text-cyan-400/50 shrink-0 group-hover/item:text-cyan-400 transition-colors" />
                                <span className="group-hover/item:text-neutral-200 transition-colors">{feat}</span>
                              </li>
                            ))}
                          </ul>
                        </motion.div>
                      )}
                    </AnimatePresence>
                  </div>
                </div>

                {/* Tactical Action Directive Button */}
                <button className={`w-full py-3.5 rounded-xl text-xs font-black uppercase tracking-widest transition-all duration-300 flex items-center justify-center gap-2 border relative z-10 ${
                  pkg.popular 
                    ? "bg-gradient-to-r from-cyan-400 via-cyan-500 to-blue-600 text-black border-transparent hover:brightness-110 hover:shadow-[0_0_25px_rgba(6,182,212,0.4)]" 
                    : "bg-white/[0.02] text-neutral-300 border-white/5 hover:bg-white/[0.06] hover:text-white hover:border-white/20"
                }`}>
                  Activate Mastery Loop <ArrowUpRight className="w-3.5 h-3.5 font-bold" />
                </button>
              </motion.div>
            );
          })}
        </div>

        {/* Sovereignty Endgame Encrypted Container */}
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="mt-20 p-8 rounded-3xl bg-gradient-to-br from-neutral-950 to-neutral-900/60 border border-purple-500/10 text-center max-w-3xl mx-auto relative overflow-hidden group shadow-2xl"
        >
          <div className="absolute inset-0 bg-purple-500/[0.01] opacity-0 group-hover:opacity-100 transition-opacity duration-700 blur-2xl" />
          
          <div className="relative z-10 flex flex-col items-center">
            <div className="w-10 h-10 rounded-xl bg-purple-500/10 border border-purple-500/20 flex items-center justify-center text-purple-400 mb-4 animate-pulse">
              <Lock className="w-4 h-4" />
            </div>
            <span className="inline-block px-3 py-1 text-[9px] font-black uppercase tracking-[0.2em] bg-purple-500/10 text-purple-300 rounded-full border border-purple-500/20 font-mono">
              Sovereignty Module
            </span>
            <h3 className="text-xl md:text-2xl font-black text-white mt-3 mb-2 tracking-tight">Ultimate Life Mastery Track</h3>
            <p className="text-neutral-400 text-xs md:text-sm max-w-lg mx-auto leading-relaxed">
              Unlocks automatically once your potential breaches the first core mastery milestone. Learn Emotional Architecture, Social Engineering, and Real-World Dominance Loops.
            </p>
          </div>
        </motion.div>

      </div>
    </section>
  );
}