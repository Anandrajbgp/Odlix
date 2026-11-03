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
  const [isChecking, setIsChecking] = useState(true);

  useEffect(() => {
    const stored = localStorage.getItem("odlix_user");
    if (!stored) {
      router.replace("/login");
    } else {
      try {
        setUser(JSON.parse(stored));
      } catch (e) {}
      setIsChecking(false);
    }
  }, [router]);

  if (isChecking) {
    return (
      <div className="min-h-screen bg-[#050b14] text-white flex items-center justify-center">
        <div className="text-sm text-cyan-400 animate-pulse font-bold tracking-widest uppercase">Loading Student Dashboard...</div>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-[#f8fafc] text-slate-900 pb-20">
      {/* Top Banner / User Header */}
      <div className="bg-gradient-to-r from-slate-900 via-slate-800 to-slate-900 text-white py-10 px-6 border-b border-slate-700 relative overflow-hidden">
        <div className="container mx-auto max-w-6xl flex flex-col md:flex-row justify-between items-start md:items-center gap-6 relative z-10">
          <div className="flex items-center gap-4">
             <div className="w-16 h-16 rounded-2xl bg-indigo-500/20 border border-indigo-500/40 flex items-center justify-center text-indigo-300 font-black text-2xl shadow-inner">
                {user?.name?.[0]?.toUpperCase() || "U"}
             </div>
             <div>
                <h1 className="text-2xl font-black tracking-tight">{user?.name || "Anees Ahmad"}</h1>
                <p className="text-xs text-slate-300 mt-1">🇺🇸 Verified Student & Affiliate Partner</p>
                <div className="mt-2 inline-flex items-center gap-2 px-3 py-1 rounded-lg bg-indigo-500 text-white font-black text-xs tracking-wider">
                   Rank 1
                </div>
             </div>
          </div>

          <div className="w-full md:w-72 bg-slate-800/80 p-4 rounded-2xl border border-slate-700">
             <div className="flex justify-between text-xs font-bold mb-2">
                <span className="text-slate-400">Referrals: <strong className="text-white">0</strong></span>
                <span className="text-cyan-400">Earnings: <strong className="text-white">₹0.00</strong></span>
             </div>
             <p className="text-[10px] text-slate-400 mb-1.5 uppercase font-bold tracking-wider">Until 2 Rank...</p>
             <div className="w-full h-2 bg-slate-900 rounded-full overflow-hidden">
                <div className="h-full bg-emerald-500 rounded-full" style={{ width: "15%" }} />
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
         <div className="p-4 rounded-2xl bg-amber-100 border border-amber-300 text-amber-900 text-xs md:text-sm font-bold flex items-center gap-3 shadow-sm">
            <AlertCircle className="h-5 w-5 text-amber-600 shrink-0" />
            <span>You did not submit any Payout Method. You can complete setup <Link href="/elearning/dashboard/payment" className="underline font-black text-amber-950">here</Link></span>
         </div>
      </div>

      {/* Main Dashboard Content */}
      <div className="container mx-auto max-w-6xl px-4 mt-8 space-y-8">
         <h2 className="text-2xl font-black text-slate-800 tracking-tight">Dashboard</h2>

         {/* 4 Colored Stat Cards + 2 Balance Cards */}
         <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
            <div className="p-6 rounded-2xl bg-[#5cb85c] text-white shadow-lg relative overflow-hidden">
               <div className="text-4xl font-black mb-1">0</div>
               <div className="text-sm font-bold uppercase tracking-wider opacity-90">Total Referrals</div>
               <p className="text-[11px] opacity-80 mt-2 font-medium">rewards and commissions received by now</p>
            </div>

            <div className="p-6 rounded-2xl bg-[#f0ad4e] text-white shadow-lg relative overflow-hidden">
               <div className="text-4xl font-black mb-1">0</div>
               <div className="text-sm font-bold uppercase tracking-wider opacity-90">Paid Referrals</div>
               <p className="text-[11px] opacity-80 mt-2 font-medium">withdrawn number of referrals until now</p>
            </div>

            <div className="p-6 rounded-2xl bg-[#d9534f] text-white shadow-lg relative overflow-hidden">
               <div className="text-4xl font-black mb-1">0</div>
               <div className="text-sm font-bold uppercase tracking-wider opacity-90">UnPaid Referrals</div>
               <p className="text-[11px] opacity-80 mt-2 font-medium">which have been not withdrawn yet</p>
            </div>

            <div className="p-6 rounded-2xl bg-[#337ab7] text-white shadow-lg relative overflow-hidden">
               <div className="text-4xl font-black mb-1">0</div>
               <div className="text-sm font-bold uppercase tracking-wider opacity-90">Total Payout Transactions</div>
            </div>
         </div>

         <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
            <div className="p-6 rounded-2xl bg-[#e5e9f0] border border-slate-300 text-slate-800 shadow-sm">
               <div className="text-3xl font-black text-slate-900 mb-1">₹0.00</div>
               <div className="text-xs font-bold text-slate-600 uppercase tracking-wide">Withdrawn Earnings by Now (total Transactions)</div>
            </div>
            <div className="p-6 rounded-2xl bg-[#607d8b] text-white shadow-sm">
               <div className="text-3xl font-black mb-1">₹0.00</div>
               <div className="text-xs font-bold uppercase tracking-wide opacity-90">Current Account Balance</div>
            </div>
         </div>

         <p className="text-xs text-slate-600 font-semibold">
           You can learn more about Affiliate program and to start earning referrals <Link href="/elearning/dashboard/affiliates" className="text-blue-600 underline font-bold">here</Link>
         </p>

         {/* Earnings Overview & Summary */}
         <div className="grid grid-cols-1 lg:grid-cols-3 gap-6 pt-4">
            <div className="lg:col-span-2 bg-white p-6 rounded-2xl border border-slate-200 shadow-sm">
               <h3 className="font-bold text-sm text-slate-700 mb-1">Earnings Overview <span className="text-xs text-slate-400 font-normal">(for Last 30 days)</span></h3>
               <p className="text-xs text-slate-500 mb-8">Line Graph for Earnings back to 30 days.</p>

               <div className="h-64 flex items-center justify-center bg-slate-50 rounded-xl border border-dashed border-slate-300 text-slate-400 text-xs font-medium">
                  [Interactive 30-Day Earnings Line Chart]
               </div>

               <div className="grid grid-cols-2 gap-4 mt-8 pt-6 border-t border-slate-200">
                  <div>
                     <span className="text-xs text-slate-400 font-bold uppercase">Total Earnings</span>
                     <div className="text-lg font-black text-slate-900 mt-1">₹0.00</div>
                  </div>
                  <div>
                     <span className="text-xs text-slate-400 font-bold uppercase">Clicks</span>
                     <div className="text-lg font-black text-slate-900 mt-1">0</div>
                  </div>
               </div>
            </div>

            <div className="bg-white p-6 rounded-2xl border border-slate-200 shadow-sm">
               <h3 className="font-bold text-sm text-slate-700 mb-4 pb-3 border-b border-slate-100">Summary for This Month</h3>
               <div className="space-y-3 text-xs font-semibold">
                  {[
                    { label: "Total Referrals:", val: "0" },
                    { label: "Total Earnings:", val: "₹0.00" },
                    { label: "UnVerified Referrals:", val: "0" },
                    { label: "Clicks:", val: "0" },
                    { label: "Conversion:", val: "0%" },
                  ].map(row => (
                    <div key={row.label} className="flex justify-between py-2 border-b border-slate-100 last:border-0">
                       <span className="text-slate-500">{row.label}</span>
                       <span className="text-slate-900 font-bold">{row.val}</span>
                    </div>
                  ))}
               </div>
            </div>
         </div>
      </div>
    </div>
  );
}
