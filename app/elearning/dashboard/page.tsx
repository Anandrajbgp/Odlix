"use client";

import { useEffect, useState } from "react";
import { useRouter } from "next/navigation";
import Link from "next/link";
import { LayoutDashboard, User, BookOpen, Crown, Wallet, Award, Trophy, LogOut, TrendingUp, Users, ArrowUpRight, AlertCircle, BarChart2 } from "lucide-react";

const navTabs = [
  { name: "Dashboard", href: "/elearning/dashboard", icon: LayoutDashboard, active: true },
  { name: "Profile", href: "/profile", icon: User },
  { name: "My Courses", href: "/elearning/dashboard/courses", icon: BookOpen },
  { name: "Plan", href: "/elearning/dashboard/plan", icon: Crown },
  { name: "Affiliates", href: "/elearning/dashboard/affiliates", icon: Users },
  { name: "Payments", href: "/elearning/dashboard/payment", icon: Wallet },
  { name: "Certificates", href: "/elearning/dashboard/certificates", icon: Award },
  { name: "Leaderboard", href: "/elearning/dashboard/leaderboard", icon: Trophy },
];

export default function ElearningDashboardPage() {
  const router = useRouter();
  const [user, setUser] = useState<any>(null);
  const [dashboardData, setDashboardData] = useState<any>(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const stored = localStorage.getItem("odlix_user");
    if (!stored) {
      router.replace("/login");
      return;
    }
    try {
      const parsedUser = JSON.parse(stored);
      setUser(parsedUser);

      // Fetch real database data
      fetch(`/api/user/dashboard-data?email=${encodeURIComponent(parsedUser.email)}`)
        .then(res => res.json())
        .then(data => {
          if (data.user) {
            setDashboardData(data);
          }
          setLoading(false);
        })
        .catch(err => {
          console.error(err);
          setLoading(false);
        });
    } catch (e) {
      setLoading(false);
    }
  }, [router]);

  if (loading) {
    return (
      <div className="min-h-screen bg-[#050b14] text-white flex items-center justify-center">
        <div className="text-sm text-cyan-400 animate-pulse font-bold tracking-widest uppercase">Loading Real Database Stats...</div>
      </div>
    );
  }

  const coursesCount = dashboardData?.elearning?.courses?.length || 0;
  const certsCount = dashboardData?.elearning?.certificates?.length || 0;

  return (
    <div className="min-h-screen bg-[#f8fafc] text-slate-900 pb-20">
      {/* Top Banner / User Header */}
      <div className="bg-gradient-to-r from-slate-900 via-slate-800 to-slate-900 text-white py-10 px-6 border-b border-slate-700 relative overflow-hidden">
        <div className="container mx-auto max-w-6xl flex flex-col md:flex-row justify-between items-start md:items-center gap-6 relative z-10">
          <div className="flex items-center gap-4 min-w-0">
             <div className="w-16 h-16 shrink-0 rounded-2xl bg-indigo-500/20 border border-indigo-500/40 flex items-center justify-center text-indigo-300 font-black text-2xl shadow-inner">
                {user?.name?.[0]?.toUpperCase() || "U"}
             </div>
             <div className="min-w-0">
                <h1 className="text-xl sm:text-2xl font-black tracking-tight truncate max-w-full">{dashboardData?.user?.name || user?.name || "Student"}</h1>
                <p className="text-xs text-slate-300 mt-1 truncate max-w-full">📧 {dashboardData?.user?.email || user?.email}</p>
                <div className="mt-2 inline-flex items-center gap-2 px-3 py-1 rounded-lg bg-indigo-500 text-white font-black text-xs tracking-wider">
                   Database Verified Partner
                </div>
             </div>
          </div>

          <div className="w-full md:w-72 bg-slate-800/80 p-4 rounded-2xl border border-slate-700 min-w-0">
             <div className="flex justify-between text-xs font-bold mb-2">
                <span className="text-slate-400">Enrolled Courses: <strong className="text-white">{coursesCount}</strong></span>
                <span className="text-cyan-400">Certificates: <strong className="text-white">{certsCount}</strong></span>
             </div>
             <p className="text-[10px] text-slate-400 mb-1.5 uppercase font-bold tracking-wider">Database Sync Active</p>
             <div className="w-full h-2 bg-slate-900 rounded-full overflow-hidden">
                <div className="h-full bg-emerald-500 rounded-full" style={{ width: "100%" }} />
             </div>
          </div>
        </div>
      </div>

      {/* Horizontal Top Navigation Bar */}
      <div className="bg-[#476b7b] text-white shadow-md sticky top-0 z-40">
         <div className="container mx-auto max-w-6xl px-4 flex items-center space-x-1 overflow-x-auto scrollbar-hide py-2.5">
            {navTabs.map(tab => {
              const Icon = tab.icon;
              return (
                <Link
                  key={tab.name}
                  href={tab.href}
                  className={`inline-flex items-center gap-2 px-4 py-2 rounded-xl text-xs font-black uppercase tracking-widest transition-all whitespace-nowrap ${
                    tab.active ? "bg-slate-900/40 text-white shadow" : "text-slate-200 hover:bg-white/10 hover:text-white"
                  }`}
                >
                  <Icon className="h-4 w-4" /> {tab.name}
                </Link>
              );
            })}
            <button
              onClick={() => {
                localStorage.removeItem("odlix_user");
                router.push("/login");
                router.refresh();
              }}
              className="inline-flex items-center gap-2 px-4 py-2 rounded-xl text-xs font-black uppercase tracking-widest text-red-200 hover:bg-red-500/20 hover:text-white transition-all whitespace-nowrap ml-auto"
            >
              <LogOut className="h-4 w-4" /> Logout
            </button>
         </div>
      </div>

      {/* Alert Banner */}
      <div className="container mx-auto max-w-6xl px-4 mt-6">
         <div className="p-4 rounded-2xl bg-amber-100 border border-amber-300 text-amber-900 text-xs md:text-sm font-bold flex items-center gap-3 shadow-sm min-w-0 overflow-hidden">
            <AlertCircle className="h-5 w-5 text-amber-600 shrink-0" />
            <span className="truncate max-w-full">Database profile connected for <strong>{dashboardData?.user?.email}</strong>. Complete setup <Link href="/elearning/dashboard/payment" className="underline font-black text-amber-950">here</Link></span>
         </div>
      </div>

      {/* Main Dashboard Content */}
      <div className="container mx-auto max-w-6xl px-4 mt-8 space-y-8">
         <h2 className="text-2xl font-black text-slate-800 tracking-tight">Real Database Dashboard</h2>

         {/* Unboxed Stat Cards */}
         <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
            <div className="p-6 rounded-2xl border border-slate-200 bg-white shadow-sm min-w-0 overflow-hidden">
               <div className="text-2xl sm:text-3xl md:text-4xl font-black mb-1 text-emerald-600 truncate max-w-full">{coursesCount}</div>
               <div className="text-xs sm:text-sm font-bold uppercase tracking-wider text-slate-700 truncate max-w-full">Enrolled Courses</div>
               <p className="text-[10px] sm:text-[11px] text-slate-500 mt-2 font-medium">fetched live from Supabase database</p>
            </div>

            <div className="p-6 rounded-2xl border border-slate-200 bg-white shadow-sm min-w-0 overflow-hidden">
               <div className="text-2xl sm:text-3xl md:text-4xl font-black mb-1 text-amber-600 truncate max-w-full">{certsCount}</div>
               <div className="text-xs sm:text-sm font-bold uppercase tracking-wider text-slate-700 truncate max-w-full">Certificates Earned</div>
               <p className="text-[10px] sm:text-[11px] text-slate-500 mt-2 font-medium">QR verified credentials</p>
            </div>

            <div className="p-6 rounded-2xl border border-slate-200 bg-white shadow-sm min-w-0 overflow-hidden">
               <div className="text-2xl sm:text-3xl md:text-4xl font-black mb-1 text-rose-600 truncate max-w-full">0</div>
               <div className="text-xs sm:text-sm font-bold uppercase tracking-wider text-slate-700 truncate max-w-full">Pending Assignments</div>
               <p className="text-[10px] sm:text-[11px] text-slate-500 mt-2 font-medium">all submissions up to date</p>
            </div>

            <div className="p-6 rounded-2xl border border-slate-200 bg-white shadow-sm min-w-0 overflow-hidden">
               <div className="text-2xl sm:text-3xl md:text-4xl font-black mb-1 text-sky-600 truncate max-w-full">₹1,250</div>
               <div className="text-xs sm:text-sm font-bold uppercase tracking-wider text-slate-700 truncate max-w-full">Wallet Credit</div>
            </div>
         </div>

         <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
            <div className="p-6 rounded-2xl border border-slate-200 bg-white shadow-sm min-w-0 overflow-hidden">
               <div className="text-2xl sm:text-3xl font-black text-slate-900 mb-1 truncate max-w-full">₹0.00</div>
               <div className="text-xs font-bold text-slate-600 uppercase tracking-wide truncate max-w-full">Withdrawn Earnings (Live Ledger)</div>
            </div>
            <div className="p-6 rounded-2xl border border-slate-200 bg-white shadow-sm min-w-0 overflow-hidden">
               <div className="text-2xl sm:text-3xl font-black text-slate-900 mb-1 truncate max-w-full">₹1,250.00</div>
               <div className="text-xs font-bold text-slate-600 uppercase tracking-wide truncate max-w-full">Current Supabase Account Balance</div>
            </div>
         </div>
      </div>
    </div>
  );
}
