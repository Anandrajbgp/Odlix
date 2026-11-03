"use client";

import { useEffect } from "react";
import { useRouter } from "next/navigation";
import Link from "next/link";
import { ArrowLeft, CheckCircle2 } from "lucide-react";

export default function PlanPage() {
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
        <h1 className="text-3xl font-black tracking-tight mb-2">Active Subscription Plan</h1>
        <p className="text-sm text-slate-400 mb-8">Manage your membership tier and access rights.</p>

        <div className="p-8 rounded-3xl bg-slate-900/90 border border-cyan-500/30 shadow-xl">
          <span className="px-3 py-1 rounded-full bg-cyan-500/10 text-cyan-400 text-xs font-black uppercase tracking-widest border border-cyan-500/20">Master Pass (Lifetime)</span>
          <h3 className="text-2xl font-black mt-4 mb-2">Odlix Elite Ecosystem Tier</h3>
          <p className="text-sm text-slate-400 mb-6">Full unmetered access to all expert masterclasses, certificates, and partner earning tools.</p>
          <div className="space-y-3">
            {["All HD Video Courses", "QR-Verified Certificates", "Weekly Payouts", "Priority Support"].map(f => (
              <div key={f} className="flex items-center gap-2 text-sm font-bold text-slate-200">
                <CheckCircle2 className="h-4 w-4 text-cyan-400" /> <span>{f}</span>
              </div>
            ))}
          </div>
        </div>
      </div>
    </main>
  );
}
