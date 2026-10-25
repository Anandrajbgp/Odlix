"use client";

import { motion } from "framer-motion";
import {
  User,
  Wallet,
  BookOpen,
  ArrowUpRight,
  Trophy,
  Users,
  Award,
  Settings,
  LogOut,
  LayoutDashboard,
  Video,
  FileText,
  Wrench,
  HelpCircle,
  Share2,
  Smartphone,
  ChevronRight,
  TrendingUp,
  Globe
} from "lucide-react";
import { useState } from "react";
import Link from "next/link";
import { signOut } from "next-auth/react";
import { cn } from "@/lib/utils";

const sidebarLinks = [
  { name: "Profile", icon: <User />, id: "profile" },
  { name: "Earning", icon: <TrendingUp />, id: "earning" },
  { name: "My Courses", icon: <Video />, id: "courses" },
  { name: "Payout", icon: <Wallet />, id: "payout" },
  { name: "Training", icon: <LayoutDashboard />, id: "training" },
  { name: "Affiliates", icon: <Users />, id: "affiliates" },
  { name: "Leaderboard", icon: <Trophy />, id: "leaderboard" },
  { name: "Tools", icon: <Wrench />, id: "tools" },
  { name: "Certificates", icon: <Award />, id: "certificates" },
  { name: "Quiz", icon: <FileText />, id: "quiz" },
  { name: "Social Media Handles", icon: <Share2 />, id: "social" },
];

