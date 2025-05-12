import type React from "react"
import type { Metadata } from "next"
import localFont from "next/font/local"
import "./globals.css"
import { AuthProvider } from "@/contexts/auth-context"

// Import Arbutus Slab as a local font
// const arbutusSlab = localFont({
//   src: [
//     {
//       path: "../public/fonts/ArbutusSlab-Regular.ttf",
//       weight: "400",
//       style: "normal",
//     },
//   ],
//   variable: "--font-arbutus-slab",
// })

// Import MyriadPro
const arbutusSlab = localFont({
  src: [
    {
      path: "../public/fonts/MyriadPro-Regular.otf",
      weight: "400",
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
      <body className={`${arbutusSlab.variable} font-roc`}>
        <AuthProvider>{children}</AuthProvider>
      </body>
    </html>
  )
}
