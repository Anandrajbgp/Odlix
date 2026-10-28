import { Hero } from "@/components/sections/apps/hero";
import { StoreTabs } from "@/components/sections/apps/store-tabs";
import { Community } from "@/components/sections/apps/community";

export default function AppsPage() {
  return (
    <div className="bg-background min-h-screen transition-colors duration-300">
      <Hero />
      <StoreTabs />
      <Community />

      {/* PWA Footer Section */}
      <footer className="py-16 bg-background text-center text-[10px] opacity-30 text-foreground uppercase tracking-[0.4em] border-t border-border font-black">
         Full Offline PWA Ready • Secure Cloud Verification • Powered by Odlix
      </footer>
    </div>
  );
}
