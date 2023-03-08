import { Fraunces, Quicksand } from "next/font/google"
import TopBar from "@/common-layouts/TopBar"
import NavBar from "@/common-layouts/NavBar"
import Footer from "@/common-layouts/Footer"
import Toast from "@/common-layouts/Toast"
import Providers from "./api/providers"
import "./globals.css"

const fraunces = Fraunces({
  variable: "--font-fraunces",
  display: "swap",
  preload: false, // quick fix for font not loading when build
})

const quicksand = Quicksand({
  variable: "--font-quicksand",
  display: "swap",
  preload: false, // https://github.com/vercel/next.js/pull/44594
})

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en" className={`${fraunces.variable} ${quicksand.variable}`}>
      <head />
      <body>
        <div className="flex min-h-screen flex-col">
          <Providers>
            <TopBar />
            <NavBar />
            {children}
            <Footer />
            <Toast />
          </Providers>
        </div>
      </body>
    </html>
  )
}
