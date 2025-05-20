import type React from "react"
import type { Metadata } from "next"
import localFont from "next/font/local"
import "./globals.css"
import { AuthProvider } from "@/contexts/auth-context"
import ClientAlertWrapper from "@/components/client-alert-wrapper"

// Import MyriadPro
const arbutusSlab = localFont({
  src: [
    {
      path: "../public/fonts/MyriadPro-Regular.otf",
      weight: "400",
      style: "normal",
    },
  ],
  variable: "--font-arbutus-slab",
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
      <body className={`${arbutusSlab.variable} font-arbutus-slab`}>
        <AuthProvider>
          {children}
          <ClientAlertWrapper />
        </AuthProvider>
      </body>
    </html>
  )
}
