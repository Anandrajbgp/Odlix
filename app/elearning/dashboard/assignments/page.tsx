"use client";

import { useEffect } from "react";
import { useRouter } from "next/navigation";
import Link from "next/link";
import { ArrowLeft, FileText } from "lucide-react";

export default function AssignmentsPage() {
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
        <h1 className="text-3xl font-black tracking-tight mb-2">Assignments & Quizzes</h1>
        <p className="text-sm text-slate-400 mb-8">Submit your coursework and test your knowledge.</p>

        <div className="p-8 rounded-3xl bg-slate-900/90 border border-slate-800 shadow-xl space-y-4">
          {[
            { title: "Module 1 Assessment: Motion Graphics", status: "Completed" },
            { title: "Module 2 Project: Color Grading", status: "Pending Submission" }
          ].map(a => (
            <div key={a.title} className="flex items-center justify-between p-4 rounded-2xl bg-slate-950 border border-slate-800">
               <span className="font-bold text-sm">{a.title}</span>
               <span className={`text-xs font-black uppercase tracking-widest px-3 py-1 rounded-full ${a.status === 'Completed' ? 'bg-emerald-500/10 text-emerald-400 border border-emerald-500/20' : 'bg-amber-500/10 text-amber-400 border border-amber-500/20'}`}>{a.status}</span>
            </div>
          ))}
        </div>
      </div>
    </main>
  );
}
