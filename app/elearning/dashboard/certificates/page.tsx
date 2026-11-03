"use client";

import { useEffect } from "react";
import { useRouter } from "next/navigation";
import Link from "next/link";
import { ArrowLeft, Award } from "lucide-react";

export default function CertificatesPage() {
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
        <h1 className="text-3xl font-black tracking-tight mb-2">My Certificates</h1>
        <p className="text-sm text-slate-400 mb-8">View and download your QR-verified completion certificates.</p>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          <div className="p-8 rounded-3xl bg-slate-900/90 border border-slate-800 shadow-xl">
            <Award className="h-10 w-10 text-cyan-400 mb-4" />
            <h3 className="text-lg font-black mb-1">Advanced Video Editing</h3>
            <p className="text-xs text-slate-400 mb-4">Issued: August 2026 • ID: ODLIX-CERT-9821</p>
            <button className="px-4 py-2 rounded-xl bg-cyan-500 text-slate-950 text-xs font-black uppercase tracking-widest hover:bg-cyan-400 transition">Download PDF</button>
          </div>
        </div>
      </div>
    </main>
  );
}
