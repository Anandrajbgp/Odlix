"use client";

import { motion } from "framer-motion";
import {
  Globe,
  Smartphone,
  BarChart3,
  Share2,
  Zap,
  LayoutGrid,
  BookText,
  Star,
  ArrowRight,
  Heart,
  Download,
  CreditCard,
  Settings,
  TrendingUp
} from "lucide-react";
import { useState } from "react";
import Link from "next/link";
import { cn } from "@/lib/utils";

const categories = [
  { name: "Productivity", count: 120 },
  { name: "Learning", count: 85 },
  { name: "Design", count: 64 },
  { name: "Finance", count: 42 },
  { name: "Marketing", count: 91 },
  { name: "Business", count: 53 },
];

const apps = [
  {
    name: "FocusFlow",
    category: "Productivity",
    rating: 4.8,
    downloads: "50k+",
    desc: "AI-driven task manager for high-performance teams.",
    price: "Free",
    icon: <Zap className="text-[var(--platform-accent)]" />,
  },
  {
    name: "GraphixPro",
    category: "Design",
    rating: 4.9,
    downloads: "12k+",
    desc: "Next-gen vector editor with real-time collaboration.",
    price: "$9.99",
    icon: <LayoutGrid className="text-[var(--platform-primary)]" />,
  },
  {
    name: "EduVault",
    category: "Learning",
    rating: 4.7,
    downloads: "30k+",
    desc: "Personalized knowledge base for modern learners.",
    price: "Premium",
    icon: <BookText className="text-[var(--platform-secondary)]" />,
  },
];

