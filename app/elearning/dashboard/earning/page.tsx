"use client";

import { useEffect } from "react";
import { useRouter } from "next/navigation";
import Link from "next/link";
import { TrendingUp, ArrowLeft, Wallet } from "lucide-react";

export default function EarningPage() {
  const router = useRouter();
  useEffect(() => {
    if (!localStorage.getItem("odlix_user")) router.replace("/login");
  }, [router]);

  return (
    <main className="min-h-screen bg-[#050b14] text-white p-6 md:p-12">
      <div className="container mx-auto max-w-4xl">
        <Link href="/elearning/dashboard" className="inline-flex items-center gap-2 text-xs font-bold uppercase tracking-widest text-cyan-400 hover:underline mb-4">
          <ArrowLeft className="h-4 w-4" /> Back to Dashboard
        </Link>
        <h1 className="text-3xl font-black tracking-tight mb-2">Earning Overview</h1>
        <p className="text-sm text-slate-400 mb-8">Track your weekly partner commissions and payouts.</p>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          <div className="p-8 rounded-3xl bg-slate-900/90 border border-slate-800 shadow-xl">
            <h3 className="text-xs font-bold uppercase tracking-widest text-slate-400 mb-2">Total Balance</h3>
            <div className="text-4xl font-black text-cyan-400 mb-6">₹12,840</div>
            <p className="text-xs text-slate-500 uppercase tracking-widest">Payout Schedule: Every Saturday</p>
          </div>
          <div className="p-8 rounded-3xl bg-slate-900/90 border border-slate-800 shadow-xl">
            <h3 className="text-xs font-bold uppercase tracking-widest text-slate-400 mb-2">Total Payouts Received</h3>
            <div className="text-4xl font-black text-emerald-400 mb-6">₹45,200</div>
            <p className="text-xs text-slate-500 uppercase tracking-widest">Status: Verified & Settled</p>
          </div>
        </div>
      </div>
    </main>
  );
}
