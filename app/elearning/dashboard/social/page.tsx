"use client";

import { useEffect } from "react";
import { useRouter } from "next/navigation";
import Link from "next/link";
import { ArrowLeft, Share2 } from "lucide-react";

export default function SocialPage() {
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
        <h1 className="text-3xl font-black tracking-tight mb-2">Social Media Handles</h1>
        <p className="text-sm text-slate-400 mb-8">Connect with official Odlix student communities and mentors.</p>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {[
            { name: "Official Telegram", href: "https://t.me" },
            { name: "YouTube Channel", href: "http://www.youtube.com/@TeamOdlix" },
            { name: "Instagram Community", href: "https://www.instagram.com/odlix_" }
          ].map(s => (
            <a key={s.name} href={s.href} target="_blank" rel="noopener noreferrer" className="p-6 rounded-3xl bg-slate-900/90 border border-slate-800 hover:border-cyan-400 transition text-center block">
              <Share2 className="h-8 w-8 text-cyan-400 mx-auto mb-3" />
              <h3 className="font-bold text-sm">{s.name}</h3>
            </a>
          ))}
        </div>
      </div>
    </main>
  );
}
