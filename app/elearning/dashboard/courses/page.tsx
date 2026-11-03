"use client";

import { useEffect, useState } from "react";
import { useRouter } from "next/navigation";
import Link from "next/link";
import { Video, ArrowUpRight, ArrowLeft } from "lucide-react";

export default function CoursesPage() {
  const router = useRouter();
  useEffect(() => {
    if (!localStorage.getItem("odlix_user")) router.replace("/login");
  }, [router]);

  return (
    <main className="min-h-screen bg-[#050b14] text-white p-6 md:p-12">
      <div className="container mx-auto max-w-5xl">
        <div className="mb-8">
          <Link href="/elearning/dashboard" className="inline-flex items-center gap-2 text-xs font-bold uppercase tracking-widest text-cyan-400 hover:underline mb-4">
            <ArrowLeft className="h-4 w-4" /> Back to Dashboard
          </Link>
          <h1 className="text-3xl font-black tracking-tight">My Courses</h1>
          <p className="text-sm text-slate-400 mt-1">Access your enrolled masterclasses and training videos.</p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {[
            { name: "Advanced Video Editing & Motion Graphics", progress: 75, instructor: "Master Marcus", tag: "Expert" },
            { name: "Income Scaling Blueprint", progress: 40, instructor: "Coach Sarah", tag: "Pro" }
          ].map(course => (
            <div key={course.name} className="p-8 rounded-3xl bg-slate-900/90 border border-slate-800 shadow-xl">
               <div className="flex justify-between items-start mb-6">
                  <div>
                     <span className="inline-block px-2.5 py-1 rounded-lg bg-indigo-500/10 text-indigo-400 text-[10px] font-black uppercase tracking-widest mb-2 border border-indigo-500/20">{course.tag}</span>
                     <h3 className="font-black text-xl tracking-tight text-white">{course.name}</h3>
                     <p className="text-xs text-slate-400 font-bold uppercase tracking-widest mt-1">Mentor: {course.instructor}</p>
                  </div>
                  <button className="w-12 h-12 rounded-2xl bg-slate-950 border border-slate-800 flex items-center justify-center text-cyan-400 hover:bg-cyan-500 hover:text-slate-950 transition-all">
                     <Video className="w-5 h-5" />
                  </button>
               </div>
               <div className="w-full h-2.5 bg-slate-950 rounded-full overflow-hidden border border-slate-800">
                  <div className="h-full bg-gradient-to-r from-indigo-500 to-cyan-400 rounded-full" style={{ width: `${course.progress}%` }} />
               </div>
               <div className="mt-3 text-xs font-black text-slate-400 text-right uppercase tracking-[0.2em]">{course.progress}% Completed</div>
            </div>
          ))}
        </div>
      </div>
    </main>
  );
}
