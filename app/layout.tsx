import type { Metadata } from "next"
import { Footer } from "@/components/home/footer"
import { GlowLayout } from "@/components/glow-layout" // Import naya layout
import "./globals.css"

export const metadata: Metadata = {
  title: "Odlix Ecosystem",
  description: "Next-Gen Multi-Vertical Platform",
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <body>
        {/* GlowLayout pure website ke backgrounds aur mouse shadow ko globally systemize karega */}
        <GlowLayout>
          
          <main>{children}</main>
          
        </GlowLayout>
      </body>
    </html>
  )
}