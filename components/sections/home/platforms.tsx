"use client";

import { motion } from "framer-motion";
import { ArrowRight, BookOpen, Briefcase, GraduationCap, BarChart3, LayoutGrid, ShoppingBag, CheckCircle2, Globe, Send } from "lucide-react";
import Link from "next/link";

const platforms = [
  {
    title: "E-Learning",
    description: "Next-gen education with interactive courses.",
    icon: <BookOpen className="text-[#4f46e5]" />,
    href: "/elearning",
    color: "from-[#4f46e5] to-[#06b6d4]",
    iconSurface: "bg-[#4f46e5]/15 group-hover:bg-[#4f46e5]",
    iconText: "text-[#4f46e5] dark:text-[#4f46e5] group-hover:text-slate-950",
    checkColor: "text-[#4f46e5]",
    features: ["Expert Mentors", "Live Sessions", "Certifications"]
  },
  {
    title: "Digital Agency",
    description: "Full-stack creative and tech solutions.",
    icon: <Briefcase className="text-[#1e3a8a]" />,
    href: "/agency",
    color: "from-[#1e3a8a] to-[#f97316]",
    iconSurface: "bg-[#1e3a8a]/15 group-hover:bg-[#1e3a8a]",
    iconText: "text-[#1e3a8a] dark:text-[#1e3a8a] group-hover:text-white",
    checkColor: "text-[#14b8a6]",
    features: ["Web & App Dev", "Marketing", "Video Prod"]
  },
  {
    title: "Mock Tests",
    description: "Competitive exam mocks with rank analytics and AI guidance.",
    icon: <GraduationCap className="text-[#2563eb]" />,
    href: "/competition",
    color: "from-[#2563eb] to-[#f97316]",
    iconSurface: "bg-[#2563eb]/15 group-hover:bg-[#2563eb]",
    iconText: "text-[#2563eb] dark:text-[#2563eb] group-hover:text-white",
    checkColor: "text-[#2563eb]",
    features: ["Real Simulation", "AI Analytics", "Topic-wise Tests"]
  },
  {
    title: "Broker Trading",
    description: "Advanced dashboard for smart investors.",
    icon: <BarChart3 className="text-[#7CFC00]" />,
    href: "/trading",
    color: "from-[#1f2937] to-[#7CFC00]",
    iconSurface: "bg-[#7CFC00]/15 group-hover:bg-[#7CFC00]",
    iconText: "text-[#7CFC00] dark:text-[#7CFC00] group-hover:text-slate-900",
    checkColor: "text-[#7CFC00]",
    features: ["Multi-asset", "AI Insights", "Advanced Charts"]
  },
  {
    title: "App Store",
    description: "Curated collection of useful apps and websites.",
    icon: <LayoutGrid className="text-[#2563eb]" />,
    href: "/apps",
    color: "from-[#64748b] to-[#2563eb]",
    iconSurface: "bg-[#2563eb]/15 group-hover:bg-[#2563eb]",
    iconText: "text-[#2563eb] dark:text-[#2563eb] group-hover:text-white",
    checkColor: "text-[#2563eb]",
    features: ["Creator Studio", "Affiliate Program", "Guides"]
  },
  {
    title: "Useful Websites",
    description: "Handpicked websites for productivity, learning, and daily tools.",
    icon: <Globe className="text-[#14b8a6]" />,
    href: "/useful-websites",
    color: "from-[#14b8a6] to-[#eab308]",
    iconSurface: "bg-[#14b8a6]/15 group-hover:bg-[#14b8a6]",
    iconText: "text-[#14b8a6] dark:text-[#14b8a6] group-hover:text-slate-950",
    checkColor: "text-[#14b8a6]",
    features: ["Verified Links", "Daily Tools", "Quick Access"]
  },
  {
    title: "Telegram Bots",
    description: "Automation bots for trading, alerts, and productivity on Telegram.",
    icon: <Send className="text-[#24a1ee]" />,
    href: "/telegram-bots",
    color: "from-[#24a1ee] to-[#38bdf8]",
    iconSurface: "bg-[#24a1ee]/15 group-hover:bg-[#24a1ee]",
    iconText: "text-[#24a1ee] dark:text-[#24a1ee] group-hover:text-white",
    checkColor: "text-[#24a1ee]",
    features: ["Trading Alerts", "Task Automation", "Instant Notify"]
  },
  {
    title: "Odlix Mart",
    description: "Premium marketplace for high-end products.",
    icon: <ShoppingBag className="text-white" />,
    href: "/mart",
     color: "from-[#ea580c] to-[#fb923c]",
    iconSurface: "bg-white/15 group-hover:bg-white",
    iconText: "text-white dark:text-white group-hover:text-slate-950",
     checkColor: "text-white dark:text-[#fb923c]",
    features: ["Verified Products", "Secure Payments", "Fast Delivery"]
  },
];

