"use client";

import Link from "next/link";
import Image from "next/image";
import { usePathname } from "next/navigation";
import { BackgroundBubbles } from "@/components/layout/background-bubbles";

function YoutubeIcon() {
  return (
    <svg viewBox="0 0 24 24" aria-hidden="true" className="h-5 w-5 fill-current">
      <path d="M23.5 6.2a3 3 0 0 0-2.1-2.1C19.6 3.6 12 3.6 12 3.6s-7.6 0-9.4.5A3 3 0 0 0 .5 6.2 31.3 31.3 0 0 0 0 12a31.3 31.3 0 0 0 .5 5.8 3 3 0 0 0 2.1 2.1c1.8.5 9.4.5 9.4.5s7.6 0 9.4-.5a3 3 0 0 0 2.1-2.1A31.3 31.3 0 0 0 24 12a31.3 31.3 0 0 0-.5-5.8ZM9.6 15.7V8.3L16 12l-6.4 3.7Z" />
    </svg>
  );
}

function FacebookIcon() {
  return (
    <svg viewBox="0 0 24 24" aria-hidden="true" className="h-5 w-5 fill-current">
      <path d="M13.5 21v-8h2.7l.4-3h-3.1V8.1c0-.9.3-1.6 1.7-1.6h1.5V3.8c-.7-.1-1.5-.2-2.2-.2-2.2 0-3.8 1.4-3.8 3.9V10H8v3h2.7v8h2.8Z" />
    </svg>
  );
}

function InstagramIcon() {
  return (
    <svg viewBox="0 0 24 24" aria-hidden="true" className="h-5 w-5 fill-current">
      <path d="M7 2h10a5 5 0 0 1 5 5v10a5 5 0 0 1-5 5H7a5 5 0 0 1-5-5V7a5 5 0 0 1 5-5Zm0 2.2A2.8 2.8 0 0 0 4.2 7v10A2.8 2.8 0 0 0 7 19.8h10a2.8 2.8 0 0 0 2.8-2.8V7A2.8 2.8 0 0 0 17 4.2H7Zm10.3 1.6a1.1 1.1 0 1 1 0 2.2 1.1 1.1 0 0 1 0-2.2ZM12 7a5 5 0 1 1 0 10 5 5 0 0 1 0-10Zm0 2.2A2.8 2.8 0 1 0 12 15a2.8 2.8 0 0 0 0-5.7Z" />
    </svg>
  );
}

export function HomeFooter() {
  const pathname = usePathname() || "";

  let privacyHref = "/privacy";
  let termsHref = "/terms";

  if (pathname.startsWith("/agency")) {
    privacyHref = "/agency/privacy";
    termsHref = "/agency/terms";
  } else if (pathname.startsWith("/apps")) {
    privacyHref = "/apps/privacy";
    termsHref = "/apps/terms";
  } else if (pathname.startsWith("/competition")) {
    privacyHref = "/competition/privacy";
    termsHref = "/competition/terms";
  } else if (pathname.startsWith("/elearning")) {
    privacyHref = "/elearning/privacy";
    termsHref = "/elearning/terms";
  } else if (pathname.startsWith("/mart")) {
    privacyHref = "/mart/privacy";
    termsHref = "/mart/terms";
  } else if (pathname.startsWith("/telegram-bots")) {
    privacyHref = "/telegram-bots/privacy";
    termsHref = "/telegram-bots/terms";
  } else if (pathname.startsWith("/trading")) {
    privacyHref = "/trading/privacy";
    termsHref = "/trading/terms";
  } else if (pathname.startsWith("/useful-websites")) {
    privacyHref = "/useful-websites/privacy";
    termsHref = "/useful-websites/terms";
  }

  return (
    <footer className="bg-transparent border-t border-slate-700/60 py-12 text-slate-200 relative overflow-hidden">
      <BackgroundBubbles />
      <div className="container mx-auto grid grid-cols-1 gap-12 px-4 max-w-6xl md:grid-cols-3 relative z-10">
        <div className="space-y-6">
          <div className="group flex items-center space-x-3">
            <div className="flex h-12 w-12 items-center justify-center overflow-hidden rounded-full border border-slate-700 bg-slate-900/60">
              <Image
                src="/logo-home.png"
                alt="Odlix logo"
                width={48}
                height={48}
                className="object-contain"
              />
            </div>
            <span className="text-xl font-black text-white tracking-widest uppercase">
              ODLIX
            </span>
          </div>
          <p className="text-sm leading-relaxed text-slate-300 font-semibold">
            A world-class digital ecosystem designed for reliable, secure, and integrated digital experiences.
          </p>
          <div className="flex space-x-4 text-cyan-300">
            <Link
              href="http://www.youtube.com/@TeamOdlix"
              className="p-2.5 rounded-xl bg-slate-900/60 border border-slate-700 hover:border-cyan-400 hover:bg-cyan-500/15 hover:text-cyan-200 transition-all"
              aria-label="Open Odlix YouTube"
              target="_blank"
              rel="noopener noreferrer"
            >
              <YoutubeIcon />
            </Link>
            <Link
              href="https://www.facebook.com/share/19pa8hWvZR/"
              className="p-2.5 rounded-xl bg-slate-900/60 border border-slate-700 hover:border-cyan-400 hover:bg-cyan-500/15 hover:text-cyan-200 transition-all"
              aria-label="Open Odlix Facebook"
              target="_blank"
              rel="noopener noreferrer"
            >
              <FacebookIcon />
            </Link>
            <Link
              href="https://www.instagram.com/odlix_?exln=bWVxN2tzNjBsZDIw"
              className="p-2.5 rounded-xl bg-slate-900/60 border border-slate-700 hover:border-cyan-400 hover:bg-cyan-500/15 hover:text-cyan-200 transition-all"
              aria-label="Open Odlix Instagram"
              target="_blank"
              rel="noopener noreferrer"
            >
              <InstagramIcon />
            </Link>
          </div>
        </div>

        <div>
          <h3 className="mb-6 text-lg font-bold text-white">Company</h3>
          <ul className="space-y-4 text-sm font-semibold text-slate-300">
            <li>
              <Link href="/" className="transition-colors hover:text-cyan-300">
                Home
              </Link>
            </li>
            <li>
              <Link href="/about" className="transition-colors hover:text-cyan-300">
                About Us
              </Link>
            </li>
            <li>
              <Link href={privacyHref} className="transition-colors hover:text-cyan-300">
                Privacy Policy
              </Link>
            </li>
            <li>
              <Link href={termsHref} className="transition-colors hover:text-cyan-300">
                Terms of Service
              </Link>
            </li>
          </ul>
        </div>

        <div>
          <h3 className="mb-6 text-lg font-bold text-white">Support</h3>
          <ul className="space-y-4 text-sm font-semibold text-slate-300">
            <li>
              <a href="mailto:team.odlix@gmail.com" className="transition-colors hover:text-cyan-300">
                team.odlix@gmail.com
              </a>
            </li>
            <li>
              <a href="tel:+917372891228" className="transition-colors hover:text-cyan-300">
                +91 7372891228
              </a>
            </li>
          </ul>
        </div>
      </div>
      <div className="container mx-auto mt-16 border-t border-slate-800 px-4 pt-8 text-center text-xs font-bold uppercase tracking-[0.2em] text-slate-400 relative z-10">
        © 2026 Odlix. All rights reserved.
      </div>
    </footer>
  );
}
