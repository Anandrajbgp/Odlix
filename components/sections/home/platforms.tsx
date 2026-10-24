"use client";

import { motion } from "framer-motion";
import { ArrowRight, BookOpen, Briefcase, GraduationCap, BarChart3, LayoutGrid, ShoppingBag, CheckCircle2 } from "lucide-react";
import Link from "next/link";

const platforms = [
  {
    title: "E-Learning",
    description: "Next-gen education with interactive courses.",
    icon: <BookOpen className="text-[#32FF00]" />,
    href: "/elearning",
    color: "from-[#32FF00] to-[#DFFF00]",
    iconSurface: "bg-[#32FF00]/15 group-hover:bg-[#32FF00]",
    iconText: "text-[#32FF00] dark:text-[#32FF00] group-hover:text-slate-950",
    checkColor: "text-[#32FF00]",
    features: ["Expert Mentors", "Live Sessions", "Certifications"]
  },
  {
    title: "Digital Agency",
    description: "Full-stack creative and tech solutions.",
    icon: <Briefcase className="text-[#00F5FF]" />,
    href: "/agency",
    color: "from-[#00F5FF] to-[#DFFF00]",
    iconSurface: "bg-[#00F5FF]/15 group-hover:bg-[#00F5FF]",
    iconText: "text-[#00F5FF] dark:text-[#00F5FF] group-hover:text-slate-950",
    checkColor: "text-[#00F5FF]",
    features: ["Web & App Dev", "Marketing", "Video Prod"]
  },
  {
    title: "Mock Tests",
    description: "Competitive exam mocks with rank analytics and AI guidance.",
    icon: <GraduationCap className="text-[#FF1493]" />,
    href: "/competition",
    color: "from-[#FF1493] to-[#DFFF00]",
    iconSurface: "bg-[#FF1493]/15 group-hover:bg-[#FF1493]",
    iconText: "text-[#FF1493] dark:text-[#FF1493] group-hover:text-white",
    checkColor: "text-[#FF1493]",
    features: ["Real Simulation", "AI Analytics", "Topic-wise Tests"]
  },
  {
    title: "Broker Trading",
    description: "Advanced dashboard for smart investors.",
    icon: <BarChart3 className="text-[#FF5F1F]" />,
    href: "/trading",
    color: "from-[#FF5F1F] to-[#DFFF00]",
    iconSurface: "bg-[#FF5F1F]/15 group-hover:bg-[#FF5F1F]",
    iconText: "text-[#FF5F1F] dark:text-[#FF5F1F] group-hover:text-white",
    checkColor: "text-[#FF5F1F]",
    features: ["Multi-asset", "AI Insights", "Advanced Charts"]
  },
  {
    title: "Useful Apps & Websites",
    description: "Curated collection of useful apps and websites.",
    icon: <LayoutGrid className="text-[#FF1E1E]" />,
    href: "/apps",
    color: "from-[#FF1E1E] to-[#DFFF00]",
    iconSurface: "bg-[#FF1E1E]/15 group-hover:bg-[#FF1E1E]",
    iconText: "text-[#FF1E1E] dark:text-[#FF1E1E] group-hover:text-white",
    checkColor: "text-[#FF1E1E]",
    features: ["Creator Studio", "Affiliate Program", "Guides"]
  },
  {
    title: "Odlix Mart",
    description: "Premium marketplace for high-end products.",
    icon: <ShoppingBag className="text-white" />,
    href: "/mart",
    color: "from-white to-[#DFFF00]",
    iconSurface: "bg-white/15 group-hover:bg-white",
    iconText: "text-white dark:text-white group-hover:text-slate-950",
    checkColor: "text-white dark:text-[#DFFF00]",
    features: ["Verified Products", "Secure Payments", "Fast Delivery"]
  },
];

export function PlatformShowcase() {
  return (
    <section id="platforms" className="py-32 text-foreground">
      <div className="container mx-auto px-4">
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-24 gap-8">
          <div>
            <h2 className="text-4xl md:text-6xl lg:text-7xl font-black mb-6 tracking-tight leading-[0.92]">Ecosystem <br /> <span className="text-[#DFFF00] italic">Hub.</span></h2>
            <p className="opacity-60 max-w-md text-lg md:text-xl font-medium leading-relaxed">
              Six dedicated engines driving the digital revolution.
            </p>
          </div>
          <Link href="/platforms" className="font-black text-xl flex items-center hover:text-[#00F5FF] transition-colors active:scale-95">
            Explore All Platforms <ArrowRight className="ml-2 w-6 h-6" />
          </Link>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-10">
          {platforms.map((platform, idx) => (
            <motion.div
              key={platform.title}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ delay: idx * 0.1 }}
              viewport={{ once: true }}
            >
              <Link
                href={platform.href}
                className="group relative block p-10 rounded-[3rem] border border-border bg-card hover:bg-muted/50 transition-all hover:-translate-y-4 h-full overflow-hidden active:scale-[0.98]"
              >
                <div className={`absolute top-0 right-0 w-64 h-64 bg-gradient-to-br ${platform.color} opacity-10 blur-[100px] group-hover:opacity-20 transition-opacity`} />

                <div className={`mb-10 flex h-20 w-20 items-center justify-center rounded-3xl text-3xl shadow-2xl transition-all group-hover:scale-110 ${platform.iconSurface} ${platform.iconText}`}>
                  {platform.icon}
                </div>

                <h3 className="text-3xl font-black mb-4 tracking-tighter">{platform.title}</h3>
                <p className="opacity-50 text-lg mb-8 group-hover:opacity-100 transition-opacity leading-snug font-medium">
                  {platform.description}
                </p>

                <div className="space-y-2 mb-10">
                   {platform.features.map(f => (
                     <div key={f} className="flex items-center space-x-2 text-xs font-black uppercase tracking-widest opacity-30 group-hover:opacity-60 transition-opacity">
                        <CheckCircle2 className={`h-3 w-3 ${platform.checkColor}`} />
                        <span>{f}</span>
                     </div>
                   ))}
                </div>

                <div className="flex items-center font-black text-sm uppercase tracking-[0.2em] opacity-40 group-hover:opacity-100 transition-opacity">
                  Access Platform <ArrowRight className="ml-2 w-4 h-4 group-hover:translate-x-1 transition-transform" />
                </div>
              </Link>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
