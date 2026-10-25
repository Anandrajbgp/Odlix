"use client";

import { motion } from "framer-motion";
import {
  Users,
  BookOpen,
  Wallet,
  BarChart3,
  Settings,
  Bell,
  ShieldCheck,
  Search,
  Plus,
  MoreVertical,
  ArrowUpRight,
  TrendingUp,
  LayoutDashboard,
  Filter,
  CheckCircle2,
  Mail,
  Smartphone,
  ChevronRight
} from "lucide-react";
import { useState } from "react";
import Link from "next/link";
import { signOut } from "next-auth/react";
import { cn } from "@/lib/utils";

const adminLinks = [
  { name: "Overview", icon: <LayoutDashboard />, id: "overview" },
  { name: "Students Management", icon: <Users />, id: "students" },
  { name: "Courses Management", icon: <BookOpen />, id: "courses" },
  { name: "Packages & Payments", icon: <Wallet />, id: "payments" },
  { name: "Affiliate Management", icon: <TrendingUp />, id: "affiliates" },
  { name: "Notifications / Marketing", icon: <Bell />, id: "marketing" },
  { name: "Admin Settings", icon: <Settings />, id: "settings" },
];

export default function AdminPanel() {
  const [activeTab, setActiveTab] = useState("overview");

  return (
    <div className="flex min-h-screen bg-background text-foreground transition-colors duration-300">
      {/* Sidebar */}
      <aside className="w-80 bg-card border-r border-border flex flex-col sticky top-0 h-screen shrink-0">
        <div className="p-8 border-b border-border">
          <Link href="/elearning" className="flex items-center space-x-3 group">
             <div className="w-10 h-10 rounded-xl bg-slate-950 dark:bg-white flex items-center justify-center text-white dark:text-slate-950 shadow-lg group-hover:rotate-6 transition-transform">
                <ShieldCheck className="w-6 h-6" />
             </div>
             <div>
                <div className="text-lg font-black tracking-tighter leading-none uppercase">ADMIN HUB</div>
                <div className="text-[9px] font-bold opacity-40 tracking-[0.2em] leading-none mt-1.5 uppercase">Control by Odlix</div>
             </div>
          </Link>
        </div>

        <nav className="flex-1 p-6 space-y-1.5 overflow-y-auto">
          {adminLinks.map((link) => (
            <button
              key={link.id}
              onClick={() => setActiveTab(link.id)}
              className={cn(
                "w-full flex items-center space-x-4 p-4 rounded-[1.2rem] font-bold text-sm transition-all group relative",
                activeTab === link.id
                  ? "bg-foreground text-background shadow-2xl"
                  : "text-muted-foreground hover:text-foreground hover:bg-muted"
              )}
            >
              <span className="w-5 h-5">{link.icon}</span>
              <span className="tracking-tight">{link.name}</span>
              {activeTab === link.id && <div className="absolute right-4"><ChevronRight className="w-4 h-4" /></div>}
            </button>
          ))}
        </nav>

        <div className="p-6 border-t border-border space-y-4">
          <div className="flex items-center space-x-4 p-5 rounded-[1.5rem] bg-muted transition-colors">
             <div className="w-12 h-12 rounded-[1rem] bg-slate-300 dark:bg-slate-700 border-2 border-background" />
             <div>
                <div className="text-xs font-black uppercase tracking-tight">Super Admin</div>
                <div className="text-[10px] opacity-40 font-bold">admin@odlix.com</div>
             </div>
          </div>
          <button
            onClick={() => {
              void signOut({ callbackUrl: "/login" });
            }}
            className="w-full rounded-2xl border border-red-500/20 bg-red-500/5 px-4 py-3 text-[10px] font-black uppercase tracking-widest text-red-500 transition hover:bg-red-500/10"
          >
            Sign out admin
          </button>
        </div>
      </aside>

      {/* Main Content */}
      <main className="flex-1 p-12 overflow-y-auto">
        <header className="flex justify-between items-end mb-16">
           <div>
              <div className="flex items-center space-x-2 text-[10px] font-black uppercase tracking-[0.3em] opacity-40 mb-3">
                 <ShieldCheck className="w-3 h-3" />
                 <span>Security Level: Tier 1</span>
              </div>
              <h1 className="text-4xl md:text-5xl font-black tracking-tighter">Admin Control.</h1>
              <p className="opacity-40 font-bold uppercase text-[10px] tracking-widest mt-2 italic">Real-time Platform Orchestration</p>
           </div>
           <div className="flex items-center space-x-4">
              <div className="relative p-3 rounded-2xl bg-card border border-border shadow-sm cursor-pointer hover:bg-muted transition-all">
                 <Bell className="w-6 h-6 text-muted-foreground" />
                 <span className="absolute top-2 right-2 w-2.5 h-2.5 bg-red-500 rounded-full border-2 border-card" />
              </div>
              <button className="bg-foreground text-background px-8 py-3.5 rounded-[1.2rem] font-black text-xs uppercase tracking-[0.2em] flex items-center space-x-3 shadow-xl hover:opacity-90 active:scale-95 transition-all">
                 <Plus className="w-4 h-4" />
                 <span>Deploy Content</span>
              </button>
           </div>
        </header>

        {activeTab === "overview" && (
           <div className="space-y-12 text-foreground">
              {/* Top Stats */}
              <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
                 {[
                   { label: "Total Revenue", value: "₹12.5M", change: "+12%", up: true, color: "text-green-600 dark:text-green-400" },
                   { label: "Active Students", value: "24,802", change: "+5%", up: true, color: "text-indigo-600 dark:text-indigo-400" },
                   { label: "Pending Payouts", value: "₹2.4L", change: "-8%", up: false, color: "text-orange-600 dark:text-orange-400" },
                   { label: "Affiliate Payouts", value: "₹8.2L", change: "+18%", up: true, color: "text-purple-600 dark:text-purple-400" },
                 ].map((stat, i) => (
                   <motion.div
                     key={i}
                     initial={{ opacity: 0, y: 20 }}
                     animate={{ opacity: 1, y: 0 }}
                     transition={{ delay: i * 0.1 }}
                     className="bg-card p-8 rounded-[2.5rem] border border-border shadow-sm hover:shadow-xl transition-all"
                   >
                      <div className="flex justify-between items-start mb-6">
                        <div className="opacity-40 font-bold uppercase text-[10px] tracking-widest">{stat.label}</div>
                        <div className={cn("text-[9px] font-black px-2 py-0.5 rounded-full border", stat.up ? "bg-green-500/10 text-green-600 border-green-500/20" : "bg-red-500/10 text-red-600 border-red-500/20")}>
                           {stat.change}
                        </div>
                      </div>
                      <div className={cn("text-3xl font-black tracking-tighter", stat.color)}>{stat.value}</div>
                   </motion.div>
                 ))}
              </div>

              {/* Data Table */}
              <div className="bg-card rounded-[3.5rem] border border-border shadow-sm overflow-hidden text-foreground">
                 <div className="p-10 border-b border-border flex flex-col md:flex-row justify-between md:items-center gap-6">
                    <div>
                       <h3 className="text-2xl font-black uppercase tracking-tighter leading-none mb-2">Recent Enrollments</h3>
                       <p className="text-[10px] font-bold uppercase opacity-30 tracking-widest italic">Last updated: 2 mins ago</p>
                    </div>
                    <div className="flex items-center space-x-3">
                       <div className="bg-muted p-2 rounded-[1.2rem] flex items-center px-5 border border-border shadow-inner">
                          <Search className="w-4 h-4 opacity-30 mr-3" />
                          <input type="text" placeholder="Global search students..." className="bg-transparent text-sm focus:outline-none w-48 font-medium" />
                       </div>
                       <button className="p-3 border border-border rounded-[1.2rem] bg-card hover:bg-muted transition-all active:scale-95 shadow-sm"><Filter className="w-4 h-4 opacity-40" /></button>
                    </div>
                 </div>
                 <div className="overflow-x-auto">
                    <table className="w-full">
                       <thead>
                          <tr className="bg-muted/30 text-left border-b border-border">
                             <th className="p-8 text-[10px] font-black uppercase opacity-40 tracking-[0.2em]">Full Identification</th>
                             <th className="p-8 text-[10px] font-black uppercase opacity-40 tracking-[0.2em]">Active Package</th>
                             <th className="p-8 text-[10px] font-black uppercase opacity-40 tracking-[0.2em]">Onboarding Date</th>
                             <th className="p-8 text-[10px] font-black uppercase opacity-40 tracking-[0.2em]">Lifecycle</th>
                             <th className="p-8 text-[10px] font-black uppercase opacity-40 tracking-[0.2em] text-right">Actions</th>
                          </tr>
                       </thead>
                       <tbody className="divide-y divide-border">
                          {[
                            { name: "Rahul Singh", email: "rahul.s@example.com", pkg: "Expert", date: "Aug 17, 2026", status: "Active" },
                            { name: "Priya Verma", email: "priya.v@odlix.com", pkg: "Pro", date: "Aug 16, 2026", status: "Idle" },
                            { name: "Amit Khanna", email: "amit.k@web.in", pkg: "Beginner", date: "Aug 15, 2026", status: "Active" },
                          ].map((row, i) => (
                            <tr key={i} className="hover:bg-muted/20 transition-colors group">
                               <td className="p-8">
                                  <div className="flex items-center space-x-4">
                                     <div className="w-10 h-10 rounded-xl bg-muted border border-border" />
                                     <div>
                                        <div className="font-black text-sm tracking-tight">{row.name}</div>
                                        <div className="text-[10px] opacity-40 font-bold">{row.email}</div>
                                     </div>
                                  </div>
                               </td>
                               <td className="p-8">
                                  <span className={cn("px-4 py-1.5 rounded-full text-[9px] font-black uppercase tracking-widest border",
                                    row.pkg === "Expert" ? "bg-purple-500/10 text-purple-600 border-purple-500/20" : row.pkg === "Pro" ? "bg-indigo-500/10 text-indigo-600 border-indigo-500/20" : "bg-green-500/10 text-green-600 border-green-500/20"
                                  )}>
                                     {row.pkg} Package
                                  </span>
                               </td>
                               <td className="p-8 text-xs font-black opacity-60 uppercase tracking-widest">{row.date}</td>
                               <td className="p-8">
                                  <div className="flex items-center space-x-2">
                                     <div className={cn("w-2 h-2 rounded-full", row.status === "Active" ? "bg-green-500 shadow-[0_0_10px_rgba(34,197,94,0.5)]" : "bg-orange-500")} />
                                     <span className="text-[10px] font-black uppercase tracking-widest opacity-70">{row.status}</span>
                                  </div>
                               </td>
                               <td className="p-8 text-right">
                                  <button className="opacity-20 group-hover:opacity-100 transition-all hover:bg-muted p-2 rounded-lg"><MoreVertical className="w-5 h-5" /></button>
                               </td>
                            </tr>
                          ))}
                       </tbody>
                    </table>
                 </div>
              </div>
           </div>
        )}

        {/* Marketing Engine Feature */}
        {activeTab === "marketing" && (
           <div className="max-w-4xl space-y-12">
              <div className="bg-card p-12 rounded-[4rem] border border-border shadow-lg">
                 <h2 className="text-3xl font-black mb-8 uppercase tracking-tighter">Notification Engine</h2>
                 <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-12">
                    <div className="p-8 rounded-[2rem] bg-muted/40 border border-border hover:border-indigo-500/30 transition-all cursor-pointer">
                       <Mail className="text-indigo-600 mb-4 w-8 h-8" />
                       <h4 className="font-black text-lg mb-2">Email Campaigns</h4>
                       <p className="text-xs opacity-50 font-bold uppercase tracking-widest">Schedule weekly Saturday reports</p>
                    </div>
                    <div className="p-8 rounded-[2rem] bg-muted/40 border border-border hover:border-green-500/30 transition-all cursor-pointer">
                       <Smartphone className="text-green-600 mb-4 w-8 h-8" />
                       <h4 className="font-black text-lg mb-2">WhatsApp Alerts</h4>
                       <p className="text-xs opacity-50 font-bold uppercase tracking-widest">Festival bonus announcements</p>
                    </div>
                 </div>
                 <button className="w-full py-5 rounded-[1.5rem] bg-foreground text-background font-black uppercase tracking-[0.3em] text-xs">New Automation Flow</button>
              </div>
           </div>
        )}

        {/* Dynamic Empty States */}
        {activeTab !== "overview" && activeTab !== "marketing" && (
           <div className="flex flex-col items-center justify-center h-[60vh] text-muted-foreground">
              <div className="w-24 h-24 bg-muted/50 border border-border rounded-[2.5rem] flex items-center justify-center mb-8 shadow-inner">
                 <span className="text-foreground scale-150">{adminLinks.find(l => l.id === activeTab)?.icon}</span>
              </div>
              <h2 className="text-3xl font-black text-foreground mb-4 tracking-tighter uppercase">{adminLinks.find(l => l.id === activeTab)?.name}</h2>
              <p className="max-w-xs text-center font-medium italic opacity-60 transition-colors">Admin module in beta calibration mode.</p>
           </div>
        )}
      </main>
    </div>
  );
}

