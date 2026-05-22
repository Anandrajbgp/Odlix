import { MartNavbar } from "@/components/mart/navbar"

export default function MartLayout({ children }: { children: React.ReactNode }) {
  return (
    <div className="min-h-screen bg-[#0a0101] text-stone-200 antialiased font-sans">
      <MartNavbar />
      <main className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        {children}
      </main>
    </div>
  )
}