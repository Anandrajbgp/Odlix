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
    iconSurface: "bg-slate-800",
    iconText: "text-indigo-400",
    checkColor: "text-indigo-400",
    features: ["Expert Mentors", "Live Sessions", "Certifications"]
  },
  {
    title: "Digital Agency",
    description: "Full-stack creative and tech solutions.",
    icon: <Briefcase className="text-blue-400" />,
    href: "/agency",
    color: "from-[#1e3a8a] to-[#f97316]",
    iconSurface: "bg-slate-800",
    iconText: "text-blue-400",
    checkColor: "text-blue-400",
    features: ["Web & App Dev", "Marketing", "Video Prod"]
  },
  {
    title: "Mock Tests",
    description: "Competitive exam mocks with rank analytics and AI guidance.",
    icon: <GraduationCap className="text-sky-400" />,
    href: "/competition",
    color: "from-[#2563eb] to-[#f97316]",
    iconSurface: "bg-slate-800",
    iconText: "text-sky-400",
    checkColor: "text-sky-400",
    features: ["Real Simulation", "AI Analytics", "Topic-wise Tests"]
  },
  {
    title: "Broker Trading",
    description: "Advanced dashboard for smart investors.",
    icon: <BarChart3 className="text-[#7CFC00]" />,
    href: "/trading",
    color: "from-[#1f2937] to-[#7CFC00]",
    iconSurface: "bg-slate-800",
    iconText: "text-[#7CFC00]",
    checkColor: "text-[#7CFC00]",
    features: ["Multi-asset", "AI Insights", "Advanced Charts"]
  },
  {
    title: "App Store",
    description: "Curated collection of useful apps and websites.",
    icon: <LayoutGrid className="text-blue-400" />,
    href: "/apps",
    color: "from-[#64748b] to-[#2563eb]",
    iconSurface: "bg-slate-800",
    iconText: "text-blue-400",
    checkColor: "text-blue-400",
    features: ["Creator Studio", "Affiliate Program", "Guides"]
  },
  {
    title: "Useful Websites",
    description: "Handpicked websites for productivity, learning, and daily tools.",
    icon: <Globe className="text-teal-400" />,
    href: "/useful-websites",
    color: "from-[#14b8a6] to-[#eab308]",
    iconSurface: "bg-slate-800",
    iconText: "text-teal-400",
    checkColor: "text-teal-400",
    features: ["Verified Links", "Daily Tools", "Quick Access"]
  },
  {
    title: "Telegram Bots",
    description: "Automation bots for trading, alerts, and productivity on Telegram.",
    icon: <Send className="text-sky-400" />,
    href: "/telegram-bots",
    color: "from-[#24a1ee] to-[#38bdf8]",
    iconSurface: "bg-slate-800",
    iconText: "text-sky-400",
    checkColor: "text-sky-400",
    features: ["Trading Alerts", "Task Automation", "Instant Notify"]
  },
  {
    title: "Odlix Mart",
    description: "Premium marketplace for high-end products.",
    icon: <ShoppingBag className="text-orange-400" />,
    href: "/mart",
    color: "from-[#ea580c] to-[#fb923c]",
    iconSurface: "bg-slate-800",
    iconText: "text-orange-400",
    checkColor: "text-orange-400",
    features: ["Verified Products", "Secure Payments", "Fast Delivery"]
  },
];

export function PlatformShowcase() {
  return (
    <section id="platforms" className="relative overflow-hidden py-24 text-foreground">
      <div className="container relative z-10 mx-auto px-4 max-w-6xl">
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-16 gap-8">
          <div>
            <span className="text-xs font-bold uppercase tracking-widest text-amber-400 mb-2 block">
              Ecosystem Hub
            </span>
            <h2 className="text-3xl md:text-5xl font-extrabold tracking-tight text-white">
              Connected Platforms
            </h2>
            <p className="text-slate-400 text-base font-normal mt-2 max-w-md">
              Dedicated engines driving the digital revolution under one roof.
            </p>
          </div>
          <Link href="/platforms" className="font-bold text-sm flex items-center text-amber-400 hover:underline">
            Explore All Platforms <ArrowRight className="ml-2 w-4 h-4" />
          </Link>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {platforms.map((platform, idx) => (
            <motion.div
              key={platform.title}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ delay: idx * 0.08 }}
              viewport={{ once: true }}
            >
              <Link
                href={platform.href}
                className="group relative block p-8 rounded-3xl border border-slate-800 bg-slate-900/90 backdrop-blur-xl hover:border-slate-700 transition-all hover:-translate-y-1 h-full overflow-hidden text-white shadow-xl"
              >
                <div className={`mb-6 flex h-12 w-12 items-center justify-center rounded-2xl text-xl shadow-md transition-all ${platform.iconSurface} ${platform.iconText}`}>
                  {platform.icon}
                </div>

                <h3 className="text-xl font-bold mb-2 tracking-tight text-white">{platform.title}</h3>
                <p className="text-slate-400 font-normal text-sm mb-6 leading-relaxed">
                  {platform.description}
                </p>

                <div className="space-y-2 mb-6">
                   {platform.features.map(f => (
                     <div key={f} className="flex items-center space-x-2 text-xs font-bold uppercase tracking-wider text-slate-300">
                        <CheckCircle2 className={`h-4 w-4 ${platform.checkColor}`} />
                        <span>{f}</span>
                     </div>
                   ))}
                </div>

                <div className="flex items-center font-bold text-xs uppercase tracking-widest text-amber-400 group-hover:underline">
                  Access Platform <ArrowRight className="ml-1.5 w-3.5 h-3.5" />
                </div>
              </Link>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
