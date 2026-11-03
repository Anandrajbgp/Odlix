"use client";

import { useEffect } from "react";
import { useRouter } from "next/navigation";
import Link from "next/link";
import { ArrowLeft, Video } from "lucide-react";

export default function StartupVideoPage() {
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
        <h1 className="text-3xl font-black tracking-tight mb-2">Startup Video & Orientation</h1>
        <p className="text-sm text-slate-400 mb-8">Watch the official onboarding guide to kickstart your journey.</p>

        <div className="aspect-video w-full rounded-3xl bg-slate-900 border border-slate-800 flex items-center justify-center shadow-2xl">
           <div className="text-center">
              <Video className="h-16 w-16 text-cyan-400 mx-auto mb-3 animate-pulse" />
              <p className="text-sm font-bold text-slate-300">Orientation Masterclass (45 mins)</p>
           </div>
        </div>
      </div>
    </main>
  );
}
