import type React from "react"
import type { Metadata } from "next"
import { Barlow } from "next/font/google"
import localFont from "next/font/local"
import "./globals.css"

// Import Barlow from Google Fonts
const barlow = Barlow({
  subsets: ["latin"],
  weight: ["400", "500", "600", "700"],
  variable: "--font-barlow",
})

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
  variable: "--font-arbutus-slab",
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
      <body className={`${barlow.variable} ${arbutusSlab.variable} font-sans`}>{children}</body>
    </html>
  )
}