export function PlatformShowcase() {
  return (
    <section id="platforms" className="relative overflow-hidden py-32 text-foreground">
      <div className="absolute -right-20 top-0 h-72 w-72 rounded-full bg-[#2563eb]/15 blur-3xl" />
      <div className="absolute -left-20 bottom-0 h-72 w-72 rounded-full bg-[#f59e0b]/15 blur-3xl" />
      <div className="absolute right-1/3 top-1/2 h-64 w-64 rounded-full bg-[#7CFC00]/10 blur-3xl" />
      <div className="container relative z-10 mx-auto px-4">
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-16 gap-8">
          <div>
            <h2 className="text-4xl md:text-6xl lg:text-7xl font-black mb-4 tracking-tight leading-[0.92] text-white">Ecosystem <br /> <span className="text-[#f59e0b] italic">Hub.</span></h2>
            <p className="text-slate-200 text-lg md:text-xl font-semibold leading-relaxed max-w-md">
              Dedicated engines driving the digital revolution.
            </p>
          </div>
          <Link href="/platforms" className="font-black text-xl flex items-center text-amber-400 hover:text-amber-300 transition-colors active:scale-95">
            Explore All Platforms <ArrowRight className="ml-2 w-6 h-6" />
          </Link>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
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
                className="group relative block p-8 md:p-10 rounded-[2.5rem] border border-slate-700/70 bg-slate-950/85 backdrop-blur-xl hover:bg-slate-900/90 hover:border-amber-400/80 transition-all hover:-translate-y-2 h-full overflow-hidden active:scale-[0.98] text-white shadow-2xl"
              >
                <div className={`absolute top-0 right-0 w-64 h-64 bg-gradient-to-br ${platform.color} opacity-20 blur-[90px] group-hover:opacity-30 transition-opacity`} />

                <div className={`mb-8 flex h-16 w-16 items-center justify-center rounded-2xl text-2xl shadow-xl transition-all group-hover:scale-110 ${platform.iconSurface} ${platform.iconText}`}>
                  {platform.icon}
                </div>

                <h3 className="text-2xl md:text-3xl font-black mb-3 tracking-tight text-white">{platform.title}</h3>
                <p className="text-slate-300 font-semibold text-sm md:text-base mb-6 leading-relaxed group-hover:text-white transition-colors">
                  {platform.description}
                </p>

                <div className="space-y-2.5 mb-8">
                   {platform.features.map(f => (
                     <div key={f} className="flex items-center space-x-2 text-xs font-black uppercase tracking-widest text-slate-200">
                        <CheckCircle2 className={`h-4 w-4 ${platform.checkColor}`} />
                        <span>{f}</span>
                     </div>
                   ))}
                </div>

                <div className="flex items-center font-extrabold text-xs md:text-sm uppercase tracking-[0.2em] text-amber-400 group-hover:text-amber-300 transition-colors">
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



