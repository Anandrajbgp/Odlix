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
  title: "Odlix | World-Class Digital Ecosystem",
  description: "One account. 8 Platforms. Infinite possibilities. Experience the future of integrated digital services.",
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
