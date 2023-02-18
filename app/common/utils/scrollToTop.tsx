"use client"

const isBrowser = () => typeof window !== "undefined" //The approach recommended by Next.js
export default function scrollToTop() {
  if (!isBrowser()) return
  setTimeout(() => {
    window.document.body.scrollIntoView({ behavior: "smooth" })
  }, 100)
}
