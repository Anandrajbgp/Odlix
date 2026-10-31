import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
import { ScrollToTop } from "@/components/shared/scroll-to-top";
import { WhatsAppWidget } from "@/components/shared/whatsapp-widget";
import { ThemeProvider } from "@/components/shared/theme-provider";
import { AiChatbotWidget } from "@/components/shared/ai-chatbot-widget";
import { CursorGlow } from "@/components/shared/cursor-glow";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: {
    default: "Odlix | World-Class Digital Ecosystem",
    template: "%s | Odlix Ecosystem",
  },
  description: "One account. One digital ecosystem. Infinite possibilities. Experience integrated e-learning, smart mart, professional trading, and enterprise agency services.",
  keywords: ["Odlix", "E-Learning", "Odlix Mart", "Odlix Trading", "Odlix Agency", "Digital Ecosystem", "Supabase Auth", "Online Courses", "Team Odlix"],
  authors: [{ name: "Team Odlix", url: "https://github.com/Anandrajbgp/Odlix.git" }],
  creator: "Team Odlix",
  publisher: "Odlix Technologies",
  openGraph: {
    type: "website",
    locale: "en_US",
    url: "https://odlix.com",
    siteName: "Odlix Ecosystem",
    title: "Odlix | World-Class Digital Ecosystem",
    description: "Experience the future of integrated digital services across e-learning, trading, mart, and enterprise solutions.",
    images: [
      {
        url: "/logo-home.png",
        width: 800,
        height: 800,
        alt: "Odlix Logo",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Odlix | World-Class Digital Ecosystem",
    description: "One account for e-learning, smart mart, professional trading, and enterprise growth.",
    images: ["/logo-home.png"],
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      "max-video-preview": -1,
      "max-image-preview": "large",
      "max-snippet": -1,
    },
  },
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html
      lang="en"
      className={`${geistSans.variable} ${geistMono.variable} h-full antialiased`}
      suppressHydrationWarning
    >
      <body className="min-h-full flex flex-col bg-background text-foreground transition-colors duration-300">
        <ThemeProvider defaultTheme="system">
          <CursorGlow />
          {children}
          <div
            className="fixed right-4 md:right-8 z-[80] flex flex-col items-end gap-3"
            style={{ bottom: "max(1rem, env(safe-area-inset-bottom))" }}
          >
            <ScrollToTop />
            <WhatsAppWidget />
            <AiChatbotWidget />
          </div>
        </ThemeProvider>
      </body>
    </html>
  );
}
