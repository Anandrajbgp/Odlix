import { ELearningNavbar } from "@/components/learn/navbar"
import { Footer } from "@/components/home/footer"
export default function ELearningLayout({ children }: { children: React.ReactNode }) {
  return (
    <div className="min-h-screen bg-[#000814] text-slate-100 flex flex-col">
      <ELearningNavbar />
      <div className="flex-1 max-w-7xl w-full mx-auto p-4 md:p-8">
        {children}
      </div>
      <Footer />
    </div>
  )
}