"use client";

import Link from "next/link";
import Image from "next/image";
import { usePathname } from "next/navigation";

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
    <footer className="bg-transparent border-t border-white/40 py-12 text-[#0f1d26] relative overflow-hidden">
      <div className="container mx-auto grid grid-cols-1 gap-12 px-4 max-w-6xl md:grid-cols-3 relative z-10">
        <div className="space-y-6">
          <div className="group flex items-center space-x-3">
            <div className="flex h-12 w-12 items-center justify-center overflow-hidden rounded-full border border-white/40 bg-white/20">
              <Image
                src="/logo-home.png"
                alt="Odlix logo"
                width={48}
                height={48}
                className="object-contain"
              />
            </div>
            <span className="text-xl font-black text-[#0f1d26] tracking-widest uppercase">
              ODLIX
            </span>
          </div>
          <p className="text-sm leading-relaxed text-[#0f1d26]/80 font-semibold">
            A world-class digital ecosystem designed for reliable, secure, and integrated digital experiences.
          </p>
          <div className="flex space-x-4 text-[#0f1d26]">
            <Link
              href="http://www.youtube.com/@TeamOdlix"
              className="p-2.5 rounded-xl bg-white/20 border border-white/40 hover:border-[#00f5c4] hover:bg-[#00f5c4]/20 hover:text-[#0f1d26] transition-all"
              aria-label="Open Odlix YouTube"
              target="_blank"
              rel="noopener noreferrer"
            >
              <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="text-[#0f1d26]"><path d="M22.54 6.42a2.78 2.78 0 0 0-1.94-2C18.88 4 12 4 12 4s-6.88 0-8.6.46a2.78 2.78 0 0 0-1.94 2A29 29 0 0 0 1 11.75a29 29 0 0 0 .46 5.33 2.78 2.78 0 0 0 1.94 2c1.72.46 8.6.46 8.6.46s6.88 0 8.6-.46a2.78 2.78 0 0 0 1.94-2 29 29 0 0 0 .46-5.33 29 29 0 0 0-.46-5.33z"></path><polygon points="9.75 15.02 15.5 11.75 9.75 8.48 9.75 15.02"></polygon></svg>
            </Link>
            <Link
              href="https://www.facebook.com/share/19pa8hWvZR/"
              className="p-2.5 rounded-xl bg-white/20 border border-white/40 hover:border-[#00f5c4] hover:bg-[#00f5c4]/20 hover:text-[#0f1d26] transition-all"
              aria-label="Open Odlix Facebook"
              target="_blank"
              rel="noopener noreferrer"
            >
              <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="text-[#0f1d26]"><path d="M18 2h-3a5 5 0 0 0-5 5v3H7v4h3v8h4v-8h3l1-4h-4V7a1 1 0 0 1 1-1h3z"></path></svg>
            </Link>
            <Link
              href="https://www.instagram.com/odlix_?exln=bWVxN2tzNjBsZDIw"
              className="p-2.5 rounded-xl bg-white/20 border border-white/40 hover:border-[#00f5c4] hover:bg-[#00f5c4]/20 hover:text-[#0f1d26] transition-all"
              aria-label="Open Odlix Instagram"
              target="_blank"
              rel="noopener noreferrer"
            >
              <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="text-[#0f1d26]"><rect width="20" height="20" x="2" y="2" rx="5" ry="5"></rect><path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z"></path><line x1="17.5" x2="17.51" y1="6.5" y2="6.5"></line></svg>
            </Link>
          </div>
        </div>

        <div>
          <h3 className="mb-6 text-lg font-bold text-[#0f1d26]">Company</h3>
          <ul className="space-y-4 text-sm font-semibold text-[#0f1d26]/70">
            <li>
              <Link href="/" className="transition-colors hover:text-[#00f5c4]">
                Home
              </Link>
            </li>
            <li>
              <Link href={privacyHref} className="transition-colors hover:text-[#00f5c4]">
                Privacy Policy
              </Link>
            </li>
            <li>
              <Link href={termsHref} className="transition-colors hover:text-[#00f5c4]">
                Terms of Service
              </Link>
            </li>
            <li>
              <Link href="/about" className="transition-colors hover:text-[#00f5c4]">
                About Us
              </Link>
            </li>
          </ul>
        </div>

        <div>
          <h3 className="mb-6 text-lg font-bold text-[#0f1d26]">Support</h3>
          <ul className="space-y-4 text-sm font-semibold text-[#0f1d26]/70">
            <li>
              <a href="mailto:team.odlix@gmail.com" className="transition-colors hover:text-[#00f5c4]">
                team.odlix@gmail.com
              </a>
            </li>
            <li>
              <a href="tel:+917372891228" className="transition-colors hover:text-[#00f5c4]">
                +91 7372891228
              </a>
            </li>
          </ul>
        </div>
      </div>
      <div className="container mx-auto mt-16 border-t border-white/40 px-4 pt-8 text-center text-xs font-bold uppercase tracking-[0.2em] text-[#0f1d26]/60 relative z-10">
        © 2026 Odlix. All rights reserved.
      </div>
    </footer>
  );
}
