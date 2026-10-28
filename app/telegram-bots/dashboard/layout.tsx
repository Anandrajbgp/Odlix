import type { ReactNode } from "react";
import { Navbar } from "@/components/layout/navbar";
import { PlatformBackdrop } from "@/components/layout/platform-backdrop";

export default function TelegramBotsDashboardLayout({ children }: { children: ReactNode }) {
  return (
    <PlatformBackdrop variant="telegram-bots">
      <div
        className="min-h-screen flex flex-col"
        style={{
          // @ts-ignore
          "--platform-primary": "#24a1ee",
          "--platform-secondary": "#06b6d4",
          "--platform-accent": "#2563eb",
          "--platform-gradient": "linear-gradient(135deg, #24a1ee 0%, #06b6d4 55%, #2563eb 100%)"
        } as React.CSSProperties}
      >
        <Navbar />
        <main className="flex-1">{children}</main>
      </div>
    </PlatformBackdrop>
  );
}