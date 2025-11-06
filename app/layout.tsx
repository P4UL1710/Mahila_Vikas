import type React from "react"
import type { Metadata } from "next"
import { Poppins } from "next/font/google"
import "./globals.css"

const poppins = Poppins({
  subsets: ["latin", "devanagari"],
  weight: ["300", "400", "500", "600", "700"],
})

export const metadata: Metadata = {
  title: "Mahila Vikas - Empowering Rural Women Entrepreneurs",
  description:
    "A platform providing business education, mentorship, and community support for rural women entrepreneurs.",
    generator: 'v0.app'
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="mr">
      <body className={poppins.className}>{children}</body>
    </html>
  )
}
