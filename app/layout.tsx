import { Playfair_Display, Montserrat } from "@next/font/google"
import TopBar from "@/common-layouts/TopBar"
import NavBar from "@/common-layouts/NavBar"
import Footer from "@/common-layouts/Footer"
import Toast from "@/common-layouts/Toast"
import Providers from "./api/providers"
import "./globals.css"

const playfairDisplay = Playfair_Display({
  variable: "--font-playfair",
})

const montserrat = Montserrat({
  variable: "--font-montserrat",
})

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en" className={playfairDisplay.variable}>
      <head />
      <body className={montserrat.variable}>
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
