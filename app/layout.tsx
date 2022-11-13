import { Playfair_Display, Montserrat } from "@next/font/google"
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
      <body className={montserrat.variable}>{children}</body>
    </html>
  )
}
