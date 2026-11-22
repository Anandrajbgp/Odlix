"use client";

import { useEffect, useState } from "react";
import { useRouter } from "next/navigation";
import Link from "next/link";
import { ShieldAlert, Users, ShoppingBag, BookOpen, Trophy, TrendingUp, LogOut, ArrowRight, CheckCircle2 } from "lucide-react";

export default function AdminDashboardPage() {
  const router = useRouter();
  const [user, setUser] = useState<any>(null);

  useEffect(() => {
    const stored = localStorage.getItem("odlix_user");
    if (stored) {
      try {
        const u = JSON.parse(stored);
        setUser(u);
        if (u.email?.toLowerCase() !== "team.odlix@gmail.com") {
          router.push("/elearning/dashboard");
        }
      } catch (e) {
        router.push("/login");
      }
    } else {
      router.push("/login");
    }
  }, [router]);

  return (
    <main className="min-h-screen bg-[#050b14] text-white p-6 md:p-12 selection:bg-cyan-400 selection:text-slate-950">
      <div className="container mx-auto max-w-6xl">
        <header className="flex flex-col md:flex-row justify-between items-start md:items-center gap-6 mb-12 border-b border-cyan-500/20 pb-8">
          <div>
            <div className="inline-flex items-center gap-2 rounded-full border border-red-500/30 bg-red-500/10 px-4 py-1 text-xs font-black uppercase tracking-widest text-red-400 mb-3">
              <ShieldAlert className="h-4 w-4" /> Super Administrator Portal
            </div>
            <h1 className="text-4xl font-black tracking-tight">Odlix Master Admin Control</h1>
            <p className="text-sm text-slate-400 mt-1">Logged in as <span className="text-cyan-400 font-bold">team.odlix@gmail.com</span></p>
          </div>
          <button
            onClick={() => {
              localStorage.removeItem("odlix_user");
              router.push("/login");
            }}
            className="flex items-center gap-2 rounded-2xl border border-red-500/30 bg-red-500/10 px-5 py-3 text-xs font-black uppercase tracking-widest text-red-400 hover:bg-red-500/20 transition"
          >
            <LogOut className="h-4 w-4" /> Logout Admin
          </button>
        </header>

        <div className="grid grid-cols-1 md:grid-cols-4 gap-6 mb-12">
          <div className="rounded-[2.5rem] border border-cyan-500/30 bg-slate-900/90 p-8 shadow-xl">
            <div className="flex h-12 w-12 items-center justify-center rounded-2xl bg-cyan-500/10 text-cyan-400 mb-4">
              <Users className="h-6 w-6" />
            </div>
            <div className="text-3xl font-black mb-1">1,482</div>
            <p className="text-xs font-bold uppercase tracking-widest text-slate-400">Total Registered Users</p>
          </div>

          <div className="rounded-[2.5rem] border border-cyan-500/30 bg-slate-900/90 p-8 shadow-xl">
            <div className="flex h-12 w-12 items-center justify-center rounded-2xl bg-indigo-500/10 text-indigo-400 mb-4">
              <BookOpen className="h-6 w-6" />
            </div>
            <div className="text-3xl font-black mb-1">34,200</div>
            <p className="text-xs font-bold uppercase tracking-widest text-slate-400">Active Course Enrollments</p>
          </div>

          <div className="rounded-[2.5rem] border border-cyan-500/30 bg-slate-900/90 p-8 shadow-xl">
            <div className="flex h-12 w-12 items-center justify-center rounded-2xl bg-orange-500/10 text-orange-400 mb-4">
              <ShoppingBag className="h-6 w-6" />
            </div>
            <div className="text-3xl font-black mb-1">₹14.8 L</div>
            <p className="text-xs font-bold uppercase tracking-widest text-slate-400">Total Mart Volume</p>
          </div>

          <div className="rounded-[2.5rem] border border-cyan-500/30 bg-slate-900/90 p-8 shadow-xl">
            <div className="flex h-12 w-12 items-center justify-center rounded-2xl bg-green-500/10 text-green-400 mb-4">
              <TrendingUp className="h-6 w-6" />
            </div>
            <div className="text-3xl font-black mb-1">99.9%</div>
            <p className="text-xs font-bold uppercase tracking-widest text-slate-400">Ecosystem Uptime</p>
          </div>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
          <div className="rounded-[2.5rem] border border-cyan-500/30 bg-slate-900/90 p-8 shadow-xl">
            <h2 className="text-xl font-black mb-6">Platform Quick Access</h2>
            <div className="space-y-4">
              {[
                { name: "E-Learning Hub Management", href: "/elearning/dashboard", icon: <BookOpen className="h-5 w-5 text-indigo-400" /> },
                { name: "Mart Store Operations", href: "/mart/dashboard", icon: <ShoppingBag className="h-5 w-5 text-orange-400" /> },
                { name: "Competition Exam Portal", href: "/competition/dashboard", icon: <Trophy className="h-5 w-5 text-cyan-400" /> },
              ].map((p) => (
                <Link key={p.name} href={p.href} className="flex items-center justify-between p-4 rounded-2xl border border-cyan-500/20 bg-slate-950/60 hover:bg-slate-950 transition">
                  <div className="flex items-center gap-3">
                    <div className="p-2.5 rounded-xl bg-slate-900 border border-cyan-500/20">{p.icon}</div>
                    <span className="font-bold text-sm">{p.name}</span>
                  </div>
                  <ArrowRight className="h-5 w-5 text-slate-400" />
                </Link>
              ))}
            </div>
          </div>

          <div className="rounded-[2.5rem] border border-cyan-500/30 bg-slate-900/90 p-8 shadow-xl">
            <h2 className="text-xl font-black mb-6">System Security & Status</h2>
            <div className="space-y-4 text-sm text-slate-300">
              <div className="flex items-center justify-between p-4 rounded-2xl border border-cyan-500/20 bg-slate-950/60">
                <span>Supabase OTP Authentication</span>
                <span className="inline-flex items-center gap-1.5 text-xs font-bold text-green-400 bg-green-500/10 px-3 py-1 rounded-full border border-green-500/20"><CheckCircle2 className="h-4 w-4" /> Active</span>
              </div>
              <div className="flex items-center justify-between p-4 rounded-2xl border border-cyan-500/20 bg-slate-950/60">
                <span>Database Isolation Layer</span>
                <span className="inline-flex items-center gap-1.5 text-xs font-bold text-green-400 bg-green-500/10 px-3 py-1 rounded-full border border-green-500/20"><CheckCircle2 className="h-4 w-4" /> Operational</span>
              </div>
              <div className="flex items-center justify-between p-4 rounded-2xl border border-cyan-500/20 bg-slate-950/60">
                <span>Master Admin Account</span>
                <span className="font-mono text-cyan-400 text-xs">team.odlix@gmail.com</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </main>
  );
}