export function StoreTabs() {
  const [activeTab, setActiveTab] = useState("explore");

  return (
    <div className="container mx-auto px-4">
      {/* Tab Navigation */}
      <div className="flex items-center justify-center space-x-2 md:space-x-8 border-b border-border mb-16 overflow-x-auto scrollbar-hide">
        {[
          { id: "explore", name: "Explore", icon: <Globe className="w-4 h-4" /> },
          { id: "user", name: "My Space", icon: <Smartphone className="w-4 h-4" /> },
          { id: "creator", name: "Creator Studio", icon: <BarChart3 className="w-4 h-4" /> },
          { id: "affiliate", name: "Affiliate Hub", icon: <Share2 className="w-4 h-4" /> },
        ].map((tab) => (
          <button
            key={tab.id}
            onClick={() => setActiveTab(tab.id)}
            className={cn(
              "flex items-center space-x-2 px-8 py-5 font-black text-[10px] uppercase tracking-[0.2em] transition-all border-b-2 whitespace-nowrap active:scale-95",
              activeTab === tab.id ? "border-[var(--platform-accent)] text-[var(--platform-accent)]" : "border-transparent opacity-40 hover:opacity-100"
            )}
          >
            {tab.icon}
            <span>{tab.name}</span>
          </button>
        ))}
      </div>

      <div className="pb-32">
        {activeTab === "explore" && (
          <div className="grid grid-cols-1 lg:grid-cols-4 gap-16">
            {/* Sidebar Categories */}
            <aside className="space-y-12">
              <div>
                <h3 className="opacity-30 font-black uppercase text-[10px] tracking-[0.3em] mb-8 text-foreground">Categories</h3>
                <div className="space-y-2">
                  {categories.map(cat => (
                    <button key={cat.name} className="w-full flex justify-between items-center p-4 rounded-2xl hover:bg-muted transition-colors group">
                      <span className="opacity-70 group-hover:opacity-100 font-bold text-sm">{cat.name}</span>
                      <span className="bg-muted text-muted-foreground text-[10px] font-black px-3 py-1 rounded-full">{cat.count}</span>
                    </button>
                  ))}
                </div>
              </div>
              <div className="p-8 rounded-[3rem] bg-gradient-to-br from-[var(--platform-primary)]/10 to-[var(--platform-accent)]/10 border border-[var(--platform-accent)]/20 shadow-inner">
                <h4 className="font-black text-lg mb-2 text-foreground tracking-tight">Tutorials</h4>
                <p className="text-xs opacity-50 mb-6 font-medium leading-relaxed">Learn how to scale with our curated professional stack.</p>
                <Link href="#" className="text-[var(--platform-accent)] text-[10px] font-black uppercase tracking-widest flex items-center hover:underline">
                  Browse Guides <ArrowRight className="w-4 h-4 ml-2" />
                </Link>
              </div>
            </aside>

            {/* App Grid */}
            <div className="lg:col-span-3">
              <div className="flex justify-between items-center mb-10 text-foreground">
                <h2 className="text-3xl font-black tracking-tighter uppercase">Featured Tools</h2>
                <div className="opacity-30 text-[10px] font-black uppercase tracking-widest">Showing 450 items</div>
              </div>
              <div className="space-y-4">
                {apps.map((app, i) => (
                  <motion.div
                    key={app.name}
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ delay: i * 0.1 }}
                    className="group rounded-3xl border border-border bg-card p-5 transition-all hover:border-[var(--platform-accent)]/30 hover:shadow-xl"
                  >
                    <div className="flex flex-col gap-5 sm:flex-row sm:items-center sm:justify-between">
                      <div className="flex items-start gap-4">
                        <div className="flex h-16 w-16 items-center justify-center rounded-2xl bg-muted text-3xl shadow-inner">
                          {app.icon}
                        </div>
                        <div>
                          <h3 className="text-2xl font-black tracking-tight text-foreground">{app.name}</h3>
                          <p className="mt-1 text-[10px] font-black uppercase tracking-[0.14em] text-[var(--platform-accent)]">{app.category}</p>
                          <p className="mt-3 max-w-xl text-sm font-medium leading-relaxed text-foreground/60">{app.desc}</p>
                          <div className="mt-3 flex flex-wrap items-center gap-3 text-[10px] font-black uppercase tracking-[0.12em] text-foreground/50">
                            <span className="inline-flex items-center gap-1 rounded-full border border-yellow-500/20 bg-yellow-500/10 px-3 py-1 text-yellow-600">
                              <Star className="h-3 w-3 fill-current" />
                              {app.rating}
                            </span>
                            <span>{app.downloads} downloads</span>
                          </div>
                        </div>
                      </div>

                      <div className="flex items-center gap-3 sm:flex-col sm:items-end">
                        <button className="rounded-xl border border-[var(--platform-accent)]/35 bg-[var(--platform-accent)]/10 px-5 py-3 text-[10px] font-black uppercase tracking-[0.14em] text-[var(--platform-accent)] transition-all hover:bg-[var(--platform-accent)]/20 active:scale-95">
                          Install
                        </button>
                        <button className="rounded-xl bg-foreground px-5 py-3 text-[10px] font-black uppercase tracking-[0.14em] text-background transition-all hover:opacity-90 active:scale-95">
                          {app.price === "Free" ? "Open Details" : `Buy ${app.price}`}
                        </button>
                      </div>
                    </div>
                  </motion.div>
                ))}
              </div>
            </div>
          </div>
        )}

        {activeTab === "user" && (
          <div className="max-w-6xl mx-auto">
             <div className="grid grid-cols-1 md:grid-cols-3 gap-10">
                <div className="p-10 rounded-[4rem] bg-card border border-border shadow-sm group hover:border-[var(--platform-accent)]/30 transition-all cursor-pointer">
                   <div className="w-14 h-14 rounded-2xl bg-[var(--platform-accent)]/10 flex items-center justify-center mb-8 shadow-inner"><Heart className="text-[var(--platform-accent)]" /></div>
                   <h3 className="text-2xl font-black mb-2 text-foreground tracking-tighter uppercase">Wishlist</h3>
                   <p className="opacity-40 text-sm mb-8 font-medium italic">12 precision tools saved for future acquisition.</p>
                   <div className="text-[var(--platform-accent)] font-black text-[10px] uppercase tracking-[0.2em] flex items-center group-hover:translate-x-2 transition-transform">Explore Saves <ArrowRight className="w-4 h-4 ml-2" /></div>
                </div>
                <div className="p-10 rounded-[4rem] bg-card border border-border shadow-sm group hover:border-[var(--platform-primary)]/30 transition-all cursor-pointer">
                   <div className="w-14 h-14 rounded-2xl bg-[var(--platform-primary)]/10 flex items-center justify-center mb-8 shadow-inner"><Download className="text-[var(--platform-primary)]" /></div>
                   <h3 className="text-2xl font-black mb-2 text-foreground tracking-tighter uppercase">Vault</h3>
                   <p className="opacity-40 text-sm mb-8 font-medium italic">4 active professional licenses and installers verified.</p>
                   <div className="text-[var(--platform-primary)] font-black text-[10px] uppercase tracking-[0.2em] flex items-center group-hover:translate-x-2 transition-transform">Access Library <ArrowRight className="w-4 h-4 ml-2" /></div>
                </div>
                <div className="p-10 rounded-[4rem] bg-card border border-border shadow-sm group hover:border-[var(--platform-secondary)]/30 transition-all cursor-pointer">
                   <div className="w-14 h-14 rounded-2xl bg-[var(--platform-secondary)]/10 flex items-center justify-center mb-8 shadow-inner"><CreditCard className="text-[var(--platform-secondary)]" /></div>
                   <h3 className="text-2xl font-black mb-2 text-foreground tracking-tighter uppercase">Billing</h3>
                   <p className="opacity-40 text-sm mb-8 font-medium italic">Manage active recurring payments and bundle offers.</p>
                   <div className="text-[var(--platform-secondary)] font-black text-[10px] uppercase tracking-[0.2em] flex items-center group-hover:translate-x-2 transition-transform">View Invoices <ArrowRight className="w-4 h-4 ml-2" /></div>
                </div>
             </div>
          </div>
        )}

        {activeTab === "creator" && (
          <div className="bg-card rounded-[5rem] border border-border p-16 md:p-24 overflow-hidden relative shadow-2xl text-foreground">
             <div className="absolute top-0 right-0 p-12 opacity-5 text-foreground rotate-12 pointer-events-none"><Settings className="w-64 h-64" /></div>
             <div className="max-w-2xl relative z-10">
                <h2 className="text-5xl md:text-7xl font-black mb-12 tracking-tighter uppercase leading-none">Creator <br /><span className="text-[var(--platform-accent)] italic">Studio.</span></h2>
                <div className="grid grid-cols-2 gap-12 mb-16">
                   <div>
                      <div className="opacity-30 text-[10px] font-black uppercase tracking-[0.3em] mb-2">Aggregate Sales</div>
                      <div className="text-5xl font-black text-[var(--platform-accent)] tracking-tighter">$12,450</div>
                   </div>
                   <div>
                      <div className="opacity-30 text-[10px] font-black uppercase tracking-[0.3em] mb-2">Verified Installs</div>
                      <div className="text-5xl font-black text-[var(--platform-primary)] tracking-tighter">8,902</div>
                   </div>
                </div>
                <div className="h-48 bg-muted rounded-[2rem] border border-border flex items-center justify-center italic opacity-30 font-black text-sm uppercase tracking-widest select-none">
                   Revenue Analytics Visualization...
                </div>
                <button className="mt-16 px-10 py-5 rounded-[1.5rem] bg-[var(--platform-primary)] text-white font-black text-sm uppercase tracking-widest shadow-xl shadow-[var(--platform-accent)]/20 active:scale-95 transition-all">Submit Platform</button>
             </div>
          </div>
        )}

        {activeTab === "affiliate" && (
          <div className="text-center max-w-4xl mx-auto text-foreground">
             <div className="w-24 h-24 bg-[var(--platform-accent)]/10 rounded-full flex items-center justify-center mx-auto mb-10 border border-[var(--platform-accent)]/20 shadow-inner">
                <TrendingUp className="text-[var(--platform-accent)] w-10 h-10" />
             </div>
             <h2 className="text-5xl md:text-7xl font-black mb-8 tracking-tighter uppercase leading-none">Global <br /><span className="text-[var(--platform-accent)]">Affiliate.</span></h2>
             <p className="opacity-50 text-xl md:text-2xl mb-16 max-w-2xl mx-auto font-medium leading-relaxed italic">
                Share your curated professional stack with your audience and earn up to 30% commission on every verified sale.
             </p>
             <div className="bg-card p-10 rounded-[3rem] border border-border mb-12 shadow-sm relative group overflow-hidden">
                <div className="absolute inset-0 bg-[var(--platform-accent)] opacity-0 group-hover:opacity-[0.03] transition-opacity" />
                <div className="opacity-30 mb-3 font-black text-[10px] uppercase tracking-[0.3em]">Unique Partner Identifier</div>
                <div className="font-mono text-[var(--platform-accent)] text-2xl font-black tracking-tight">odlix.com/ref/partner_x902</div>
             </div>
             <button className="px-16 py-7 rounded-[2rem] bg-foreground text-background font-black text-xl uppercase tracking-[0.2em] hover:scale-105 active:scale-95 transition-all shadow-2xl">
                Activate Program
             </button>
          </div>
        )}
      </div>
    </div>
  );
}
