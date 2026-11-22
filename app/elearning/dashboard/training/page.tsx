"use client";

import { useEffect } from "react";
import { useRouter } from "next/navigation";
import Link from "next/link";
import { ArrowLeft, LayoutDashboard, Video } from "lucide-react";

export default function TrainingPage() {
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
        <h1 className="text-3xl font-black tracking-tight mb-2">Training Section & Webinars</h1>
        <p className="text-sm text-slate-400 mb-8">Join live interactive training sessions with industry mentors.</p>

        <div className="p-8 rounded-3xl bg-slate-900/90 border border-slate-800 shadow-xl flex items-center justify-between">
          <div>
             <h3 className="font-bold text-lg mb-1">Live Growth Masterclass</h3>
             <p className="text-xs text-slate-400">Scheduled Today • 6:00 PM IST</p>
          </div>
          <button className="px-5 py-2.5 rounded-xl bg-cyan-500 text-slate-950 text-xs font-black uppercase tracking-widest hover:bg-cyan-400 transition">Join Webinar</button>
        </div>
      </div>
    </main>
  );
}
