"use client";

import { motion } from "framer-motion";
import { MessageCircle, Sparkles, Zap } from "lucide-react";
import Link from "next/link";
import { useMemo, useState } from "react";

const WHATSAPP_NUMBER = "917372891228";
const DEFAULT_MESSAGE =
  "Hi Odlix Team, I want a free consultation for my project. Please guide me on the next steps.";

export function Hero() {
  const [projectNeed, setProjectNeed] = useState("");

  const whatsappHref = useMemo(() => {
    const cleanInput = projectNeed.trim();
    const message =
      cleanInput.length > 0
        ? `Hi Odlix Team, I want a free consultation for this work: ${cleanInput}`
        : DEFAULT_MESSAGE;

    return `https://wa.me/${WHATSAPP_NUMBER}?text=${encodeURIComponent(message)}`;
  }, [projectNeed]);

  return (
    <section className="relative overflow-hidden bg-background pt-12 pb-14 md:pt-16 md:pb-10 md:pb-12">
      <div className="absolute inset-0 -z-10 bg-muted/30" />
      <div className="absolute top-0 left-1/2 -z-10 h-full w-full max-w-7xl -translate-x-1/2 bg-[radial-gradient(circle_at_50%_0%,rgba(10,132,255,0.14),transparent_56%)]" />

      <div className="container mx-auto px-4 text-center">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          className="mb-7 inline-flex items-center space-x-2 rounded-full border border-[var(--platform-primary)]/25 bg-[var(--platform-primary)]/10 px-4 py-2 text-sm font-bold text-[var(--platform-accent)]"
        >
          <Zap className="h-4 w-4 fill-current" />
          <span>Premium Growth Architecture</span>
        </motion.div>

        <motion.h1
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.12 }}
          className="mx-auto max-w-5xl text-3xl font-black leading-[1.06] tracking-tight text-foreground md:text-5xl lg:text-6xl"
        >
          We build <span className="text-[var(--platform-accent)]">high-conversion digital systems</span>
          <br className="hidden md:block" /> that make your business look premium,
          <span className="bg-gradient-to-r from-[var(--platform-primary)] to-[var(--platform-accent)] bg-clip-text text-transparent">
            {" "}
            attract better clients,
          </span>{" "}
          and scale revenue with confidence.
        </motion.h1>

        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.2 }}
          className="mx-auto mt-5 mb-9 max-w-3xl text-sm font-semibold leading-relaxed text-muted-foreground md:text-base"
        >
          Website, branding, funnels, and growth execution — designed end-to-end so your brand wins trust faster and closes more business.
        </motion.p>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.28 }}
          className="mx-auto mb-5 flex max-w-3xl flex-wrap items-center justify-center gap-2.5"
        >
          {[
            "Brand Positioning",
            "Website + Funnel",
            "Ads + Growth Ops",
          ].map((item) => (
            <span
              key={item}
              className="inline-flex items-center gap-1.5 rounded-full border border-border bg-card px-3 py-1.5 text-[11px] font-black uppercase tracking-[0.14em] text-muted-foreground"
            >
              <Sparkles className="h-3.5 w-3.5 text-[var(--platform-accent)]" />
              {item}
            </span>
          ))}
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.32 }}
          className="mx-auto mb-6 max-w-3xl rounded-3xl border border-border bg-card p-4 text-left shadow-sm md:p-5"
        >
          <label
            htmlFor="project-need"
            className="mb-2 block text-xs font-black uppercase tracking-[0.18em] text-muted-foreground"
          >
            Your Work Requirement
          </label>
          <textarea
            id="project-need"
            value={projectNeed}
            onChange={(event) => setProjectNeed(event.target.value)}
            placeholder="Example: Shopify store redesign, Meta ads setup for lead generation, complete website + SEO..."
            className="h-24 w-full resize-none rounded-2xl border border-border bg-background px-4 py-3 text-sm font-medium text-foreground outline-none transition-colors placeholder:text-muted-foreground/70 focus:border-[var(--platform-accent)]"
          />
          <p className="mt-2 text-[11px] font-semibold text-muted-foreground">
            Type your exact project need. On click, it opens WhatsApp with your message pre-filled.
          </p>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.36 }}
          className="flex flex-col items-center justify-center gap-4 sm:flex-row"
        >
          <a
            href={whatsappHref}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 rounded-2xl bg-[#25D366] px-8 py-4 text-lg font-black text-white shadow-2xl shadow-emerald-500/20 transition-transform hover:scale-105 active:scale-95"
          >
            <MessageCircle className="h-5 w-5" />
            Get Free Consultation
          </a>
          <Link
            href="/agency#portfolio"
            className="rounded-2xl border-2 border-border px-8 py-4 text-lg font-black text-foreground transition-all hover:bg-muted active:scale-95"
          >
            View Portfolio
          </Link>
        </motion.div>
      </div>
    </section>
  );
}
