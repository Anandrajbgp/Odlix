"use client"

import * as React from "react"
import { ThemeProvider as NextThemesProvider } from "next-themes"

// next-themes se directly ComponentProps ko use karke types nikalenge
export function ThemeProvider({
  children,
  ...props
}: React.ComponentProps<typeof NextThemesProvider>) {
  return <NextThemesProvider {...props}>{children}</NextThemesProvider>
}