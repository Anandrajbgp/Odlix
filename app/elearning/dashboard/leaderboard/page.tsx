"use client";

import { useEffect } from "react";
import { useRouter } from "next/navigation";
import Link from "next/link";
import { ArrowLeft, Trophy } from "lucide-react";

export default function LeaderboardPage() {
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
        <h1 className="text-3xl font-black tracking-tight mb-2">Ecosystem Leaderboard</h1>
        <p className="text-sm text-slate-400 mb-8">Top performing students and partners across India.</p>

        <div className="space-y-3">
          {[
            { rank: 1, name: "Aarav Sharma", earnings: "₹1,42,000", badge: "Elite Partner" },
            { rank: 2, name: "Priya Verma", earnings: "₹1,18,500", badge: "Pro Mentor" },
            { rank: 3, name: "Rahul Roy", earnings: "₹96,200", badge: "Expert Scholar" }
          ].map(user => (
            <div key={user.rank} className="flex items-center justify-between p-4 rounded-2xl bg-slate-900/90 border border-slate-800">
               <div className="flex items-center gap-4">
                  <span className="text-lg font-black text-cyan-400 w-6 text-center">#{user.rank}</span>
                  <div>
                     <h4 className="font-bold text-sm text-white">{user.name}</h4>
                     <span className="text-[10px] text-slate-400 uppercase tracking-widest font-bold">{user.badge}</span>
                  </div>
               </div>
               <div className="font-black text-emerald-400 text-sm">{user.earnings}</div>
            </div>
          ))}
        </div>
      </div>
    </main>
  );
}
