import { Hero } from "@/components/sections/telegram-bots/hero";
import { Features } from "@/components/sections/telegram-bots/features";
import { FAQ } from "@/components/sections/telegram-bots/faq";

export default function TelegramBotsPage() {
  return (
    <div className="bg-white text-[#0F172A] min-h-screen relative z-10">
      <Hero />
      <Features />
      <FAQ />

      {/* Telegram Bots Footer */}
      <footer className="py-12 bg-transparent text-center text-xs text-[#475569] uppercase tracking-widest border-t border-[#E2E8F0] font-bold">
        Verified Bots • Secure Automation • 24/7 Uptime
      </footer>
    </div>
  );
}
