import { TradingNavbar } from "@/components/trade/navbar"

export default function TradingLayout({ children }: { children: React.ReactNode }) {
  return (
    <div className="min-h-screen bg-[#0d0202] text-rose-100 font-sans antialiased">
      <TradingNavbar />
      <main className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        {children}
      </main>
    </div>
  )
}