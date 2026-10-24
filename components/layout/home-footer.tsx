import Link from "next/link";
import Image from "next/image";

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
  return (
    <footer className="bg-background border-t border-border py-12 text-foreground transition-colors duration-300">
      <div className="container mx-auto grid grid-cols-1 gap-12 px-4 md:grid-cols-3">
        <div className="space-y-6">
          <div className="group flex items-center space-x-3">
            <div className="flex h-12 w-12 items-center justify-center overflow-hidden rounded-full border border-border bg-muted/60 dark:border-white/10 dark:bg-white/5">
              <Image
                src="/logo-home.png"
                alt="Odlix logo"
                width={48}
                height={48}
                className="object-contain"
              />
            </div>

          </div>
          <p className="text-sm leading-relaxed text-muted-foreground">
            A world-class digital ecosystem designed for reliable, secure, and integrated digital experiences.
          </p>
          <div className="flex space-x-4">
            <Link
              href="https://youtube.com/@odlix"
              className="rounded-md opacity-60 transition-all hover:text-magenta-500 hover:opacity-100 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring"
              aria-label="Open Odlix YouTube"
              target="_blank"
              rel="noopener noreferrer"
            >
              <YoutubeIcon />
            </Link>
            <Link
              href="https://facebook.com/odlix"
              className="rounded-md opacity-60 transition-all hover:text-magenta-500 hover:opacity-100 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring"
              aria-label="Open Odlix Facebook"
              target="_blank"
              rel="noopener noreferrer"
            >
              <FacebookIcon />
            </Link>
            <Link
              href="https://instagram.com/odlix"
              className="rounded-md opacity-60 transition-all hover:text-magenta-500 hover:opacity-100 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring"
              aria-label="Open Odlix Instagram"
              target="_blank"
              rel="noopener noreferrer"
            >
              <InstagramIcon />
            </Link>
          </div>
        </div>

        <div>
          <h3 className="mb-6 text-lg font-bold">Company</h3>
          <ul className="space-y-4 text-sm font-medium text-muted-foreground">
            <li>
              <Link href="/" className="rounded-md transition-colors hover:text-magenta-500 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring">
                Home
              </Link>
            </li>
            <li>
              <Link href="/about" className="rounded-md transition-colors hover:text-magenta-500 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring">
                About Us
              </Link>
            </li>
            <li>
              <Link href="/privacy" className="rounded-md transition-colors hover:text-magenta-500 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring">
                Privacy Policy
              </Link>
            </li>
            <li>
              <Link href="/terms" className="rounded-md transition-colors hover:text-magenta-500 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring">
                Terms of Service
              </Link>
            </li>
          </ul>
        </div>

        <div>
          <h3 className="mb-6 text-lg font-bold">Support</h3>
          <ul className="space-y-4 text-sm font-medium text-muted-foreground">
            <li>
              <a
                href="mailto:team.odlix@gmail.com"
                className="rounded-md transition-colors hover:text-magenta-500 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring"
              >
                team.odlix@gmail.com
              </a>
            </li>
            <li>
              <a
                href="tel:+917372891228"
                className="rounded-md transition-colors hover:text-magenta-500 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring"
              >
                +91 7372891228
              </a>
            </li>
          </ul>
        </div>
      </div>
      <div className="container mx-auto mt-16 border-t border-border px-4 pt-8 text-center text-xs font-bold uppercase tracking-[0.2em] text-muted-foreground">
        © 2026 Odlix. All rights reserved.
      </div>
    </footer>
  );
}
