import type React from "react"
import type { Metadata } from "next"
import localFont from "next/font/local"
import "./globals.css"
import { AuthProvider } from "@/contexts/auth-context"

// Import Roc Grotesk Compressed Thin as the main font
const rocGrotesk = localFont({
  src: [
    {
      path: "../public/fonts/RocGroteskCompressedThin.woff2",
      weight: "100",
      style: "normal",
    },
    {
      path: "../public/fonts/RocGroteskCompressedThin.woff",
      weight: "100",
      style: "normal",
    },
  ],
  variable: "--font-roc-grotesk",
  display: "swap",
})

export const metadata: Metadata = {
  title: "Rootsy - Plant Marketplace & Plant Sitting",
  description: "Find plant sitters for your green friends or discover new plants to add to your collection.",
    generator: 'v0.dev'
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang="en">
      <body className={`${rocGrotesk.variable} font-roc`}>
        <AuthProvider>{children}</AuthProvider>
      </body>
    </html>
  )
}