export default function StudentDashboard() {
  const [activeTab, setActiveTab] = useState("courses"); // Starting with Step 1: Learn (Courses)

  return (
    <div className="flex min-h-screen bg-background text-foreground transition-colors duration-300">
      {/* Sidebar */}
      <aside className="w-80 bg-slate-950 text-white flex flex-col sticky top-0 h-screen shrink-0 border-r border-white/5">
        <div className="p-8 border-b border-white/10">
          <Link href="/elearning" className="flex items-center space-x-3 group">
             <div className="w-10 h-10 rounded-xl bg-indigo-500 flex items-center justify-center text-slate-950 shadow-lg group-hover:rotate-6 transition-transform">
                <BookOpen className="w-6 h-6" />
             </div>
             <div>
                <div className="text-lg font-black tracking-tighter leading-none">EDU HUB</div>
                <div className="text-[9px] font-bold text-indigo-400 tracking-[0.2em] leading-none mt-1.5 uppercase">Dashboard by Odlix</div>
             </div>
          </Link>
        </div>

        <nav className="flex-1 p-6 space-y-1.5 overflow-y-auto scrollbar-hide text-white">
          {sidebarLinks.map((link) => (
            <button
              key={link.id}
              onClick={() => setActiveTab(link.id)}
              className={cn(
                "w-full flex items-center space-x-4 p-4 rounded-[1.2rem] font-bold text-sm transition-all relative group",
                activeTab === link.id
                  ? "bg-indigo-500 text-slate-950 shadow-xl"
                  : "text-slate-500 hover:text-white hover:bg-white/5"
              )}
            >
              <span className="w-5 h-5">{link.icon}</span>
              <span className="tracking-tight">{link.name}</span>
              {activeTab === link.id && <div className="absolute right-4"><ChevronRight className="w-4 h-4" /></div>}
            </button>
          ))}
        </nav>

        <div className="p-6 border-t border-white/10">
          <button
            onClick={() => {
              void signOut({ callbackUrl: "/login" });
            }}
            className="w-full flex items-center space-x-4 p-4 rounded-2xl font-black text-[10px] uppercase tracking-widest text-red-400 hover:bg-red-500/10 transition-all border border-red-500/10"
          >
             <LogOut className="w-5 h-5" />
             <span>Terminate Session</span>
          </button>
        </div>
      </aside>

      {/* Main Content */}
      <main className="flex-1 p-12 overflow-y-auto">
        <header className="flex justify-between items-end mb-16">
           <div>
              <div className="inline-flex items-center space-x-2 text-[10px] font-black uppercase tracking-[0.3em] text-indigo-600 dark:text-indigo-400 mb-4">
                 <Smartphone className="w-3 h-3" />
                 <span>Verified Student Access</span>
              </div>
              <h1 className="text-4xl md:text-5xl font-black tracking-tighter">Hello, Anand! 👋</h1>
              <p className="opacity-40 font-bold uppercase text-[10px] tracking-widest mt-2 italic">Step 1: Focus on Learning</p>
           </div>
           <div className="flex items-center space-x-6">
              <div className="text-right hidden md:block">
                 <div className="font-black text-xl tracking-tighter">Odlix User</div>
                 <div className="text-[10px] font-bold text-indigo-600 uppercase tracking-widest bg-indigo-500/10 px-3 py-1 rounded-full border border-indigo-500/20 mt-1">Expert Status</div>
              </div>
              <div className="w-16 h-16 rounded-3xl bg-card border-4 border-card shadow-2xl overflow-hidden group cursor-pointer relative">
                 <div className="absolute inset-0 bg-indigo-500 opacity-0 group-hover:opacity-20 transition-opacity" />
                 <div className="w-full h-full bg-slate-300 dark:bg-slate-800 transition-colors" />
              </div>
           </div>
        </header>

        {activeTab === "courses" && (
           <div className="space-y-12">
              <div className="grid grid-cols-1 lg:grid-cols-3 gap-12 text-foreground">
                 <div className="lg:col-span-2 space-y-8">
                    <div className="bg-card p-12 rounded-[4rem] shadow-sm border border-border relative overflow-hidden">
                       <div className="absolute top-0 right-0 p-12 opacity-5 pointer-events-none"><BookOpen className="w-48 h-48" /></div>
                       <div className="flex justify-between items-center mb-10 relative z-10">
                          <h3 className="text-2xl font-black uppercase tracking-tighter">Continue Learning</h3>
                          <Link href="#" className="text-indigo-600 dark:text-indigo-400 font-black text-xs uppercase tracking-widest hover:underline">Full Catalog</Link>
                       </div>
                       <div className="space-y-8 relative z-10">
                          {[
                            { name: "Advanced Video Editing & Motion Graphics", progress: 75, instructor: "Master Marcus", tag: "Expert" },
                            { name: "Affiliate Marketing Scaling Blueprint", progress: 40, instructor: "Coach Sarah", tag: "Pro" }
                          ].map(course => (
                            <div key={course.name} className="p-8 rounded-[2.5rem] bg-muted/20 border border-border group hover:border-indigo-500/50 transition-all shadow-sm">
                               <div className="flex justify-between items-start mb-6">
                                  <div>
                                     <div className="inline-block px-2 py-0.5 rounded-lg bg-indigo-500/10 text-indigo-600 text-[8px] font-black uppercase tracking-widest mb-2 border border-indigo-500/20">{course.tag}</div>
                                     <h4 className="font-black text-xl tracking-tight opacity-90">{course.name}</h4>
                                     <p className="text-xs opacity-40 font-bold uppercase tracking-widest mt-1">Mentor: {course.instructor}</p>
                                  </div>
                                  <button className="w-12 h-12 rounded-2xl bg-card border border-border flex items-center justify-center shadow-lg group-hover:bg-indigo-500 group-hover:text-white transition-all">
                                     <ArrowUpRight className="w-6 h-6" />
                                  </button>
                               </div>
                               <div className="w-full h-2.5 bg-muted rounded-full overflow-hidden border border-border">
                                  <div className="h-full bg-gradient-to-r from-indigo-600 to-indigo-500 rounded-full" style={{ width: `${course.progress}%` }} />
                               </div>
                               <div className="mt-3 text-[10px] font-black opacity-40 text-right uppercase tracking-[0.2em]">{course.progress}% Mastery achieved</div>
                            </div>
                          ))}
                       </div>
                    </div>
                 </div>

                 <div className="space-y-8">
                    <div className="bg-slate-950 p-10 rounded-[4rem] text-white overflow-hidden relative border border-white/5 shadow-2xl">
                       <div className="absolute top-0 right-0 w-40 h-40 bg-indigo-500/20 blur-[60px] -mr-20 -mt-20" />
                       <h3 className="text-xl font-black mb-4 tracking-tighter">Current Earning</h3>
                       <p className="opacity-40 text-[10px] font-bold uppercase tracking-[0.2em] mb-8">Payout Saturday • min ₹200</p>
                       <div className="text-5xl font-black text-indigo-400 mb-10 transition-colors">₹12,840</div>
                       <button className="w-full py-5 rounded-[1.5rem] bg-indigo-500 text-slate-950 font-black text-xs uppercase tracking-widest shadow-xl shadow-indigo-500/20 hover:scale-[1.02] active:scale-[0.98] transition-all">Payout Hub</button>
                    </div>

                    <div className="bg-card p-10 rounded-[3.5rem] border border-border shadow-sm">
                       <h3 className="font-black mb-8 uppercase tracking-tighter opacity-70">Training Notice</h3>
                       <div className="flex items-center space-x-5 p-6 rounded-[2rem] bg-muted/40 border border-border group hover:bg-muted transition-colors cursor-pointer">
                          <div className="w-14 h-14 rounded-2xl bg-indigo-500/10 flex items-center justify-center text-indigo-600 dark:text-indigo-400 shadow-inner">
                             <Video className="w-7 h-7" />
                          </div>
                          <div>
                             <div className="font-black text-sm tracking-tight">Growth Webinar</div>
                             <div className="text-[10px] opacity-40 font-bold uppercase tracking-widest">Today • 6:00 PM IST</div>
                          </div>
                       </div>
                    </div>
                 </div>
              </div>

              {/* Quick Grid for requested dashboard items */}
              <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
                 {[
                   { label: "My Certificates", icon: <Award />, color: "text-indigo-500" },
                   { label: "Community Q&A", icon: <HelpCircle />, color: "text-purple-500" },
                   { label: "Earning Toolkit", icon: <Wrench />, color: "text-orange-500" },
                   { label: "Affiliate Link", icon: <Share2 />, color: "text-green-500" },
                 ].map((item, i) => (
                   <div key={i} className="bg-card p-8 rounded-[2.5rem] border border-border shadow-sm flex flex-col items-center text-center group cursor-pointer hover:border-primary/30 transition-all">
                      <div className={cn("w-12 h-12 rounded-2xl bg-muted flex items-center justify-center mb-4 transition-transform group-hover:scale-110", item.color)}>
                         {item.icon}
                      </div>
                      <h4 className="font-black text-[10px] uppercase tracking-widest">{item.label}</h4>
                   </div>
                 ))}
              </div>
           </div>
        )}

        {/* Dynamic Empty State for other tabs */}
        {activeTab !== "courses" && (
           <div className="flex flex-col items-center justify-center h-[60vh] text-muted-foreground">
              <div className="w-24 h-24 bg-muted/50 border border-border rounded-[2.5rem] flex items-center justify-center mb-8 shadow-inner">
                 <span className="text-foreground scale-150">{sidebarLinks.find(l => l.id === activeTab)?.icon}</span>
              </div>
              <h2 className="text-3xl font-black text-foreground mb-4 tracking-tighter uppercase">{sidebarLinks.find(l => l.id === activeTab)?.name}</h2>
              <p className="max-w-xs text-center font-medium italic opacity-60">This high-end module is currently being calibrated for your account.</p>
           </div>
        )}
      </main>
    </div>
  );
}

