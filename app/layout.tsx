import { Fraunces, Quicksand } from "next/font/google"
import TopBar from "@/components/TopBar"
import NavBar from "@/components/NavBar"
import Footer from "@/components/Footer"
import Toast from "@/components/Toast"
import Providers from "./providers"
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
