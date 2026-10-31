import { Hero } from "@/components/sections/telegram-bots/hero";
import { Features } from "@/components/sections/telegram-bots/features";
import { FAQ } from "@/components/sections/telegram-bots/faq";

export default function TelegramBotsPage() {
  return (
    <div className="bg-transparent min-h-screen transition-colors duration-300">
      <Hero />
      <Features />
      <FAQ />

      {/* Telegram Bots Footer */}
      <footer className="py-16 bg-transparent text-center text-[10px] opacity-40 text-[#d946ef] uppercase tracking-[0.5em] border-t border-[#d946ef]/30 font-black backdrop-blur-sm">
        Verified Bots • Secure Automation • 24/7 Uptime
      </footer>
    </div>
  );
}
