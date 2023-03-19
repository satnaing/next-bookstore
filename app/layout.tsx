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

export const metadata = {
  title: {
    default: "Next Bookstore - Your Ultimate Destination for Books",
    template: "%s | Next Bookstore",
  },
  description:
    "Discover your next favorite book at Next Bookstore! Browse our wide selection of bestsellers, new releases, and rare finds. Feed your reading passion!",
  openGraph: {
    title: {
      default: "Next Bookstore - Your Ultimate Destination for Books",
      template: "%s | Next Bookstore",
    },
    url: process.env.NEXT_PUBLIC_SITE_URL,
    images: [
      {
        url: `${process.env.NEXT_PUBLIC_SITE_URL}/default-og.jpg`,
        width: 1200,
        height: 630,
      },
    ],
    locale: "en-US",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: {
      default: "Next Bookstore - Your Ultimate Destination for Books",
      template: "%s | Next Bookstore",
    },
    description:
      "Discover your next favorite book at Next Bookstore! Browse our wide selection of bestsellers, new releases, and rare finds. Feed your reading passion!",
    creator: "@SatNaingDev",
    images: [`${process.env.NEXT_PUBLIC_SITE_URL}/default-og.jpg`],
  },
  robots: {
    index: true,
  },
  icons: {
    icon: "icons/icon.png",
    shortcut: "icons/favicon.ico",
    apple: "icons/apple-touch-icon.png",
    other: [
      {
        rel: "icon",
        sizes: "16x16",
        url: "icons/favicon-16x16.png",
      },
      {
        rel: "icon",
        sizes: "32x32",
        url: "icons/favicon-32x32.png",
      },
    ],
  },
  themeColor: "#EDF4F4",
}

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
