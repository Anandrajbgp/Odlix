import { Navbar } from "@/components/home/navbar"
import { Footer } from "@/components/home/footer"

export default function HomepageLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <div className="bg-odlix-home min-h-screen text-white relative overflow-x-hidden">
      <Navbar />
      <main className="pt-20">
        {children}
      </main>
      <Footer />
    </div>
  )
}