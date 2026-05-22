import { AppsNavbar } from "@/components/store/navbar"

export default function AppsLayout({ children }: { children: React.ReactNode }) {
  return (
    <div className="min-h-screen bg-[#070114] text-purple-100 font-sans selection:bg-purple-500 selection:text-white">
      <AppsNavbar />
      <main className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        {children}
      </main>
    </div>
  )
}