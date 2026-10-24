"use client";

import { MessageSquare } from "lucide-react";

export function Community() {
  return (
    <section className="py-32 bg-muted/10 border-t border-border">
      <div className="container mx-auto px-4 text-center text-foreground">
         <MessageSquare className="w-16 h-16 text-[var(--platform-accent)] mx-auto mb-10 opacity-20" />
         <h2 className="text-4xl md:text-7xl font-black mb-10 tracking-tighter uppercase leading-none">Verified <br /> <span className="text-[var(--platform-accent)]">Board.</span></h2>
         <p className="opacity-50 text-xl md:text-2xl max-w-2xl mx-auto mb-16 italic font-medium leading-relaxed">
            Need high-level support? Join our community of verified experts and tool creators.
            Get AI-powered guidance for complex professional setups.
         </p>
         <button className="px-12 py-6 rounded-[2rem] border-2 border-[var(--platform-accent)] text-[var(--platform-accent)] font-black text-xs uppercase tracking-[0.3em] hover:bg-[var(--platform-primary)] hover:text-white transition-all active:scale-95 shadow-xl shadow-[var(--platform-accent)]/10">
            Visit Community Base
         </button>
      </div>
    </section>
  );
}
